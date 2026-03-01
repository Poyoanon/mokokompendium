import withNuxt from './.nuxt/eslint.config.mjs'
import security from 'eslint-plugin-security'

const securityConfig = {
  ...security.configs.recommended,
  files: ['**/*.{js,mjs,cjs,ts}'],
  rules: {
    ...security.configs.recommended.rules,
    'security/detect-object-injection': 'off',
  },
}

export default withNuxt({
  ignores: [
    '.data/**',
    '.output/**',
    '.wrangler/**',
    'dist/**',
  ],
}, {
  files: ['tests/**/*.ts'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}, {
  files: ['server/utils/skillcard-editor.ts'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
  },
}, securityConfig, {
  files: ['tests/**/*.ts'],
  rules: {
    'security/detect-non-literal-fs-filename': 'off',
  },
})
