import React from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import profile from './assets/images/avatar-3.jpg'
import home from './assets/icons/home.png'
import about from './assets/icons/about.png'
import experience from './assets/icons/experience.png'
import certificate from './assets/icons/certification.png'
import project from './assets/icons/projects.png'
import whatsappIcon from './assets/icons/whatsappIcon.png'
import linkedInIcon from './assets/icons/linkedInIcon.png'
import instagramIcon from './assets/icons/instagramIcon.png'
import githubIcon from './assets/icons/githubIcon.png'
import facebookIcon from './assets/icons/facebookIcon.png'
import { FONTS } from './constants';
import { TouchableOpacity } from 'react-native';

function App(){
  const Drawer = createDrawerNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // background: '#E3A342'
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
    <StatusBar backgroundColor='#AACEDE' />
    <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          backgroundColor:'#e9b05a',
          width: Dimensions.get('window').width/1.2
        },
        headerStyle:{
          backgroundColor:'#AACEDE'
        },
        headerTintColor:'#3D405B',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        drawerActiveTintColor: '#92400E',
        drawerLabelStyle:{
          color: '#111'
        }
      }}
      drawerContent={
        (props)=>{
          return(
            <SafeAreaView>
              {/* <View style={{
                // justifyContent: 'center',
                alignItems:'center',
                padding: 20,
                backgroundColor: '#0B486B',
              }}>
                <Image 
                  source={profile} 
                  style={{
                    width: 150, 
                    height: 150, 
                    borderRadius: 10,
                    marginTop:8
                  }} 
                />
                <Text style={{fontSize: 25, marginTop: 20, fontFamily: FONTS.primary, color:'white'}}>Rahul Sarma</Text>
                <TouchableOpacity>
                  <Text style={{marginTop: 6, fontFamily: FONTS.primary, color:'white'}}>Software Engineer</Text>
                </TouchableOpacity>
              </View> */}
              <View style={styles.imageContainer}>
                    {/* <View></View> */}
                    {/* <View style={styles.imageBackgroundParentCircle}> */}
                        <View style={styles.imageBackgroundChildCircle}>
                            <Image 
                                source={profile}
                                style={styles.imageStyle}
                            />
                        </View>
                    {/* </View> */}
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={{fontSize: 25, marginTop: 20, fontFamily: FONTS.primary, color:'white'}}>Rahul Sarma</Text>
                  <TouchableOpacity>
                    <Text style={{marginTop: 6, fontFamily: FONTS.primary, color:'white'}}>Software Engineer</Text>
                  </TouchableOpacity>
                </View>
                <View style={{borderWidth: 0, marginVertical: 20, justifyContent:'space-between', flexDirection:'row', paddingHorizontal: 40}}>
                    <View>
                      <Image source={whatsappIcon} style={{height: 30, width: 30}} />
                    </View>
                    <View>
                      <Image source={linkedInIcon} style={{height: 30, width: 30}} />
                    </View>
                    <View>
                      <Image source={githubIcon} style={{height: 30, width: 30}} />
                    </View>
                    <View>
                      <Image source={facebookIcon} style={{height: 30, width: 30}} />
                    </View>
                    <View>
                      <Image source={instagramIcon} style={{height: 30, width: 30}} />
                    </View>
                </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
      }}
    >
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          drawerLabel:'Home',
          title: 'Home',
          drawerLabelStyle:{
            fontSize: 15,
            fontFamily: FONTS.primary
          },
          drawerIcon: () => (
            <Image source={home} style={{height: 30, width: 30}} />
          )
        }}
      />
      <Drawer.Screen
        name='Projects'
        component={Home}
        options={{
          drawerLabel:'Projects',
          title: 'Projects',
          drawerLabelStyle:{
            fontSize: 15,
            fontFamily: FONTS.primary
          },
          drawerIcon: () => (
            <Image source={project} style={{height: 30, width: 30}} />
          )
        }}
      />
      <Drawer.Screen
        name='Certificates'
        component={Home}
        options={{
          drawerLabel:'Certificates',
          title: 'Certificates',
          drawerLabelStyle:{
            fontSize: 15,
            fontFamily: FONTS.primary
          },
          drawerIcon: () => (
            <Image source={certificate} style={{height: 35, width: 30}} />
          )
        }}
      />
      <Drawer.Screen
        name='About'
        component={About}
        options={{
          drawerLabel:'About',
          title: 'About',
          drawerLabelStyle:{
            fontSize: 15,
            fontFamily: FONTS.primary
          },
          drawerIcon: () => (
            <Image source={about} style={{height: 30, width: 30}} />
          )
        }}
      />
      <Drawer.Screen
        name='Experience'
        component={Experience}
        options={{
          drawerLabel:'Experience',
          title: 'Experience',
          drawerLabelStyle:{
            fontSize: 15,
            fontFamily: FONTS.primary
          },
          drawerIcon: () => (
            <Image source={experience} style={{height: 30, width: 30}} />
          )
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
  },
  imageContainer:{
    borderWidth:0,
    marginTop:30,
    backgroundColor: '',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'flex-end'
  },
  imageBackgroundParentCircle:{
      borderWidth:1,
      backgroundColor: '',
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      borderWidth: 15,
      padding: 10,
      borderColor:'#0B486B',
      // width:225
  },
  imageBackgroundChildCircle:{
      backgroundColor: '',
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      // borderWidth: 10,
      paddingTop: 5,
      paddingHorizontal: 5,
      backgroundColor:'#0B486B',
      overflow: 'hidden'
  },
  imageStyle:{
      height: 150,
      width: 150,
      resizeMode:'contain'
  },
  detailsContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
