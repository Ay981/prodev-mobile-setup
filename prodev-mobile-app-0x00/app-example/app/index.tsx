import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>** First App Created**</Text>
      <Text style={styles.subtitle}>Welcome to your first Expo Router app example!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text,
  },
});
