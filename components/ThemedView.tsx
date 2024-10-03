import { ColorKey } from '@/constants/Colors';
import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  color?: ColorKey;
};

export function ThemedView({ style, color, ...otherProps }: ThemedViewProps) {
  return <View style={[{ backgroundColor: color }, style]} {...otherProps} />;
}
