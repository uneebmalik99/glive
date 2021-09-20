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
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import DocumentPicker from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import Appcolors from '../AppColors/Appcolors';

const img = require('../images/nutfinal.png');



const PaymentMethods = ({ navigation }) => {



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
const [upcoming , setupcoming] = useState([
  {
    id:1,
    date:'11-10-2021',
    time:'12:00',
    img : require('../images/homepage-laptop-floating-mockup.png'),

  },
  {
    id:2,
    date:'03-04-2022',
    time:'05:00',
    img : require('../images/homepage-laptop-floating-mockup.png'),

  },
  {
    id:3,
    date:'11-03-2020',
    time:'02:00',
    img : require('../images/homepage-laptop-floating-mockup.png'),

  }
])

const [Products, setProducts] = useState([
    {
      id: 1,
      category : 'Cosmetics',
      title:'EPAuto 12V DC Portable Air Compressor Pump, Digital Tire Inflator',
    },
    {
        id: 2,
        category : 'Coffee',
        title:'iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones'


       
    },
    {
        id: 3,
        title:'ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad, Windows 10 Home in S Mode',
        category : 'Cool Stuff'
    }
      
  ]
)



const selectFile = async () => {
  // Opening Document Picker to select one file
  try {
    const res = await DocumentPicker.pick({
      // Provide which type of file you want user to pick
      type: [DocumentPicker.types.images],
      // There can me more options as well
      // DocumentPicker.types.allFiles
      // DocumentPicker.types.images
      // DocumentPicker.types.plainText
      // DocumentPicker.types.audio
      // DocumentPicker.types.pdf
    });
    // Printing the log realted to the file
    console.log('res : ' + JSON.stringify(res));
    // Setting the state to show single file attributes
    // setSingleFile(res);
  } catch (err) {
    // setSingleFile(null);
    // Handling any exception (If any)
    if (DocumentPicker.isCancel(err)) {
      // If user canceled the document selection
      alert('Canceled');
    } else {
      // For Unknown Error
      alert('Unknown Error: ' + JSON.stringify(err));
      throw err;
    }
  }
}

const remove = (id) =>{
  const filteredData = upcoming.filter(item =>  item.id !== id);
  setupcoming(filteredData)
  showSnackbarMessage();
}

const renderlist = ({ item, index }) => {
  let title = item.title;
  if(title.length <= 85 ){
    title=item.title
  }else{
   title= title.substring(0,85)+'...'
  }
       
  return(
      <TouchableOpacity 
      onPress={()=>{
          navigation.navigate('LivePresentation')
      }}
      style={{flex:0.5,borderColor:'grey',marginTop:5, marginHorizontal:2, borderWidth:0.3, borderRadius:8 }}>

<ImageBackground 
      source={require('../images/photo-1505740420928-5e560c06d30e.jpeg')} 


// source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                      imageStyle={{ borderRadius: 8,  }} style={{ height: 200, width: 190, }} resizeMethod='resize'resizeMode='cover'
                  >
<View>
<TouchableOpacity style={{backgroundColor:'purple' , marginRight:10,paddingHorizontal:8,paddingVertical:3,borderBottomRightRadius:8,borderBottomLeftRadius:8, alignSelf:'flex-end'}}>
<Text style={{color:'white'}}>
Live
</Text>
</TouchableOpacity>
</View>
{/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
<Text>ukg</Text>
</View> */}
 
<Text style={{color:'white', flex: 1,
   justifyContent:'center',
    
    bottom: 0,}}>

</Text>

<LinearGradient
                colors={['#D0D3D4', 'white' ]}
                
                locations={[0.1 ,0.9 ]}
                style={{alignItems: 'center',
                justifyContent: 'flex-start',
                opacity:0.95,
                borderBottomLeftRadius:8,
                borderBottomRightRadius:8,
                borderTopLeftRadius:8,
                borderTopRightRadius:8,
                width: '100%',}}
              >
                  <View style={{flexDirection:'row',alignItems:'center', width:'88%',paddingTop:6,justifyContent:'space-between' }}>
                      
                      <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                      <Text style={{fontSize:14, fontWeight:'400', color:'black'}} >{title}
                 
                      </Text>
                      
                      
                      </View>
                    
                  </View> 

      
                {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
              </LinearGradient>


                      </ImageBackground>


      </TouchableOpacity>

  );



}
const showSnackbarMessage = () => {
  setTimeout(() => {
    Snackbar.show({
      backgroundColor: Appcolors.toolbarColor,
      title: 'Event Removed',
    });
  }, 100);
};





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
  <Text style={{alignSelf: 'center', textAlignVertical: 'center', fontSize:18, fontWeight:'600'}}>Account</Text>

  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>


  </View>
  
  
  
  </View>

  
  
           </View>
    
        

    

      <View style={{paddingHorizontal:20 , width:'100%'}} 
      >
<ScrollView>


         <Text style={{fontSize:16, fontWeight:'bold'}}>Orders</Text>

         <View style={{borderBottomWidth:0.25,borderTopWidth:0.25, marginTop:10, borderLeftWidth:0.25,borderRightWidth:0.25,borderColor:'grey', justifyContent:'space-between', flexDirection:'row', padding:12,}}>
           <Text style={{color:'grey', alignSelf:'center'}}>Your orders</Text>
           <TouchableOpacity 
onPress={()=> {    }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
         </View>
         <View style={{borderBottomWidth:0.25,borderLeftWidth:0.25,borderRightWidth:0.25, borderColor:'grey',  justifyContent:'space-between', flexDirection:'row', padding:12,}}>
           <Text style={{color:'grey', alignSelf:'center'}}>Your Subscribe & Save</Text>
           <TouchableOpacity 
onPress={()=> {   }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
         </View>
         <View style={{borderBottomWidth:0.25,borderLeftWidth:0.25,borderRightWidth:0.25,  borderColor:'grey',  justifyContent:'space-between', flexDirection:'row', padding:12,}}>
           <Text style={{color:'grey', alignSelf:'center'}}>Services requests</Text>
           <TouchableOpacity 
onPress={()=> {    }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
         </View>
       





         <Text style={{fontSize:16,marginTop:20, fontWeight:'bold'}}>Accounts</Text>

         <View style={{borderBottomWidth:0.25,borderTopWidth:0.25, marginTop:10, borderLeftWidth:0.25,borderRightWidth:0.25,borderColor:'grey', justifyContent:'space-between', flexDirection:'row', padding:12,}}>
           <Text style={{color:'grey', alignSelf:'center'}}>Login & security</Text>
           <TouchableOpacity 
onPress={()=> {   }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
         </View>
         <View style={{borderBottomWidth:0.25,borderLeftWidth:0.25,borderRightWidth:0.25, borderColor:'grey',  justifyContent:'space-between', flexDirection:'row', padding:12,}}>
           <Text style={{color:'grey', alignSelf:'center'}}>Your Addresses</Text>
           <TouchableOpacity 
onPress={()=> {    }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
         </View>
        





         <Text style={{fontSize:16,marginTop:20, fontWeight:'bold'}}>Payments</Text>

<View style={{borderBottomWidth:0.25,borderTopWidth:0.25, marginTop:10, borderLeftWidth:0.25,borderRightWidth:0.25,borderColor:'grey', justifyContent:'space-between', flexDirection:'row', padding:12,}}>
  <Text style={{color:'grey', alignSelf:'center'}}>Your Payments</Text>
  <TouchableOpacity 
onPress={()=> {   }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
</View>
<View style={{borderBottomWidth:0.25,borderLeftWidth:0.25,borderRightWidth:0.25, borderColor:'grey',  justifyContent:'space-between', flexDirection:'row', padding:12,}}>
  <Text style={{color:'grey', alignSelf:'center'}}>Manage gift card balance</Text>
  <TouchableOpacity 
onPress={()=> {    }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
</View>
<View style={{borderBottomWidth:0.25,borderLeftWidth:0.25,borderRightWidth:0.25,  borderColor:'grey',  justifyContent:'space-between', flexDirection:'row', padding:12,}}>
  <Text style={{color:'grey', alignSelf:'center'}}>Shop with Points</Text>
  <TouchableOpacity 
onPress={()=> {    }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>

</View>

<View style={{borderBottomWidth:0.25,borderLeftWidth:0.25,borderRightWidth:0.25,  borderColor:'grey',  justifyContent:'space-between', flexDirection:'row', padding:12,}}>
  <Text style={{color:'grey', alignSelf:'center'}}>Your credit cards</Text>
  <TouchableOpacity 
onPress={()=> {    }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>

</View>





<Text style={{fontSize:16,marginTop:20, fontWeight:'bold'}}>Message center</Text>

<View style={{borderBottomWidth:0.25,borderTopWidth:0.25, marginTop:10, borderLeftWidth:0.25,borderRightWidth:0.25,borderColor:'grey', justifyContent:'space-between', flexDirection:'row', padding:12,}}>
  <Text style={{color:'grey', alignSelf:'center'}}>Your Messages</Text>
  <TouchableOpacity 
onPress={()=> {   }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
</View>
<View style={{borderBottomWidth:0.25,borderLeftWidth:0.25,borderRightWidth:0.25, borderColor:'grey',  justifyContent:'space-between', flexDirection:'row', padding:12,}}>
  <Text style={{color:'grey', alignSelf:'center'}}>Deals Notifications</Text>
  <TouchableOpacity 
onPress={()=> {    }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
</TouchableOpacity>
</View>


<View style={{height:120}}></View>



</ScrollView>





      </View>















          
        </SafeAreaView>
    );
}

export default PaymentMethods;