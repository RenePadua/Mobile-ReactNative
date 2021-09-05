import React, { Component } from 'react';
import {View, Text, Pressable} from 'react-native';
import { styles } from './styles';
 

class App extends Component{

  constructor(props){ 
    super(props) 
        
    // Set initial state 
    this.state = {
       contagemPessoas: 0
    } 

 // "Bindar" os botões
 this.clicouPlus = this.clicouPlus.bind(this) 

 this.clicouMinus = this.clicouMinus.bind(this) 
} 

clicouPlus(){ 
  // Changing state 
  this.setState((contagemAnterior) => {
    return { contagemPessoas: contagemAnterior.contagemPessoas + 1}
  })  
}

clicouMinus(){ 
  // Changing state 
  this.setState((contagemAnterior) => {
    return { contagemPessoas: contagemAnterior.contagemPessoas - 1}
  })  
}


render(){ 
  let nomeAPP = 'Contador de Pessoas';
  return ( 
    <View style={styles.container}>

<Text style={styles.text}>{nomeAPP}</Text>


  <Text style={styles.textContador}>{this.state.contagemPessoas}</Text>
  

      <Pressable style={styles.botao1} onPress={this.clicouPlus}>
        <Text style={styles.textoBotao}>+</Text>
      </Pressable>
 
      <Pressable style={styles.botao2} onPress={() => this.clicouMinus()}>
        <Text style={styles.textoBotao}>-</Text>
      </Pressable>
 
    </View>
  ) 
} 
} 

export default App;