import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';

const webmap= require('../peta/map.html');
const Tab = createBottomTabNavigator();

//Form input dari Github pages
const forminput = ' https://fifiacaesari9.github.io/GunungJawa/';

// Peta Web dari github pages
const petaweb = 'https://fifiacaesari9.github.io/GunungJawa/map.html';


function HomeScreen() {
    return (
        <View style={{flex:1 , backgroundColor:'#99A98F'}}>
            <View style={{padding: 0}}>
            </View>
            <View style={{
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              paddingHorizontal: 0, 
              paddingTop: 0}}>
              <View>
                <Text style= {{color: '#000', fontSize: 30}}>WELCOME TO</Text>
                <Text style= {{color: '#000', fontSize: 50}}>MOUNTAIN</Text>
                <Text style= {{color: '#000', fontSize: 50}}>GO</Text>
              </View>
              <View style={{ marginLeft: 'auto',marginRight: 'auto',}}>
              <Image source={require('../data/headergunung.png')}/>

              </View>
            </View>
            <View style={{backgroundColor: '#E1C78F', flex: 1, borderTopLeftRadius:30, borderTopRightRadius: 30, paddingHorizontal: 30,
          paddingTop: 30 }}>

               <View style={{flexDirection:'row', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 60}}>
               <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}}>
               <View style={{backgroundColor: '#C07F00', paddingVertical: 15, paddingHorizontal:20,
              borderRadius: 10, marginBottom: 10}}>
                 <Fontawesome5 name="newspaper"color="white" width="40" height="40"/>
                 </View>
                <Text>News</Text>
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}}>
               <View style={{backgroundColor: '#C07F00', paddingVertical: 15, paddingHorizontal:20,
              borderRadius: 10, marginBottom: 10}}>
                 <Fontawesome5 name="road"color="white" width="40" height="40"/>
                 </View>
                <Text>Recommendation</Text>
               </TouchableOpacity>
               
               <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}}>
               <View style={{backgroundColor: '#C07F00', paddingVertical: 15, paddingHorizontal:20,
              borderRadius: 10, marginBottom: 10}}>
                 <Fontawesome5 name="shoe-prints"color="white" width="40" height="40"/>
                 </View>
                <Text>Tracking</Text>
               </TouchableOpacity>
               </View>
               
               <View style={{flexDirection:'row', justifyContent: 'space-between', marginHorizontal: 35, marginTop: 60}}>
               <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}}>
               <View style={{backgroundColor: '#C07F00', paddingVertical: 15, paddingHorizontal:20,
              borderRadius: 10, marginBottom: 10}}>
                 <Fontawesome5 name="toolbox" color="white" width="40" height="40"/>
                 </View>
                <Text>Starter Pack</Text>
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}}>
               <View style={{backgroundColor: '#C07F00', paddingVertical: 15, paddingHorizontal:20,
              borderRadius: 10, marginBottom: 10}}>
                 <Fontawesome5 name="image"color="white" width="40" height="40"/>
                 </View>
                <Text>Photo</Text>
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.7} style={{alignItems:'center'}}>
               <View style={{backgroundColor: '#C07F00', paddingVertical: 15, paddingHorizontal:20,
              borderRadius: 10, marginBottom: 10}}>
                 <Fontawesome5 name="people-arrows"color="white" width="40" height="40"/>
                 </View>
                <Text>Rent</Text>
               </TouchableOpacity>
               
               </View>
               </View>
               <View></View>
            </View>
            
            
    );
}
function MapScreen() {
    return (
            <WebView
        source={{ uri: petaweb}}
      />
       
    );
}
function AddDataScreen() {
    return (
            <WebView
        source={{ uri: forminput}}
      />
       
    );
}
function ProfileScreen() {
    return (
        <View>
            <Portofolio/>
        </View>
    );
}
function CallapiScreen() {
  return (
      <View>
          <Callapi/>
      </View>
  );
}


function MyTabs() {
    return (
     
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={({route}) => ({
              tabBarHideOnKeyboard: false,
              tabBarStyle: {
                display: 'flex',
                position: 'absolute',
                bottom: 20,
                left: 25,
                right: 25,
                elevation: 5,
                backgroundColor: '#4C3D3D',
                borderRadius: 30,
                height: 60,
              },
              tabBarShowLabel: true,
              headerShown: false,
            })}

            tabBarOptions={
              {
                  style: {
                      height: 50,
                      width: 300,
                      flexDirection: 'column',
                      alignSelf: 'center',
                      elevation: 2,
                      borderTopStartRadius: 5,
                      borderTopEndRadius: 3,
  
                  },
                  activeTintColor: '#FFF',
              }
          }
      >
                <Tab.Screen name="Home"  component={HomeScreen} options={{
	tabBarLabel: 'Home',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="home" color={color} size={size} />
	),
}}
/>
                <Tab.Screen name="Maps"  component={MapScreen} options={{
	tabBarLabel: 'Map',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="map-marked-alt" color={color} size={size} />
	),
}} />
                <Tab.Screen name="Add Data" component={AddDataScreen} options={{
	tabBarLabel: 'Add Data',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="plus-circle" color={color} size={size} />
	),
}} />
<Tab.Screen name="Mountain List" component={CallapiScreen} options={{
	tabBarLabel: 'Mountain List',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="mountain" color={color} size={size} />
	),
}} />
<Tab.Screen name="Profile" component={ProfileScreen} options={{
	tabBarLabel: 'Profile',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="user-circle" color={color} size={size} />
	),
}} />
            </Tab.Navigator>
            
        </NavigationContainer>
       
    );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    position: 'relative',
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    
  },
  listitems: {
    padding: 80,
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  caption : {
    fontSize : 14,
    fontWeight : 'bold',
  },
  title: {
    paddingVertical: 10,
    backgroundColor: '#FFF',
    color: '#265073',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 20,
    marginVertical: 7,
  },

  container: {
      marginHorizontal: 20,
      marginTop: 20,
      padding: 20, 
      backgroundColor: '#f0f0f0',
     
  },
  
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#A9B388',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },

  tabText: {
    color: '#D2E0FB',
  },

  textcolor: {
    alignItems: 'center',
    color: '#3081D0',
  },
});