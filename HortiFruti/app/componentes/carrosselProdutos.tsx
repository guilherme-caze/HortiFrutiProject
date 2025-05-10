import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // ou 'react-native-vector-icons/FontAwesome'

const produtos = [
  { id: '1', nome: 'Maçã', preco: 'R$ 4,99/kg', imagem: require('../../assets/images/bananas.jpg') },
  { id: '2', nome: 'Banana', preco: 'R$ 3,49/kg', imagem: require('../../assets/images/bananas.jpg') },
  { id: '3', nome: 'Abacaxi', preco: 'R$ 6,99/un', imagem: require('../../assets/images/bananas.jpg') },
  { id: '4', nome: 'Pera', preco: 'R$ 7,99/kg', imagem: require('../../assets/images/bananas.jpg') },
  { id: '5', nome: 'Uva', preco: 'R$ 12,99/kg', imagem: require('../../assets/images/bananas.jpg') },
];

export default function CarrosselProdutos() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id} // Garante que cada item tenha um `key` único
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      contentContainerStyle={{ paddingHorizontal: 16 }}
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
  card: {
    width: 150,
    height: 250,
    marginRight: 16,
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
