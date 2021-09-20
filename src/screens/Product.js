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
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';



import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SliderBox } from "react-native-image-slider-box";





const Product = ({route, navigation }) => {

  const { item } = route.params;
  const [ images , setimages] =useState([


    
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  
  
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
    const [visit, setvisit] = useState([
    
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

const renderVisitlist = ({ item, index }) => {
  
  return(
     <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:0.4,borderColor:'grey', paddingBottom:5,marginTop:5, }}>
<Image source={require('../images/photo-1523275335684-37898b6baf30.jpeg')} style={{height:110,alignSelf:'center',borderRadius:10, width:100}}/>
<View style={{flexDirection:'row',justifyContent:'center', paddingVertical:5}}>
<View style={{marginLeft:10}}>
  <Text>EPAuto 12V DC Portable Air Compressor Pump, Digital Tire Inflator</Text>
 
  <Text 
        style={{fontSize:14,color:'grey', fontWeight:'400', }}>$ 615</Text>

<Text 
        style={{fontSize:20, fontWeight:'500', }}>$ 215 <Text style={{fontSize:12, color:'green'}}>58% OFF</Text></Text>
        <View style={{flexDirection:'row'}}>
    <AntDesign name='sharealt' size={18} style={{alignSelf:'center'}} />
<Text style={{color:'#000000', fontWeight:'500'}}>Full</Text>
   </View>
   
   <View style={{flexDirection:'row'}}>
    <AntDesign name='shoppingcart' size={18} style={{alignSelf:'center'}} />
<Text style={{color:'#000000', fontWeight:'500'}}>Add to Cart</Text>
   </View>
</View>
    </View>
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
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Product</Text>
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


<ScrollView>


<View style={{paddingHorizontal:20, marginTop:5,}}>
<Text style={{fontSize:16, fontWeight:'400'}}>{item.title}</Text>
<View style={{flexDirection:'row',paddingHorizontal:0,marginTop:5,}}>
        
        <Rating
                style={{ marginRight:10, alignSelf:'flex-start' }}
                    imageSize={16}
                    />
          <Text style={{alignSelf:'center', fontSize:12}}>(200)</Text>
           </View> 

<View style={{flexDirection:'row',paddingHorizontal:0,marginTop:5,}}>
        
       <Text style={{fontWeight:'600',backgroundColor:'orange',padding:3,fontSize:12, color:'white'}} >MAX VENDIDO

       </Text>
          <Text style={{alignSelf:'center',marginLeft:10, fontSize:12}}>9 en Webcam</Text>
           </View>          
    
</View>
         
         <View style={{marginTop:10}}>
         <SliderBox 
           images={images}  />
         </View>


<View style={{paddingHorizontal:20}}>
    <View style={{paddingVertical:10}}>

   
  
  
  
        <Text 
        style={{fontSize:14,color:'grey', fontWeight:'400', }}>$ 615</Text>

<Text 
        style={{fontSize:20, fontWeight:'500', }}>$ 215 <Text style={{fontSize:12, color:'green'}}>58% OFF</Text></Text>
    </View>

    <View style={{flexDirection:'row',paddingVertical:5}}>
<MaterialCommunityIcons name='truck-outline' color='green' size={16} ></MaterialCommunityIcons> 
<View style={{marginLeft:10}}>
  <Text><Text  style={{color:'green'}}>Liega manana</Text> pro $ 99 <Text  style={{color:'green'}}>Full</Text></Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:'grey'}}>Comprando dentro de las procens </Text>
<Text style={{color:'#000000', fontWeight:'500'}}>5 hr 27 min</Text>
   </View>
   <Text style={{color:'grey'}}>Ver Mas tomoas e wnnte</Text>

</View>
    </View>


    <View style={{flexDirection:'row', paddingVertical:5}}>
<Ionicons name='return-down-back-outline' color='green' size={16} ></Ionicons> 
<View style={{marginLeft:10}}>
<Text  style={{color:'green'}}>Devoluction graft</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:'grey'}}>Tiense 30 days to recoto</Text>
   </View>
   <Text style={{color:'grey'}}>Conocer mas</Text>

</View>
    </View>
    <View style={{paddingVertical:5}} >
        <Text>Stock disponsible </Text>
<View style={{height:50 ,marginTop:5,flexDirection:'row',justifyContent:'center', backgroundColor:'#ECF0F1', borderRadius:10}}>
<Text style={{alignSelf:'center',width:'25%' }}>Cantidad: 1 </Text>
<TextInput style={{marginLeft:5,width:'60%', }} 
placeholder='(39) disponsinle'
/>


<TouchableOpacity style={{ width:'10%', justifyContent:'center'}}>

<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>

</TouchableOpacity>
</View>


<TouchableOpacity style={{backgroundColor:'blue',paddingVertical:15,borderRadius:8,marginTop:15, justifyContent:'center'}}> 
  <Text style={{alignSelf:'center', color:'white'}}>Compara ahora</Text>
</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:'#A9CCE3',paddingVertical:15,borderRadius:8,marginTop:15, justifyContent:'center'}}> 
  <Text style={{alignSelf:'center', color:'blue'}}>Compara ahora</Text>
</TouchableOpacity>

<Card 
elevation={3}
style={{marginTop:10,paddingVertical:5, justifyContent:'center'}}>
<View style={{flexDirection:'row',justifyContent:'center', paddingVertical:5}}>
<MaterialCommunityIcons name='truck-outline' color='green' size={16} ></MaterialCommunityIcons> 
<View style={{marginLeft:10}}>
  <Text><Text  style={{color:'green'}}>Liega manana</Text> pro $ 99 <Text  style={{color:'green'}}>Full</Text></Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:'grey'}}>Comprando dentro de las procens </Text>
<Text style={{color:'#000000', fontWeight:'500'}}>5 hr 27 min</Text>
   </View>
   <Text style={{color:'grey'}}>Ver Mas tomoas e wnnte</Text>

</View>
    </View>


</Card>

<View style={{flexDirection:'row',marginTop:15, }}>
<Ionicons name='return-down-back-outline' color='green' size={16} ></Ionicons> 
<View style={{marginLeft:10}}>
<Text  style={{color:'green'}}>Devoluction graft <Text style={{color:'grey'}}>, receipe et prouducto wue espisne o rtet akfuuihui</Text></Text>


</View>
    </View>


    <View style={{flexDirection:'row',marginTop:10, paddingVertical:5}}>
<Ionicons name='return-down-back-outline' color='green' size={16} ></Ionicons> 
<View style={{marginLeft:10}}>
<Text  style={{color:'green'}}>Devoluction graft <Text style={{color:'grey'}}>Sumas 18 puntos</Text></Text>


</View>
    </View>

<View style={{flexDirection:'row',marginTop:10, justifyContent:'center',}}>
  <View style={{flexDirection:'row',justifyContent:'center',}}>
    <Entypo name='heart-outlined' size={18} style={{alignSelf:'center'}} />
    <Text style={{alignSelf:'center', marginLeft:3,}}>Agrega a favorites</Text>
  </View>

  <View style={{flexDirection:'row',justifyContent:'center', marginLeft:5}}>
    <AntDesign name='sharealt' size={18} style={{alignSelf:'center'}} />
    <Text style={{marginLeft:3,alignSelf:'center'}}>Comparti</Text>
  </View>
</View>



<View style={{marginTop:15,}}>
  <Text style={{fontWeight:'500', fontSize:16}}>Mostly Visit</Text>
  <FlatList
                        contentContainerStyle={{paddingBottom: 15, paddingHorizontal:0,}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={visit}
                     renderItem={renderVisitlist}
                    keyExtractor={(item,index) => index.toString()}
                
                 />
    </View>


    <Text style={{marginTop:15,fontSize:18, fontWeight:'500'}}>Information de la tienda</Text>

    <View style={{flexDirection:'row',marginTop:20, paddingVertical:5}}>
    <Image source={require('../images/photo-1523275335684-37898b6baf30.jpeg')} style={{height:40,alignSelf:'center',borderRadius:10, width:60}}/>
<View style={{marginLeft:10, justifyContent:'center'}}>
<Text style={{fontWeight:'500', fontSize:16}}>MCSWKEY</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:'grey'}}>Comprando dentro de las procens </Text>
   </View>

</View>
    </View>


    <View style={{flexDirection:'row',marginTop:10, paddingVertical:5}}>
<MaterialCommunityIcons name='truck-outline' color='green' size={16} ></MaterialCommunityIcons> 
<View style={{marginLeft:10}}>
  <Text  style={{color:'green'}}>MCSWKEY Platinum</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:'grey'}}>Comprando dentro de las procens </Text>
<Text style={{color:'#000000', fontWeight:'500'}}>5 hr 27 min</Text>
   </View>
   <Text style={{color:'grey'}}>Ver Mas tomoas e wnnte</Text>

</View>
    </View>




    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={{backgroundColor:'pink',height:8, width:'23%'}}></View>
      <View style={{backgroundColor:'pink',height:8, width:'23%'}}></View>
      <View style={{backgroundColor:'yellow',height:8, width:'23%'}}></View>
      <View style={{backgroundColor:'green',height:8, width:'23%'}}></View>
    </View>


    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10}}>
      <View style={{flexDirection:'column',paddingVertical:10,justifyContent:'center', width:'20%'}}>
        <Text style={{fontWeight:'500', fontSize:16, alignSelf:'center'}}>5217</Text>
        <Text style={{marginTop:10, alignSelf:'center', textAlign:'center'}}>Vertoteg dgkn s k sk vsk ks fk </Text>
      </View>

      <View style={{flexDirection:'column',paddingVertical:10,justifyContent:'center', width:'20%'}}>
        <Text style={{fontWeight:'500', fontSize:16, alignSelf:'center'}}>5217</Text>
        <Text style={{marginTop:10, alignSelf:'center', textAlign:'center'}}>Vertoteg dgkn s k sk vsk ks fk </Text>
      </View>

      <View style={{flexDirection:'column',paddingVertical:10,justifyContent:'center', width:'20%'}}>
        <Text style={{fontWeight:'500', fontSize:16, alignSelf:'center'}}>5217</Text>
        <Text style={{marginTop:10, alignSelf:'center', textAlign:'center'}}>Vertoteg dgkn s k sk vsk ks fk </Text>
      </View>
    </View>


<TouchableOpacity style={{borderTopWidth:0.5,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10, borderBottomWidth:0.5, paddingVertical:10}}>
<Text>Ver mas detas MCSWKEY</Text>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>



<Text style={{marginTop:20, fontSize:16,fontWeight:'500'}}>Information dei producto</Text>
<View style={{flexDirection:'row',marginTop:20, height:40}}>
  <View style={{width:'50%',padding:10, backgroundColor:'#D7DBDD', height:'100%'}}>
    <Text>Marca</Text>
  </View>

  <View style={{width:'50%',padding:10, backgroundColor:'#F2F3F4', height:'100%'}}>
    <Text>Marca</Text>
  </View>
</View>

<View style={{flexDirection:'row', height:40}}>
  <View style={{width:'50%',padding:10, backgroundColor:'#ECF0F1', height:'100%'}}>
    <Text>Marca</Text>
  </View>

  <View style={{width:'50%',padding:10, backgroundColor:'#ECF0F1', height:'100%'}}>
    <Text>Marca</Text>
  </View>
</View>

<TouchableOpacity style={{borderTopWidth:0.5,flexDirection:'row',marginTop:20, justifyContent:'space-between',paddingHorizontal:10, borderBottomWidth:0.5, paddingVertical:10}}>
<Text>Ver mas detas MCSWKEY</Text>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>




<Text style={{fontSize:16,marginTop:20 ,fontWeight:'500'}}>Description</Text>
        <Text style={{marginTop:20,}}>
            Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition      Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition      Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition      Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition      Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition      Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition      Descrition 
            Descrition 
            Descrition 
            Descrition 
            Descrition 

        </Text>





        <Text style={{fontSize:16,marginTop:20 ,fontWeight:'500'}}>Devolition graints</Text>
        <Text style={{marginTop:10,}}>
            Descrition 
            Descrition 
            Descrition 
            Descrition 
      

        </Text>




        <TouchableOpacity style={{borderWidth:0.5,flexDirection:'row',marginTop:20, justifyContent:'space-between',paddingHorizontal:10, paddingVertical:10}}>
<Text>Ver mas detas MCSWKEY</Text>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>


<Text style={{fontSize:16,marginTop:20 ,fontWeight:'500'}}>Devolition graints</Text>
        <Text style={{marginTop:10,}}>
            Descrition 
            Descrition 
            Descrition 
            Descrition 
      

        </Text>
        <TouchableOpacity style={{borderWidth:0.5,flexDirection:'row',marginTop:20, justifyContent:'space-between',paddingHorizontal:10, paddingVertical:10}}>
<Text>Ver mas detas MCSWKEY</Text>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>


<Text style={{fontSize:16,marginTop:20 ,fontWeight:'500'}}>Medios de pago</Text>



<TouchableOpacity style={{flexDirection:'row', backgroundColor:'green', paddingVertical:12,borderRadius:8,marginTop:20, justifyContent:'center'}}>

<AntDesign name='creditcard' color='white' style={{alignSelf:'center'}} size={20} ></AntDesign>
<Text style={{color:'white',marginLeft:10, alignSelf:'center'}}>jpaga e ne 12 mesens sin interst </Text>
</TouchableOpacity>





<Text style={{fontWeight:'500', marginTop:10,}}>Targets de credits</Text>

<View style={{flexDirection:'row', marginTop:10,}}>
<Image source={require('../images/visacard.png')} style={{height:35,alignSelf:'center',borderRadius:10, width:60}} resizeMethod='resize' resizeMode='stretch' />
<Image source={require('../images/master.png')} style={{height:35,marginLeft:10, alignSelf:'center',borderRadius:10, width:60}} resizeMethod='resize' resizeMode='stretch'/>

</View>

<Text style={{fontWeight:'500' , marginTop:10,}}>Targets de credits</Text>
<View style={{flexDirection:'row', marginTop:10,}}>
<Image source={require('../images/visacard.png')} style={{height:40,alignSelf:'center',borderRadius:10, width:60}} resizeMethod='resize' resizeMode='stretch'/>
<Image source={require('../images/master.png')} style={{height:40,marginLeft:10, alignSelf:'center',borderRadius:10, width:60}} resizeMethod='resize' resizeMode='stretch'/>

</View>



<Text style={{fontWeight:'500' , marginTop:40,}}>Efectivo</Text>

<TouchableOpacity style={{borderWidth:0.5,flexDirection:'row',marginTop:30, justifyContent:'space-between',paddingHorizontal:10, paddingVertical:10}}>
<Text>Ver mas detas MCSWKEY</Text>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>





<Text style={{fontWeight:'500' , marginTop:40,}}>Pregunats y respuestas</Text>


<Text style={{fontWeight:'500' , marginTop:10,}}>Quries saber?</Text>


    </View>

</View>

        

</ScrollView>
          
        </SafeAreaView>
    );
}

export default Product;