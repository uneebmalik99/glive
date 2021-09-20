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
    Modal,
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





const Category = ({ navigation }) => {


    const [filteredDataSource, setFilteredDataSource] = useState(
      [
    
        {
            id: 1,
            category : 'Arts & Crafts',
            numbers :'(500 products)',
            img : require('../images/homepage-laptop-floating-mockup.png'),
            products:[{

            },
          ]
          },
          {
              id: 2,
              category : 'Automotive',
              numbers :'(50 products)',
            img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
            
          },
          {
            id: 3,
            category : 'Baby',
            numbers :'(50 products)',
          img : require('../images/photo-1505740420928-5e560c06d30e.jpeg'),
          products:[{
            title:' Graco DuoGlider Double Stroller | Lightweight Double Stroller with Tandem Seating, Glacier',
            description:'Accepts two Graco Snug Ride Click Connect infant car seats; tandem stroller Holds 2 children up to 40 pounds each One hand, standing fold closes easily with no bending necessary, leaving one hand Free for baby; Easy access, drop down storage basket lets you reach in without disturbing Your reclined child',
          },
          {
            title:'Taf Toys Toe Time Infant Car Seat Toy | Kick and Play Activity Center with Music, Lights, Mirror, and Jingling Toys | Fun Travel Baby Toy for Rear Car Seat | Easier Drive with Newborns, Babies',
            description:'MORE ACTIVITY; MORE FUN: The Toe Time infant car seat toy comes with toes that twinkle and gentle music that plays with every kick from your cutie pie, 3 hanging soft toys that crinkle or jingle once tugged, and a baby-safe mirror surrounded by eye-catching stars; your kiddo will love it! THOUGHTFULNESS IN DESIGN: Unlike other rear facing car seat toys that your baby can’t reach or block the view of your backseat mirror, our travel activity toy comes with velcro straps for adjusting both its height and angle. This means your baby gets to reach every toy and you get to see them.GREAT LEARNING TOOL: Through all the giggle-sparking kicking, tugging, and playing, your little one will develop their fine motor skills, have their visual and aural senses stimulated, and get a head start on color recognition thanks to the vibrant design of the baby toys for car seat.UNIQUE GIFT IDEA: Shopping around for the best baby shower gift to surprise that mom or dad? This car seat travel toy will be a guaranteed hit! It works for both baby boys and girls, attaches to most headrests in a matter of seconds, and even comes with batteries already included.BUY RISK FREE: We’ve got your back with a 100% satisfaction guarantee. Not happy with your car seat activity toy? Just reach out to us and we’ll do all we can to make it right. Click ‘Add to Cart’ now to make that car ride a total treat for your little munchkin completely risk-free!',            
          },
         
          
        ]
          
        },
        {
          id: 4,
          category : 'Beauty and Personal Care',
          numbers :'(50 products)',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
        
      },
      {
        id: 5,
        category : 'Computers',
        numbers :'(50 products)',
      img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
      
    },
    {
      id: 6,
      category : 'Electronics',
      numbers :'(50 products)',
    img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
    
  },

          {
              id: 7,
              category : 'Health and Household',
              numbers :'(40 products)',
              img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

          },
 {
            id: 1,
            category : 'Home and Kitchen',
            numbers :'(500 products)',
            img : require('../images/homepage-laptop-floating-mockup.png')
          },
          {
              id: 2,
              category : 'Industrial and Scientific',
              numbers :'(50 products)',
            img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
            
          },
          {
            id: 3,
            category : 'Luggage',
            numbers :'(50 products)',
          img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
          
        },
        {
          id: 4,
          category : 'Men\'s Fashion',
          numbers :'(50 products)',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
        
      },
      {
        id: 5,
        category : 'Movies & Television',
        numbers :'(50 products)',
      img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
      
    },
    {
      id: 6,
      category : 'Pet Supplies',
      numbers :'(50 products)',
    img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
    
  },

          {
              id: 7,
              category : 'Smart Home',
              numbers :'(40 products)',
              img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

          },
{
            id: 1,
            category : 'Software',
            numbers :'(500 products)',
            img : require('../images/homepage-laptop-floating-mockup.png')
          },
          {
              id: 2,
              category : 'Sports and Outdoors',
              numbers :'(50 products)',
            img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
            
          },
          {
            id: 3,
            category : 'Tools & Home Improvement',
            numbers :'(50 products)',
          img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
          
        },
        {
          id: 4,
          category : 'Toys and Games',
          numbers :'(50 products)',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
        
      },
      {
        id: 5,
        category : 'Video Games',
        numbers :'(50 products)',
      img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
      
    },
    {
      id: 6,
      category : 'Women\'s Fashion',
      numbers :'(50  )',
    img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
    
  },

          {
              id: 7,
              category : 'Smart Home',
              numbers :'(40 products)',
              img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

          }
           
    
    ]);
    const [search ,setSearch]=useState('')


const [data, setdata] = useState( [
    
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
      id: 1,
      category : 'Home and Kitchen',
      numbers :'(500)',
      img : require('../images/homepage-laptop-floating-mockup.png')
    },
    {
        id: 2,
        category : 'Industrial and Scientific',
        numbers :'(50)',
      img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
      
    },
    {
      id: 3,
      category : 'Luggage',
      numbers :'(50)',
    img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
    
  },
  {
    id: 4,
    category : 'Men\'s Fashion',
    numbers :'(50)',
  img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
  
},
{
  id: 5,
  category : 'Movies & Television',
  numbers :'(50)',
img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

},
{
id: 6,
category : 'Pet Supplies',
numbers :'(50)',
img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

},

    {
        id: 7,
        category : 'Smart Home',
        numbers :'(40)',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

    },
{
      id: 1,
      category : 'Software',
      numbers :'(500)',
      img : require('../images/homepage-laptop-floating-mockup.png')
    },
    {
        id: 2,
        category : 'Sports and Outdoors',
        numbers :'(50)',
      img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
      
    },
    {
      id: 3,
      category : 'Tools & Home Improvement',
      numbers :'(50)',
    img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
    
  },
  {
    id: 4,
    category : 'Toys and Games',
    numbers :'(50)',
  img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')
  
},
{
  id: 5,
  category : 'Video Games',
  numbers :'(50)',
img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

},
{
id: 6,
category : 'Women\'s Fashion',
numbers :'(50)',
img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

},

    {
        id: 7,
        category : 'Smart Home',
        numbers :'(40)',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg')

    }
     

]
)
const [sortmodal , setsortmodal] = useState(false)

const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      console.log(text);
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = data.filter(
        function (item) {
          const itemData = item.category
            ? item.category.toUpperCase()
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


 const renderlist = ({item}) =>{


    

return(  <View style={{width:'100%', top: 12, marginTop:5, paddingHorizontal:10,  }}>
<TouchableOpacity 
onPress={()=> navigation.navigate('SpecificCategory', {'item':item , 'Product': item.products})}
style={{backgroundColor:'#D0D3D4', borderRadius:12,paddingHorizontal:10,paddingVertical:5,}}>
    <View style={{flexDirection:'row'}}>
    <Image source={item.img} style={{height:40, width:60}}/>
<Text style={{fontSize:16,color:'#2C3E50', marginLeft:10, alignSelf:'center', fontWeight:'600'}}>
    {item.category} 
</Text>
    </View>
    
<Text style={{alignSelf:'flex-end', fontSize:12}}>(55 products)</Text>
</TouchableOpacity>




</View>


)

 }

    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>

<Modal
    transparent={true}
    visible={sortmodal}
>
<SafeAreaView style={{height:deviceHeight , width:deviceWidth,backgroundColor:'#0006', justifyContent:'center'}}>

  <View style={{justifyContent:'center',width:'80%', borderRadius:15, flexDirection:'column', padding:20, alignSelf:'center', backgroundColor:'white'}}>
<Text style={{alignSelf:'center', fontSize:16, marginBottom:5}}>Sort By</Text>

  <TouchableOpacity 
  
  onPress={()=> {  setsortmodal(false)  }}
  style={{ marginVertical:10,}}>

  <Text>Newest First</Text>
</TouchableOpacity>

<TouchableOpacity 
  onPress={()=>{ setsortmodal(false)}}

style={{ marginVertical:10,}}>

  <Text>A-Z</Text>
</TouchableOpacity>


<TouchableOpacity 
  onPress={()=>{   setsortmodal(false)} }

style={{ marginVertical:10,}}>

  <Text>Z-A</Text>
</TouchableOpacity>



<TouchableOpacity 
  onPress={()=> {  setsortmodal(false)}}

style={{ marginVertical:10,}}>

  <Text>Highest Rates</Text>
</TouchableOpacity>



<TouchableOpacity 
  onPress={()=> {  setsortmodal(false)}}

style={{ marginVertical:10,}}>

  <Text>Lowest Price</Text>
</TouchableOpacity>











<TouchableOpacity 
onPress={()=> { setsortmodal(false)}}
style={{width:'45%',backgroundColor:'red',padding:10,borderRadius:20,marginTop:10, alignSelf:'center', justifyContent:'center'}}>
<Text style={{alignSelf:'center',color:'white'}}>Cancel</Text>
</TouchableOpacity>
</View>
</SafeAreaView>


  
</Modal>

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
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Categories</Text>
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
    
        


            <View style={{ display: 'flex',height:40,justifyContent:'center', width:'100%',alignSelf:'center', paddingHorizontal:15, flexDirection: 'row', top: 3}}>
               
               <View style={{width:'100%', height:35 ,borderColor:'grey', borderWidth: 0.7, borderRadius: 20, flexDirection:'row'}}> 


               <TextInput

style={{ fontSize:13,height:35 ,paddingHorizontal:20,width:'93%',  alignSelf: 'center'  }}
placeholder="Search Category"
onChangeText={(text) => searchFilterFunction(text)}

/>

<TouchableOpacity style={{justifyContent:'center', }} >
                <Ionicons name="search-outline" style={{ alignSelf:'center', }} size={18} color="grey" />
                </TouchableOpacity> 

               </View>
               
                {/* <TextInput

                    style={{ fontSize:13,height:30 ,paddingHorizontal:20,  alignSelf: 'center',borderColor:'grey', borderWidth: 0.7, borderRadius: 20,  }}
                    placeholder="Search for Name, Surname and Username"
                    onChangeText={(text) => searchFilterFunction(text)}

                />
           


                <TouchableOpacity style={{justifyContent:'center',marginRight:20,  backgroundColor:'red'}} >
                    <Iconn name="search1" style={{ alignSelf:'center', }} size={18} color="grey" />
                </TouchableOpacity> */}

            </View>

      


            <FlatList
                        contentContainerStyle={{paddingBottom: 66}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={filteredDataSource}
                     
                    renderItem={renderlist}
                    keyExtractor={(item,index) => index.toString()}
                   

                    

                 />


          
        </SafeAreaView>
    );
}

export default Category;