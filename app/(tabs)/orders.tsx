import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/store';

export default function OrdersScreen() {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price} $</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  title: { fontSize: 16, fontWeight: '500' },
  price: { color: '#1abd57', fontWeight: '600' },
  empty: { textAlign: 'center', marginTop: 50, color: '#aaa', fontSize: 16 },
});
