import { View } from 'react-native';
import { Catalog } from '../src/components/catalog/Catalog';

export default function CatalogScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Catalog />
    </View>
  );
}
