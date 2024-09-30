import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    Linking.openURL('https://localhost:8081/'); // Substitua pela URL desejada
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/regal-men%27s-barber-shop-price-list-template-design-34774add4a73af5f419d4d569b3b6524_screen.jpg?ts=1663262962' }} 
        style={styles.image} 
      />
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.link}>Ir para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
