const harmonicFieldList = {
  C: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bm(b5)'],
  D: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'Cm(b5)'],
  E: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#m(b5)'],
  F: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Em(b5)'],
  G: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#m(b5)'],
  A: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#m(b5)'],
  B: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#m(b5)']
}

export const getHarmonicField = (chord: string) => {
  return harmonicFieldList[chord]
}
