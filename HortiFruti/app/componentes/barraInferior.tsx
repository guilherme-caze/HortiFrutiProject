import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* funcionalidades */}
      <View style={styles.funcionalidadesContainer}>
        <TouchableOpacity style={styles.funcionalidadesItem}>
          <Image
            source={require('../../assets/images/Home.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Início</Text>
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
          <Text style={styles.menuText}>Pedidos</Text>
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
  },
  funcionalidadesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: '#9EC852',
  },
  funcionalidadesImage: {
    marginBottom: 5,
  },
  funcionalidadesItem: {
    borderRadius: 10,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
