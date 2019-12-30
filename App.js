import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

//import PacientesPage from './src/pages/PacientesPage.js';
import LoginScreen from './src/pages/LoginScreen.js';
import Pokemon from './src/pages/Pokemon.js';
import { createAppContainer } from 'react-navigation';


class App extends React.Component {
  /*render(){
    return(
      <AppStackNavigator/>
    );
  }*/

  /*constructor(props){
    super(props);
    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/'
    }

  }*/

  /*
  componentDidMount(){
    this.getPokemon();
  }

  getPokemon = () => {

    this.setState({loading:true})
    fetch(this.state.url)
    .then(res=>res.json())
    .then(res=>{
      this.setState({
        pokemon: res.results,
        url: res.next,
        loading: false

      })
    }

    )
  }

*/
 
    
}

const NavStack = createStackNavigator({
  Pokemon: Pokemon,
  Login: LoginScreen

  
  
  


})


const AppNav = createAppContainer(NavStack);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default AppNav;