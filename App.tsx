import { StyleSheet, View } from 'react-native';
import { DishesList } from './components/DishesList/DishesList';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <DishesList />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    justifyContent: 'flex-end',
  },
});
