import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
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

      <TouchableOpacity style={styles.promocao}>
        <Image
          source={require('../../assets/images/tercaDaFruta.png')}
          style={styles.promocaoImage}
        />
      </TouchableOpacity>

      {/* menu */}
      <View style={styles.funcionalidadesContainer}>
        <TouchableOpacity style={styles.funcionalidadesItem}>
          <Image
            source={require('../../assets/images/Home.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem}>
          <Image
            source={require('../../assets/images/Search.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Buscas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem}>
          <Image
            source={require('../../assets/images/Heart.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem}>
          <Image
            source={require('../../assets/images/ShoppingCart.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Pedidoss</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem}>
          <Image
            source={require('../../assets/images/Customer.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
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
    borderRadius: 10, // Corrigido de '10%' para 10 (valor numérico)
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
  promocao: {
    width: '100%',
  },
  promocaoImage: {
    width: '100%',
  },
  funcionalidadesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  funcionalidadesImage: {
    marginBottom: 5,
  },
  funcionalidadesItem: {
    borderRadius: 10,
  }
});
