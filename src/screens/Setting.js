import React,{useState , useEffect} from 'react';
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
    SafeAreaView,
    Platform
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import Feather from 'react-native-vector-icons/dist/Feather';
import { Appbar, Card } from 'react-native-paper';
import Appcolors from '../AppColors/Appcolors.js';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import SvgUri from 'react-native-svg-uri'; // SVG Package




const Setting = ({route ,navigation }) => {


  const [Logincheck , setLogincheck] = useState(AppConstance.LOGIN)
  const [Rolecheck , setRolecheck] = useState(AppConstance.ROLE)

  const [data  , setdata] = useState([
    {
      name:'Account Settings',
      icon:require('../images/gLive_Icons/Settings/account_settings_icon.svg'),
      page:'AccountSettings'
    },
    {
      name:'Become a Business',
      icon:require('../images/gLive_Icons/Settings/businesssettingsicon.svg'),
      // page:'BecomeaBusiness',
      // page:'BecomeaBusinessnostore'
      page:'BecomeaBusinessnostore',

    },
    {
      name:'Language',
      icon:require('../images/gLive_Icons/Settings/language_icon.svg'),
      page:'Language'

    },
    {
      name:'Invite a Friend',
      icon:require('../images/gLive_Icons/Settings/invite_friend_icon.svg'),
      page:'Setting'

    },
    {
      name:'FAQ',
      icon:require('../images/gLive_Icons/Settings/faq_icon.svg'),
      page:'Setting'

    },
    {
      name:'Give Feedback',
      icon:require('../images/gLive_Icons/Settings/feedback_icon.svg'),
      page:'Setting'

    },
    
  ])
  const [data2  , setdata2] = useState([
    {
      name:'Account Settings',
      icon:require('../images/gLive_Icons/Settings/account_settings_icon.svg'),
      page:'AccountSettings'
    },
    {
      name:'Business Settings',
      icon:require('../images/gLive_Icons/Settings/businesssettingsicon.svg'),
      // page:'BecomeaBusiness',
      page:'BecomeaBusiness'

    },
    {
      name:'Language',
      icon:require('../images/gLive_Icons/Settings/language_icon.svg'),
      page:'Language'

    },
    {
      name:'Invite a Friend',
      icon:require('../images/gLive_Icons/Settings/invite_friend_icon.svg'),
      page:'Setting'

    },
    {
      name:'FAQ',
      icon:require('../images/gLive_Icons/Settings/faq_icon.svg'),
      page:'Setting'

    },
    {
      name:'Give Feedback',
      icon:require('../images/gLive_Icons/Settings/feedback_icon.svg'),
      page:'Setting'

    },
    
  ])

useEffect(() => {

  return () => {
    
  }
}, [])

const renderLivenow = ({ item, index }) => {  
  return(
   <TouchableOpacity 
   onPress={()=> {navigation.navigate(item.page)}}
   style={{borderColor:'#E3E3EB',flexDirection:'row',justifyContent:'space-between', borderRadius:5,borderBottomWidth:1,height:60,paddingHorizontal:15, width:'100%'}}>

    <View style={{ width:'50%', flexDirection:'row', }}>
    <View style={{width:'20%',justifyContent:'center', }}>
    <SvgUri
      style={{alignSelf:'center'}}
      source={item.icon}
    />
  
    </View>
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>{item.name}</Text>
    </View>
    </View>


    <View style={{justifyContent:'center'}}>
      <MaterialIcons name='navigate-next' color='#616B7B' style={{alignSelf:'center'}} size={25}/>
    </View>
   

   </TouchableOpacity>

  );



}


    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>

<Appbar style={styles.appbar}>

<Ionicons  onPress={()=> {navigation.goBack()}} name='ios-close-outline'  size={30} color='#616B7B'/>

<Text style={{fontWeight:'500', fontSize:18}}>Settings</Text>

<View>

<Text></Text>
</View>
  </Appbar>
  <ScrollView>

  <FlatList
         contentInsetAdjustmentBehavior="automatic"
         data={AppConstance.ROLE == 1 ? data2 :AppConstance.ROLE == 2 ? data2 : data }
  
         contentContainerStyle={{height:'100%' ,width:'100%', marginTop:0, alignSelf:'center', paddingHorizontal:2,  }}
         renderItem={renderLivenow}
         keyExtractor={(item,id) => id.toString()}
         /> 

<TouchableOpacity 
   style={{borderColor:'#E3E3EB',flexDirection:'row',justifyContent:'space-between', borderRadius:5,borderBottomWidth:1,height:60,paddingHorizontal:15, width:'100%'}}>

    <View style={{ width:'50%',marginLeft:5, flexDirection:'row', }}>
    <View style={{width:'20%',justifyContent:'center', }}>
    <SvgUri
      style={{alignSelf:'center'}}
      source={require('../images/gLive_Icons/log_out_icon.svg')}
    />
    {/* {Platform.OS == 'ios'?
    <SvgUri
      style={{alignSelf:'center'}}
      source={item.icon}
    />
     :
    <Image
                                    style={{alignSelf:'center',}}

                                    source={item.icon}

          />
        } */}
    </View>
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>Logout</Text>
    </View>
    </View>


    <View style={{justifyContent:'center'}}>
    </View>
   

   </TouchableOpacity>
{/* <TouchableOpacity 
   style={{borderColor:'#E3E3EB',flexDirection:'row',justifyContent:'center',alignContent:'flex-start', borderRadius:5,borderBottomWidth:1,height:60,paddingHorizontal:15, width:'100%'}}>
  
   
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>Log Out</Text>
    </View>


   

   </TouchableOpacity> */}





   



         </ScrollView>



          
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

  appbar:{
    width:deviceWidth,
    justifyContent:'space-between',
    backgroundColor:'white',
    borderBottomWidth:0.5,
    borderColor:'#D5D5EC',
    paddingHorizontal:20,
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
 txt:{
  alignSelf:'center', 
  fontSize:22,
   paddingVertical:10,
   color:Appcolors.drakgrey,
 },
 body:{
  width:'100%',
  backgroundColor:'white',
  paddingHorizontal:0,
  height:'95%',
  paddingVertical:10,
  paddingHorizontal:20,
  flex: 1,

 
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });

export default Setting;