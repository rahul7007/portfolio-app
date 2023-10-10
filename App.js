import React from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';

function App(){
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer style={styles.bg}>
    <StatusBar backgroundColor='#0B486B' />
    <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          backgroundColor:'#ede7d8',
          width: Dimensions.get('window').width/1.5
        },
        headerStyle:{
          backgroundColor:'#0B486B'
        },
        headerTintColor:'red',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        drawerActiveTintColor: 'blue',
        drawerLabelStyle:{
          color: '#111'
        }
      }}
    >
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          drawerLabel:'Home',
          title: 'Home'
        }}
      />
      <Drawer.Screen
        name='About'
        component={About}
        options={{
          drawerLabel:'About',
          title: 'About'
        }}
      />
      <Drawer.Screen
        name='Experience'
        component={Experience}
        options={{
          drawerLabel:'Experience',
          title: 'Experience'
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bg:{
    backgroundColor:'#e9b05a'
  }
});

export default App;
