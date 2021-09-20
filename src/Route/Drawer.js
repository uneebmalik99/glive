
import React from 'react';
import { View,TouchableOpacity,SafeAreaView, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import{ AuthContext } from './context';


export function DrawerContent(props) {

    const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        
        <View style={{flex:1 ,  backfaceVisibility:'hidden',     backgroundColor:'#2F3B64',    }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginVertical:12,}}>
                            <TouchableOpacity style={{alignSelf:'flex-start', }}
                            onPress={ () =>props.navigation.closeDrawer()


                            }
                            >
                            <MaterialIcons name='arrow-back-ios' color='white' size={20}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:10,  marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>User Name</Title>
                                <Caption style={styles.caption}>user ID 20556</Caption>
                            </View>
                        </View>
                        <TouchableOpacity >
                            <View style={{marginLeft:8}}>
                                <Text style={styles.textstyle}>user@icloud.com</Text>
                                <Text style={styles.textstyle}>811.599.9090</Text>

                            </View>
                        </TouchableOpacity>  
                       
                        {/* <Caption style={styles.caption}>user@icloud.com</Caption>
                                <Caption style={styles.caption}>811.599.9090</Caption> */}
                      
                    </View>

               <View style={{height:3}}>

               </View>
                    <View style={{height:1.2 ,width:'80%' ,marginVertical:8,marginTop:10, backgroundColor:'white', justifyContent:'center', alignSelf:'center'}}> 

</View>
                    <TouchableOpacity 
                      onPress={() => {
                        props.navigation.navigate('Home');
                    }}
                    >
                            <View style={styles.preference}>
                                <Text style={styles.textstyle}>Home</Text>
                               
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text  style={styles.textstyle}>News and Actualizations</Text>
                               
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity 
                          onPress={() => {
                           props.navigation.navigate('ServicesStore');
                        }}
                        >
                            <View style={styles.preference}>
                                <Text style={styles.textstyle}> Service Store</Text>
                               
                            </View>
                        </TouchableOpacity>

                      

                        <View style={{height:1.2 ,width:'80%' ,marginVertical:8, backgroundColor:'white', justifyContent:'center', alignSelf:'center'}}> 

                        </View>


                    <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text  style={styles.textstyle}>GIGS</Text>
                               
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text  style={styles.textstyle}>Messenger</Text>
                               
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text  style={styles.textstyle}>Wallet</Text>
                               
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text  style={styles.textstyle}>Smart Home</Text>
                               
                            </View>
                        </TouchableOpacity>

                        <View style={{height:1.2 ,width:'80%' ,marginVertical:8, backgroundColor:'white', justifyContent:'center', alignSelf:'center'}}> 

                        </View>




                        <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text style={styles.textstyle} >Configurations</Text>
                               
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text style={styles.textstyle}>FAQ</Text>
                               
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text style={styles.textstyle}>Retro</Text>
                               
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <View style={styles.preference}>
                                <Text style={styles.textstyle}>About</Text>
                               
                            </View>
                        </TouchableOpacity>

                        <View style={{marginTop:50,marginBottom:20, marginLeft:25, justifyContent:'center'}}>
                                <TouchableOpacity style={{backgroundColor:'#f14057',padding:10, width:90,borderRadius:10, justifyContent:'center'}}>
                                <Text style={{color:'white', alignSelf:'center', fontWeight:'bold'}}>Logout</Text>

                                </TouchableOpacity>
                                <Text style={{color:'white',marginLeft:5, marginTop:15, fontSize:13, fontWeight:'bold'}}> V 3.3.1</Text>

                        </View>



                 
                    
                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                style={{marginLeft:35}}
                    
                    label="Logout"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        backgroundColor:'#2F3B64',
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    textstyle:{
        color:'white',
        paddingVertical:2,
    }, 
    title: {
      fontSize: 15,
      marginTop: 3,
      color:'white', 
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      fontWeight: 'bold',
      color:'white',

      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        backgroundColor:'#2F3B64',

    
    },
    preference: {
      paddingVertical: 3,
      marginLeft:30
    },
  });