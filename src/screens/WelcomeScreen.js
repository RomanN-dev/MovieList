import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import FBLoginButton from '../components/FBLoginButton'
import Button from '../components/Button'

const imageUri = "http://cdn.onlinewebfonts.com/svg/img_568656.png"
const buttonTitle = "movies list"
const addtionalText = "Please Log in to Continue to the awsomneses"

   WelcomeScreen = (props) => {
        const [image, setImage] = useState(imageUri)
        const [name, setName] = useState('Stranger')
        const [movieListPermission, setMovieListPermission] = useState(false)

        changeNameAndPhoto = (name, image) => {
            if(name && image){
                setImage(image)
                setName(name)
                setMovieListPermission(true) 
            } else {
                setImage(imageUri)
                setName('Stranger')
                setMovieListPermission(false) 
            }   
        }
        navigateTo = (destenation)=> {
            props.navigation.navigate(destenation)
        }

        return(
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <Text style={styles.welcomeText}>Welcome {name}!</Text>
                    <Image style={styles.userImage} source={{uri: image }}/>
                    <Text style={styles.addtionText}>{addtionalText}</Text>
                </View>
                <View style={styles.fbLoginBtn}>
                    <FBLoginButton changeNameAndPhoto={(name, image)=>changeNameAndPhoto(name,image)} />
                    {movieListPermission && <Button navigateTo={()=> navigateTo('MovieList')} title={buttonTitle}/>}
                </View>
            </View>
        )
    }

    export default WelcomeScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    mainContainer: {
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
        resizeMode:'contain'
    },
    addtionText: {
        fontSize: 16,
    },
    fbLoginBtn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
    
})