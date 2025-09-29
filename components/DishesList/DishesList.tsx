import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { DISHES_DATA } from './data';

export function DishesList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DISHES_DATA}
        keyExtractor={item => item.key}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <ImageBackground source={item.image} style={styles.image}>
              <View style={styles.overlay}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 37,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 6,
    borderRadius: 10,
    overflow: 'hidden',
    height: 160,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
