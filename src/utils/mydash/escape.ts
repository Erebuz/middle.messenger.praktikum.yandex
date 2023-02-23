export function escape(str: string) {
  const htmlEscapes: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return str.replace(/[&<>"']/g, function (match) {
    return htmlEscapes[match]
  })
}

export function escapeDict(dict: { [key: string]: any }) {
  for (const key in dict) {
    if (typeof dict[key] === 'string') dict[key] = escape(dict[key])
    if (typeof dict[key] === 'object') escapeDict(dict[key])
  }
}
