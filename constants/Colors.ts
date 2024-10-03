export const Colors = {
  neutral: {
    black: '#17171B',
    white: '#ffffff',
    gray900: '#494E59',
    gray800: '#5B616E',
    gray700: '#707683',
    gray600: '#8B92A0',
    gray500: '#AEB5C5',
    gray400: '#C6CBD8',
    gray300: '#DFE2EA',
    gray200: '#ECEFF5',
    gray100: '#F6F8FC',
  },
  primary500: '#2777EA',
  primary100: '#E0ECFF',
  accent: {
    red500: '#EA2727',
    orange100: '#FF7864',
    yellow110: '#E7B110',
    yellow100: '#FFC927',
    green110: '#6DBD05',
    green100: '#8DDC27',
    violet100: '#757EF7',
    violet10: '#EAEBFF',
    purple100: '#BF6DFF',
    purple10: '#F5E9FF',
    pink100: '#EC6BDF',
    pink10: '#FFEEFD',
  },
} as const;

type NeutralColor = keyof typeof Colors.neutral;
type PrimaryColor = `primary${100 | 500}`;
type AccentColor = keyof typeof Colors.accent;

export type ColorKey = NeutralColor | PrimaryColor | AccentColor;
