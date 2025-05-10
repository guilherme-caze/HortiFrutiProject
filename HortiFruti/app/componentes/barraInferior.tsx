import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ModalScreen() {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  // Função para ativar/desativar ícones
  const handlePress = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <View style={styles.container}>
      {/* Menu */}
      <View style={styles.funcionalidadesContainer}>
        {/* Logo da cenoura */}
        <Image source={require('../../assets/images/CenouraLogo.png')} style={styles.cenouraLogo} />

        {/* Itens do menu */}
        <TouchableOpacity style={styles.funcionalidadesItem} onPress={() => handlePress('home')}>
          <Icon name="home" size={32} color={activeIcon === 'home' ? '#ED841C' : '#97C447'} />
          <Text style={styles.menuText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem} onPress={() => handlePress('search')}>
          <Icon name="search" size={32} color={activeIcon === 'search' ? '#ED841C' : '#97C447'} />
          <Text style={styles.menuText}>Buscas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem} onPress={() => handlePress('heart')}>
          <Icon name="heart" size={32} color={activeIcon === 'heart' ? '#ED841C' : '#97C447'} />
          <Text style={styles.menuText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem} onPress={() => handlePress('shopping-cart')}>
          <Icon name="shopping-cart" size={32} color={activeIcon === 'shopping-cart' ? '#ED841C' : '#97C447'} />
          <Text style={styles.menuText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.funcionalidadesItem} onPress={() => handlePress('user')}>
          <Icon name="user" size={32} color={activeIcon === 'user' ? '#ED841C' : '#97C447'} />
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
  funcionalidadesItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
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
