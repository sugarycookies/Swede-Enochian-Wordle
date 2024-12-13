import { CONFIG } from './config'

export const VALIDGUESSES = [
  'ELGOÙ',
  'ÇAÇIA',
  'CÒRMI',
  'FIDOR',
  'PARAŚ',
  'PIREN',
  'CÈIDE',
  'AIXÒR',
  'DESOŊ',
  'GEHAÇ',
  'GESOŊ',
  'LIENA',
  'NAĤUR',
  'CEYAÇ',
  'MEYAÇ',
  'MASÈT',
  'MIERŊ',
  'DINUŚ',
  'XYASE',
  'CENEN',
  'SAMEŊ',
  'MIYEF',
  'FAYAN',
  'ALFÒC',
  'NAFAI',
  'PASEC',
  'AMNUR',
  'FARNA',
  'AMIEN',
  'HOREC',
  'FAIEL',
  'EDENS',
  'SOYEN',
  'PEXAL',
  'CÈINA',
  'ENGÒR',
  'AIBER',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
