import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText} textAlign='left'>Messages</Text>
      <MessageSection />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function MessageSection() {
  return (
    <View>
        <ScrollView horizontal={true} 
        style={styles.messageSection} 
        showsHorizontalScrollIndicator={false}
        >
          {/* Example message items */} 
          <View style={styles.messageBox}>
            <Text>Message 1</Text>
          </View>
          <View style={styles.messageBox}>
            <Text>Message 2</Text>
          </View>
          <View style={styles.messageBox}>
            <Text>Message 3</Text>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingLeft: 10,
  },

  messageSection: {
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 0,
  },

  messageBox : {
    width: 250,
    height: 200,
    backgroundColor: 'lightgray',
    marginRight: 10,
  },

});
