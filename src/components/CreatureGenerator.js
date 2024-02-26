// CreatureGenerator.js

// Array containing different types of underwater creatures with their attributes
const creatures = [
    { type: 'fish', colors: ['#ff5733', '#ff9966', '#ffcc66'], minSize: 10, maxSize: 30 },
    { type: 'jellyfish', colors: ['#87cefa', '#00bfff', '#1e90ff'], minSize: 20, maxSize: 50 },
    // Add more creature types with their attributes as needed
  ];
  
  // Function to generate a random underwater creature
  function generateRandomCreature() {
    // Randomly select a creature type from the array
    const randomTypeIndex = Math.floor(Math.random() * creatures.length);
    const { type, colors, minSize, maxSize } = creatures[randomTypeIndex];
  
    // Generate random size within the specified range
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
  
    // Randomly select a color from the colors array
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex];
  
    // Return the randomly generated creature object
    return { type, size, color };
  }
  
  export { generateRandomCreature };
  