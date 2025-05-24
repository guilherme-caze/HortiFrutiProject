// app/GoogleLoginScreen.tsx
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';

export default function GoogleLoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Google</Text>
      <Text style={styles.greeting}>Hi User</Text>

      <View style={styles.emailRow}>
        <Image
          source={require('../../assets/images/GoogleIcon.png')}
          style={styles.userIcon}
        />
        <Text style={styles.emailText}>user.exemple@gmail.com</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        placeholderTextColor="#777"
      />

      <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/menu')}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 30,
  },
  logo: {
    fontSize: 26,
    color: '#4285F4',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  greeting: {
    fontSize: 22,
    marginBottom: 10,
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  userIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  emailText: {
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#1a73e8',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgot: {
    marginTop: 20,
    color: '#1a73e8',
  },
});
