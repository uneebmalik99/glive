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
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import Feather from 'react-native-vector-icons/dist/Feather';
import { Appbar, Card } from 'react-native-paper';





const Register = ({ navigation }) => {


    const [showpassword , setshowpassword] = useState(true)
    const [showConfirmpassword , setshowConfirmpassword] = useState(true)
    const [filteredDataSource, setFilteredDataSource] = useState([
    
        {
            id: 1,
            category : 'Cosmetics'
          },
          {
              id: 2,
              category : 'Coffee'
      
             
          },
          {
              id: 3,
              category : 'Cool Stuff'
          }
           
    
    ]);
    const [search ,setSearch]=useState('')


const [Products, setProducts] = useState([
    {
      id: 1,
      category : 'Cosmetics'
    },
    {
        id: 2,
        category : 'Coffee'

       
    },
    {
        id: 3,
        category : 'Cool Stuff'
    }
      
  ]
)


    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>

<View style={{  width:'100%',height:deviceHeight*0.08,backgroundColor:'white', paddingHorizontal:13, flexDirection:'column'}}>
  
  <View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  
          <TouchableOpacity
                            style={{ alignSelf: 'flex-start', }}
                            onPress={() => {
            navigation.goBack();
        }}

                        >
                            <Ionicons name='chevron-back-outline' size={21}  />
                            {/* <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} /> */}
                        </TouchableOpacity> 
  
  </View>
  <View style={{justifyContent:'center',width:'60%',height:'100%',}}>
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Register as user</Text>
  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  <TouchableOpacity

  
  style={{ alignSelf: 'flex-end', marginLeft: 40 }}

//    onPress={()=>
//    navigation.navigate('EditGig')}
    
                            >
                                {/* <Entypo name='dots-three-vertical'  size={20}  color='black'/> */}
            {/* <MaterialCommunityIcons name='bell-outline' size={20} color='#292F58' style={{marginRight:3}}/> */}
                      </TouchableOpacity>
  
  </View>
  
  
  
  </View>

  
  
           </View>
    
        <View style={{paddingVertical:20,justifyContent:'center', paddingHorizontal:20}}>
<TextInput 
style={{height:40, borderRadius:12, borderWidth:0.4, paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}
placeholder='Email'
/>

<View style={{flexDirection:'row',width:'100%',marginTop:10, borderRadius:12,height: Platform.OS == 'ios' ? deviceHeight*0.05 : deviceHeight*0.06,backgroundColor:'#D0D3D4',borderColor:'grey',  borderWidth:0.4, }}>
<TextInput 
 secureTextEntry={showpassword}

style={{height:'99%',width:'92%',alignSelf:'flex-start', paddingHorizontal:10 , }}

placeholder='Password'

/>

{showpassword == false ?
<TouchableOpacity 
    style={{ justifyContent:'center', alignSelf:'center'}}
    onPress={()=> setshowpassword(true)}>
<Ionicons name='eye-outline' size={16} />
</TouchableOpacity>
:
<TouchableOpacity 
    style={{justifyContent:'center', alignSelf:'center'}}

onPress={()=> setshowpassword(false)}>
<Ionicons name='ios-eye-off-outline'  size={16} />
</TouchableOpacity>
}
</View>


<View style={{flexDirection:'row',width:'100%',marginTop:10, borderRadius:12,height: Platform.OS == 'ios' ? deviceHeight*0.05 : deviceHeight*0.06,backgroundColor:'#D0D3D4',borderColor:'grey',  borderWidth:0.4, }}>

<TextInput 
 secureTextEntry={showConfirmpassword}

 style={{height:'99%',width:'92%',alignSelf:'flex-start', paddingHorizontal:10 , }}

placeholder='Confirm Password'

/>
{showConfirmpassword == false ?
<TouchableOpacity
        style={{ justifyContent:'center', alignSelf:'center'}}

    onPress={()=> setshowConfirmpassword(true)}>
<Ionicons name='eye-outline' size={16}/>
</TouchableOpacity>
:
<TouchableOpacity 
    style={{ justifyContent:'center', alignSelf:'center'}}

onPress={()=> setshowConfirmpassword(false)}>
<Ionicons name='ios-eye-off-outline'  size={16}/>
</TouchableOpacity>
}
</View>
<TouchableOpacity 
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'center'}}>Register</Text>
        </TouchableOpacity>
        </View>

     

           





          
        </SafeAreaView>
    );
}

export default Register;