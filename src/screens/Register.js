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





const Register = ({ navigation }) => {

  const [showpassword , setshowpassword] = useState(true)
  const [showNewpassword , setshowNewpassword] = useState(true)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [FirstName, setFirstName]= useState('')
    const [F_error, setF_error]= useState(false)

    const[LastName , setLastName] = useState('') 
    const [L_error, setL_error]= useState(false)

   const [email , setemail] = useState('')
   const [E_error, setE_error]= useState(false)

   const [pass , setpass] = useState('')
   const [P_error, setP_error]= useState(false)

   const [confirmpass , setconfirmpass] = useState('')
   const [CP_error, setCP_error]= useState(false)

   const [CPC_error, setCPC_error]= useState(false)


   const [text, setText] = React.useState('');
  const [emailerror , setemailerror] = useState(false)
  const login = () =>{ 
    if(email == ''){
      set

    }else if(pass == ''){

    }else{

    }

  }

const  proceed = ()=>{
    if(FirstName == null || FirstName == ''){
        setF_error(true)

    }else if(LastName == null || LastName == ''){
        setF_error(false)
        setL_error(true)

    }else if(email == null || email == ''){
        setL_error(false)
        setE_error(true)

    }else if(pass == null || pass == ''){
        setP_error(true)
        setE_error(false)

    }else if(confirmpass == null || confirmpass == ''){
        setCP_error(true)
        setP_error(false)

    }else if(pass != confirmpass){
        setCPC_error(true)
        

    }else{
        setCP_error(false)
        setCPC_error(false)
        navigation.navigate('Login')
    }



     
  }

    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,justifyContent:'center', width:deviceWidth,height:deviceHeight}}>

<Appbar style={styles.appbar}>

<TouchableOpacity 
onPress={()=> navigation.goBack()}

        style={{alignContent:"center", alignItems:"center"}}

>
    <Ionicons  name='chevron-back' size={30} color={Appcolors.drakgrey} />

      
    </TouchableOpacity>

<Text style={styles.Header_txt}>Register</Text>

<TouchableOpacity 
style={{alignSelf:'center', }}>
    

</TouchableOpacity>

</Appbar>


        <View style={{paddingVertical:20,justifyContent:'center', paddingHorizontal:20}}>
       
        <TextInput
            label="First Name"
            placeholder='First Name'
            mode='outlined'
            style={{height:50,  }}
            theme={{  colors: { placeholder: Appcolors.txt_grey, text: 'black', primary: Appcolors.inputtxt_border_color_active,underlineColor:'transparent',background : 'white'}}}           
            value={FirstName}
            onChangeText={text => setFirstName(text)}
            />

            {F_error == true ? 
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}>This field is reqiured </Text>
            :
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}></Text>
            }

        <TextInput
            label="Last Name"
            placeholder='Last Name'
            mode='outlined'
            style={{height:50,  }}
            theme={{  colors: { placeholder: Appcolors.txt_grey, text: 'black', primary: Appcolors.inputtxt_border_color_active,underlineColor:'transparent',background : 'white'}}}
            
            value={LastName}
            onChangeText={text => setLastName(text)}
            />

            {L_error == true ? 
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}>This field is reqiured </Text>
            :
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}></Text>
            }
       
       
        <TextInput
            label="E-mail or Phone"
            placeholder='E-mail or Phone'
            mode='outlined'
            style={{height:50, }}
            theme={{  colors: { placeholder: Appcolors.txt_grey, text: 'black', primary: Appcolors.inputtxt_border_color_active,underlineColor:'transparent',background : 'white'}}}
            
            value={email}
            onChangeText={text => setemail(text)}
            />

            {E_error == true ? 
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}>This field is reqiured </Text>
            :
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}></Text>
            }
 


    <TextInput
      label="Password"
      placeholder='Password'
      mode='outlined'
      style={{height:50, }}
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

            {P_error == true ? 
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}>This field is reqiured </Text>
            :
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}></Text>
            }



        <TextInput
            label="Confirm Password"
            placeholder='Confirm Password'
            mode='outlined'
            style={{height:50,}}
            theme={{  colors: { placeholder: Appcolors.txt_grey, text: 'black', primary: Appcolors.inputtxt_border_color_active,underlineColor:'transparent',background : 'white'}}}
            secureTextEntry={showNewpassword}

            value={confirmpass}
            onChangeText={text => setconfirmpass(text)}
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
            {CP_error == true ? 
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}>This field is reqiured </Text>
            :
            CPC_error == true ?
            <Text style={{marginTop:3,marginLeft:3, color:'#FF155A'}}>Passowrd and Confirm Password not matched</Text>
             :
             null}
     

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
             
              </View>
              <Text style={styles.remember_txt}>
              I agree to the gigaaa<Text style={{color:'#64DFDF'}}>Terms of Use</Text> and <Text style={{color:'#64DFDF'}}>Privacy Policy</Text>
                </Text>


             
        </View>






          <TouchableOpacity 
          onPress={()=>{  proceed()}}
          style={[styles.login_btn,{ backgroundColor:'#C4C4C4'  }]}>

                <Text style={styles.btn_txt}>Create Account</Text>

            </TouchableOpacity>


                <Text style={styles.dhaccount}>
                  Already have an account? <Text onPress={()=> {navigation.navigate('Register')}} style={{color:'#715DFF', fontWeight:'bold'}}>Log in</Text>

                </Text>

        </View>

     

     <View style={{flex:1 ,paddingHorizontal:20 , marginTop:20,}}>

           </View>      





          
        </SafeAreaView>
    );
}

export default Register;


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
  height:30,
  alignSelf:'center',
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