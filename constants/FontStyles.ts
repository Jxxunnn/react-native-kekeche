export const FontStyles = {
  bold24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 700,
  },
  semibold24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 600,
  },
  bold18: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: 700,
  },
  semibold18: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: 600,
  },
  regular18: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: 400,
  },
  bold16: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
  semibold16: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
  },
  regular16: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  bold14: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 700,
  },
  semibold14: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 600,
  },
  regular14: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 400,
  },
  semibold10: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 600,
  },
  regular10: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 400,
  },
} as const;

export type FontStyleKey = keyof typeof FontStyles;
