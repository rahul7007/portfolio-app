import React from 'react';
import {
    StyleSheet, Text, View, Image, ScrollView,
} from 'react-native';
import Footer from './Footer';
import about from '../assets/icons/about.png'
import { FONTS } from '../constants';

const Experience = () => {
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor:'#AACEDE', margin: 20, marginBottom: 0, borderRadius: 10, flexDirection:'row', padding: 20}}>
                <View style={{justifyContent:'center'}}>
                    <Image source={about} style={{height: 30, width: 30}} />
                </View>
                <View style={{marginLeft: 20}}>
                    <Text style={styles.designation}>Software Engineer</Text>
                    <Text style={[styles.designation, {fontSize: 19}]}>LTIMindtree</Text>
                    <Text style={[styles.designation, {fontSize: 16}]}>Sep 2022 - Present - 1yr</Text>
                    <Text style={[styles.designation, {fontSize: 16}]}>Kolkata, West Bengal, India</Text>
                </View>
            </View>

            <View style={{backgroundColor:'#AACEDE', margin: 20, marginBottom: 0, borderRadius: 10, flexDirection:'row', padding: 20}}>
                <View style={{justifyContent:'center'}}>
                    <Image source={about} style={{height: 30, width: 30}} />
                </View>
                <View style={{marginLeft: 20}}>
                    <Text style={styles.designation}>Full-Stack Developer</Text>
                    <Text style={[styles.designation, {fontSize: 19}]}>Borgos Technologies Pvt. Ltd.</Text>
                    <Text style={[styles.designation, {fontSize: 16}]}>Aug 2021 - Aug 2022 - 1yr 1mo</Text>
                    <Text style={[styles.designation, {fontSize: 16}]}>Guwahati, Assam, India</Text>
                </View>
            </View>
            
            <View style={{backgroundColor:'#AACEDE', margin: 20, marginBottom: 0, borderRadius: 10, flexDirection:'row', padding: 20}}>
                <View style={{justifyContent:'center'}}>
                    <Image source={about} style={{height: 30, width: 30}} />
                </View>
                <View style={{marginLeft: 20}}>
                    <Text style={styles.designation}>Software Developer</Text>
                    <Text style={[styles.designation, {fontSize: 19}]}>BoldTek India Pvt. Ltd.</Text>
                    <Text style={[styles.designation, {fontSize: 16}]}>Sep 2019 - Jul 2021 - 1yr 11mos</Text>
                    <Text style={[styles.designation, {fontSize: 16}]}>Guwahati, Assam, India</Text>
                </View>
            </View>

            <View style={{backgroundColor:'#AACEDE', margin: 20, marginBottom: 0, borderRadius: 10, flexDirection:'row', padding: 20}}>
                <View style={{justifyContent:'center'}}>
                    <Image source={about} style={{height: 30, width: 30}} />
                </View>
                <View style={{marginLeft: 20}}>
                    <Text style={styles.designation}>Intern</Text>
                    <Text style={[styles.designation, {fontSize: 19}]}>RoboTech Pvt. Ltd.</Text>
                    <Text style={[styles.designation, {fontSize: 16}]}>Jan 2019 - May 2019 - 5mos</Text>
                </View>
            </View>
            </ScrollView>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    //   justifyContent:'center',
    //   alignItems:'center',
    //   backgroundColor:'#DD7025'
    overflow:'hidden'
    },
    designation:{
        fontFamily: FONTS.primary,
        color:'black',
        fontSize: 22,
    }
});


export default Experience