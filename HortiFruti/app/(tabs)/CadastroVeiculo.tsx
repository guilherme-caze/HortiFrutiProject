// src/screens/CadastroVeiculo.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function CadastroVeiculo() {
  const [nome, setNome] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = () => {
    // Aqui pode ter lógica de validação e envio
    router.push('CadastroValidacao');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Registro</Text>
        <TextInput placeholder="Nome Completo" value={nome} onChangeText={setNome} style={styles.input} />
        <TextInput placeholder="Placa do veículo" value={placa} onChangeText={setPlaca} style={styles.input} />
        <TextInput placeholder="Modelo" value={modelo} onChangeText={setModelo} style={styles.input} />
        <TextInput placeholder="CPF" value={cpf} onChangeText={setCpf} style={styles.input} keyboardType="numeric" />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#A5D45F', justifyContent: 'center', alignItems: 'center' },
  form: { backgroundColor: '#fff', padding: 24, borderRadius: 20, width: '85%' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 16 },
  input: { borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 20, padding: 8 },
  button: { backgroundColor: '#F7931E', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
