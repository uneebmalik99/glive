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

const Discover = ({route, navigation }) => {

  const [Productsvisible,setProductsvisible] = useState(false)
  const [login , setlogin] =useState(true)
  const [role, setrole] = useState(0)
const [plus, setPlus] = useState(false);
const [search , setsearch]= useState(false)
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
      style={{height:Platform.OS == 'ios'? deviceHeight*0.33: deviceHeight*0.36, width:'100%', flexDirection:'column', marginTop:Platform.OS=='ios'?15:30,}}>

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
      <TouchableOpacity style={{width:'100%', marginTop:5,}}>
      <View style={{paddingHorizontal:20,marginTop:Platform.OS=='ios' ?15:30,flexDirection:'row', justifyContent:'space-between'}}>
          
          <View style={{flexDirection:'row',}}>
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
          <Ionicons  onPress={()=> setProductsvisible(true)} style={{alignSelf:'center'}} name='chevron-down-sharp' color='#162741' size={25}/>


            </View>
          :
          <Ionicons  onPress={()=> setProductsvisible(false)} style={{alignSelf:'center'}} name='chevron-up-sharp' color='#162741' size={25}/>
        }
         


        </View>


      </TouchableOpacity>

      {Productsvisible == true ?
      <View style={{height:Platform.OS=='ios'? deviceHeight*0.28:deviceHeight*0.35, }}>
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
  
  useEffect(() => {

    
   if(AppConstance.LOGIN == 1){
     setlogin(true)
     if(AppConstance.ROLE == 1){
      setrole(1)

     }
     else if (AppConstance.ROLE == 0 ){
       setrole(0)
     }else if(AppConstance.ROLE == 2){
      setrole(2)

     }
     else{
       setrole(3)
     }

   }else{
     setlogin(0)
     setrole(3)
   }
   
    
    }, [])


    return (
    <Provider>

      <SafeAreaView style={{height:deviceHeight,backgroundColor:'white', width:deviceWidth}}> 
      <StatusBar barStyle='default'   />
  

   

      <Modal
transparent={true}
animationType={'fade'}
visible={search}
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

<MaterialIcons  onPress={()=> {setsearch(false)}} name='arrow-back'  size={25} color='#616B7B'/>

    <View style={{borderColor:'#E3E3EB',borderRadius:30,width:'80%',paddingHorizontal:20, justifyContent:'center', height:'65%', borderWidth:1,}}>

<Text style={{fontWeight:'400', fontSize:16}}>Enter keyword</Text>

</View>

<View>

<Text></Text>
</View>
  </Appbar>
 

 


   
 
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
               
              <Image style={{width:25, height:25}} resizeMethod='auto' resizeMode='contain' source={require('../images/Combined-Shape.png')}/>              
              </TouchableOpacity>
              : null
              
            }
              <TouchableOpacity
              style={{marginRight:15,}}
              onPress={()=> {
              setsearch(true)
              }}
              >
               
            <AntDesign   name='search1' size={25} color={'#616B7B'} />
              
              </TouchableOpacity>
              
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
          <Menu.Item   onPress={() => {setPlus(false); navigation.navigate('schedulealivestream')}} title="Schedule a livestream" >
            </Menu.Item>
          <Menu.Item onPress={() => {setPlus(false); navigation.navigate('Golive') }} title="Go Live" />
          <Divider />
          <Menu.Item onPress={() => {setPlus(false); navigation.navigate('Uploadavideo')}} title="Upload a video" />
        </Menu>
        :
         role == 2 ?   
       
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
           <Menu.Item   onPress={() => {setPlus(false); navigation.navigate('schedulealivestream')}} title="Schedule a livestream" >
             </Menu.Item>
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
          <Menu.Item  style={{margin:6,borderRadius:5, }} onPress={() => {setPlus(false); navigation.navigate('Createastore')}} title="Create a store" />
          <Divider />
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
       
       

              <View style={{flexDirection:'row',marginTop:15, justifyContent:'space-between'}}>
              <Text style={{fontWeight:'600',alignSelf:'center',fontSize:18}}>Live Now</Text>
             {Platform.OS == 'ios'?
              <SvgUri
                          style={{alignSelf:'center',}}
                          source={require('../images/gLive_Icons/Discovery/categories_icon.svg')}
                        />
                         :
                        <Image
                                                        style={{alignSelf:'center',}}
                    
                                                        source={require('../images/gLive_Icons/Discovery/categories_icon.png')}
                    
                              />
                            }
            </View>

              <FlatList
              contentInsetAdjustmentBehavior="automatic"
              data={category}
              contentContainerStyle={{alignSelf:'center',paddingBottom:80, paddingHorizontal:2,  }}
              renderItem={renderLivenow}
              keyExtractor={(item,id) => id.toString()}
              /> 


            

               


     
      


          </View>
  
  
        </SafeAreaView>
        </Provider>
    );
}

export default Discover;


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
  paddingHorizontal:20,
 
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });