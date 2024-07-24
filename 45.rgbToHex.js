function rgbToHex(rgbColor) {
    let values = rgbColor.match(/\d+/g).map(Number);

    const red = values[0].toString(16).padStart(2, '0');
  const green = values[1].toString(16).padStart(2, '0');
  const blue = values[2].toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
}