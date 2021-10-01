import React,{useState} from 'react';
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button,
    SafeAreaView
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';



import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SliderBox } from "react-native-image-slider-box";
import Appcolors from '../AppColors/Appcolors.js';
import App from '../../App.js';



const  images1= [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]

const GuestProfileVS = ({route, navigation }) => {







    return (
      <SafeAreaView style={{height:deviceHeight,backgroundColor:'white', width:deviceWidth}}> 
      <StatusBar barStyle="light-content"  backgroundColor='red' />
  
        <Appbar style={styles.appbar}>
  
        <View 
            style={{alignContent:"center",flexDirection:'row', alignItems:"center"}}   >

              <TouchableOpacity
              onPress={()=> {
                navigation.goBack()
              }}
              >
               
            <Ionicons   name='chevron-back' size={30} color={Appcolors.drakgrey} />
              
              </TouchableOpacity>
              <Text style={styles.Header_txt}> 
              </Text>
              
            </View>
  
  
        <View style={{alignSelf:'center', }}>
            
  
        </View>
  
        </Appbar>
  

        <View style={styles.body}>
              
              <View style={{justifyContent:'center',width:'100%', height:'48%'}}>
                <Image style={{ width:85, height:85, alignSelf:'center',borderRadius:500/2, }}resizeMethod='resize' resizeMode='stretch' source={require('../images/1.5.png')}/>
                <Text style={{alignSelf:'center',fontSize:18, paddingVertical:10,}}>Viewer</Text>
                </View>



                <View style={{justifyContent:'center',width:'100%', height:'48%'}}>
                <Image style={{ width:85, height:85, alignSelf:'center',borderRadius:500/2, }}resizeMethod='resize' resizeMode='stretch' source={require('../images/1.5.png')}/>
                <Text style={{alignSelf:'center',fontSize:18, paddingVertical:10,}}>Streamer</Text>
                </View>


     
      


          </View>
  
  
        </SafeAreaView>
    );
}

export default GuestProfileVS;


const styles = StyleSheet.create({

  appbar:{
    width:deviceWidth,
    justifyContent:'space-between',
    backgroundColor:'white',
    paddingHorizontal:15
    ,
    height:deviceHeight*0.08
 },
 StreamList_main:{
  
  width:'100%',
  
 },
 Productslist_main:{
  width:'45%',
  backgroundColor:'white',
  margin:10,
  borderRadius:8,
  padding:6,
  shadowColor: "grey",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 2.84,
  elevation: 2,
 },
 body:{
  width:'100%',
  backgroundColor:'white',
  paddingHorizontal:0,
  flex:1,
  height:'100%',
  justifyContent:'center'
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });