import React from 'react';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';

export default function ParticulierFormulaire({navigation}) {
    return (
      <View style={styles.container}>
          
        
        
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
      width: 200,
      height: 250,
    }
  
  });