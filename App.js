import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import store from './store'
import AppContainer from './navigators/AppNavigator'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer style={styles.container}/>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFFFF0',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
  }
});

export default App