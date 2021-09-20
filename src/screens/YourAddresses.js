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
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const img = require('../images/nutfinal.png');



const YourAddresses = ({ navigation }) => {



    const [filteredDataSource, setFilteredDataSource] = useState([

      {id:1

      },
    
        {

            id: 1,
            Default:1,
            Name: 'Henrik Preget',
            Address:'S. Francisco 1848, 4-D',
            City: 'VILLA FLORIDA',
            Country: 'Mexico',
            Company: 'AdesTech',
            Phonenumber:'+23543645757546'
      
          },
          {
          
            id: 1,
            Default:0,
            Name: 'Henrik Preget',
            Address:'S. Francisco 1848, 4-D',
            City: 'VILLA FLORIDA',
            Country: 'Mexico',
            Company: 'AdesTech',
            Phonenumber:'+23543645757546'
          },
         
           
    
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

const renderSeparator = () => (
  <View
    style={{
      backgroundColor: 'red',
      height: 0.5,
    }}
  />
);
const renderimageslist = ({item, index}) =>{

  if(index == '0'){
    return(
      <View style={{flexDirection:'column',alignSelf:'center',width:'100%', height:deviceHeight*0.26, marginTop:0, justifyContent:'center',paddingHorizontal:10}}

>
<TouchableOpacity 
onPress={()=> {}}
style={{flexDirection:'column',justifyContent:'center', borderRadius:5, borderWidth:0.6,height:'95%', borderColor:'grey', alignSelf:'center', marginTop:5, paddingHorizontal:5,width:'80%' }}
>
        <Text style={{color:'#A6ACAF',alignSelf:'center', fontSize:56,}}>+</Text>
        <Text style={{alignSelf:'center', fontWeight:'bold', color:'#424949'}}>Add Address</Text>
      </TouchableOpacity>
<View style={{alignSelf:'center',width:'80%' ,marginHorizontal:50,marginTop:7, backgroundColor:'#B3B6B7', height:1}}>
</View>
                
</View>
  
    );
  }
  else{
    return (
      <View style={{flexDirection:'column',alignSelf:'center',width:'100%',marginTop:7, justifyContent:'center',paddingHorizontal:10 , }}
      
      >
        <View style={styles.iteminner}>
        <Text style={[styles.textstyle,{fontWeight:'bold'}]}>{item.Company}</Text>
        <Text style={styles.textstyle}>{item.Name}</Text>
        <Text style={styles.textstyle}>{item.Address}</Text>
        <Text style={styles.textstyle}>{item.City}</Text>
        <Text style={styles.textstyle}>{item.Country}</Text>
        <Text style={styles.textstyle}>Phone number: {item.Phonenumber}</Text>
      
      
        <View style={{flexDirection:'row',position: 'absolute',
        bottom:0, padding:20, }}>
          <TouchableOpacity>
            <Text style={{color:'blue'}}>
              Edit
            </Text>
          </TouchableOpacity>
      
            <Text style={{paddingHorizontal:10,}}>|</Text>
          <TouchableOpacity>
          <Text style={{color:'blue'}}>
              Remove
            </Text>
          </TouchableOpacity>
      
        </View>
      
        </View>
      
      
      
      
      {/* <TouchableOpacity 
      onPress={()=> setopener(true)}
      style={{flexDirection:'column',justifyContent:'center', borderRadius:10, borderWidth:1,height:'90%', borderColor:'grey', alignSelf:'center', marginTop:5, paddingHorizontal:2,width:'80%' }}
      >
            </TouchableOpacity>
      <View style={{alignSelf:'center', height:25}}>
      </View> */}
                      
      </View>
          );
  }
  
    
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
  <Text style={{alignSelf: 'center', textAlignVertical: 'center', fontSize:18, fontWeight:'600'}}>Adresses</Text>

  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>


  </View>
  
  
  
  </View>

  
  
           </View>
    
        

    

      <View style={{paddingHorizontal:15 , width:deviceWidth}} 
      >


<FlatList
                      style={{alignSelf:'center' , width:deviceWidth}}
                         contentInsetAdjustmentBehavior="automatic"
                      data={filteredDataSource}

                     renderItem={renderimageslist}
                    //  ItemSeparatorComponent={renderSeparator}

                      keyExtractor={(item,index) => index.toString()}
                    //   ListFooterComponent={renderFooter}

                
                    keyExtractor={(item, index) => index.toString()}
                 

                  />






      </View>















          
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  textstyle:{
    color:'black'
  },
  iteminner:{
    borderWidth:0.6,
    borderRadius:5,
    backgroundColor:'#FBFCFC',
    flex:1,
    padding:20,
    width:'80%',
    height:deviceHeight*0.26, 
     borderColor:'grey',
     alignSelf:'center'
    ,}
  

});

export default YourAddresses;