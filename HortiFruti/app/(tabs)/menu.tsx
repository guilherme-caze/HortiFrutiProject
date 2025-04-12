import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

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

       {/* menu */}
      <View style={styles.funcionalidadesContainer}>
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

        <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../../assets/images/tempero.png')}
            style={styles.menuImage}
          />
          <Text style={styles.menuText}>Temperos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
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
    borderRadius: '10%',
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
  funcionalidadesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
});
