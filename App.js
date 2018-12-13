import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import store from './store';
import MainScreen from './screens/MainScreen';

export default class App extends Component {
  render() {
    //stack of views controllers
    const MainNavigator = createStackNavigator({
      Main: { screen: MainScreen }
    });

    const AppContainer = createAppContainer(MainNavigator);

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}


