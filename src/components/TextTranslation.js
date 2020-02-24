import React from 'react';
import { 
    Text,
    StyleSheet
  } from 'react-native';

  TextTranslation = (props)=> {
      return(
         <Text style={styles.text}>
         {props.text}: 
         <Text style={styles.subText}>
         {props.subText}
         </Text>
         </Text>
      )
  }

const styles = StyleSheet.create({
    
    text: {
        fontSize:16,
        paddingHorizontal:10,
        fontWeight:'bold'
    },
    subText: {
        fontSize:12,
        margin:10,
    }
})

export default TextTranslation
