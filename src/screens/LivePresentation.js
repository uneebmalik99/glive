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
    Linking,
    SafeAreaView,
    Modal
} from 'react-native';
import {

    Avatar,
   
} from 'react-native-paper';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import ImageView from "react-native-image-viewing";




const LivePresentation = ({route , navigation }) => {
    const { item  } = route.params;
console.log('=============== '+ JSON.stringify(item.Products));
    const url = item.ProductUrl
    const [ imageviewer , setimageviewer] = useState(false)


    const [ images , setimages] =useState([])
    const images1 = [
    {
        uri: "https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg",
    },
    {
      uri: "https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg",
    },
    {
      uri: "https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg",
    },
    {
        uri: "https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg",
    },
    {
        uri: "https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg", 
    }

    ];
    const [ Products , setProducts] = useState([
        {
            id:1,
            title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
            price:'49,90 €',
            Des:'Description  dummy data dummy data dummy datadummy data'
        },
        {
            id:2,
            title:'Product-2',
            price:'49,90 €',
            Des:'Description  dummy data dummy data dummy datadummy data'
        },
        {
            id:3,
            title:'Product-3',
            Des:'Description  dummy data dummy data dummy datadummy data',
            price:'49,90 €'
        }
    ])

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

    const [list , setlist] = useState([
        {
            id:1,
            name:'Global News',
        },
        {
            id:2,
            name:'Wish Outdoor',
        },
        {
            id:3,
            name:'Global News',
        },
        {
            id:1,
            name:'Global News',
        },
      
       
    ])
    const [search ,setSearch]=useState('')


const [data, setdata] = useState([
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

const loadInBrowser = () => {
    Linking.openURL('https://meet.gigaaa.com/gLIVE').catch(err => console.error("Couldn't load page", err));
  };
  const LoadProductUrl = () => {
    Linking.openURL(item.ProductUrl).catch(err => console.error("Couldn't load page", err));
  };

const renderlist5 = ({item}) =>{
  let k = item;
  console.log('-------'+k);
    return(
      
  <TouchableOpacity style={{flexDirection:'row',alignSelf:'center', marginTop:5, paddingHorizontal:2, width:deviceWidth*0.185 ,height:deviceHeight*0.08}}
  onPress={()=>{ setimageviewer(true) }}
  
  >
  <Image style={{width:'100%',height:'100%',borderRadius:5, resizeMode:'cover'}}  source={{uri:item.uri}} />
  
  </TouchableOpacity>
  
    
    
    )
    
     }
  
const renderlist4 = ({ item, index }) => {
    setimages(item.images)

    let g = item.images;
        let title = item.title;
        if(title.length <= 25 ){
          title=item.title
        }else{
         title= title.substring(0,25)+'...'
        }
    if(index == 1){
        return(<View>
                    <Text style={{marginTop:7, color:"blue"}} onPress={()=> LoadProductUrl()} > {url.substring(0,30)+'...'}</Text>

            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('LivePresentation')
            }}
            style={{borderColor:'grey' ,flexDirection:'row',justifyContent:'space-between', marginTop:5, marginHorizontal:3, borderRadius:8 }}>
             
               
                <View style={{flexDirection:'row', width:'85%', }}> 
                
                      <Image style={{ width: '10%', height: 30, alignSelf: 'flex-start', resizeMode: 'contain' ,borderRadius: 150 / 2, }} source={{uri:item.images[0].uri}} /> 
                                <Text style={{marginLeft:5,fontSize:16,width:'85%', alignSelf:'center'}}>{title}</Text>
    
    
                </View>
                
                <Text style={{fontSize:16, alignSelf:'center'}}>{item.price} </Text>
    
            </TouchableOpacity>
            <FlatList
                    contentInsetAdjustmentBehavior="automatic"
                    data={item.images}
                    horizontal={true}
                    contentContainerStyle={{backgroundColor:'white',top:8, paddingHorizontal:0,  paddingBottom: 10}}
                    renderItem={renderlist5}
                    keyExtractor={(item,id) => id.toString()}
                     /> 
    
    
    </View>  
        );
    }else{


        return(<View>
    
            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('LivePresentation')
            }}
            style={{borderColor:'grey' ,flexDirection:'row',justifyContent:'space-between', marginTop:5, marginHorizontal:3, borderRadius:8 }}>
                <View style={{flexDirection:'row', width:'85%', }}> 
                      <Image style={{ width: '10%', height: 30, alignSelf: 'flex-start', resizeMode: 'contain' ,borderRadius: 150 / 2, }} source={{uri:item.images[0].uri}} /> 
                                <Text style={{marginLeft:5,fontSize:16,width:'85%', alignSelf:'center'}}>{title}</Text>
    
    
                </View>
                
                <Text style={{fontSize:16, alignSelf:'center'}}>{item.price} </Text>
    
            </TouchableOpacity>
            <FlatList
                    contentInsetAdjustmentBehavior="automatic"
                    data={item.images}
                    horizontal={true}
                    contentContainerStyle={{backgroundColor:'white',top:8, paddingHorizontal:0,  paddingBottom: 10}}
                    renderItem={renderlist5}
                    keyExtractor={(item,id) => id.toString()}
                     /> 
    
    
    </View>  
        );
    }
    
  
  
  }
  



    return (
        
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>


<ImageView
  images={images}
  imageIndex={0}
  animationType='fade'
  visible={imageviewer}
  onRequestClose={() => setimageviewer(false)}
/>



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
                        </TouchableOpacity> 
  
  </View>
  <View style={{justifyContent:'center',width:'60%',height:'100%',}}>
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>glive</Text>
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
    
        
           <ScrollView style={{width:deviceWidth, paddingHorizontal:15,}}>
<TouchableOpacity 
         onPress={()=> {loadInBrowser()}}
            style={{width:'100%', borderColor:'grey',marginTop:10, borderWidth:0.3, borderRadius:8 }}>

<ImageBackground 
            source={item.img} 


// source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 8,  }} style={{justifyContent:'space-between', flexDirection:'column', height: deviceHeight*0.45, width: "100%" }}
                        >

<LinearGradient
                      colors={['#5759ba',   'transparent', ]}
                      
                      locations={[0.8, 1]}
                      style={{alignItems: 'center',
                      justifyContent: 'flex-start',
                      opacity:0,
                      borderRadius: 8,
                      height:'20%',
                      width: '100%',}}
                    >
                    
                    </LinearGradient>
               

               <View>

                   <TouchableOpacity style={{alignSelf:'flex-end', marginBottom:25,justifyContent:'center', backgroundColor:'purple', 
                borderTopLeftRadius:15, borderBottomLeftRadius:15, paddingHorizontal:10, paddingVertical:2
                }}>
                       <Text style={{color:'white',fontSize:18,alignSelf:'center', fontWeight:'600'}}>Live</Text>
                   </TouchableOpacity>
               </View>
     


                            </ImageBackground>


            </TouchableOpacity>





<View style={{ marginTop:10}}>
<TouchableOpacity 
         onPress={()=> navigation.navigate('Seller')}
style={{flexDirection:'row',marginVertical:5, justifyContent:'space-between'}}>
    <Text style={{fontSize:16 , fontWeight:'500'}}>Presented by</Text>
    <Text style={{fontSize:16 , fontWeight:'500'}}>Henrik</Text>
    </TouchableOpacity>



    <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={item.Products}
                contentContainerStyle={{backgroundColor:'white',top:8, paddingHorizontal:0,  paddingBottom: 10}}
                renderItem={renderlist4}
                keyExtractor={(item,id) => id.toString()}
                 /> 





</View>













<View style={{height:55}}>


   <Text></Text>    
   </View>
</ScrollView>


          

          
        </SafeAreaView>
    );
}

export default LivePresentation;