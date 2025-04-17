import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarrosselPromocao from '@/app/componentes/carrosselPromocao';
import CarrosselProdutos from '@/app/componentes/carrosselProdutos';
import BarraInferior from '@/app/componentes/barraInferior';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* menu */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/images/fruta.png')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Frutas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/images/vegetais.png')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Vegetais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/images/tempero.png')}
              style={styles.menuImage}
            />
            <Text style={styles.menuText}>Temperos</Text>
          </TouchableOpacity>
        </View>

        {/* Carrossel promocao */}
        <CarrosselPromocao />

        {/* texto */}
        <Text style={styles.title1}>Em destaque</Text>

        {/* carrossel */}
        <CarrosselProdutos />

        {/* barra inferior */}
        <BarraInferior />

      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  menuItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 110,
    height: 100,
    borderRadius: 10, 
  },
  menuImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
  },
  title1: {
    fontSize: 24,
    fontFamily: 'inter',
    fontWeight: 'bold',
    color: 'Black',
    padding: 10,
  },
  funcionalidadesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    position: 'absolute', // Posiciona o menu de forma absoluta
    bottom: 0, // Fixa o menu na parte inferior
    width: '112%', // Garante que o menu ocupe toda a largura
    borderTopWidth: 2, // Adiciona uma borda superior para separação
    borderTopColor: '#9EC852', // Cor da borda superior
  },
  funcionalidadesImage: {
    marginBottom: 5,
  },
  funcionalidadesItem: {
    borderRadius: 10,
  }
});
