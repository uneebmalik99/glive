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
    Image,
    Button,
    TextInput,
    SafeAreaView
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import Feather from 'react-native-vector-icons/dist/Feather';
import { Appbar, Card,  } from 'react-native-paper';
import Appcolors from '../AppColors/Appcolors.js';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import SvgUri from 'react-native-svg-uri'; // SVG Package




const AccountSettings = ({route ,navigation }) => {

  const [showpassword, setshowpassword]=useState(false)
  const [pass, setpass]=useState('')
  
  const [Logincheck , setLogincheck] = useState(AppConstance.LOGIN)
  const [Rolecheck , setRolecheck] = useState(AppConstance.ROLE)
  const [newpass, setnewpass]=useState(false)
  const [Confirmpass, setConfirmpass]=useState(false)

  const [data  , setdata] = useState([
    {
      name:'Account Settings',
      icon:require('../images/gLive_Icons/Settings/account_settings_icon.svg')
    },
    {
      name:'Become a Business',
      icon:require('../images/gLive_Icons/Settings/businesssettingsicon.svg')
    },
    {
      name:'Language',
      icon:require('../images/gLive_Icons/Settings/language_icon.svg')
    },
    {
      name:'Invite a Friend',
      icon:require('../images/gLive_Icons/Settings/invite_friend_icon.svg')
    },
    {
      name:'FAQ',
      icon:require('../images/gLive_Icons/Settings/faq_icon.svg')
    },
    {
      name:'Give Feedback',
      icon:require('../images/gLive_Icons/Settings/feedback_icon.svg')
    },
    
  ])

useEffect(() => {

  return () => {
    
  }
}, [])

const renderLivenow = ({ item, index }) => {  
  return(
   <TouchableOpacity style={{borderColor:'#E3E3EB',flexDirection:'row',justifyContent:'space-between', borderRadius:5,borderBottomWidth:1,height:60,paddingHorizontal:15, width:'100%'}}>

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

<MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>

<Text style={{fontWeight:'500', fontSize:18}}>Account Settings</Text>

<View>

<Text></Text>
</View>
  </Appbar>


  
         <ScrollView style={{paddingHorizontal:30,}}>


            <Text style={{fontSize:16,fontWeight:'500',marginTop:20, color:'#162741'}}>Profile</Text>


            <Text style={{fontSize:16,fontWeight:'500',marginTop:20, color:'#162741'}}>Business Name</Text>

            <TextInput
      placeholder='ex. Business Name'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />
    <View style={{height:2, width:'100%',marginTop:20, backgroundColor:'#E3E3EB'}}>
        </View>

            <Text style={{fontSize:18,fontWeight:'500', marginTop:20, color:'#162741'}}>Change Password</Text>


            <Text style={{fontSize:16,fontWeight:'500',marginTop:20, color:'#162741'}}>New Password</Text>



      <View style={{height:50,marginTop:20,flexDirection:'row', borderWidth:1,borderColor:'#E3E3EB', borderRadius:5,}}>
        
      <TextInput
      placeholder='New Password'
      mode='outlined'
      secureTextEntry={newpass}
      style={{height:50,paddingHorizontal:10,width:'85%',  borderRadius:5, }}
     
      />
      
      
      {newpass == true?
      <View style={{width:'15%', justifyContent:'center'}}>
      <Ionicons  onPress={()=> {setnewpass(false)}} name='eye-sharp' style={{alignSelf:'center'}} color='#7D8696' size={20}/>
        </View>
        :
        <View style={{width:'15%', justifyContent:'center'}}>
        <Ionicons   onPress={()=> {setnewpass(true)}} name='ios-eye-off' style={{alignSelf:'center'}} color='#7D8696' size={20}/>
          </View>
      }
        </View>
         


     


           <Text style={{fontSize:16, fontWeight:'500',marginTop:20, color:'#162741'}}>Confirm Password</Text>
   


           <View style={{height:50,marginTop:20,flexDirection:'row', borderWidth:1,borderColor:'#E3E3EB', borderRadius:5,}}>
        
        <TextInput
        placeholder='Confirm Password'
        mode='outlined'
        secureTextEntry={Confirmpass}
        style={{height:50,paddingHorizontal:10,width:'85%',  borderRadius:5, }}
       
        />
        
        
        {Confirmpass == true?
        <View style={{width:'15%', justifyContent:'center'}}>
        <Ionicons  onPress={()=> {setConfirmpass(false)}} name='eye-sharp' style={{alignSelf:'center'}} color='#7D8696' size={20}/>
          </View>
          :
          <View style={{width:'15%', justifyContent:'center'}}>
          <Ionicons   onPress={()=> {setConfirmpass(true)}} name='ios-eye-off' style={{alignSelf:'center'}} color='#7D8696' size={20}/>
            </View>
        }
          </View>

           


        <TouchableOpacity style={{padding:20,marginTop:20, flexDirection:'row',width:'50%',borderWidth:1,borderRadius:5,borderColor:'#E3E3EB', justifyContent:'space-between'}}>
          

        
        <SvgUri
      style={{alignSelf:'center'}}
      source={require('../images/gLive_Icons/Settings/delete_account_icon.svg')}
          />

          <Text StatusBar={{fontSize:16, fontWeight:'500'}}>Delete Account</Text>
        </TouchableOpacity>


         </ScrollView>

<View style={{height:2,
                      
                      shadowColor: "#D5D5EC",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
                      alignSelf:'center', width:deviceWidth, backgroundColor:'#E3E3EB'}}>
        </View>

        <View style={{paddingVertical:2,paddingBottom:7, alignItems:'flex-end',paddingHorizontal:30, justifyContent:'flex-end',width:'100%'}}>

        <TouchableOpacity onPress={()=> {validation()}} style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.2,}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Save</Text>
        </TouchableOpacity>

        </View>

          
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

export default AccountSettings;