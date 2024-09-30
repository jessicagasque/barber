import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function BarberShopScreen() {
  // Adicionamos os estados para o login e senha
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Controle de login
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // Função para verificar o login
  const handleLogin = () => {
    if (username === 'admin' && password === '12345') {
      setIsLoggedIn(true);
      Alert.alert('Login', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  // Função de logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    Alert.alert('Logout', 'Você saiu com sucesso.');
  };

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

  // Verificar se o usuário está logado
  if (!isLoggedIn) {
    // Exibe a tela de login se o usuário não estiver logado
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    );
  }

  // Caso esteja logado, exibe a tela normal da Barber Shop
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Barber Shop</Text>

        <View style={styles.headerImageContainer}>
          <Image
            style={styles.headerImage}
            source={{ uri: 'https://barbeariajohnsix.com.br/wp-content/uploads/2020/01/Banner_equip_3.jpg' }} 
          />
        </View>

        <Text style={styles.subtitle}>Sobre Nós</Text>
        <Text style={styles.paragraph}>
        <div>
    <h1>Bem-vindo à BarberShop!</h1>
    
    <p>Descubra um refúgio de estilo e cuidado, onde a tradição se encontra com a modernidade. Na BarberShop, não oferecemos apenas cortes de cabelo e serviços de barba; proporcionamos uma experiência única e inesquecível.</p>
    
    <h4>Ambiente Sofisticado e Confortável</h4>
    <p>N nosso espaço foi projetado para que você se sinta à vontade. Desde o momento em que você entra, é envolvido por uma atmosfera acolhedora, com uma decoração elegante que reflete o nosso compromisso com a qualidade. Aqui, cada detalhe foi pensado para oferecer conforto e um toque de classe.</p>
    
    <h4>Barbeiros Altamente Qualificados</h4>
    <p>Nossos barbeiros não são apenas habilidosos, mas verdadeiros artistas do cabelo e da barba. Com anos de experiência e formação contínua nas últimas tendências e técnicas, eles estão prontos para transformar seu visual, sempre respeitando seu estilo pessoal. Quer você esteja buscando um corte clássico ou um estilo mais contemporâneo, temos a expertise para atender às suas expectativas.</p>
    
    <h4>Mais do que Cortes, uma Experiência</h4>
    <p>Na BarberShop, entendemos que cada visita é uma oportunidade para cuidar de você. Além dos nossos serviços de corte, oferecemos tratamentos especiais que revitalizam e mantêm seus cabelos e barba em perfeito estado. Aproveite um momento de relaxamento enquanto se prepara para conquistar o mundo.</p>
    
    <h4>Compromisso com a Satisfação do Cliente</h4>
    <p>Sua satisfação é nossa prioridade. Estamos sempre abertos ao feedback e prontos para ajustar nossos serviços para que você saia completamente satisfeito. Afinal, cada cliente que atendemos é parte da nossa família BarberShop.</p>
    
    <h4>Agende sua Visita Hoje Mesmo!</h4>
    <p>Venha viver a experiência BarberShop. Agende sua visita e descubra o que significa ser verdadeiramente bem cuidado. Estamos ansiosos para recebê-lo e ajudá-lo a alcançar o visual que você sempre desejou!</p>
</div>

        </Text>

        <Text style={styles.subtitle}>Serviços</Text>
        
        <View style={styles.serviceContainer}>
          <Link href={"/reservar"} style={styles.serviceTitle}><h2>Corte de Cabelo</h2></Link>
          <Text style={styles.serviceDescription}>Oferecemos cortes de cabelo modernos e clássicos, adaptados ao seu estilo pessoal.</Text>
          <Link href={"/reservar"} style={styles.serviceTitle}><h2>Barba e Bigode</h2></Link>
          <Text style={styles.serviceDescription}>Ajustes e aparos de barba e bigode com os melhores produtos do mercado.</Text>
          <Link href={"/reservar"} style={styles.serviceTitle}><h2>Tratamentos Capilares</h2></Link>
          <Text style={styles.serviceDescription}>Tratamentos para fortalecer e cuidar dos seus cabelos.</Text>


          
        </View>

        <Link href={"/sobre"} style={styles.serviceTitle}>Consulte Nossos Valores</Link>


        <Text style={styles.subtitle}>Galeria</Text>
        <ScrollView horizontal style={styles.galleryContainer}>
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYPGd4KPivWGjBKnBvncWmO_HKTR8NAVrzw&s' }} /> 
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcC7gMs1GE72-lF-ubZg4j5Xe0RRFIixGWg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcC7gMs1GE72-lF-ubZg4j5Xe0RRFIixGWg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcC7gMs1GE72-lF-ubZg4j5Xe0RRFIixGWg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcC7gMs1GE72-lF-ubZg4j5Xe0RRFIixGWg&s' }} />
          <Image style={styles.galleryImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcC7gMs1GE72-lF-ubZg4j5Xe0RRFIixGWg&s' }} />
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
          color="#495057"
          disabled={loading}
        />

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Endereço: Rua Exemplo, 123 - Cidade</Text>
          <Text style={styles.infoText}>Telefone: (11) 1234-5678</Text>
          <Text style={styles.infoText}>Email: contato@barbershop.com</Text>
        </View>

        <Button title="Sair" onPress={handleLogout} 
        color="#495057"/>

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
    justifyContent: 'center',
    padding: 20,
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
    height: undefined, 
    aspectRatio: 16 / 9, 
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover', 
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
    color: '#6c757d', // Cor cinza
    marginVertical: 5,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#495057', // Um cinza mais escuro
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
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  infoBox: {
    backgroundColor: '#6c757d', // Um cinza suave
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
    color: '#495057', // Cor cinza
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

