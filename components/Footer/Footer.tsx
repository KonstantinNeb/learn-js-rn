import { StyleSheet, Text, View } from 'react-native';

export function Footer() {
  return (
    <View style={styles.Footer}>
      <Text>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#d3c8c8',
    height: 88,
  },
});
