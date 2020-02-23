import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import WelcomeScreen from './src/screens/WelcomeScreen'
import MovieListScreen from './src/screens/MovieListScreen'
import MovieInfoScreen from './src/screens/MovieInfoScreen'


const AppStackNavigation = createStackNavigator({
  Welcome: WelcomeScreen,
  MovieList: MovieListScreen,
  MovieInfo: MovieInfoScreen
})

export default createAppContainer(AppStackNavigation)