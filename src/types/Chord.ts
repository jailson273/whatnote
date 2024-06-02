export enum ChordNaturalEnum {
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  A = 'A',
  B = 'B'
}

export enum ChordSharpEnum {
  C = 'C',
  'C#' = 'C#',
  D = 'D',
  'D#' = 'D#',
  E = 'E',
  F = 'F',
  'F#' = 'F#',
  G = 'G',
  'G#' = 'G#',
  A = 'A',
  'A#' = 'A#',
  B = 'B'
}

export enum ChordFlatEnum {
  C = 'C',
  Db = 'Db',
  D = 'D',
  Eb = 'Eb',
  E = 'E',
  F = 'F',
  Gb = 'Gb',
  G = 'G',
  Ab = 'Ab',
  A = 'A',
  Bb = 'Bb',
  B = 'B'
}

export enum ChordType {
  natural = 'natural'
  // sharp = 'sharp',
  // flat = 'flat'
}

export enum ChordTypePtBr {
  natural = 'Natural',
  sharp = 'Sustenido',
  flat = 'Bemol'
}

export const harmonicFieldRules = ['M', 'm', 'm', 'M', 'M', 'm', 'm(b5)']

export const chordNaturalScale = Object.keys(ChordNaturalEnum)
export const chordSharpScale = Object.keys(ChordSharpEnum)
export const chordFlatScale = Object.keys(ChordFlatEnum)
