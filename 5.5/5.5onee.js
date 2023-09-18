function getColorCategory() {
    // Prompt to get user input and convert it to lowercase
    const color = prompt('Enter a color name:').toLowerCase();
  
    // Use a switch statement to determine the color category
    switch (color) {
      case 'yellow':
      case 'pink':
      case 'orange':
        return 'light color';
      case 'blue':
      case 'purple':
      case 'brown':
        return 'dark color';
      default:
        return 'Unknown color';
    }
  }
  
  // Call the function and log the result
  const colorCategory = getColorCategory();
  console.log(colorCategory);
  