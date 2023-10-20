import React from 'react';
import {
    StyleSheet,
  Text,
  View,
} from 'react-native';
import { skillsData } from "../assets/skillsData";

const Skills = () => {
    return(
        <View style={styles.container}>
            {
                skillsData.map((item)=> (
                    <View key={item.id} style={styles.skillBox}>
                        <Text style={styles.skillText}>{item.skill}</Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    skillBox:{
        backgroundColor:'#AACEDE',
        marginHorizontal: 5,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    skillText:{
        fontFamily:'FuzzyBubbles-Bold',
        fontSize: 17,
        color: '#1A3369'
    }
});


export default Skills