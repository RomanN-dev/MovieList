import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import axios from 'axios'

export default class FBLoginButton extends Component {

    async getFbDate(accessToken) {
        const response = await axios.get(`https://graph.facebook.com/me?access_token=${accessToken}&fields=email,name,picture.type(large)`);
        this.props.changeNameAndPhoto(response.data.name, response.data.picture.data.url)
    }

  render() {
      
    return (
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
                AccessToken.getCurrentAccessToken().then((accessToken) => this.getFbDate(accessToken.accessToken))
              }
            }
          }
          onLogoutFinished={() => this.props.changeNameAndPhoto()}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;