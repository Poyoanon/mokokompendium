export const ICON_CDN_BASE_URL = 'https://cdn.ags.lol/icon'

export const buildIconCdnUrl = (iconFile: string, iconIndex: number): string =>
  `${ICON_CDN_BASE_URL}/${iconFile.toLowerCase()}_${iconIndex}.png`
