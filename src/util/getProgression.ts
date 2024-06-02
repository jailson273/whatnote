const progressions = [
  [1, 5, 4],
  [2, 5, 1],
  [4, 1, 5],
  [1, 4, 5],
  [1, 5, 6, 4],
  [6, 4, 1, 5],
  [1, 6, 4, 5],
  [1, 4, 6, 5],
  [3, 6, 2, 5]
]

interface ProgressionChordDegree {
  tonic: string
  chord: string
  degree: number
}

export const getProgressions = (
  harmonicField: string[]
): ProgressionChordDegree[][] => {
  return progressions.map((item: number[]) => {
    return item.map((degree: number) => {
      return {
        tonic: harmonicField[0],
        chord: harmonicField[degree - 1],
        degree: degree
      }
    })
  })
}
