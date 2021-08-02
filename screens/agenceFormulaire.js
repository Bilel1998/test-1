import React , {useState} from 'react';
import { StyleSheet, Text,View, TextInput,ScrollView } from 'react-native';

export default function AgenceFormulaire() {
  const [nom , setNom] = useState ('');
  const [prenom , setPrenom] = useState ('');
  const [nomAgence , setNomAgence] = useState ('');
  const [cin , setCin] = useState ('');
  const [patent, setPatente] = useState('');
  const [validCinInput,setValidCinInput] = useState(false) ;
  const [cinValidation,setCinValidation] = useState('');
  const cinInputHandler = (val)=>{
    if ( val.length <8 ) {
      console.log('chyy');
      setCinValidation('error');
    }else{
      setCin(val);
      setValidCinInput(true);
      setCinValidation('')
      
    }
  }





    return (
      <View> 
          <ScrollView>
            <View style={styles.cardStyle}>
                <Text style={styles.cardLabel} >Entrer le nom de votre agence :</Text>
                <TextInput style={styles.textInputStyle} placeholder='e.g agenceName ...' onChangeText={(val)=>{setNomAgence(val);console.log(nomAgence)}}/>
            </View> 
            <View style={styles.cardStyle}>
                <Text style={styles.cardLabel} >Entrer votre nom :</Text>
                <TextInput style={styles.textInputStyle} placeholder='e.g foulen ...' onChangeText={(val)=>setNom(val)} />
            </View> 
            <View style={styles.cardStyle}>
                <Text style={styles.cardLabel} >Entrer votre prenom :</Text>
                <TextInput style={styles.textInputStyle} placeholder='e.g ben foulen ...' onChangeText={(val)=>setPrenom(val)} />
            </View> 
            <View style={styles.cardStyle}>
                <Text style={styles.cardLabel} >Entrer votre CIN :</Text>
                <TextInput style={styles.textInputStyle} maxLength={8} numeric keyboardType={'numeric'} placeholder='e.g 00000000 ...'  onChangeText={cinInputHandler} />
            </View> 
            <Text>{cinValidation}</Text>
            <View style={styles.cardStyle}>
                <Text style={styles.cardLabel} >Entrer le numero du vote patente :</Text>
                <TextInput style={styles.textInputStyle}  onChangeText={(val)=>setPatente(val)} placeholder='e.g 0000000 ...' />
            </View> 
            <View style={styles.cardStyle}>
                <Text style={styles.cardLabel} >Entrer l'image de votre patente :</Text>
                <TextInput style={styles.textInputStyle} placeholder='e.g agenceName ...'  />
            </View> 
            </ScrollView>
      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'stretch'
   },
textInputStyle:{
  backgroundColor: '#FFFDFD',
  borderWidth : 5,
  borderColor : '#F2B70F',
  borderStyle : 'solid',
  borderRadius: 20,
  padding : 15,
  marginTop:15,
  fontSize: 20
  },
 cardStyle:{
  margin :15
},
cardLabel:{
  fontSize:20
}
});