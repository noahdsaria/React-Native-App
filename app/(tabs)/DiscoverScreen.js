import { StyleSheet, Text, View } from 'react-native';

export default function DiscoverScreen() {
  return (
    <View style={ styles.container }>
      <Text 
      onPress={ () => alert("This is the discover screen") }>Discover Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 26,
    fontWeight: "bold",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});