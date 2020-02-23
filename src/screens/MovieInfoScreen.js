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


export default class MovieInfoScreen extends Component {
    
    state={
        item: this.props.navigation.getParam('item', 'NO-ID'),
    }
    
    static navigationOptions = () => {
        return {
            title: 'MovieInfo',
            headerTintColor: 'black',
            headerStyle: {
                backgroundColor: 'white'
              },
        }
    }

    render() {
        
        const {item} = this.state
        return(
            <View style={styles.container}>
                {item &&  
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center', borderWidth:2}} >
                    <Text style={{fontSize:22}}>Name: {item.title}</Text>
                    <Image style={{width:185, height:278}} source={{uri: `${imageUrl}${item.poster_path}`}}/>
                    <Text>Popularity: {item.popularity}</Text>
                    <Text>Description: {item.overview}</Text>
                </TouchableOpacity>}  
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