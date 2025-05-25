import { StyleSheet, Text, View } from 'react-native';

export default function MediaScreen() {
  return (
    <View style={styles.container}>
      <Text 
      onPress={() => alert("This is the media screen")}>Media Screen</Text>
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