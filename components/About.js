import React from 'react';
import {
    StyleSheet,
  Text,
  View,
} from 'react-native';

const About = () => {
    return(
        <View style={styles.container}>
            <Text>About component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#1D6745'
    }
});

export default About