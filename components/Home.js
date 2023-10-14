import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FONTS, icons, images } from '../constants'
import RecentProjects from './RecentProjects';
import RecentProjectsOld from './RecentProjectsOld';
import Skills from './Skills';

const Home = () => {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <View style={styles.upperBox}>
                <Text style={[styles.portfolioText, styles.introText]}>Portfolio</Text>
                <View style={styles.imageContainer}>
                    <View></View>
                    <View style={styles.imageBackgroundParentCircle}>
                        <View style={styles.imageBackgroundChildCircle}>
                            <Image 
                                source={images.avatar_1} 
                                style={styles.imageStyle}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.introTextContainer}>
                    <Text style={styles.introText}>Hey! I am</Text>
                    <Text style={styles.introText}>Rahul Sarma</Text>
                    <Text style={[styles.introText, {fontSize: 20}]}>Software Engineer at LTIMindtree</Text>
                </View>
            </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between", marginTop: 28, paddingHorizontal: 50}}>
                <View style={{height: 50, width:50, backgroundColor:'', marginRight:20}}>
                <Image 
                    source={icons.whatsapp}
                    style={styles.contactIcon}
                />        
                </View>
                <View style={{height: 50, width:50, backgroundColor:'', marginRight:20}}>
                    <Image 
                        source={icons.instagram}
                        style={styles.contactIcon}
                    />  
                </View>
                <View style={{height: 50, width:50, backgroundColor:'', marginRight:20}}>
                    <Image 
                        source={icons.facebook}
                        style={styles.contactIcon}
                    />  
                </View>
            </View>
            <View style={styles.skillsContainer}>
                <Text style={[styles.introText, {textTransform:'uppercase'}]}>Skills</Text>
                <Skills />
            </View> 
            <View style={styles.recentProjectContainer}>
                <Text style={[styles.introText, {textTransform:'uppercase'}]}>Recent Projects</Text>
                <RecentProjects />
            </View>
            <View style={styles.certificateContainer}>
                <Text style={[styles.introText, {marginLeft: 10, textTransform:'uppercase'}]}>Certificates</Text>
                {/* <Certificate /> */}
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth:0,
        margin:10,
        padding: 0,
        // backgroundColor:"#a1e6b3",
        // height:300,
        borderTopStartRadius : 100,
        borderBottomEndRadius : 20,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 20,
        // overflow : 'hidden'
    },
    upperBox:{
        borderWidth:2,
        padding: 5,
        borderTopStartRadius : 100,
        borderBottomEndRadius : 20,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 20,
    },
    portfolioText:{
        fontSize: 20,
        marginLeft: 55,
        marginTop:10,
    },
    imageContainer:{
        borderWidth:0,
        marginTop:0,
        backgroundColor: '',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-end'
    },
    imageBackgroundParentCircle:{
        borderWidth:1,
        backgroundColor: '',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderWidth: 15,
        padding: 10,
        borderColor:'#0B486B',
        // width:225
    },
    imageBackgroundChildCircle:{
        backgroundColor: '',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        // borderWidth: 10,
        paddingTop: 5,
        paddingHorizontal: 5,
        backgroundColor:'#0B486B',
        overflow: 'hidden'
    },
    imageStyle:{
        height: 150,
        width: 150,
        resizeMode:'contain'
    },
    introTextContainer:{
        marginLeft: 10,
        marginTop: -50
    },
    introText:{
        color: '#2D220E',
        fontSize: 28,
        marginTop: 5,
        fontFamily:'FuzzyBubbles-Bold'
    },
    contactIcon:{
        height:50,
        width: 50
    },
    recentProjectContainer:{
        marginTop: 20,
        paddingLeft: 10
    },
    skillsContainer:{
        marginTop: 20,
        padding: 10
    },
    certificateContainer:{
        marginTop: 20,
    }
});

export default Home