import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../src/store';
import { clearCart } from '../../src/store/cartSlice';

export default function OrdersScreen() {
  const items = useSelector((state: RootState) => state.cart.items);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={items}
            contentContainerStyle={{ paddingBottom: 120 }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtext}>
                    Shortbread, chocolate turtle cookies, and red velvet.
                  </Text>
                </View>
                <Text style={styles.price}>USD{item.price}</Text>
              </View>
            )}
          />
          <View style={styles.footer}>
            <TouchableOpacity style={styles.checkoutBtn} onPress={() => setModalVisible(true)}>
              <Text style={styles.checkoutText}>CHECKOUT (${total.toFixed(2)})</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <View style={styles.checkCircle}>
              <Text style={styles.checkMark}>✔</Text>
            </View>

            <Text style={styles.modalTitle}>You Place the Order Successfully</Text>

            <Text style={styles.modalText}>
              You placed the order successfully. You will get your food within 25 minutes. Thanks
              for using our services. Enjoy your food :)
            </Text>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 10 }}>
              <Text style={styles.modalButton} onPress={() => dispatch(clearCart())}>
                KEEP BROWSING
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },

  item: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 15,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  subtext: {
    color: '#777',
    marginTop: 2,
    fontSize: 13,
  },

  price: {
    color: '#18a558',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 15,
  },

  empty: {
    textAlign: 'center',
    marginTop: 50,
    color: '#aaa',
    fontSize: 16,
  },

  footer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
  },

  checkoutBtn: {
    backgroundColor: '#1db954',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  modalCard: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 14,
    padding: 25,
    alignItems: 'center',
    position: 'relative',
  },

  checkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#16c172',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -30,
  },

  checkMark: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  modalTitle: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },

  modalButton: {
    color: '#16c172',
    fontWeight: '600',
    fontSize: 15,
    marginTop: 20,
  },
});
