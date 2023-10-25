import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
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
                    item.id <= 4 &&  
                    <View key={item.id} style={styles.cardContainer}>
                        <View style={[styles.card]}>
                            <View style={styles.imageBox}>
                                {/* <Image source={{uri: item.uri}} style={styles.image} /> */}
                                <ImageBackground source={{uri: item.uri}} resizeMode="cover" style={styles.imageA} />
                            </View>
                            <View style={styles.footer}>
                                <View style={styles.descBox}>
                                    {/* <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.desc}>{item.desc}</Text> */}
                                    <TouchableOpacity style={{backgroundColor:'#F4F1DE', borderRadius:20, paddingVertical:5}}>
                                        <Text style={{textAlign: 'center', fontSize: 15, color:'#3D405B', fontFamily:'FuzzyBubbles-Bold'}}>View</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    cardContainer:{
        marginLeft: 7,
    },
    card:{
        width: CARD_WIDTH,
        height: CARD_HEIGHT-20,
        borderWidth: 0,
        marginBottom: 10,
        backgroundColor: '#AACEDE',
        borderRadius: 20,
        padding: 5,
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    descBox:{
        // borderWidth:2,
        width: '80%'

    },
    imageBox:{
        width: CARD_WIDTH - 10,
        height: CARD_HEIGHT - 80,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow:'hidden',
        marginTop: 5,
        borderWidth: 1.5,
    },
    image:{
        // width: CARD_WIDTH,
        // height: CARD_HEIGHT - 60,
        resizeMode: 'cover'
    },
    footer:{
        flex:1,
        // flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
        // marginTop: 6,
        // marginLeft: 16,
        // marginRight: 10,
    },
    viewAllCertificate:{
        fontFamily:FONTS.primary,
        fontSize: 20
    },
    imageA:{
        flex: 1,
        justifyContent: 'center'
    }
});


export default Certificate