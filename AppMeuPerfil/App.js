import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
    
    let nome = 'Renê Pádua';
    let img = 'https://avatars.githubusercontent.com/u/81319888?s=100&v=4';
    let idade = 'Idade: 37';
    let local = 'Residente: SP, Brasil';
    let formacao = 'Formação: Sistemas para Internet';
    let xprof = 'Experiência Profissional: Estagiário em Equipe Web, Fatec-BS';
    let projetos = 'Projetos: https://github.com/RenePadua';


    return(
      <View style={styles.container}>
        <Text style={{color: '#fff', fontSize: 25, margin: 20 }}>{nome}</Text>
        
        <Image
          source={{ uri: img }}
          style={{borderRadius: 100, width: 150, height: 150}}
        />
 
        <Text style={{color: '#fff', fontSize: 10, margin: 10}}>{idade}</Text>
        <Text style={{color: '#fff', fontSize: 10, margin: 10}}>{local}</Text>
        <Text style={{color: '#fff', fontSize: 10, margin: 10}}>{formacao}</Text>
        <Text style={{color: '#fff', fontSize: 10, margin: 10}}>{xprof}</Text>
        <Text style={{color: '#fff', fontSize: 10, margin: 10}}>{projetos}</Text>

        
 
      </View>
      

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161b22',
    alignItems: 'center',
  },
});

 
export default App;
