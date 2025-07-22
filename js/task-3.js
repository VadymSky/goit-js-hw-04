function getElementWidth(content, padding, border) {
  const contentValue = Number.parseFloat(content);
  const paddingValue = Number.parseFloat(padding);
  const borderValue = Number.parseFloat(border);
  
  return contentValue + 2 * paddingValue + 2 * borderValue;
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 