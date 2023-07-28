import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <View  style={styles.imgStyle}>
          <Image  style={styles.image}  source={require('./assets/illustration.png')} />
        </View>
        <View style={styles.text}>
          <Text style={{fontSize: 40,  fontWeight: 'bold',  textAlign: 'center'}}>Finacial lifeline in your pocket.</Text>
          <Text style={{fontSize: 14,  textAlign: 'center',  paddingTop: 17, color: 'grey'}}>Apply for loans instantly on your mobile</Text>
          <View style={styles.inputStlye}>
          
        </View>
        <View style={styles.auth}>
          <Text style={{fontSize: 20,  fontWeight: 'bold',  textAlign: 'center'}}>Sign In</Text>
          <TouchableOpacity style={styles.button}>
              <Text style={{fontSize: 20,   textAlign: 'center', color: '#fff'}}>Continue</Text>
              <Text style={{fontSize: 20,  fontWeight: 'bold',  textAlign: 'center', color: '#fff'}}>&#x2192;</Text>
          </TouchableOpacity>
        </View>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  paddingHorizontal: 2,
  flex: 1,
  justifyContent: 'space-between'
  },
  imgStyle:{
    height:  100,
    width: 100
  },
  image:{
    width: 430,
    height: 440,
    resizeMode: 'cover',
  },
  text: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputStlye: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        auth: {
          width: '100%',
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 40,
        },
        button: {
          width:  160,
          color: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#ee73c4',
          height: 60,
          borderRadius: 40,
        },
});
