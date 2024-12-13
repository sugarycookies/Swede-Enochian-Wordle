import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'A',
  'B',
  'C',
  'Ç',
  'D',
  'E',
  'È',
  'F',
  'G',
  'H',
  'Ĥ',
  'I',
  'L',
  'M',
  'N',
  'Ŋ',
  'O',
  'Ò',
  'P',
  'R',
  'S',
  'Ś',
  'T',
  'U',
  'Ù',
  'X',
  'Y',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
