export const isApplePlatform = (): boolean => {
  if (typeof navigator === 'undefined') return false

  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent)
}
