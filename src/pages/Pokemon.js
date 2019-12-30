import React, { Component } from 'react'
import { StyleSheet,Image,TextInput, Text, View, FlatList, Button, ImageBackground } from 'react-native';


class Pokemon extends Component{

    render(){
        return(
            <ImageBackground source={{uri: 'https://img2.freepng.es/20180508/toe/kisspng-user-profile-computer-icons-clip-art-5af1ac8cee74c6.8111281615257877889767.jpg'}} style={styles.backgroundcontainer}>
                <View style={styles.container}>
                    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnRn3txhussoAud9MWhNnsQVMDZVhezrMRXM4I5fvX01AsBL0&s'}}/>
                    <Text>hola</Text>
            Z       </View>
                <View>
                        <TextInput placeholder={'user'}/>
                    </View>
            </ImageBackground>


        )
    }

}


export default Pokemon;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundcontainer:{
        width: null,
        height: null,
        flex: 1
    }
  });


