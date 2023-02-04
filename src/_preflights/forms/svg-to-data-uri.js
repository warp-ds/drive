const REGEX = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g,
}

const collapseWhitespace = (str) => str.trim().replace(REGEX.whitespace, ' ');
const dataURIPayload = (string) => encodeURIComponent(string).replace(REGEX.urlHexPairs, specialHexEncode);

function specialHexEncode(match) {
  switch (match) { // Browsers tolerate these characters, and they're frequent
    case '%20': return ' ';
    case '%3D': return '=';
    case '%3A': return ':';
    case '%2F': return '/';
    default: return match.toLowerCase(); // compresses better
  }
}

export function svgToDataUri(svgString) {
  if (typeof svgString !== 'string') throw new TypeError('Expected a string, but received ' + typeof svgString);

  // Strip the Byte-Order Mark if the SVG has one
  if (svgString.charCodeAt(0) === 0xfeff) svgString = svgString.slice(1)

  const body = collapseWhitespace(svgString).replace(REGEX.quotes, "'")
  return 'data:image/svg+xml,' + dataURIPayload(body)
}

export const toSrcset = (svgString) => svgToDataUri(svgString).replace(/ /g, '%20')
