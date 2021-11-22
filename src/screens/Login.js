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
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
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





const Login = ({ navigation }) => {

  const [showpassword , setshowpassword] = useState(true)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

   const [email , setemail] = useState('')
   const [pass , setpass] = useState('')
   const [text, setText] = React.useState('');
  const [emailerror , setemailerror] = useState(false)
  const login = () =>{ 
    if(email == ''){
      set

    }else if(pass == ''){

    }else{

    }

  }

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,justifyContent:'center', width:deviceWidth,height:deviceHeight}}>

<Appbar style={styles.appbar}>

<TouchableOpacity 
onPress={()=> navigation.goBack()}

        style={{alignContent:"center", alignItems:"center"}}

>
    <Ionicons  name='chevron-back' size={30} color={Appcolors.drakgrey} />

      
    </TouchableOpacity>

<Text style={styles.Header_txt}>Login</Text>

<TouchableOpacity 
style={{alignSelf:'center', }}>
    

</TouchableOpacity>

</Appbar>

               
        <View style={{paddingVertical:20,justifyContent:'center', paddingHorizontal:20}}>
        <TextInput
      label="E-mail or Phone"
      placeholder='E-mail or Phone'
      mode='outlined'
      style={{height:50, }}
      theme={{  colors: { placeholder: Appcolors.txt_grey, text: 'black', primary: Appcolors.inputtxt_border_color_active,underlineColor:'transparent',background : 'white'}}}
     
      value={email}
      onChangeText={text => setemail(text)}
      />
    {/* {emailerror == true ?
    <Text style={{color:'#FF155A',fontSize:15, marginTop:5,}}> This field is required</Text>
      :null} */}


<TextInput
      label="Password"
      placeholder='Password'
      mode='outlined'
      style={{height:50, marginTop:20,}}
      theme={{  colors: { placeholder: Appcolors.txt_grey, text: 'black', primary: Appcolors.inputtxt_border_color_active,underlineColor:'transparent',background : 'white'}}}
      secureTextEntry={showpassword}

      value={pass}
      onChangeText={text => setpass(text)}
      right={
          showpassword == true ?
          
        <TextInput.Icon
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
     

        <View style={styles.container_2}>

              <View style={{flexDirection:'row'}}>
           <TouchableOpacity 
           onPress={()=> {toggleCheckBox == true? setToggleCheckBox(false):setToggleCheckBox(true)}}
           style={styles.CheckBox}>
             {toggleCheckBox == true ? 
             <Ionicons name='checkmark' style={{alignSelf:'center'}} color='#64DFDF' size={24}/>
             :
             <Ionicons name='checkmark' style={{alignSelf:'center'}} color='white' size={24}/>
             }
             </TouchableOpacity>
              <Text style={styles.remember_txt}>
                  Remember me
                </Text>
              </View>



              <View style={{alignSelf:'center'}}>
                <Text
                onPress={()=> { navigation.navigate('Forgetpassword')}}
                style={styles.Forgettxt}>
                  Forget password?
                </Text>
              </View>
        </View>






          <TouchableOpacity 
          onPress={()=>{email != '' && pass != ''? navigation.navigate('Discover'): null}}
          style={[styles.login_btn,{ backgroundColor:email == '' || pass == ''? '#C4C4C4':'#64DFDF'        }]}>

                <Text style={styles.btn_txt}>Log in</Text>

            </TouchableOpacity>


                <Text style={styles.dhaccount}>
                  Don't have an account yet? <Text onPress={()=> {navigation.navigate('Register')}} style={{color:'#715DFF', fontWeight:'bold'}}>Register</Text>

                </Text>

        </View>

     

     <View style={{flex:1 ,paddingHorizontal:20 , marginTop:20,}}>

           </View>      





          
        </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default Login;


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