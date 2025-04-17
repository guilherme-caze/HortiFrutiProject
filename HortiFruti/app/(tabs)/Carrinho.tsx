import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subtotalContainer}>
        <Text style={styles.title1}>Subtotal</Text>
        <Text style={styles.title2}> R$ 25,30</Text>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.FecharPedidoBotao}>
      <Text style={styles.FecharPedidoBotaoTexto}>Fechar Pedido (3 itens)</Text>
      </View>
      <View style={styles.separator} lightColor="#049A2A" darkColor="#4BD37B" />
      <Text style={styles.title3}>Desmarcar todos os itens</Text>

      {/* menu */}
      <View style={styles.funcionalidadesContainer}>
        {/* Logo da cenoura */}
        <Image
          source={require('../../assets/images/CenouraLogo.png')}
          style={styles.cenouraLogo}
        />

        {/* Itens do menu */}
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
            source={require('../../assets/images/ShoppingCart1.png')}
            style={styles.funcionalidadesImage}
          />
          <Text style={styles.menuText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem}>
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
    paddingBottom: 8, // Espaço reservado para o menu no rodapé
  },
  
  subtotalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  
  title1: {
    fontSize: 32,
    color: '#ED841C',
    fontWeight: 'bold',
    fontFamily: 'inter',
  },
  title2: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'regular',
    fontFamily: 'inter',
  },
  title3: {
    fontSize: 14,
    color: '#049A2A',
    fontWeight: 'regular',
    fontFamily: 'inter',
    textDecorationLine: 'underline',
  },
  separator: {
    marginVertical: 10,
    alignItems: 'center',
    height: 2,
    width: '100%',
  },
  FecharPedidoBotao: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ED841C',
    color: 'white',
    backgroundColor: '#ED841C',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '100%',
    },
    FecharPedidoBotaoTexto: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'medium',
    },
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: 'white',
    },
    menuItem: {
      alignItems: 'center',
      backgroundColor: 'white',
      width: 100,
      height: 100,
      borderRadius: 10, 
    },
    menuImage: {
      width: 50,
      height: 50,
      marginBottom: 5,
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
      paddingVertical: 15,
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
      height: 80, 
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
