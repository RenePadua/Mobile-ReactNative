import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
       backgroundColor: '#161b22',
      flex: 1,
      alignItems: 'center'
    },

    text:{
    color: '#fff',
    fontSize: 25,
    margin: 20
    },

    textContador:{
        color: '#fff',
        fontSize: 60,
        margin: 20
        },
    


    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 30,
      padding: 10,
    },
    
    botao1:{
      width: 200,
      height: 50,
      margin: 20,
      backgroundColor: '#091'
    },
    botao2:{
      width: 200,
      height: 50,
      margin: 20,
      backgroundColor: '#f00'
    },
  
  
    textoBotao:{
      fontSize: 30,
      color: 'white',
      textAlignVertical: 'center',
      textAlign: 'center',

      }
  })


export {styles};