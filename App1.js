import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './src/components/HeaderComponent';
import Introduction from './src/components/Introduction';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Drawer = createDrawerNavigator()
  return (
    // <View style={styles.container}>
    //   {/* <Text>C:lse up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    //   <HeaderComponent />
    //   <Introduction />
    // </View>
    <NavigationContainer style={{backgroundColor:'#e9b05a'}}>
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
          name='Introduction'
          component={Introduction}
          options={{
            drawerLabel:'Home',
            title: 'Portfolio'
          }}
        />
        <Drawer.Screen
          name='HeaderComp'
          component={HeaderComponent}
          options={{
            drawerLabel:'HeaderComp',
            title: 'HeaderComp'
          }}
        />
        <Drawer.Screen
          name='Introduction1'
          component={Introduction}
          options={{
            drawerLabel:'Home',
            title: 'Portfolio'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e9b05a'
  },
});
