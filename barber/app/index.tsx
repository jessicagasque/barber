import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function BarberShopScreen() {
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const submitContactForm = async () => {
    if (!text.trim()) {
      Alert.alert('Erro', 'Por favor, digite uma mensagem antes de enviar.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://example.com/api/contact', {  // Substituir pela URL da API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar a mensagem.');
      }

      const result = await response.json();
      Alert.alert('Sucesso', 'Sua mensagem foi enviada com sucesso!');
      setText(''); // Limpar o campo de texto após o envio
    } catch (error) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Barber Shop</Text>
        
        <View style={styles.headerImageContainer}>
          <Image
            style={styles.headerImage}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEJsjt11FtJ811LTvmhayhHD5vVLyMws7yQ&s' }} 
          />
        </View>

        <Text style={styles.subtitle}>Sobre Nós</Text>
        <Text style={styles.paragraph}>
          Bem-vindo à BarberShop! Oferecemos um ambiente sofisticado e confortável para todos os nossos clientes. 
          Nossos barbeiros são altamente qualificados e estão prontos para oferecer o melhor serviço de corte 
          de cabelo e barba da cidade.
        </Text>

        <Text style={styles.subtitle}>Serviços</Text>
        <View style={styles.serviceContainer}>
          <Text style={styles.serviceTitle}>Corte de Cabelo</Text>
          <Text style={styles.serviceDescription}>Oferecemos cortes de cabelo modernos e clássicos, adaptados ao seu estilo pessoal.</Text>
          <Text style={styles.serviceTitle}>Barba e Bigode</Text>
          <Text style={styles.serviceDescription}>Ajustes e aparos de barba e bigode com os melhores produtos do mercado.</Text>
          <Text style={styles.serviceTitle}>Tratamentos Capilares</Text>
          <Text style={styles.serviceDescription}>Tratamentos para fortalecer e cuidar dos seus cabelos.</Text>
        </View>

        <Text style={styles.subtitle}>Galeria</Text>
        <ScrollView horizontal style={styles.galleryContainer}>
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYPGd4KPivWGjBKnBvncWmO_HKTR8NAVrzw&s' }} /> 
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcC7gMs1GE72-lF-ubZg4j5Xe0RRFIixGWg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfEt42aIxeimnfSIXCDYZayzQcbH5nKYvqg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYPGd4KPivWGjBKnBvncWmO_HKTR8NAVrzw&s' }} /> 
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcC7gMs1GE72-lF-ubZg4j5Xe0RRFIixGWg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfEt42aIxeimnfSIXCDYZayzQcbH5nKYvqg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYPGd4KPivWGjBKnBvncWmO_HKTR8NAVrzw&s' }} /> 
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcC7gMs1GE72-lF-ubZg4j5Xe0RRFIixGWg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfEt42aIxeimnfSIXCDYZayzQcbH5nKYvqg&s' }} />
        </ScrollView>

        <Text style={styles.subtitle}>Contato</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Digite sua mensagem..."
          multiline
        />
        <Button
          title={loading ? 'Enviando...' : 'Enviar Mensagem'}
          onPress={submitContactForm}
          color="#6c757d"
          disabled={loading}
        />

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Endereço: Rua Exemplo, 123 - Cidade</Text>
          <Text style={styles.infoText}>Telefone: (11) 1234-5678</Text>
          <Text style={styles.infoText}>Email: contato@barbershop.com</Text>
        </View>
        
        <Link href={"/reservar"} style={styles.link}>Agende seu horário</Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#343a40',
    marginVertical: 20,
  },
  headerImageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#495057',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#212529',
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 24,
  },
  serviceContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginVertical: 5,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 15,
  },
  galleryContainer: {
    width: '100%',
    marginVertical: 10,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  input: {
    height: 100,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  infoBox: {
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 8,
    marginVertical: 20,
    width: '100%',
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});
