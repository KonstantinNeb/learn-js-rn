import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { DISHES_DATA } from '../../src/data/catalog-data';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={DISHES_DATA}
        keyExtractor={item => item.key}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/category/${item.key}`)}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  row: { justifyContent: 'space-between' },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
    height: 160,
  },
  image: { width: '100%', height: '100%' },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
