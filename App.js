/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { routes } from './src/route/routes';
// import {routes} from './src/route/routes';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          {/* <View style={styles.oval} />
        <View style={styles.boxBody}>
          <View style={styles.box} />
        </View> */}
          {
            routes.map(item =>
              <Route key={item.key} exact={item.exact} path={item.path} render={(props) => <item.component {...props} />
              } />
            )
          }
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  oval: {
    height: 65,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // backgroundColor: 'blue',
    borderWidth: 2.5,
    borderColor: '#EDF3F9',
    opacity: .7
  },
  boxBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    opacity: 0.2,
    // Test Border Types
    borderWidth: 20,

    //# Border [right,left,bottom,top] Color
    borderColor: 'gray',
    borderStartColor: 'yellow',
    borderEndColor: 'blue',
    // backfaceVisibility: 'hide'
    // borderRightColor : '',
    // borderLeftColor: '',
    // borderTopColor: '',
    // borderBottomColor: '',

    //# Border Top [Start, Left, Right, End] Radius
    // borderTopStartRadius: 100 / 2,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // borderTopEndRadius: 50,

    //# Border Bottom [Start, Left, Right, End] Radius
    // borderTopStartRadius: 100 / 2,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // borderTopEndRadius: 50,



  }
});
