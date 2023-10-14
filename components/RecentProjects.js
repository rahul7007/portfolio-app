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
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=>{
                    return(
                        <TouchableOpacity>
                            <View style={styles.card}>
                                <View style={styles.imageBox}>
                                    <Image source={{uri: item.uri}} style={styles.image} />
                                </View>
                                <View style={styles.titleBox}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.title}>{item.desc}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
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
      height: 200,
      marginHorizontal: 10,
      borderRadius: 30,
      overflow: 'hidden',
    //   borderWidth: 2
    },
    imageBox:{
      width: 250,
      height: 200,
    },
    image:{
        height: 200,
        width: 250,
        resizeMode:'cover'
    },
    titleBox:{
        position:'absolute',
        top: 120,
        left: 20
    },
    title:{
        color: '#0B486B',
        fontSize: 20,
        fontFamily:'FuzzyBubbles-Bold'
    }
});


export default RecentProjects