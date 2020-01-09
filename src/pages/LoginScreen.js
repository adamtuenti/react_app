import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Button, Image, Alert,TouchableOpacity } from 'react-native';
import { createNavigationContainer, StackActions } from 'react-navigation';
import { fetchUpdateAsync } from 'expo/build/Updates/Updates';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';


//var Crypto = require('crypto-js');
const REQUEST_URL = 'http://gateway.marvel.com:80/v1/public/characters';

 //public 36700780168bdcf1bb2901333a59575a
 //private 55323dc109f7cc180247ef518c2155dd51aca969
class LoginScreen extends Component{

    constructor(props){

        
        super(props);
        this.state = {
          loading: false,
          pacientes: [],
          url: 'http://192.168.100.9:8000/api/v1.0/patients/'
        }

        const x = 'http://192.168.100.9:8000/api/v1.0/';
    }



    
    componentDidMount(){
    this.getPacientes();
    }

    getPacientes = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then(res=>res.json())
        
        .then(res=>{ 
            console.log(res)
            this.setState({
            pacientes: res,
            url: res.next,
            loading: false,    
            })
        })
    }

    
    

    

   

    render(){

       
        return(
            
            <FlatList

                
                data={this.state.pacientes}
                renderItem={({item})=>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                   
                        <IconButton icono='user'/>
                
                        
                        
                        <View style={styles.container}>
                            <Text style={styles.title} >{`${item.names} está ${item.state}`} </Text>
                        </View>
                    </ScrollView>
              
                }
           
                      
    
                
                />

        )
    }

}


export default LoginScreen;

const IconButton = (props) => {
    return (
            <TouchableOpacity style={{ 
                width: 50, 
                height: 50, 
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#000000',
                marginHorizontal: 6,
                }}>
                <Icon 
                name={props.icono} 
                size={38} 
                color="#ffffff" />
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:10,
      
      alignItems: 'baseline',
      justifyContent: 'center',
    },
    contentContainer:{
        backgroundColor: '#98FF7A',
        borderColor: '#fff',
        borderRadius: 18,
            padding: 9,
            marginVertical:9,
            flexDirection: "row",
            alignItems: 'center',
            width:'100%'
    }
  });



            /*
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <FlatList
                    data={this.state.pokemon}
                    renderItem={
                        ({item})=>
                    <Text>Nombre: {item.name} </Text>
                    

                    }
                    keyExtractor={(item,index)=>index.toString()}
                    
                
                />

                
                <Button title="Go to Details" onPress={() => {this.props.navigation.navigate('Pokemon');}}/>
                   
            </View>*/



 
        /*super(props);
        this.state = {
          loading: false,
          pokemon: [],
          url: 'https://pokeapi.co/api/v2/pokemon/'
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
    }*/