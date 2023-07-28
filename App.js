import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <View  style={styles.imgStyle}>
          <Image  style={styles.image}  source={require('./assets/illustration.png')} />
        </View>
        <View style={styles.text}>
          <Text style={{fontSize: 50,  fontWeight: 'bold',  textAlign: 'center'}}>Financial lifeline in your pocket.</Text>
          <Text style={{fontSize: 14,  textAlign: 'center',  paddingTop: 10, color: '#3a3a3a'}}>Apply for loans instantly on your mobile</Text>
          <View style={styles.inputStlye}>
            <View style={{flexDirection: 'row',  alignItems: 'center',}}>
            <Image  style={{width: 40, height: 40,  borderRadius: 100}}  source={require('./assets/america.png')} />
              <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 14,  color: '#aeaeae'}}>I live in: </Text>
              <Text style={{fontSize: 16,  fontWeight: 'bold', paddingTop: 2,}}>United States:</Text>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 30,  fontWeight: 'bold', paddingTop: 2,  color: '#BBBCB6'}}>&#x2304;</Text>
            </View>
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
    width: 100,
    marginBottom: 20,
  },
  image:{
    width: 430,
    height:  450,
    resizeMode: 'cover',
  },
  text: {
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputStlye: {
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 25,
          flexDirection: 'row',
          width: 355,
          height: 75,
          backgroundColor: 'E8E9EB',
          borderRadius: 20,
          paddingHorizontal: 20,
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
