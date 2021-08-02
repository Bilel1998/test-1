import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default function Choice({navigation}) {
 const pressHandlerAgence = ()=>{navigation.navigate('agenceFormulaire')};
 const pressHandlerParticulier = ()=>{navigation.navigate('particulierFormulaire')}
    return (
      <View style={styles.container}> 
        <TouchableOpacity onPress={pressHandlerAgence}>
        <View style={styles.carte}>
          <Image
            style={styles.imageStyle}
            source={require('../assets/home.png')}
          />
          <Text style={styles.textStyle}>Agence</Text>
        </View>
        </TouchableOpacity>  
        <TouchableOpacity onPress={pressHandlerParticulier}>
          <View style={styles.carte}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/particulier.png')}
            />
            <Text style={styles.textStyle}>Particulier</Text>
          </View>
        </TouchableOpacity>
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
    carte:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30
      },
    textStyle:{
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 36,
      lineHeight: 42,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center'
    },
    imageStyle:{
      width: 180,
      height: 220,
    }
  
  });