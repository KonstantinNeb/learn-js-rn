import { StyleSheet, Text, View } from 'react-native';

export function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.tabItem}>
        {/*<Ionicons name="restaurant-outline" size={22} color="#31A24C" />*/}
        <Text style={[styles.tabLabel, styles.tabActive]}>Home</Text>
      </View>
      <View style={styles.tabItem}>
        {/*<Ionicons name="receipt-outline" size={22} color="#6C6C6C" />*/}
        <Text style={styles.tabLabel}>Orders</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#F8F8F8',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 13,
    marginTop: 2,
    color: '#6C6C6C',
  },
  tabActive: {
    color: '#31A24C',
  },
});
