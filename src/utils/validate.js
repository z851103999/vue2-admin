/**
 * 外部请求链接
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
