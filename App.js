import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-Storage';

export default function App() {

  const [nome,setNome] = useState(""); 
  const [entrada,setEntrada] = useState ("");

 
 useEffect(()=> {
   async function mostrarNome(){
     const nomeStorage = await AsyncStorage.getItem('nomes');
     if(nomeStorage!==null){
       setNome(nomeStorage);
     }
   }
   mostrarNome();
 },[]);

 useEffect(()=> {
  async function salvaNome(){
   await AsyncStorage.setItem('nomes', nome);
  }
  salvaNome();
},[nome]);

  
function trocarNome(){

setNome(entrada)


}

  return (
    <View style={styles.container}>
     
    <TextInput
    placeholder='digite o nome' 
    onChangeText={(texto)=>setEntrada(texto)} 
    style = {styles.textInput}
    value ={entrada}
/>
   

    <TouchableOpacity style = {styles.btn}  onPress ={()=>{trocarNome()}} >Trocar </TouchableOpacity>
    <Text style = {{fontSize:30}}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
  textInput:{
    width:'60%',
    borderWidth:2,
    borderRadius:2,
    marginBottom:10,
    height:25,
    alignItems:'center'


  },
  btn: {
    marginBottom:20,
    backgroundColor:'red',
    width:'60%',
    height:30,
    alignItems:'center',
    justifyContent:'center'
  }
});
