import { ColorKey } from '@/constants/Colors';
import { FontStyleKey, FontStyles } from '@/constants/FontStyles';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  color?: ColorKey;
  type?: FontStyleKey;
};

export function ThemedText({ style, color, type = 'regular14', ...rest }: ThemedTextProps) {
  return (
    <Text
      style={[{ fontFamily: 'Pretendard' }, { color }, type in FontStyles ? FontStyles[type] : undefined, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create(FontStyles);
