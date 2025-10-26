import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORY_DATA } from './category-data';

export function Category() {
  return (
    <SafeAreaView style={styles.container}>
      {/*<View style={styles.header}>*/}
      {/*  <Text style={styles.headerTitle}>Fast Food</Text>*/}
      {/*  <View style={styles.headerPlaceholder} />*/}
      {/*</View>*/}
      <FlatList
        data={CATEGORY_DATA}
        keyExtractor={item => item.key}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.title}</Text>
            <TouchableOpacity style={styles.priceButton}>
              <Text style={styles.priceText}>{item.price} $</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 11,
    gap: 150,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#010F07',
  },
  headerPlaceholder: {
    width: 24,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 140,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#010F07',
    marginTop: 10,
  },
  priceButton: {
    flex: 1,
    backgroundColor: '#22A45D',
    marginTop: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 38,
  },
  priceText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
