import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORY_DATA } from '../../src/data/category-data';

export default function CategoryScreen() {
  const { id, title } = useLocalSearchParams<{ id: string; title: string }>();
  const navigation = useNavigation();

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title });
    }
  }, [title]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORY_DATA}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.priceBox}>
              <Text style={styles.price}>{item.price} $</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 8 },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: { width: '100%', height: 140, borderRadius: 12 },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 8,
  },
  priceBox: {
    backgroundColor: '#1abd57',
    paddingVertical: 6,
    borderRadius: 6,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  price: { textAlign: 'center', color: '#fff', fontWeight: '700' },
});
