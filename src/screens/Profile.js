import React,{useState, useEffect} from 'react';
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
  Modal,
    SafeAreaView,
    Platform
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import ModalDropdown from 'react-native-modal-dropdown';

 import { Button, Menu, Divider, Provider } from 'react-native-paper';
 import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
 
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SliderBox } from "react-native-image-slider-box";
import Appcolors from '../AppColors/Appcolors.js';
import App from '../../App.js';
import Icon from 'react-native-vector-icons'
import SvgUri from 'react-native-svg-uri'; // SVG Package

import RNPopover from 'react-native-popover-menu';

const copy = <Icon family={'FontAwesome'} name={'copy'} color={'#000000'} size={30} />
const paste = <Icon family={'FontAwesome'} name={'paste'} color={'#000000'} size={30} />
const share = <Icon family={'FontAwesome'} name={'share'} color={'#000000'} size={30} />

const  images1= [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]

const Profile = ({route, navigation }) => {

  const [Productsvisible,setProductsvisible] = useState(false)
  const [login , setlogin] =useState(true)
  const [role, setrole] = useState(0)
const [plus, setPlus] = useState(false);
const [search , setsearch]= useState(true)
const openMenu = () => setPlus(true);

const closeMenu = () => setPlus(false);


const [sh, setsh]=useState(true)
  const items = [
    { id: 'edit', label: 'Edit' },
    { id: 'delete', label: 'Delete' },
  ];



  const [category , setcategory] = useState([
    {
      id:1,
      CategoryName:'Art & Crafts',
      active : 0

    },
    {
      id:2,

      CategoryName:'Automotive',
      active : 0


    },
    {
      id:3,
      CategoryName:'Art & Crafts',
      active : 0


    },
    {
      id:4,

      CategoryName:'Automotive',
      active : 0


    },
    {
      id:5,

      CategoryName:'Art & Crafts',
      active : 0


    },
    {
      id:6,

      CategoryName:'Automotive',
      active : 0


    },
  ])

  const renderLivenow = ({ item, index }) => {  
    return(
      <View>

    
      <TouchableOpacity 
      onPress={()=> {navigation.navigate('Login')}}
      style={{height:deviceHeight*0.33, width:'100%', flexDirection:'column', marginTop:15,}}>

      <View style={{paddingVertical:7,width:'20%', flexDirection:'row'}}>
      <ImageBackground  
      style={{width: 30, height: 30, borderRadius: 400/ 2, justifyContent:'flex-end'}} 

      imageStyle={{borderRadius:50,}} source={require('../images/1.5.png')}>
      <View style={{backgroundColor:'red', alignSelf:'flex-end', width:'20%',justifyContent:'center', borderRadius:5,color:'white', padding:5}}>

      </View>
      </ImageBackground>
      <Text style={{marginLeft:10,color:'#616B7B',alignSelf:'center', fontWeight:'500', fontSize:16}}>Nike</Text>
      {/* <Image  style={{height:'100%'}} source={require('../images/1.1.png')}/> */}

      </View>

      <View style={{height:'60%', flexDirection:'row'}}>
      <ImageBackground  style={{height:'100%', width:'100%'}} imageStyle={{borderRadius:5,}} source={require('../images/1.5.png')}>
      <View style={{backgroundColor:'red',alignSelf:'flex-end', width:'19%',justifyContent:'center', fontWeight:'400', margin:15, borderRadius:5,color:'white', padding:5}}>

      <Text style={{fontWeight:'400',fontSize:12, alignSelf:'center', color:'white', }}>Live Now</Text>
      </View>
      </ImageBackground>

      </View>

      <View style={{paddingVertical:5, flexDirection:'row'}}>
      <Text style={{fontWeight:'500', }}>Nike Flyknit spot with Kobe Bryant, Richard Sherman, Allyson Eaton & Mo F...</Text>


      </View>

      <View style={{paddingVertical:5, justifyContent:'space-between', flexDirection:'row'}}>
      <Text style={{color:'#616B7B'}}>English (U.S)</Text>
      <Text style={{color:'#616B7B'}}>3.1K watching</Text>
      

      </View>
      



      </TouchableOpacity>
      <TouchableOpacity style={{width:'100%'}}>
      <View style={{paddingHorizontal:20,marginTop:15, flexDirection:'row', justifyContent:'space-between'}}>
          
          <View style={{flexDirection:'row', marginBottom:5}}>
           {Platform.OS == 'ios'?
           <SvgUri
                          style={{alignSelf:'center',}}
                          source={require('../images/gLive_Icons/Discovery/products_white_icon.svg')}
                        />
                         :
    <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Discovery/products_white_icon.png')}

          />
        }
                                      <Text style={{marginLeft:10,alignSelf:'center', fontSize:16, fontWeight:'500'}}>Products</Text>
            </View>

            {Productsvisible == false ?
            
          <View>
          <Ionicons  onPress={()=> setProductsvisible(true)}  name='chevron-down-sharp' color='#162741' size={25}/>


            </View>
          :
          <Ionicons  onPress={()=> setProductsvisible(false)} name='chevron-up-sharp' color='#162741' size={25}/>
        }
         


        </View>


      </TouchableOpacity>

      {Productsvisible == true ?
      <View style={{height:deviceHeight*0.28, }}>
         <FlatList
         contentInsetAdjustmentBehavior="automatic"
         data={category}
         horizontal={true}
         contentContainerStyle={{marginTop:0, alignSelf:'center', paddingHorizontal:0,  }}
         renderItem={renderProducts}
         keyExtractor={(item,id) => id.toString()}
         /> 
            
         </View>
         :
         null
            
          }


      </View>
    );
  
  
  
  }
  
  const renderProducts = ({ item, index }) => {  
    return(
     <TouchableOpacity style={{borderColor:'#E3E3EB',borderRadius:5, borderWidth:1,marginLeft:20, width:deviceWidth*0.45, padding:5,}}>

        <Image style={{width:'100%',height:deviceHeight*0.17 }} resizeMode='cover' resizeMethod='resize' source={require('../images/nikeshoe.png')}/>

        <View>
          <Text style={{marginTop:7,fontSize:12, color:'#162741'}}>Nike ZoomX Vaporfly NEXT% 2...</Text>
          <Text style={{marginTop:5,color:'#616B7B'}}>Men’s Road Racing Shoes</Text>

          <Text style={{color:'#162741',marginTop:5,fontWeight:'500', fontSize:12}}>£234.95</Text>
        </View>

     </TouchableOpacity>
  
    );
  
  
  
  }
  
  // useEffect(() => {

    
  //  if(AppConstance.LOGIN == 1){
  //    setlogin(true)
  //    if(AppConstance.ROLE == 1){
  //     setrole(1)

  //    }
  //    else if (AppConstance.ROLE == 0 ){
  //      setrole(0)
  //    }else{
  //      setrole(3)
  //    }

  //  }else{
  //    setlogin(0)
  //    setrole(3)
  //  }
   
    
  //   }, [])


    return (
    <Provider>

      <SafeAreaView style={{height:deviceHeight,backgroundColor:'white', width:deviceWidth}}> 
      <StatusBar barStyle='default'   />
  

   

      <Modal
transparent={true}
animationType={'fade'}
visible={false}
onRequestClose={() => {

  console.log('close modal');
}}>
<View
  style={{
  
    justifyContent: 'center',
    paddingVertical: 10,
    height:deviceHeight,
    backgroundColor:'white',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
  <View
    style={{
      width: '100%',
      height:'100%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
      paddingVertical:30,
    }}>


<Appbar style={styles.appbar}>

<MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>

    <View style={{borderColor:'#E3E3EB',borderRadius:30,width:'80%',paddingHorizontal:20, justifyContent:'center', height:'65%', borderWidth:1,}}>

<Text style={{fontWeight:'400', fontSize:16}}>Enter keyword</Text>

</View>

<View>

<Text></Text>
</View>
  </Appbar>
 <View style={{borderBottomWidth:0.3,paddingHorizontal:15, justifyContent:'space-between', flexDirection:'row', paddingVertical:7, borderColor:'#D0D3D4'}}>

  <TouchableOpacity style={{alignSelf:'center'}} onPress={()=> {setsearch(false)}}>

 <MaterialIcons  style={{alignSelf:'center'}} name='arrow-back'  size={25} color='#162741'/>
</TouchableOpacity>
    <View>
   <Text style={{alignSelf:'center',fontSize:15, fontWeight:'500', paddingVertical:10,}}>Select time</Text>
    </View>

    <View>
   <Text style={{alignSelf:'center',fontSize:15, fontWeight:'500', paddingVertical:10,}}></Text>
    </View>
 </View>

 


 <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 30 minutes</Text>

   </View>

   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 1 hour</Text>

   </View>
   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 2 hours</Text>

   </View>
   <View style={{width:'100%', borderBottomWidth:1,borderColor:'#D0D0DE99',paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 4 hours</Text>

   </View>

   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 8 hours</Text>

   </View>


   <TouchableOpacity 
   onPress={()=> {settimemodal2(true);settimemodal(false)}}
   style={{width:'100%',borderBottomRightRadius:5,borderBottomLeftRadius:5, backgroundColor:'#EDEDF6',paddingVertical:15, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Custom</Text>

   </TouchableOpacity>


   
 
  </View>

</View>
      </Modal>

        <Appbar style={styles.appbar}>
  
        <View 
            style={{alignContent:"center",flexDirection:'row',justifyContent:'space-between',width:'100%', alignItems:"center"}}   >

           <View>

             </View>

             <View>

            </View>

      <View style={{flexDirection:'row', }}>
      
      {login == true?
            <TouchableOpacity
            style={{marginRight:15,}}
              onPress={()=> {
               navigation.navigate('Setting')
              }}
              >
               
              <Image style={{width:25, height:25}} source={require('../images/Combined-Shape.png')}/>              
              </TouchableOpacity>
              : null
              
            }
          
              
       {  role == 1 ?   
       
        <Menu
          visible={plus}
          onDismiss={closeMenu}
          style={{marginTop:30 ,}}
          anchor={    <TouchableOpacity
            // style={{marginRight:15,}}

onPress={()=> {
openMenu()              }}
>

<AntDesign   name='pluscircleo' size={25} color={'#616B7B'} />

</TouchableOpacity>}
          
          >
          <Menu.Item  style={{backgroundColor:'red' , }} onPress={() => {setPlus(false); navigation.navigate('schedulealivestream')}} title="Schedule a livestream" />
          <Menu.Item onPress={() => {setPlus(false); navigation.navigate('Golive') }} title="Go Live" />
          <Divider />
          <Menu.Item onPress={() => {setPlus(false); navigation.navigate('Uploadavideo')}} title="Upload a video" />
        </Menu>
        :

        role == 0 ?     
        <Menu
          visible={plus}
          onDismiss={closeMenu}
          style={{marginTop:30,}}
          anchor={    <TouchableOpacity
            // style={{marginRight:15,}}

onPress={()=> {
openMenu()              }}
>

<AntDesign   name='pluscircleo' size={25} color={'#616B7B'} />

</TouchableOpacity>}
          
          >
          <Menu.Item  style={{margin:6,borderRadius:5, }} onPress={() => {setPlus(false); navigation.navigate('schedulealivestream')}} title="Schedule a livestream" />
          <Divider />
          <Menu.Item style={{margin:6,borderRadius:5, }} onPress={() => {setPlus(false); navigation.navigate('Golive') }} title="Go Live" />
          <Divider />
          <Menu.Item style={{margin:6,borderRadius:5, }} onPress={() => {setPlus(false); navigation.navigate('Uploadavideo')}} title="Upload a video" />
        </Menu>

        :
        null

        }
                </View>
              
            </View>
  
  
        <View style={{alignSelf:'center', }}>
            
  
        </View>
  
        </Appbar>


        <View style={styles.body}>
       
       
       <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between', paddingHorizontal:30,}}>

        <View style={{flexDirection:'row'}}> 
         <Image style={{width:70, height:70}} source={require('../images/profilepic.png')}/>
          <Text style={{color:'#162741',alignSelf:'center', fontWeight:'500', fontSize:18, marginLeft:10,}}>Lisa Johnson</Text>
        </View>

        <TouchableOpacity 
           onPress={()=> {navigation.navigate('EditProfile')}}

        style={{alignSelf:'center'}}>
          <Text style={{fontWeight:'600',fontSize:18, color:'#1C54DB'}}>Edit</Text>

        </TouchableOpacity>
         </View>

            

               <Text style={{color:'#565C66',paddingHorizontal:30,marginTop:20,  fontWeight:'400'}}>Whoever said money can't buy happiness simply didn't know where to go shopping.</Text>


               <TouchableOpacity 
   onPress={()=> {navigation.navigate('ProfileSecond')}}
   style={{borderColor:'#E3E3EB',marginTop:30, flexDirection:'row',justifyContent:'space-between', borderRadius:5,borderBottomWidth:1,borderTopWidth:1, height:60,paddingHorizontal:15, width:'100%'}}>

    <View style={{ width:'50%', flexDirection:'row', }}>
    <View style={{width:'20%',justifyContent:'center', }}>
    {Platform.OS == 'ios'?
    <SvgUri
      style={{alignSelf:'center'}}
      source={require('../images/gLive_Icons/Settings/account_settings_icon.svg')}
    />
     :
    <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Settings/account_settings_icon.png')}

          />
        }
    </View>
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>Profile</Text>
    </View>
    </View>


    <View style={{justifyContent:'center'}}>
      <MaterialIcons name='navigate-next' color='#616B7B' style={{alignSelf:'center'}} size={25}/>
    </View>
   

   </TouchableOpacity>
      


          </View>
  
  
        </SafeAreaView>
        </Provider>
    );
}

export default Profile;


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
  height:'91%',
  flex:1,
  paddingVertical:10,
  paddingHorizontal:0,
 
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });