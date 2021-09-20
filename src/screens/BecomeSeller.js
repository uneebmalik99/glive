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
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import Feather from 'react-native-vector-icons/dist/Feather';
import { Appbar, Card} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';





const BecomeSeller = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
        category : 'Arts & Crafts',
        numbers :'(500)',
        img : require('../images/homepage-laptop-floating-mockup.png')
      },
      {
          id: 2,
          category : 'Automotive',
          numbers :'(50)',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
        
      },
      {
        id: 3,
        category : 'Baby',
        numbers :'(50)',
      img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
      
    },
    {
      id: 4,
      category : 'Beauty and Personal Care',
      numbers :'(50)',
    img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
    
  },
  {
    id: 5,
    category : 'Computers',
    numbers :'(50)',
  img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
  
},
{
  id: 6,
  category : 'Electronics',
  numbers :'(50)',
img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

},

      {
          id: 7,
          category : 'Health and Household',
          numbers :'(40)',
          img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

      },
{
        id: 8,
        category : 'Home &             Kitchen',
        numbers :'(500)',
        img : require('../images/homepage-laptop-floating-mockup.png')
      },
      {
          id: 9,
          category : 'Industrial and Scientific',
          numbers :'(50)',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
        
      },
      {
        id: 10,
        category : 'Luggage',
        numbers :'(50)',
      img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
      
    },
    {
      id: 11,
      category : 'Men\'s Fashion',
      numbers :'(50)',
    img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
    
  },
  {
    id: 12,
    category : 'Pet Supplies',
    numbers :'(50)',
  img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
  
  },
  {
    id: 13,
    category : 'Movies &   Television',
    numbers :'(50)',
  img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
  
},


      {
          id: 14,
          category : 'Smart Home',
          numbers :'(40)',
          img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

      },
{
        id: 15,
        category : 'Software',
        numbers :'(500)',
        img : require('../images/homepage-laptop-floating-mockup.png')
      },
      {
          id: 16,
          category : 'Sports and Outdoors',
          numbers :'(50)',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
        
      },
      {
        id: 17,
        category : 'Tools & Home Improvement',
        numbers :'(50)',
      img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
      
    },
    {
      id: 18,
      category : 'Toys and           Games',
      numbers :'(50)',
    img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
    
  },
  {
    id: 19,
    category : 'Video Games',
    numbers :'(50)',
  img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
  
},
{
  id: 20,
  category : 'Women\'s        Fashion',
  numbers :'(50)',
img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

},

      {
          id: 21,
          category : 'Smart Home',
          numbers :'(40)',
          img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

      }
       

]);

    const [Categorieslist, setCategorieslist] = useState([
    
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


const [Products, setProducts] = useState([
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

const onChangeValue = (item, index) =>{
  const newData1 = filteredDataSource.map(newitem => {
    if( newitem.id == item.id){
      return{
        ...newitem,
        selected : true
      }
    }else{

    
    return{
      ...newitem,
      selected:false
    }
  }
  })
  setFilteredDataSource(newData1)
}
const renderlist4 = ({ item, index }) => {
        
  

  return(
      <View 
      onPress={()=>{
          // navigation.navigate('LivePresentation')
      }}
      style={{borderColor:'grey',marginTop:5,flexDirection:'row',flex:0.33, padding:2, marginHorizontal:2, }}>

{/* <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      uncheckedColor='green'
      disabled={false}
      
      color='#7e75fc'
      onPress={() => {
        setChecked(!checked);
      }}
    />
    
    */}



<CheckBox
    disabled={false}
    value={toggleCheckBox}
    boxType='square'
    onAnimationType='fade'
    
    offAnimationType	='fade'
    lineWidth={1}
    onValueChange={ () => onChangeValue(item, index) }
  />



<Text  style={{alignSelf:'center',marginLeft:2, fontSize:12,textAlign:'auto' }}>{item.category}</Text>


      </View>

  );



}


const renderlist = ({item}) =>{
  
  return(
    
<TouchableOpacity style={{flexDirection:'row',alignSelf:'center', marginTop:5, paddingHorizontal:2, width:deviceWidth*0.18 ,height:deviceHeight*0.08}}
onPress={()=>{ setimage('https://admin.afgshipping.com/uploads/'+item.thumbnail) ,setSliderModel(true) }}

>
<Image style={{width:'100%',height:'100%',borderRadius:5, resizeMode:'cover'}}  source={{uri: item}} />

</TouchableOpacity>

  
  
  )
  
   }


    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,justifyContent:'center', width:deviceWidth,height:deviceHeight}}>

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
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Become a seller</Text>
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

        <View style={{paddingVertical:10,justifyContent:'center', paddingHorizontal:20}}>

       

<TextInput

style={{ width: '100%', paddingHorizontal: 15, borderWidth: 0.5, height:Platform.OS === 'ios' ? 35 : 30, borderRadius: 20, fontSize: 14, paddingVertical:2 }}
placeholder="Name"
placeholderTextColor='black'

/>


          <Text style={{alignSelf:'flex-start',fontSize:16, fontWeight:'600', marginTop:30}}>Categories</Text>


<FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={filteredDataSource}
                contentContainerStyle={{backgroundColor:'white', paddingHorizontal:0,borderWidth:0.5,borderRadius:8,  paddingBottom: 5}}
                renderItem={renderlist4}
                keyExtractor={(item,id) => id.toString()}
                numColumns={3}

                 /> 

      
    <Text style={{fontSize:16, fontWeight:'600', alignSelf:'flex-start', marginTop:20}}>Pictures</Text>


    <FlatList
                      style={{alignSelf:'center'}}
                         contentInsetAdjustmentBehavior="automatic"
                      data={images}
                     renderItem={renderlist}
                      keyExtractor={(item,index) => index.toString()}
                      numColumns={5}

             
                    // refreshing={refreshing}
                    // onRefresh={handleRefresh}

                  />

<Text style={{fontSize:16, fontWeight:'600', alignSelf:'flex-start', marginTop:20}}>Description</Text>

<View style={{ padding:10, borderRadius:10, borderWidth:0.5, }}>
  <Text>Dummy data Dummy data  Dummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy data
  Dummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy data
  Dummy dataDummy dataDummy dataDummy dataDummy dataDummy dataDummy data
  </Text>
</View>
                  

   
        </View>

     

        </ScrollView>





          
        </SafeAreaView>
    );
}

export default BecomeSeller;