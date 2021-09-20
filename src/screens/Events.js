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


const img = require('../images/nutfinal.png');



const Events = ({ navigation }) => {

  const [ images , setimages] =useState([


    
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?girl",
,
  
  
    ])

    const [Participants, setParticipants] = useState([
    
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
          },
          {
            id: 2,
            category : 'Coffee'
    
           
        },
        {
            id: 3,
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

const showSnackbarMessage = () => {
  setTimeout(() => {
    Snackbar.show({
      backgroundColor: Appcolors.toolbarColor,
      title: 'Event Removed',
    });
  }, 100);
};


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

const renderlist2 = ({ item, index }) => {
        
       
  return(
 

<Image source={require('../images/download.jpeg')} style={{height:40,alignSelf:'center',marginLeft:-20,  borderRadius:50, width:40}}/>



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
  <Text style={{alignSelf: 'center', textAlignVertical: 'center', fontSize:18, fontWeight:'600'}}>Events</Text>

  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>


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

        <View style={{marginTop:15,}}>
          <Text style={{fontWeight:'bold',color:'#517399'}}>GIG name</Text>
          <Text>Website plugin</Text>

        </View>

        <View style={{marginTop:15,}}>
          <Text style={{fontWeight:'bold',color:'#517399'}}>Wehn?</Text>
          <Text>Wednesday, May 12 2021, 03:00</Text>
          <Text>Wednesday, May 12 2021, 03:00</Text>

        </View>


        <View style={{marginTop:15,}}>
          <Text style={{fontWeight:'bold',color:'#517399'}}>Description</Text>
          <Text>No description</Text>

        </View>


        <View style={{marginTop:15,}}>
          <Text style={{fontWeight:'bold',color:'#517399'}}>Category</Text>
          <Text>Business & Career</Text>

        </View>


        <View style={{marginTop:15,}}>
          <Text style={{fontWeight:'bold',color:'#517399'}}>Event-URL</Text>
          <Text  style={{color: 'blue'}}>https//gigaaa.com</Text>

        </View>


        <View style={{flexDirection:'row', marginTop:15,justifyContent:'space-between'}}>
          <View>
          <Text style={{fontWeight:'bold',color:'#517399'}}>Who is coming?</Text>
          <Text>5 Participants</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'#f25759',justifyContent:'center', paddingHorizontal:30, borderRadius:30}}>
        <Text style={{color:'white',fontWeight:'bold', alignSelf:'center'}}>Join </Text>
          </TouchableOpacity>

        </View>



        <View style={{justifyContent:'space-between' ,paddingBottom:10,  marginTop:20,flexDirection:'row',  paddingVertical:10, borderWidth:0.3, borderRadius:10}}>
        <FlatList
                        contentContainerStyle={{marginLeft:30, paddingHorizontal:0,}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={images}
                     horizontal={true}
                    renderItem={renderlist2}
                    keyExtractor={(item,index) => index.toString()}
              
                 />
          <TouchableOpacity style={{alignSelf:'center', marginRight:15,}}>

          <Text style={{color:'#517399', fontWeight:'600', alignSelf:'center'}}>Show All</Text>
        </TouchableOpacity>
        </View>
           

      </View>







      </ScrollView>






          
        </SafeAreaView>
    );
}

export default Events;