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
          url: 'https://pokeapi.co/api/v2/pokemon/'
        }
        /*super(props)
            this.timestamp =1;
            this.public_key="36700780168bdcf1bb2901333a59575a";
            this.private_key="55323dc109f7cc180247ef518c2155dd51aca969";
            this.state={
                loaded: false,
                marvel: [],
                url: 'http://gateway.marvel.com:80/v1/public/characters'
            }*/
               /* dataSource: new FlatList.Da({
                    rowHasChanged: (row1,row2)=>row1!=row2
                }),
                loaded: false*/
            
    }



    
    componentDidMount(){
    this.getPacientes();
    }

    getPacientes = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{ 
            this.setState({
            pacientes: res.results,
            url: res.next,
            loading: false,    
            })
        })
    }

    
    
    //componentDidMount(){
      //  this.fetchData();
    //}
    
        
    


       /* this.setState({loading:true})
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
       /* fetchData(){
            this.setState({loaded:true})
            var hash = Crypto.MD5(this.timestamp+this.private_key+this.public_key);
            fetch(this.REQUEST_URL+'?t=s'+this.timestamp+'&apikey='+this.public_key+'&ash='+hash)
            .then((response)=>response.json())
            .then((response)=>{
                console.log(response)
                this.setState({
                    marvel: response.results,
                    url: response.next,
                    loaded: true
                })
            })

        }*/
       

    renderLoadingView(){
        return(
            <View>
                <Text>Cargando</Text>
            </View>
        )
    }

    renderComic(comic){
        return(
            <TouchableHighlight >
                <Image source={{uri: 'https://img2.freepng.es/20180508/toe/kisspng-user-profile-computer-icons-clip-art-5af1ac8cee74c6.8111281615257877889767.jpg'}}style={styles.backgroundImage}>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{comic.url}</Text>
                     
                    </View>
                   


                </Image>
            </TouchableHighlight>
        )
    }

    render(){

       
        return(
            
            <FlatList

                
                data={this.state.pokemon}
                renderItem={({item})=>

                    <ScrollView contentContainerStyle={styles.contentContainer}>
                   
                    <IconButton icono='user'/>
                
                        
                        
                            <View style={styles.container}>
                                <Text style={styles.title} >Paciente: {item.name}</Text>
                            
                            </View>
        
        
                        
                    </ScrollView>
                  //  ({item})=>
                   // <Text>Nombre: {item.name} </Text>
                }
                   // data={this.state.pokemon}
                    //renderItem={({item}) =>this.renderComic.bind(item)}
                      
                  
                    
                
                />

         /*   <FlatList
                dataSource= {this.props.puppies}
                renderItem={this.renderComic.bind(this)}
                style = {styles.FlatList}

            />*/


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
      
      alignItems: 'center',
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