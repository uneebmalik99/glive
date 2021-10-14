import React,{useEffect, useState} from 'react';
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
import { Appbar, Card, TextInput, HelperText, } from 'react-native-paper';
import Appcolors from '../AppColors/Appcolors.js';
import CheckBox from '@react-native-community/checkbox';





const Emailsent = ({ navigation }) => {

   const [email , setemail] = useState('')


   useEffect(() => {
     
    setTimeout(() => {
       navigation.navigate('Resetpassword')
     }, 2000);

   }, [])

    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,justifyContent:'center', width:deviceWidth,height:deviceHeight}}>

<Appbar style={styles.appbar}>

<TouchableOpacity 
        style={{alignContent:"center", alignItems:"center"}}

>
  
    </TouchableOpacity>

<Text style={styles.Header_txt}>Email has been sent!</Text>

<TouchableOpacity 
style={{alignSelf:'center', }}>
    

</TouchableOpacity>

</Appbar>


        <View style={{paddingVertical:20,justifyContent:'center', paddingHorizontal:20}}>
    
    
    
    
    <Image style={{height:150,alignSelf:'center', width:150}} resizeMethod='resize' resizeMode='stretch' source={require('../images/email.png')}/>
    
        <View style={{paddingHorizontal:20, marginTop:15, justifyContent:'center', alignItems:'center'}}>

          <Text style={{fontSize:16, color:Appcolors.drakgrey}}>

          Please check your inbox and click in the received link to reset a password.
            </Text>
     </View>

     


                <Text style={styles.dhaccount}>
                  Didn't receive the link? <Text style={{color:'#715DFF', fontWeight:'bold'}}>Resend</Text>

                </Text>

        </View>

     

     <View style={{flex:1 ,paddingHorizontal:20 , marginTop:20,}}>

           </View>      





          
        </SafeAreaView>
    );
}

export default Emailsent;


const styles = StyleSheet.create({

  appbar:{
    width:deviceWidth,
    justifyContent:'space-between',
    backgroundColor:'white',
    paddingHorizontal:15,
    elevation:0,
    height:deviceHeight*0.08
 },
 Header_txt:{
  alignSelf:'center',
   fontSize:22,
  fontWeight:'600',
 color:Appcolors.drakgrey
},
login_btn:{
 width:'50%',
 paddingVertical:12,
 justifyContent:'center',
 alignSelf:'center',
 alignItems:'center',
 borderRadius:8,
  marginTop:30, 
},
btn_txt:{
  fontWeight:'600',
  color:'white',
  fontSize:18,

},
container_2:{
  flexDirection:'row',
  marginTop:30,
  justifyContent:'space-between',
},
Forgettxt:{
  fontSize:16,
  alignSelf:'center',
},
remember_txt:{
  color:'#A6A8BA',
  fontSize:16,
  alignSelf:'center',
  marginLeft:5,
},
CheckBox:{
  borderWidth:1,
  borderRadius:3,
  padding:1,
  borderColor:'#A6A8BA',
},
dhaccount:{
  fontWeight:'700',
  fontSize:16,
  marginTop:25,
  alignSelf:'center',
  color:Appcolors.drakgrey,
}

})