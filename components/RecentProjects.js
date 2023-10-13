import React from 'react';
import {
    FlatList,
    StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { sampleData } from '../assets/data';
import ListItem from './ListItem';

const RecentProjects = () => {
    const scrollX = useSharedValue(0)

    const onScroll = e => {
        scrollX.value = e.nativeEvent.contentOffset.x
    }

    return(
        <FlatList
            data={sampleData}
            horizontal
            style={{marginTop: 10}}
            bounces={false}
            onScroll={onScroll}
            scrollEventThrottle={5}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item, index})=> (
                <ListItem uri={item.uri} scrollX={scrollX} index={index} dataLength={sampleData.length} />
            )}
        />
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


export default RecentProjects