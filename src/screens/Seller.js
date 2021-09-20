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



const Seller = ({ navigation }) => {



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
          navigation.navigate('Product',{'item':item})
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
                      
                      <View style={{flexDirection:'column',height:70, justifyContent:'space-between'}}>
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
      title: 'Event Joined',
    });
  }, 100);
};

const renderlist2 = ({ item, index }) => {
        
       
  return(
      <TouchableOpacity 
      onPress={()=>{ 
          navigation.navigate('Events')
      }}
      style={{borderColor:'grey',marginTop:8,flexDirection:'row', marginHorizontal:2, borderWidth:0.3, borderRadius:8 }}>

<View style={{flexDirection:'row',marginHorizontal:1, width:'20%'}} >
<Image source={item.img} style={{height:40,alignSelf:'center', width:60}}/>
</View>

<View style={{width:'60%',paddingVertical:5,justifyContent:'space-between', paddingHorizontal:2,}}>
<Text style={{paddingVertical:2,fontWeight:'600'}}>{item.date}  { item.time}</Text>

<Text style={{paddingVertical:2,}}>DescriptionDescriptioDescriptionDescriptionDescription</Text>
</View>
<TouchableOpacity 
onPress={()=> {   remove(item.id) }}
style={{width:'20%',justifyContent:'center',borderTopRightRadius:8,borderBottomRightRadius:8, backgroundColor:'green'}}>
  <Text style={{alignSelf:'center', color:'white'}}>Join</Text>
</TouchableOpacity>

      </TouchableOpacity>

  );



}



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
  <Text style={{alignSelf: 'center', textAlignVertical: 'center', fontSize:18, fontWeight:'600'}}>Henrik</Text>

  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>

  <Rating
          style={{alignSelf:'center',marginRight:40 }}
              imageSize={18}
              />
  </View>
  
  
  
  </View>

  
  
           </View>
    
        

    
<ScrollView >

      <View style={{paddingHorizontal:20 , width:'100%'}} 
      >

        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
        <View  style={{width:'100%',}}>
        
          </View>
        <View style={{width:'5%'}}>

        </View>
       
        </View>
        <TouchableOpacity 
        onPress={()=> selectFile() }
        style={{width:'100%',marginTop:8, height:200,justifyContent:'center',borderRadius:10, backgroundColor:'grey'}}>
        <Image
              style={{width: '100%', height: '100%',borderRadius:10, }}
              source={img}

              // source={require('../images/download.jpeg')} 
              
              />
        
        {/* <Ionicons name='ios-person-outline'  style={{alignSelf:'center'}} size={50}  color='white'/> */}

        </TouchableOpacity>
        <Text style={{marginTop:15, }}>Dummy data Dummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy data</Text>



            <View style={{marginTop:10, borderRadius:10, paddingVertical:5, borderColor:'grey'}}>
                <Text style={{fontWeight:'600', fontSize:18}}>Products</Text>
                <FlatList
                        contentContainerStyle={{paddingBottom: 15, paddingHorizontal:0,}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={Products}
                     horizontal={true}
                    renderItem={renderlist}
                    keyExtractor={(item,index) => index.toString()}
                
                 />
            </View>


            <View style={{marginTop:10, borderRadius:10, borderWidth:0, paddingVertical:5, borderColor:'grey'}}>
                <Text style={{fontWeight:'600', fontSize:18}}>Upcoming</Text>
                <FlatList
                        contentContainerStyle={{paddingBottom: 75, paddingHorizontal:0,}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={upcoming}
                    renderItem={renderlist2}
                    keyExtractor={(item,index) => index.toString()}
                   

                    

                 />
            </View>

      </View>









      </ScrollView>





      <View
      style={{
        flex: 1,
        
        flexDirection: 'column',
      }}>
 
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#D0D3D4',
          border: 2,
          radius: 3,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: {
            height: 3,
            width: 3,
          },
          x: 0,
          y: 0,
          style: {marginVertical: 5},
          bottom: 0,
          width: '100%',
          height: 55,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 10,
        }}>
       
       
      
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            
            alignSelf:'center',
            justifyContent: 'center',
          
          }}>
          <TouchableOpacity
          style={{alignSelf:'center'}}
            onPress={() => {
              navigation.navigate('Category')
            }}>
           {/* <Image
              style={{width: 20, height: 20, }}
              source={require('../images/Menu_Wallet_Inactive.png')}

             
              onPress={() => {
    
    navigation.navigate('Categories')
    }}></Image> */}
           
            {/* <Iconn
              name="ios-wallet-outline"
              size={20}
              color="#4C749C"

              style={{marginHorizontal: 16,}}
              containerStyle={{marginHorizontal: 16}}
            /> */}
                 <Text style={{marginTop:4, alignSelf:'center', fontWeight:'500',  fontSize:16, color:'#4C749C', alignItems: 'center'}}>
            Book appointment
          </Text>
          </TouchableOpacity>
     
        </View>

        {/* </View> */}
      </View>
    </View>


          
        </SafeAreaView>
    );
}

export default Seller;