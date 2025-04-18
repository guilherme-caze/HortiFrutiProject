import React, { useRef, useState } from 'react';
import {
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const promocoes = [
  require('../../assets/images/tercaDaFruta.png'),
  require('../../assets/images/tercaDaFruta.png'),
  require('../../assets/images/tercaDaFruta.png'),
];

export default function TipoProduto() {
  const [indexAtivo, setIndexAtivo] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slide = Math.round(event.nativeEvent.contentOffset.x / width);
        setIndexAtivo(slide);
      },
    }
  );

  return (
    <View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/frutas')}>
          <Image
            source={require('../../assets/images/fruta.png')}
            style={styles.menuImage}
          />
          <Text style={styles.menuText}>Frutas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/vegetais')}>
          <Image
            source={require('../../assets/images/vegetais.png')}
            style={styles.menuImage}
          />
          <Text style={styles.menuText}>Vegetais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/temperos')}>
          <Image
            source={require('../../assets/images/tempero.png')}
            style={styles.menuImage}
          />
          <Text style={styles.menuText}>Temperos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    elevation: 3, // Para sombra no Android
    shadowColor: '#000', // Para sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
});
