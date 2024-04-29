export const AppConstants = {
  imageFormat: ['.jpeg', '.jpg', '.png', '.webp', '.heic'] as const,
  fileFormat: ['.pdf', '.docx', '.pptx', '.xlsx'] as const,

  profileImageLimitSize: {
    size: 1024 * 1024 * 20,
    label: '20MB',
  },

  counselUploadLimitSize: 1024 * 1024 * 20,
  counselUploadLimitCount: 5,

  terms: ['terms', 'privacypolicy', 'sensitive', 'marketing'] as const,

  counselCategory: [
    {
      value: 'basic-health',
      label: '기본건강',
      serverValue: 0,
    },
    { value: 'infertility', label: '난임', serverValue: 1 },
    { value: 'sextual-health', label: '성건강', serverValue: 2 },
    { value: 'marriage', label: '결혼&출산', serverValue: 3 },
    { value: 'etc', label: '기타', serverValue: 4 },
  ] as const,

  wikiCategory: [
    {
      label: '전체',
      value: '',
      serverValue: 0,
    },
    {
      label: '즐겨찾기',
      value: 'favorite',
      serverValue: 1,
    },
    {
      label: '라이프케어',
      value: 'life-care',
      serverValue: 2,
    },
    {
      label: '난임Tip',
      value: 'infertility',
      serverValue: 3,
    },
    {
      label: '성건강',
      value: 'sextual',
      serverValue: 4,
    },
    {
      label: '결혼 & 출산',
      value: 'marriage',
      serverValue: 5,
    },
  ],

  phoneVerifyTimeLimit: 60 * 5, // 5분
} as const
