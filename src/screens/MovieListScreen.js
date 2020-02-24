import React, {useState, useEffect} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import movieApi from '../logic/movieApi'

const MovieListScreen = ({navigation})=> {
    const [movieList, setMovieList] = useState(undefined)

    useEffect(()=>{
       async function getMost() {
            let api = new movieApi()
            let mostPopular = await api.getMostPopular()
            setMovieList( mostPopular )
        }
        getMost()
    },[movieList])

    navigateToWithItem = (destination, item)=> {
        navigation.navigate(destination, {item})
    }

    return(
        <View style={styles.container}>
            {movieList && <ScrollView>
               {movieList.data.results.map((value, key)=> (
                    <TouchableOpacity 
                    onPress={()=>navigateToWithItem('MovieInfo', movieList.data.results[key])} 
                    style={styles.movieButton} key={key}>
                        <Text style={{fontSize:22}}>
                        {value.title}
                        </Text>
                    </TouchableOpacity> 
                ))}
             </ScrollView>}
        </View>
    )
}

MovieListScreen.navigationOptions =  {

        title: 'MovieList',
        headerTintColor: 'black',
        headerStyle: {
            backgroundColor: 'white'
            },
        }

export default MovieListScreen



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    movieButton: {
        flexDirection:'row', 
        borderWidth:2, 
        paddingVertical:10
    }
})