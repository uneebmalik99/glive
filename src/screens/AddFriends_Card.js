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
import Icon from 'react-native-vector-icons/dist/Entypo';
import Iconn from 'react-native-vector-icons/dist/AntDesign';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';





const AddFriends_Card = ({ navigation }) => {


    const [filteredDataSource, setFilteredDataSource] = useState([
    
            {
              id: 1,
              name: 'Kelly Cruz ',
              message:'star_kelly',
              image:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
            },
            {
                id: 2,
                name: 'Kelly Baxtor',
                message:'baxtokeybaxtor',
                image:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
            },
            {
                id: 3,
                name: 'Kelly kim kylie',
                message:'kkkliya',
                image:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
            },
    
    ]);
    const [search ,setSearch]=useState('')


const [data, setdata] = useState([
    {
      id: 1,
      name: 'Kelly Cruz ',
      message:'star_kelly',
      image:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    },
    {
        id: 2,
        name: 'Kelly Baxtor',
        message:'baxtokeybaxtor',
        image:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    },
    {
        id: 3,
        name: 'Kelly kim kylie',
        message:'kkkliya',
        image:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    },
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
          const itemData = item.name
            ? item.name.toUpperCase()
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


    

return(  <View style={{width:'100%', top: 30, paddingHorizontal:15, flexDirection: 'row', }}>

<View style={{width:'15%'}}>
    <Image source={{ uri: item.image }}
        style={{ width: 40, height: 40, borderRadius: 400/ 2 }}
    />
</View>


<View style={{width:'55%', height: 50 ,  flexDirection:'column'}}>
    <Text style={{fontSize:15,}} >
{item.name}    </Text>
<Text style={{color:'#4d7099'}} >
{item.message}    </Text>
</View>

<View style={{ height: '57%', width:'30%', backgroundColor: '#715DFF',  borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => {
        navigation.navigate('SendMoney_Friend');
    }}>
        <Text style={{ alignSelf: 'center' , color:'white'}}>Select</Text>

    </TouchableOpacity>
</View>
</View>


)

 }

    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>

<View style={{  width:'100%',height:deviceHeight*0.08, paddingHorizontal:13, flexDirection:'column'}}>

<View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>

<View style={{justifyContent:'center',width:'100%',height:'100%', position:'absolute'}}>
<Text style={{alignSelf:'center',textAlignVertical:'center', fontSize:20,fontWeight:'bold'}}>Friends</Text>
</View>

<View style={{justifyContent:'center',width:'100%', height:'100%',position:'absolute'}}>
<TouchableOpacity
style={{alignSelf:'flex-end'}}
 onPress={() => {
    navigation.goBack();
                }}
>
<Image style={{width:26,height:26, alignSelf:'flex-end', }} source={require('../images/Buttons_Close.png')} />
</TouchableOpacity>

</View>



</View>

         </View>
  

            {/* <Appbar.Header style={{ backgroundColor: 'white',}}>

                <Appbar.Content style={{ alignItems: 'center' }} title="Friends" />
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                    // navigation.navigate('CardImage');
                }}>
                    <View >
                        <Icon name="cross" size={30} color='black' />
                    </View>
                </TouchableOpacity>
            </Appbar.Header>
            */}
            <View style={{ display: 'flex',height:40,justifyContent:'center', width:'100%',alignSelf:'center', paddingHorizontal:15, flexDirection: 'row', top: 3}}>
               
               <View style={{width:'100%', height:35 ,borderColor:'grey', borderWidth: 0.7, borderRadius: 20, flexDirection:'row'}}> 


               <TextInput

style={{ fontSize:13,height:35 ,paddingHorizontal:20,width:'93%',  alignSelf: 'center'  }}
placeholder="Search for Name, Surname and Username"
onChangeText={(text) => searchFilterFunction(text)}

/>

<TouchableOpacity style={{justifyContent:'center', }} >
                    <Iconn name="search1" style={{ alignSelf:'center', }} size={18} color="grey" />
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
                        contentContainerStyle={{ipaddingBottom: 50}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={filteredDataSource}
                    renderItem={renderlist}
                    keyExtractor={(item,index) => index.toString()}
                   

                    

                 />


          
            <BottomTabs />
        </SafeAreaView>
    );
}

export default AddFriends_Card;