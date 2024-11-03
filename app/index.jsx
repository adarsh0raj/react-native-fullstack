import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text className="text-3xl font-pblack">anubhaw is gadha</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={styles.link}>Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    marginTop: 20,
    fontSize: 20
  }
});
