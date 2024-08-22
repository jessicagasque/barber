import { Link, useGlobalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { id } = useGlobalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Informação coletada pela URL: {id}</Text>
      <Link href="/">Ir para a Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
