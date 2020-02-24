import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import FBLoginButton from '../components/FBLoginButton'
import TextTranslation from '../components/TextTranslation'
import Button from '../components/Button'
import {Titles, DefaultImg} from '../constants/Constants'
import GoogleLoginButton from '../components/GoogleLoginButton'

   WelcomeScreen = (props) => {
        const [image, setImage] = useState(DefaultImg.URI)
        const [name, setName] = useState(Titles.Stranger)
        const [movieListPermission, setMovieListPermission] = useState(false)

        changeNameAndPhoto = (name, image) => {
            if(name && image){
                setImage(image)
                setName(name)
                setMovieListPermission(true) 
            } else {
                setImage(DefaultImg.URI)
                setName(Titles.Stranger)
                setMovieListPermission(false) 
            }   
        }
        navigateTo = (destenation)=> {
            props.navigation.navigate(destenation)
        }
    return(  
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TextTranslation text={Titles.Welcome} subText={name}/>
                <Image style={styles.userImage} source={{uri: image }}/>
                {!movieListPermission && <Text style={styles.addtionText}>{Titles.PleaseLogin}</Text>}
            </View>
            <View style={styles.loginButtons}>
                <FBLoginButton changeNameAndPhoto={(name, image)=>changeNameAndPhoto(name,image)} />
                <GoogleLoginButton/>
                {movieListPermission && <Button onPress={()=> navigateTo('MovieList')} title={Titles.MovieList}/>}
            </View>
        </View> 
        )
    }

WelcomeScreen.navigationOptions = {
    title: Titles.Welcome,
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: 'white'
              },
    }

export default WelcomeScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    mainContainer: {
        padding:100,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 22,
    },
    userImage: {
        margin:30,
        width:200, 
        height:200,
        borderRadius: 100,
        resizeMode:'contain'
    },
    addtionText: {
        fontSize: 16,
    },
    loginButtons:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
    
})