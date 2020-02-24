import React from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import axios from 'axios'
import {FaceBook} from '../constants/Constants'

const FBLoginButton = (props) => {

  getFbDate = async (accessToken) => {
    const EndPoint = `${FaceBook.Url}${accessToken}${FaceBook.infoToGet}`
    const response = await axios.get(EndPoint);
    props.changeNameAndPhoto(response.data.name, response.data.picture.data.url)
  }

  return(
    <View>
        <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken()
                  .then((accessToken) => getFbDate(accessToken.accessToken))
              }
            }
          }
          onLogoutFinished={() => props.changeNameAndPhoto()}/>
      </View>
  )
}

export default FBLoginButton

