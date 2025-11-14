import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORY_DATA } from '../../src/data/category-data';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../src/store';
import { addToCart, decrementItem } from '../../src/store/cartSlice';

export default function CategoryScreen() {
  const { id, title } = useLocalSearchParams<{ id: string; title: string }>();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (title) {
      navigation.setOptions({ title });
    }
  }, [title]);

  const getQuantity = (id: string): number => {
    return cartItems.find(i => i.id === id)?.quantity ?? 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORY_DATA}
        numColumns={2}
        renderItem={({ item }) => {
          const quantity = getQuantity(item.key);

          return (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>

              {quantity === 0 ? (
                <TouchableOpacity
                  style={styles.priceBox}
                  onPress={() =>
                    dispatch(
                      addToCart({ id: item.key, title: item.title, price: Number(item.price) }),
                    )
                  }
                >
                  <Text style={styles.price}>{item.price} $</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.counterBox}>
                  <TouchableOpacity
                    style={styles.counterBtn}
                    onPress={() => dispatch(decrementItem(item.key))}
                  >
                    <Text style={styles.counterText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{quantity}</Text>

                  <TouchableOpacity
                    style={styles.counterBtn}
                    onPress={() =>
                      dispatch(
                        addToCart({ id: item.key, title: item.title, price: Number(item.price) }),
                      )
                    }
                  >
                    <Text style={styles.counterText}>+</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    paddingBottom: 12,
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
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 12,
  },
  price: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  counterBox: {
    flexDirection: 'row',
    marginHorizontal: 12,
    justifyContent: 'space-between',
    backgroundColor: '#1abd57',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  counterBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1abd57',
  },
  quantity: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});
