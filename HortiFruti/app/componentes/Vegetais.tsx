import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const produtos = [
  {
    id: '1',
    nome: 'Abóbora',
    preco: 'R$ 8,99/kg',
    imagem: require('../../assets/images/Abobora.png'),
  },
  {
    id: '2',
    nome: 'Brócolis',
    preco: 'R$ 2,99/kg',
    imagem: require('../../assets/images/Brocolis.png'),
  },
  {
    id: '3',
    nome: 'Tomate',
    preco: 'R$ 4,99/kg',
    imagem: require('../../assets/images/Tomate.png'),
  },
  {
    id: '4',
    nome: 'Beterraba',
    preco: 'R$ 3,50/kg',
    imagem: require('../../assets/images/Beterraba.png'),
  },
  {
    id: '5',
    nome: 'Cebola',
    preco: 'R$ 7,99/kg',
    imagem: require('../../assets/images/Cebola.png'),
  },
  {
    id: '6',
    nome: 'Mandioca',
    preco: 'R$ 10,99/kg',
    imagem: require('../../assets/images/Mandioca.png'),
  },
];

export default function Cards() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.imagem} style={styles.imagem} />
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>{item.preco}</Text>
          <View style={styles.botoesContainer}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.coracao}>
              <FontAwesome name="heart-o" size={25} color="#97C447" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    elevation: 4,
    justifyContent: 'space-between',
  },
  imagem: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  preco: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  botoesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  botao: {
    backgroundColor: '#FFA500',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  coracao: {
    marginLeft: 10,
  },
});
