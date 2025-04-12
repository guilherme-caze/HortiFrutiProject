import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subtotalContainer}>
        <Text style={styles.title1}>Subtotal</Text>
        <Text style={styles.title2}> R$ 25,30</Text>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text style={styles.FecharPedidoBotao}>Fechar Pedido (3 itens)</Text>
      <View style={styles.separator} lightColor="#049A2A" darkColor="#4BD37B" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
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
  separator: {
    marginVertical: 30,
    alignItems: 'center',
    height: 2,
    width: '100%',
  },
  FecharPedidoBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ED841C',
    color: 'white',
    backgroundColor: '#ED841C',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
      },
});
