export const degreeNumberToRoman = (number: number) => {
  const degreeRoman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
  return degreeRoman[number - 1]
}
