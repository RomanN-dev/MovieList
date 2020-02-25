
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import WelcomeScreen from './src/screens/WelcomeScreen'
import MovieListScreen from './src/screens/MovieListScreen'
import MovieInfoScreen from './src/screens/MovieInfoScreen'
import Store from './src/store/Store'
import React from 'react'

const AppStackNavigation = createStackNavigator({
  Welcome: WelcomeScreen,
  MovieList: MovieListScreen,
  MovieInfo: MovieInfoScreen
})

const AppContainer = createAppContainer(AppStackNavigation)
const App = () => {
  return (
  <Store>
    <AppContainer />
  </Store>);
}

export default App