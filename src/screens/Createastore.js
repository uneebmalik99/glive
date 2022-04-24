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
import AppIntroSlider from 'react-native-app-intro-slider';

import { Pages } from 'react-native-pages';

import DropDownPicker from 'react-native-dropdown-picker';


const Createastore = ({route ,navigation }) => {


  const [Logincheck , setLogincheck] = useState(AppConstance.LOGIN)
  const [Rolecheck , setRolecheck] = useState(AppConstance.ROLE)
  const [type, settype]= useState(3)
  const [type1, settype1]= useState(0)
  const [index ,setindex]= useState(0)
  const [Invitation,setInvitation ] = useState(0)
 const [open, setOpen] = useState(false)
 const [value, setValue] = useState('Select language');
  const [items, setItems] = useState([
    {label: 'item1', value: 'item1'},
    {label: 'item2', value: 'item2'}
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
    
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    
    // alert('ji')
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.dateString)
    setDate(date.dateString)
  }



useEffect(() => {

  return () => {
    
  }
}, [])



    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>


<Appbar style={styles.appbar}>



<Text style={{fontWeight:'500', fontSize:18}}>Create a Store</Text>

<View>

<Text></Text>
</View>
  </Appbar>

  {/* <Pages   indicatorColor='red'> */}


{index == 0 ?
        <View style={{ flex: 1, }} >
          <ScrollView style={{marginBottom:40,}}>

            <Text style={{color:'#162741',marginTop:30, alignSelf:'center', fontSize:18,fontWeight:'500', }}>Who is the account for?</Text>
            <Text style={{color:'#162741B2',alignSelf:'center', marginTop:20,fontSize:14,fontWeight:'500', }}>Select how do you plan on using gLive</Text>

            <View style={{ borderRadius:5, padding:30, height:Platform.OS == 'ios'? deviceHeight*0.2:deviceHeight*0.25,width:"100%", flexDirection:'row',justifyContent:'space-evenly', marginTop:15, backgroundColor:'white',}}>


                    <TouchableOpacity onPress={()=> { settype1(0)}} style={{height:'100%',borderRadius:5, justifyContent:'center', borderWidth:1,borderColor:'#E3E3EB', alignSelf:'center',  backgroundColor:type1==0?'#E91327':'white', width:'40%'}}>

                      <View style={{height:'80%',width:'80%',paddingVertical:15, alignSelf:'center',justifyContent:'space-between', }}>
                      <SvgUri
                          style={{alignSelf:'center',}}
                          source={type1== 1?  require('../images/gLive_Icons/CreateaStore/individual_icon.svg'): require('../images/gLive_Icons/CreateaStore/individual_white_icon.svg')}
                        />

                    <Text style={{alignSelf:'center', color:type1==0?'white':'#162741', fontWeight:'400'}}>Individual</Text>
                      </View>


                    </TouchableOpacity>

                    <TouchableOpacity  
                    onPress={()=>{ settype1(1)}}
                    style={{height:'100%',justifyContent:'center', borderWidth:1,borderColor:'#E3E3EB', alignSelf:'center', borderRadius:5, backgroundColor:type1==1?'#E91327':'white', width:'40%'}}>
                    
                    <View style={{height:'80%',width:'80%',paddingVertical:15, alignSelf:'center',justifyContent:'space-between', }}>
                    <SvgUri
                          style={{alignSelf:'center',}}
                          source={type1==0? require('../images/gLive_Icons/CreateaStore/business_icon.svg'): require('../images/gLive_Icons/CreateaStore/business_white_icon.svg')}
                        />
                    <Text style={{alignSelf:'center',color:type1== 0?'#162741':'white', fontWeight:'400'}}>Business</Text>
                      </View>

                      
                    </TouchableOpacity>


                    </View>


                    <View style={{paddingHorizontal:30}}>

                    <Text style={{color:'#162741',fontSize:16,fontWeight:'400', }}>Full Name</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
                       />




                    <Text style={{color:'#162741',marginTop:20,fontSize:16,fontWeight:'400', }}>Phone</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />

                     <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Email</Text>

                    <TextInput
                      placeholder='Email'
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />

                       <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Address line 1</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />



                    <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Address line 2</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />


                     <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>City</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />



                     <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Zip code</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />


                       <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Country</Text>

                       <DropDownPicker
      open={open}
      value={value}
      items={items}
      placeholder="Country"
      setOpen={setOpen}
      setValue={setValue}
      textStyle={{
        fontSize: 15,
        color:'#162741'

      }}
      style={{
        borderColor:'#E3E3EB',
        marginTop:20,
        marginBottom:open == true ? '30%': '0%',
        
      }}
      dropDownContainerStyle={{
       
        marginBottom:open == true ? '30%': '0%',
        marginTop:open == true ? 15: 0,
        borderWidth:1,
       borderColor: '#E3E3EB',
      }}
      containerStyle={{
        
        borderColor:'#E3E3EB'
      }}
      setItems={setItems}
    />

    <View style={{height:120}}>
      <Text></Text>
      </View>

                      </View>

          </ScrollView>

        </View>

: index == 1 ?

        <View style={{ flex: 1, }} >

          <ScrollView style={{marginBottom:40,}}>

            <Text style={{color:'#162741',marginTop:30, alignSelf:'flex-start',paddingHorizontal:20, fontSize:18,fontWeight:'500', }}>Store Details</Text>

            <View style={{ borderRadius:5, padding:30, width:"100%", flexDirection:'row',justifyContent:'space-evenly', marginTop:15, backgroundColor:'white',}}>



            <View style={{paddingVertical:7,width:'20%',justifyContent:'center', flexDirection:'row'}}>
         
      
      
      <ImageBackground  
      imageStyle={{borderRadius:400/2,borderWidth:1,borderColor:'#E3E3EB'}}
      style={{width: 150, height: 150,justifyContent:'flex-end'}} 
 
      
      source={require('../images/no-image.png')}>


        
      <View style={{shadowColor: "#00000040",
shadowOffset: {
	width: 5,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
backgroundColor:'white',
 alignSelf:'flex-end',elevation:5, width:50,height:50, justifyContent:'center', borderRadius:400/2,color:'white', padding:5}}>
      <Image  style={{width:30,height:30, alignSelf:'center',}} source={require('../images/camera_img.png')}/>

      </View>

      </ImageBackground>

      </View>


                   


                    </View>


                    <View style={{paddingHorizontal:30,marginTop:20,}}>

                    <Text style={{color:'#162741',fontSize:16,fontWeight:'400', }}>Store Name</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
                       />





                   

                    <Text style={{marginTop:20}}>Description</Text>



                    <View style={{borderWidth:1,height:100, marginTop:20,justifyContent:'flex-start', borderColor:'#E3E3EB', borderRadius:5, }}>

                            <TextInput
                    placeholder='Livestream description'
                    mode='outlined'
                    multiline={true}
                    style={{paddingHorizontal:10,height:'100%', borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                    />

                    </View>

            
                    <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Category</Text>

                  <TextInput
                    mode='outlined'
                    style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                    />


                  <View style={{height:2, width:'100%',marginTop:20, backgroundColor:'#E3E3EB'}}>
                    </View>

                  <Text style={{color:'#162741',marginTop:20, fontSize:18,fontWeight:'500', }}>Linked Accounts</Text>

                     <Text style={{color:'#162741',marginTop:30, fontSize:16,fontWeight:'400', }}>Website</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />



                     <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Instagram</Text>

                    <TextInput
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />


                       <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Facebook</Text>

                    <TextInput
                     
                      mode='outlined'
                      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                      />

                      </View>

          </ScrollView>


        </View>

: 

        <View style={{ flex: 1, }} >
          <ScrollView style={{marginBottom:40, paddingHorizontal:30,}}>

            <Text style={{color:'#162741',marginTop:30, alignSelf:'flex-start',paddingHorizontal:0, fontSize:18,fontWeight:'500', }}>Members</Text>



            <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Email</Text>

            <TextInput
              placeholder='Email'
              mode='outlined'
              style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

              />
              
              <Text style={{color:'#162741',marginTop:30, alignSelf:'flex-start',paddingHorizontal:0, fontSize:18,fontWeight:'500', }}>Members Role</Text>


              <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Select role</Text>



              <TouchableOpacity onPress={()=>{settype(0)}} style={{borderWidth:1,backgroundColor:type==0? '#E91327':'white', borderRadius:5,borderColor:'#E3E3EB', marginTop:10, padding:10,}}>

                <View style={{flexDirection:'row',justifyContent:'flex-start', }}>
               
               
               <View style={{width:'20%' ,}}>
                <SvgUri
                          style={{alignSelf:'center',}}
                          source={type== 0 ?  require('../images/gLive_Icons/CreateaStore/owner_white_icon.svg'): require('../images/gLive_Icons/CreateaStore/owner_icon.svg')}
                        />
                </View>

                <View style={{width:'50%'}}>

                        
                                          <Text style={{fontSize:18,fontWeight:'500', color:type == 0? 'white':'#162741'}}>Owner</Text>


                </View>



                  </View>

                  <View style={{flexDirection:'row',marginTop:5, }}>

                    <View style={{width:'20%'}}>
                      <Text></Text>
                      </View>


                      <View style={{width:'78%'}}>
                          <Text style={{color:type==0? 'white':'#565C66', fontSize:12, fontWeight:'400'}}>Owner has all privileges of the admin role plus editing member rights and organization info.</Text>
                        </View>
                    </View>
    

                </TouchableOpacity>



                <TouchableOpacity 
                onPress={()=> {settype(1)}}
                style={{borderWidth:1,backgroundColor:type==1? '#E91327':'white', padding:10,borderRadius:5,borderColor:'#E3E3EB', marginTop:10}}>

                <View style={{flexDirection:'row',justifyContent:'flex-start', }}>
               
               
               <View style={{width:'20%' ,}}>
                <SvgUri
                          style={{alignSelf:'center',}}
                          source={type== 1?  require('../images/gLive_Icons/CreateaStore/admin_white_icon.svg'): require('../images/gLive_Icons/CreateaStore/admin_icon.svg')}
                        />
                </View>

                <View style={{width:'50%'}}>

                        
                                          <Text style={{fontSize:18,fontWeight:'500', color:type == 1? 'white':'#162741'}}>Admin</Text>


                </View>



                  </View>

                  <View style={{flexDirection:'row',marginTop:5, }}>

                    <View style={{width:'20%'}}>
                      <Text></Text>
                      </View>


                      <View style={{width:'78%'}}>
                          <Text   style={{color:type==1? 'white':'#565C66', fontSize:12, fontWeight:'400'}}>Admin members can add products, livestream, edit store info, add or edit authorized members</Text>
                        </View>
                    </View>
    

                </TouchableOpacity>

              <Text style={{color:'#162741',marginTop:20, fontSize:18,fontWeight:'500', }}>Invite Member</Text>
              <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Username</Text>

              <TextInput
                placeholder='lisa_johnson123'
                mode='outlined'
                style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                />



              <Text style={{color:'#162741',marginTop:20, fontSize:16,fontWeight:'400', }}>Email</Text>

              <TextInput
                placeholder='lisa_johnson123'
                mode='outlined'
                style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}

                />
  <View style={{paddingVertical:2,flexDirection:'row', paddingHorizontal:1,marginTop:20, justifyContent:'space-between',width:'100%'}}>

{Invitation == 0?

<View>
  </View>
:
  <View style={{flexDirection:'row' , justifyContent:'center'}}>
    <MaterialCommunityIcons  name='check' size={25} style={{alignSelf:'center'}}/>
<Text style={{color:'#162741', fontSize:16,marginLeft:5,alignSelf:'center', fontWeight:'400'}}> 
Invitation sent
</Text>
</View>

}
<TouchableOpacity onPress={()=>{ setInvitation(1)}} style={{marginTop:10, backgroundColor:Invitation==0? '#162741':'#EDEDED',borderRadius:5, justifyContent:'center',paddingVertical:10, width:'30%'}}>
  <Text style={{color:Invitation==0?'white':'#16274154',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Send Invite</Text>
</TouchableOpacity>

</View>






          </ScrollView>

        </View>

}

      {/* </Pages> */}


    <View style={{width:deviceWidth, backgroundColor:'white',flexDirection:'row',justifyContent:'center', height:20}}>
      <TouchableOpacity 
      onPress={()=> {setindex(0)}}
      style={{borderRadius:400/2,height:12,width:12, backgroundColor:index == 0 ?'red': '#e3e3eb'}}>

      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=> {setindex(1)}}
      style={{borderRadius:400/2,height:12,width:12,marginLeft:10, backgroundColor:index == 1 ? 'red': '#e3e3eb'}}>

      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=> {setindex(2)}}
      style={{borderRadius:400/2,height:12,width:12,marginLeft:10, backgroundColor:index == 2 ? 'red':  '#e3e3eb'}}>

      </TouchableOpacity>

      </View>




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



        <View style={{paddingVertical:10,flexDirection:'row', paddingHorizontal:20,marginTop:10, justifyContent:'space-between',width:'100%'}}>
{index == 0?
<TouchableOpacity onPress={()=> { navigation.goBack()}} style={{marginTop:10, borderColor:'#E3E3EB',borderWidth:1,borderRadius:5, justifyContent:'center',paddingVertical:10,   width:'30%'}}>
  <Text style={{color:'#162741',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Cancel</Text>
</TouchableOpacity>

: index ==  1?
<TouchableOpacity onPress={()=> {setindex(0)}} style={{marginTop:10, borderColor:'#E3E3EB',borderWidth:1,borderRadius:5, justifyContent:'center',paddingVertical:10,   width:'30%'}}>
  <Text style={{color:'#162741',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Back</Text>
</TouchableOpacity>
: 
<TouchableOpacity onPress={()=> { setindex(1)}} style={{marginTop:10, borderColor:'#E3E3EB',borderWidth:1,borderRadius:5, justifyContent:'center',paddingVertical:10,   width:'30%'}}>
  <Text style={{color:'#162741',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Back</Text>
</TouchableOpacity>
}


<TouchableOpacity onPress={()=> { 

  if(index == 0){
    
    setindex(1)
  }else if(index == 1){
    setindex(2)
  }else if(index == 2){
    setindex(0)
  }

  // setEditmember(false)
}
  } style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center',paddingVertical:10, width:'30%'}}>
  <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Next</Text>
</TouchableOpacity>

</View>


          
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

  appbar:{
    width:deviceWidth,
    justifyContent:'center',
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

export default Createastore;