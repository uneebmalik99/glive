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





const Resetpassword = ({ navigation }) => {

  const [showpassword , setshowpassword] = useState(true)

  const [showNewpassword , setshowNewpassword] = useState(true)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

   const [c_pass , setc_pass] = useState('')
   const [pass , setpass] = useState('')
  


    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,justifyContent:'center', width:deviceWidth,height:deviceHeight}}>

<Appbar style={styles.appbar}>

<TouchableOpacity 

        style={{alignContent:"center", alignItems:"center"}}

>

      
    </TouchableOpacity>

<Text style={styles.Header_txt}>Reset Password</Text>

<TouchableOpacity 
style={{alignSelf:'center', }}>
    

</TouchableOpacity>

</Appbar>


        <View style={{paddingVertical:20,justifyContent:'center', paddingHorizontal:20}}>
        <TextInput
      label="New Password"
      placeholder='New Password'
      mode='outlined'
      style={{height:50, }}
      theme={{  colors: { placeholder: Appcolors.txt_grey, text: 'black', primary: Appcolors.inputtxt_border_color_active,underlineColor:'transparent',background : 'white'}}}
      secureTextEntry={showNewpassword}

      value={pass}
      onChangeText={text => setpass(text)}
      right={
        showNewpassword == true ?
        
      <TextInput.Icon
      name="eye-outline"
      style={{alignSelf:'center'}}
        color={'grey'}
        onPress={() => {
            setshowNewpassword(false)
        }}
      />:
      <TextInput.Icon
      name="eye-off-outline"
      style={{alignSelf:'center'}}
      color={'grey'}
      onPress={() => {
          setshowNewpassword(true)
      }}
    />
    }
      />
    {/* {emailerror == true ?
    <Text style={{color:'#FF155A',fontSize:15, marginTop:5,}}> This field is required</Text>
      :null} */}


<TextInput
      label="Confirm Password"
      placeholder='Confirm Password'
      mode='outlined'
      style={{height:50, marginTop:20,}}
      theme={{  colors: { placeholder: Appcolors.txt_grey, text: 'black', primary: Appcolors.inputtxt_border_color_active,underlineColor:'transparent',background : 'white'}}}
      secureTextEntry={showpassword}

      value={c_pass}
      onChangeText={text => setc_pass(text)}
      right={
          showpassword == true ?
          
        <TextInput.Icon
        onPress={()=> {alert('k')}}
        name="eye-outline"
        style={{alignSelf:'center'}}
          color={'grey'}
          onPress={() => {
              setshowpassword(false)
          }}
        />:
        <TextInput.Icon
        name="eye-off-outline"
        style={{alignSelf:'center'}}
        color={'grey'}
        onPress={() => {
            setshowpassword(true)
        }}
      />
      }
      />
  





          <TouchableOpacity 
          onPress={()=>{ if(pass != '' && c_pass != ''){ navigation.navigate('Login')}}}
          style={[styles.login_btn,{ backgroundColor: pass == '' || c_pass == ''? '#C4C4C4':'#64DFDF'        }]}>

                <Text style={styles.btn_txt}>Reset Password</Text>

            </TouchableOpacity>



        </View>

     

     <View style={{flex:1 ,paddingHorizontal:20 , marginTop:20,}}>

           </View>      





          
        </SafeAreaView>
    );
}

export default Resetpassword;


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
   fontSize:20,
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