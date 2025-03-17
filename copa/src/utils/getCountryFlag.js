/**
 * Utility function to get the flag SVG file for a country
 * Maps country names from the data to their corresponding SVG files in the assets directory
 */

// Country name mapping for cases where the country name doesn't match the filename
const countryToFilenameMap = {
  'Netherlands': 'holanda',
  'United States': 'estados unidos',
  'USA': 'estados unidos',
  'South Korea': 'coreia do sul',
  'Saudi Arabia': 'arabia saudita',
  'Switzerland': 'suica',
  'England': 'inglaterra',
  'Wales': 'pais de gales',
  'Serbia': 'servia',
  'Cameroon': 'camaroes',
  'Qatar': 'qatar',
  'Ecuador': 'ecuador',
  'Ghana': 'gana',
  'Tunisia': 'tunisia',
  'Morocco': 'marrocos',
  'Japan': 'japan',
  'Spain': 'espanha',
  'Germany': 'alemanha',
  'Croatia': 'croacia',
  'Belgium': 'belgica',
  'France': 'franca',
  'Denmark': 'dinamarca',
  'Poland': 'polonia',
  'Mexico': 'mexico',
  'Argentina': 'argentina',
  'Brazil': 'brasil',
  'Portugal': 'portugal',
  'Uruguay': 'uruguai',
  'Senegal': 'senegal',
  'Canada': 'canada',
  'Australia': 'australia',
  'Costa Rica': 'costa rica'
};

/**
 * Get the flag SVG file for a country
 * @param {string} countryName - Name of the country
 * @returns {string} - Path to the SVG flag file
 */
const getCountryFlag = (countryName) => {
  // Get the filename from the mapping or convert the country name to lowercase
  const filename = countryToFilenameMap[countryName] || countryName.toLowerCase();
  
  // Simplesmente retorna o caminho para o arquivo SVG
  return `/src/assets/${filename}.svg`;
};

export default getCountryFlag; 