import React, {useState, useEffect, useContext} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Button from '../components/Button'
import TextTranslation from '../components/TextTranslation'
import {Context} from '../store/Store'
import Store from '../store/Store'
import {Titles, TMDB} from '../constants/Constants'

const MovieInfoScreen = (props)=> {
    const [item, setItem] = useState(undefined)
    const [state, dispatch] = useContext(Context);

    useEffect(()=> {
        setItem(props.navigation.getParam('item', 'NO-ID'))
    },[])

   function addToCart(item) { 
      dispatch({type:"ADD_MOVIE", payload: [state.movie, item]})
    }

    function removeFromCart(item) {
      dispatch({type:"REMOVE_MOVIE", payload: item})
    }

    return(
            <View style={styles.container}>
                {item &&  
                <View style={styles.mainContainer} >
                    <TextTranslation text={Titles.Name} subText={item.title}/>
                    <Image style={styles.posterStyle} source={{uri: `${TMDB.imageUrl}${item.poster_path}`}}/>
                    <TextTranslation text={Titles.Popularity} subText={item.popularity}/>
                    <TextTranslation text={Titles.Description} subText={item.overview}/>
                    <Button onPress={ ()=> addToCart(item.title)} title={Titles.AddToCart}/>
                    <Button onPress={ ()=> removeFromCart(item.title)} title={Titles.Remove}/>
                    <View style={{flexDirection:'column'}}>
                        {state.movie.map((value, key)=>(
                            <Text key={key}>{value}</Text>
                        ))}
                    </View>
                    
                </View>}  
            </View>
            
    )
}

MovieInfoScreen.navigationOptions = {
    
    title: 'MovieInfo',
    headerTintColor: 'black',
    headerStyle: {
        backgroundColor: 'white'
        },
}

export default MovieInfoScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        justifyContent:'center'
    },
    mainContainer: {
        justifyContent:'center', 
        alignItems:'center',
    },
    posterStyle: {
        width:185, 
        height:278
    }
     
})