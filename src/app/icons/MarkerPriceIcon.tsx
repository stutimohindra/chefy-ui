const MarkerPriceIcon = (text = "10€") => {
  const {
    fontSize = 11,
    padX = 6,
    padY = 3,
    radius = 8,
    bg = "#ffffff",
    fg = "#111827",
    stroke = "#e5e7eb",
    fontWeight = 700,
  } = {};
  const w =
    Math.max(28, Math.round(text.length * (fontSize * 0.6)) + padX * 2) * 1.5;
  const h = (fontSize + padY * 2) * 1.5;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="${radius}"
          fill="${bg}" stroke="${stroke}" />
    <text x="50%" y="50%"
          font-size="${fontSize}"
          font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
          font-weight="${fontWeight}"
          fill="${fg}"
          text-anchor="middle"
          dominant-baseline="middle">${text}</text>
  </svg>`;

  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
};
export default MarkerPriceIcon;
