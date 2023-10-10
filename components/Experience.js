import React from 'react';
import {
    StyleSheet,
  Text,
  View,
} from 'react-native';

const Experience = () => {
    return(
        <View style={styles.container}>
            <Text>Experience component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#DD7025'
    }
});


export default Experience