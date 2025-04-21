import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      


      {/* menu */}
      <View style={styles.funcionalidadesContainer}>
        {/* Logo da cenoura */}
        <Image
          source={require('../../assets/images/CenouraLogo.png')}
          style={styles.cenouraLogo}
        />

        {/* Itens do menu */}
        <TouchableOpacity style={styles.funcionalidadesItem} onPress={() => router.push('/menu')}>
          <Image
            source={require('../../assets/images/Home.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem} onPress={() => router.push('/busca')}>
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
            source={require('../../assets/images/ShoppingCart1.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem} onPress={() => router.push('/perfil')}>
          <Image
            source={require('../../assets/images/UsuarioIcone.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 2,
  },
    menuText: {
      fontSize: 12, 
      fontWeight: '600',
      color: 'black',
      textAlign: 'center', 
    },
    promocao: {
      width: '100%'
    },
    promocaoImage: {
      width: '10%',
    },
    funcionalidadesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: 'white',
      position: 'absolute', 
      bottom: 1, 
      width: '112%', 
      borderTopWidth: 2, 
      borderTopColor: '#9EC852', 
    },
    funcionalidadesText: {
      fontSize: 12,
      fontWeight: '600',
      color: 'black',
      textAlign: 'center',
    },
    funcionalidadesItem: {
      alignItems: 'center', 
      justifyContent: 'center', 
      width: 60, 
      height: 60, 
    },
    funcionalidadesImage: {
      width: 32, 
      height: 32, 
      resizeMode: 'contain', 
      marginBottom: 5, 
    },
    cenouraLogo: {
      width: 35, 
      height: 35, 
      resizeMode: 'contain', 
      position: 'absolute', 
      top: -20, 
      left: '55%', 
      transform: [{ translateX: -20 }],
      zIndex: 1, 
    },
});
