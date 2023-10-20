import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { certificateData } from '../assets/certificateData';

const RecentProjects = () => {
    return(
        <FlatList
            data={certificateData}
            horizontal
            // decelerationRate="fast"
            style={{marginTop:10}}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=>{
                    return(
                            <View style={styles.card}>
                                <View style={[styles.imageBox, styles.boxShadow]}>
                                    <View style={{height:100}}>
                                        <View style={{marginTop: 10, marginLeft:15}}>
                                            <Text style={styles.title}>Authentication App</Text>
                                        </View>
                                    </View>
                                    <View style={{height: 40}}>
                                        <View style={{justifyContent:'center', flexDirection:'row', marginHorizontal:40, alignItems:'center'}}>
                                            <View style={{width: 250/2, justifyContent:'center', flexDirection:'row'}}>
                                                <View style={{backgroundColor:'#F4F1DE', paddingHorizontal:20, paddingVertical:5, borderRadius:20}}>
                                                    <Text style={{fontSize: 15, color:'#3D405B', fontFamily:'FuzzyBubbles-Bold'}}>Details</Text>
                                                </View>
                                            </View>
                                            <View style={{width: 250/2, justifyContent:'center', flexDirection:'row'}}>
                                                <View style={{backgroundColor:'#F4F1DE', paddingHorizontal:20, paddingVertical:5, borderRadius:20}}>
                                                    <Text style={{fontSize: 15, color:'#3D405B', fontFamily:'FuzzyBubbles-Bold'}}>View</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
 
                                </View>

                            </View>
                    )
                }
            }
        />
    )
}

const styles = StyleSheet.create({
    card:{
      marginTop:10,
      width: 250,
      height: 150,
      marginHorizontal: 10,
    },
    imageBox:{
    //   width: 250,
    //   height: 150,
    //   borderWidth: 0,
      borderRadius: 10,
    //   borderColor:'#E07A5F',
    backgroundColor:'#C6DFED'
    },
    boxShadow:{
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    title:{
        color: '#0B486B',
        fontSize: 20,
        fontFamily:'FuzzyBubbles-Bold'
    }
});


export default RecentProjects