import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="index" options={{ title: 'Главная' }} />
      <Stack.Screen name="category" options={{ title: 'Категории' }} />
      <Stack.Screen name="catalog" options={{ title: 'Каталог' }} />
      {/*<Stack.Screen name="basket" options={{ title: 'Корзина' }} />*/}
    </Stack>
  );
}
