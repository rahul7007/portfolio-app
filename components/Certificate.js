import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { certificateData } from '../assets/certificateData';
import { FONTS, SHADOW } from '../constants';

const CARD_WIDTH = 160; 
const CARD_HEIGHT = 220;

const windowWidth = Dimensions.get('window').width

const Certificate = () => {
    /*, shadow.light*/
    return(
        <View style={styles.container}>
            {
                certificateData.map((item)=> (
                    item.id <= 4 ?  
                    <TouchableOpacity key={item.id} style={styles.cardContainer}>
                        <View style={[styles.card, SHADOW.light]}>
                            <View style={styles.imageBox}>
                                <Image source={{uri: item.uri}} style={styles.image} />
                            </View>
                            <View style={styles.footer}>
                                <View style={styles.descBox}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.desc}>{item.desc}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> : 
                    item.id === 5 ? 
                    <TouchableOpacity key={item.id} style={{marginLeft: windowWidth-80}}>
                        <Text style={styles.viewAllCertificate}>See All</Text>
                    </TouchableOpacity> : null
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardContainer:{
        marginLeft: 7,
    },
    card:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderWidth: 1,
        marginBottom: 10,
        // backgroundColor: '#5c5952'
    },
    imageBox:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow:'hidden',
    },
    image:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        resizeMode: 'cover'
    },
    footer:{
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 6,
        marginLeft: 16,
        marginRight: 10
    },
    viewAllCertificate:{
        fontFamily:FONTS.primary,
        fontSize: 20
    }
});


export default Certificate