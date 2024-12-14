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
  'ENŚAN',
  'BEXIR',
  'LONCE',
  'CENTE',
  'AEFRÈ',
  'SIMIX',
  'SIMEI',
  'DFORE',
  'METRI',
  'CETRI',
  'NETRI',
  'TRIĤE',
  'MIGID',
  'AFRAÇ',
  'EDENO',
  'BOREL',
  'CIÇON',
  'YEILE',
  'UNĤEA',
  'YEHUD',
  'ALHIÒ',
  'GUĤEA',
  'POREÇ',
  'DIFÈX',
  'ODATI',
  'PESŚI',
  'YRICE',
  'ASMET',
  'GOLTE',
  'XYOŚA',
  'ILEEN',
  'PEĤIO',
  'FÙEÇA',
  'YRIRA',
  'TUSÒŚ',
  'ARIAS',
  'IFENŚ',
  'ESONA',
  'ISETI',
  'AŚTAX',
  'SATMA',
  'ROIXI',
  'SUDXA',
  'UTISÈ',
  'HORSE',
  'PTUSI',
  'NOŊAE',
  'IDSER',
  'LOMOR',
  'YRÈLA',
  'ŊOFIŊ',
  'UDYOX',
  'LXANO',
  'RIXŊI',
  'ENNEL',
  'ÇERNO',
  'MESDE',
  'HALEG',
  'CEIŚI',
  'INIAE',
  'FIPÒI',
  'OLLON',
  'ÙIPÒÈ',
  'SASUŊ',
  'SINTE',
  'OYERS',
  'ATPTI',
  'TENES',
  'PSAIE',
  'YNORR',
  'MISSA',
  'ÇORDA',
  'LUMOF',
  'MENUM',
  'HUFIS',
  'ÇEBUN',
  'NERUX',
  'DUMOR',
  'LUCRI',
  'MUNÈN',
  'ÈUMEN',
  'FUREÇ',
  'MUREI',
  'DUMUŚ',
  'OIFUR',
  'SONTU',
  'AUÇON',
  'ÇUCÈŚ',
  'PRUTO',
  'AIGUR',
  'CALUŚ',
  'YUTÇE',
  'SIBUL',
  'FULNE',
  'EŊURE',
  'IPNUF',
  'FUDAS',
  'EŊURI',
  'IASÇI',
  'GITUM',
  'UNUNÈ',
  'INĤIR',
  'USSUR',
  'UTIMT',
  'FURXÒ',
  'PTÙAR',
  'SUFFA',
  'LURGO',
  'HYUNÈ',
  'GURŊE',
  'ULLAT',
  'FISUM',
  'AXPTU',
  'ŚAÇUX',
  'ĤRURA',
  'SELAÈ',
  'EHURŊ',
  'IGÙÙŚ',
  'LĤUSE',
  'LEGIR',
  'ASDER',
  'FEROI',
  'YEPFE',
  'EPRÈC',
  'DESTE',
  'RUŊÙÈ',
  'RÈHÙI',
  'CSONS',
  'LÙMHE',
  'NISÇU',
  'RUTÙA',
  'CAXAŊ',
  'YEIFE',
  'BÙXAI',
  'DAYAX',
  'EMPIR',
  'SIGAL',
  'GURDO',
  'BÈFOR',
  'ŊEREN',
  'ENDEÇ',
  'YUMER',
  'ĤÙCAN',
  'HOTÙŚ',
  'AXYET',
  'ENTRI',
  'UNOIM',
  'HIYOT',
  'SOFOI',
  'FOIŚE',
  'HFRIE',
  'CITIF',
  'YRIMA',
  'CRAEL',
  'LIPEŊ',
  'ASFÈL',
  'BEĤED',
  'UMENG',
  'ENEÈM',
  'UXUÇI',
  'ISDŚI',
  'HEURI',
  'AĤADE',
  'SÙDŊE',
  'CURUC',
  'SESUR',
  'DFRAE',
  'FÈMIS',
  'ÙÈDNI',
  'OLRER',
  'ILŊAT',
  'ERÙON',
  'RENDE',
  'TONID',
  'OPROI',
  'ŊEIFA',
  'UXÒAN',
  'LÈNOĤ',
  'GINĤA',
  'APTÒE',
  'POILE',
  'URBAX',
  'ISYEŚ',
  'ÈTSÈD',
  'CASCA',
  'SIMMA',
  'XÈRÇI',
  'ĤARCI',
  'LURAS',
  'NTELX',
  'FAIAD',
  'LAIAN',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
