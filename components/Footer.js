import React from 'react';
import {
    StyleSheet,
  Text,
  View,
} from 'react-native';

import home from '../assets/icons/home.png'
import about from '../assets/icons/about.png'
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.footer}>
            <View style={styles.bottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('About')}
                >
                    <Image source={home} style={{height: 50, width: 50}} />
                </TouchableOpacity>
            </View>

            <View style={styles.bottomView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('About')}
                >
                    <Image source={about} style={{height: 50, width: 50}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        height: 60,
        backgroundColor:'#0084B4',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth: 3
        // position: 'absolute', 
        // left: 0, 
        // right: 0, 
        // bottom:0
    },
    bottomView:{
        borderWidth: 0,
        flex: 1,
        alignItems: 'center',
    },
});

export default Footer