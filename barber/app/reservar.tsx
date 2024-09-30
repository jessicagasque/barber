import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Picker, Alert } from 'react-native';

export default function HomeScreen() {
  const [service, setService] = useState('corte');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleReserve = () => {
    if (!date || !time) {
      Alert.alert('Erro', 'Por favor, preencha a data e o horário.');
      return;
    }

    // Adicionar lógica para salvar a reserva
    Alert.alert('Sucesso', `Reserva realizada com sucesso para ${service} no dia ${date} às ${time}.`);
    
    // Limpar os campos após a reserva
    setDate('');
    setTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar Horário</Text>

      <Text style={styles.label}>Serviço:</Text>
      <Picker
        selectedValue={service}
        style={styles.picker}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Picker.Item label="Corte de Cabelo" value="corte" />
        <Picker.Item label="Barba e Bigode" value="barba" />
        <Picker.Item label="Tratamento Capilar" value="tratamento" />
      </Picker>

      <Text style={styles.label}>Data:</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.label}>Horário:</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:MM"
        value={time}
        onChangeText={setTime}
      />

      <Button title="Reservar" onPress={handleReserve} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 15,
  },
});
