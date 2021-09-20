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



const YourPurchases = ({ navigation }) => {



    const [filteredDataSource, setFilteredDataSource] = useState([
    
        {
            id: 1,
            title : 'EXIT: Theft on the Mississippi   Board ...',
            img : require('../images/homepage-laptop-floating-mockup.png'),

          },
          {
              id: 2,
              title : 'EXIT: The Stormy Fligght | Escape Room ...',
              img : require('../images/photo-1505740420928-5e560c06d30e.jpeg'),

      
             
          },
          {
              id: 3,
              title : 'Thames & Kosmos Exit: The Abandoned ...',
              img : require('../images/homepage-laptop-floating-mockup.png'),

            }
           
    
    ]);
    const [data, setdata] = useState([
    
      {
          id: 1,
          title : 'EXIT: Theft on the Mississippi   Board ...',
          img : require('../images/homepage-laptop-floating-mockup.png'),

        },
        {
            id: 2,
            title : 'EXIT: The Stormy Fligght | Escape Room ...',
            img : require('../images/photo-1505740420928-5e560c06d30e.jpeg'),

    
           
        },
        {
            id: 3,
            title : 'Thames & Kosmos Exit: The Abandoned ...',
            img : require('../images/homepage-laptop-floating-mockup.png'),

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

const searchFilterFunction = (text) => {
  // Check if searched text is not blank
  if (text) {
    console.log(text);
    // Inserted text is not blank
    // Filter the masterDataSource
    // Update FilteredDataSource
    const newData = data.filter(
      function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
    setFilteredDataSource(newData);
    setSearch(text);
    console.log('text is '+text);
  } else {
    // Inserted text is blank
    console.log('blank');
    // Update FilteredDataSource with masterDataSource
    setFilteredDataSource(data);
    setSearch(text);
  }
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
  showSnackbarMessage();
}


const showSnackbarMessage = () => {
  setTimeout(() => {
    Snackbar.show({
      backgroundColor: Appcolors.toolbarColor,
      title: 'Event Removed',
    });
  }, 100);
};


const renderlist2 = ({ item, index }) => {
        
       
  return(
      <TouchableOpacity 
      onPress={()=>{
          navigation.navigate('YourPurchasesDetails',{'item':item})
      }}
      style={{borderColor:'grey',flexDirection:'row',paddingVertical:15, paddingHorizontal:20, borderBottomWidth:0.3,  }}>

<View style={{flexDirection:'row',marginHorizontal:1, width:'20%'}} >
<Image source={item.img} style={{height:60,alignSelf:'center', width:50}} resizeMethod='resize' resizeMode='stretch' />
</View>

<View style={{width:'72%',paddingVertical:5,justifyContent:'space-between', paddingHorizontal:2,}}>
<Text style={{paddingVertical:2,fontWeight:'600'}}>{item.title}</Text>

<Text style={{paddingVertical:2,fontSize:12,color:'grey', fontWeight:'600'}}>Delivered: 28.04.2021</Text>
</View>
<TouchableOpacity 
onPress={()=> {        navigation.navigate('YourPurchasesDetails',{'item':item}) }}
style={{width:'8%',justifyContent:'center',alignSelf:'center', }}>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>
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
  <Text style={{alignSelf: 'center', textAlignVertical: 'center', fontSize:18, fontWeight:'600'}}>Your Purchases</Text>

  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>


  </View>
  
  
  
  </View>

  
  
           </View>
    
        

           <View style={{width:'100%', height:40 ,borderColor:'grey', borderWidth: 0.3, flexDirection:'row'}}> 

           <TouchableOpacity style={{justifyContent:'center',marginLeft:10, }} >
 <Ionicons name="search-outline" style={{ alignSelf:'center', }} size={18} color="grey" />
 </TouchableOpacity> 

<TextInput

style={{ fontSize:13,height:40 ,paddingHorizontal:10,width:'93%',  alignSelf: 'center'  }}
placeholder="Search all orders"
placeholderTextColor='grey'
onChangeText={(text) => searchFilterFunction(text)}

/>



</View>
<View style={{backgroundColor:'#ECF0F1',justifyContent:'center', height:40,}}>
  <Text style={{fontWeight:'600',marginLeft:10, fontSize:12}}>Last 6 months</Text>
</View>

      <View style={{paddingHorizontal:0 , width:'100%'}} 
      >


            <View style={{marginTop:10, borderRadius:10, borderWidth:0, paddingVertical:5, borderColor:'grey'}}>
                <FlatList
                        contentContainerStyle={{paddingBottom: 75, paddingHorizontal:0,}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={filteredDataSource}
                    renderItem={renderlist2}
                    keyExtractor={(item,index) => index.toString()}
                   

                    

                 />
            </View>

      </View>















          
        </SafeAreaView>
    );
}

export default YourPurchases;