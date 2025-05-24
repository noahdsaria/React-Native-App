import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText} textAlign='left'>Latest Message</Text>
      <MessageSection />
      <Text style={styles.headerText} textAlign='left'>More from CyLife</Text>
      <FeaturedSection />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// Note: For now, display latest message recording, might add dynamic tab for livestream later
function MessageSection() {
  return (
    <View>
      <ScrollView horizontal={true} 
        style={styles.messageSection} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ 
          justifyContent: 'center',
          alignItems: 'center', 
          flexGrow: 1,
        }}
      >
          {/* Example message items */} 
          <View style={styles.messageBox}>
            <Text>Recorded Video</Text>
          </View>
      </ScrollView>
    </View>
  );
}

function FeaturedSection() {
  return (
    <View>
      <ScrollView horizontal={true} 
        style={styles.featuredSection} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View style={styles.featuredBox}>
          <Text>News 1</Text>
        </View>

        <View style={styles.featuredBox}>
          <Text>News 2</Text>
        </View>

        <View style={styles.featuredBox}>
          <Text>News 3</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,
  },

  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 0,
  },

  messageSection: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },

  messageBox : {
    flex: 1,
    height: 200,
    backgroundColor: 'lightgray',
    borderRadius: 15,
  },

  featuredSection : {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },

  featuredBox : {
    width: 200,
    height: 200,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    marginRight: 10,
  },

});
