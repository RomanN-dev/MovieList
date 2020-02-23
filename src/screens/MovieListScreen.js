import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import movieApi from '../logic/movieApi'
import { ScrollView } from 'react-native-gesture-handler';

const imageUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"


export default class MovieListScreen extends Component {
    
    state={
        movieList: undefined,
        Loaded: false
    }
    
    static navigationOptions = () => {
        return {
            title: 'MovieList',
            headerTintColor: 'black',
            headerStyle: {
                backgroundColor: 'white'
              },
        }
    }
    async componentDidMount() {
        const api = new movieApi()
        this.setState({
            movieList: await api.getMostPopular(),
        })
    }

    render() {
        
        const {movieList} = this.state
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
              {movieList &&  
                <ScrollView>
                    {movieList.data.results.map((value, key)=> (
                        <TouchableOpacity onPress={()=>navigate('MovieInfo', {item: movieList.data.results[key]})} style={{flexDirection:'row', borderWidth:2, paddingVertical:10}} key={key}>
                            <Text style={{fontSize:22}}>{value.title}</Text>
                            <Image style={{width:20, height:40}} source={{uri: `${imageUrl}${value.poster_path}`}}/>
                        </TouchableOpacity> 
                    ))}
                     
                </ScrollView>}
                
                
            </View>
        )
    }
}

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
        flexDirection:'row',
        alignItems:'flex-end'
    }
    
})