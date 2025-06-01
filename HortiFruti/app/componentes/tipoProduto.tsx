import React, { useRef, useState, useEffect } from 'react';
import { InteractionManager } from 'react-native';
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
  const [selecionado, setSelecionado] = useState<string | null>(null);

  useEffect(() => {
    if (selecionado) {
      InteractionManager.runAfterInteractions(() => {
        router.push({ pathname: `/${selecionado}`, params: { tipo: selecionado } });
      });
    }
  }, [selecionado]);
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
        <TouchableOpacity
          style={[styles.menuItem, selecionado === 'frutas' && styles.selecionado]}
          onPress={() => setSelecionado('frutas')}
        >
          <Image
            source={
              selecionado === 'frutas'
                ? require('../../assets/images/FrutaLaranjaIcone.png')
                : require('../../assets/images/fruta.png')
            }
            style={styles.menuImage}
          />
          <Text style={styles.menuText}>Frutas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, selecionado === 'vegetais' && styles.selecionado]}
          onPress={() => setSelecionado('vegetais')}
        >
          <Image
            source={
              selecionado === 'vegetais'
                ? require('../../assets/images/VegetaisLaranjaIcone.png')
                : require('../../assets/images/vegetais.png')
            }
            style={styles.menuImage}
          />
          <Text style={styles.menuText}>Vegetais</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, selecionado === 'temperos' && styles.selecionado]}
          onPress={() => setSelecionado('temperos')}
        >
          <Image
            source={
              selecionado === 'temperos'
                ? require('../../assets/images/TemperosLaranjaIcone.png')
                : require('../../assets/images/tempero.png')
            }
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
    elevation: 3,
    shadowColor: '#000',
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
  selecionado: {
    borderColor: 'orange',
    borderWidth: 3,
  },
});
//Melhorias do tipoProduto.tsx
import React, { useRef, useState, useEffect } from 'react';
import { InteractionManager } from 'react-native';
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
  AccessibilityInfo,
} from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const categorias = [
  {
    key: 'frutas',
    label: 'Frutas',
    icone: require('../../assets/images/fruta.png'),
    iconeSelecionado: require('../../assets/images/FrutaLaranjaIcone.png'),
  },
  {
    key: 'vegetais',
    label: 'Vegetais',
    icone: require('../../assets/images/vegetais.png'),
    iconeSelecionado: require('../../assets/images/VegetaisLaranjaIcone.png'),
  },
  {
    key: 'temperos',
    label: 'Temperos',
    icone: require('../../assets/images/tempero.png'),
    iconeSelecionado: require('../../assets/images/TemperosLaranjaIcone.png'),
  },
];

export default function TipoProduto() {
  const [indexAtivo, setIndexAtivo] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const [animSelecionado] = useState(
    categorias.map(() => new Animated.Value(1))
  );

  useEffect(() => {
    if (selecionado) {
      InteractionManager.runAfterInteractions(() => {
        router.push({ pathname: `/${selecionado}`, params: { tipo: selecionado } });
      });
    }
  }, [selecionado]);

  // Animação ao selecionar
  const animarSelecao = (idx: number) => {
    Animated.sequence([
      Animated.timing(animSelecionado[idx], {
        toValue: 1.1,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(animSelecionado[idx], {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleSelecionar = (key: string, idx: number) => {
    setSelecionado(key);
    animarSelecao(idx);
    AccessibilityInfo.announceForAccessibility(`Categoria ${categorias[idx].label} selecionada`);
  };

  return (
    <View>
      <View style={styles.menuContainer}>
        {categorias.map((cat, idx) => {
          const isSelected = selecionado === cat.key;
          return (
            <Animated.View
              key={cat.key}
              style={[
                styles.menuItem,
                isSelected && styles.selecionado,
                { transform: [{ scale: animSelecionado[idx] }] },
              ]}
            >
              <TouchableOpacity
                accessible
                accessibilityLabel={`Categoria ${cat.label}`}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
                onPress={() => handleSelecionar(cat.key, idx)}
                activeOpacity={0.7}
              >
                <Image
                  source={isSelected ? cat.iconeSelecionado : cat.icone}
                  style={styles.menuImage}
                />
                <Text style={styles.menuText}>{cat.label}</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
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
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: 2,
    justifyContent: 'center',
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
  selecionado: {
    borderColor: 'orange',
    borderWidth: 3,
  },
});