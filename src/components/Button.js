import React from 'react';
import { 
    Text,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';

  Button = (props)=> {
      return(
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={()=>props.navigateTo()}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
      )
  }

const styles = StyleSheet.create({
    container: {
        borderWidth:1, 
        margin:20
    },
    text: {
        fontSize:16
    }
})

export default Button
