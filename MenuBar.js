import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, StatusBar, TextInput } from 'react-native';
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
        <View style={{flex:1 , backgroundColor:'#D2E0FB'}}>
            <View style={{padding: 10}}>
            <Image source={require('../data/mountaingologo.png')} style={styles.image}/>
            <View style={{flexDirection: 'row'}}>
            </View>
            
            <Text style={styles.title}>PERSEBARAN PEGUNUNGAN DI PAPUA</Text>
            <Text style={{textAlign:'center', marginTop: '20'}}>Aplikasi ini banyak errornya</Text>
            <View style={styles.card}>
              <View style={styles.avatar}>
                
            <Text>Stack:</Text>
            <Text>1. React Native</Text>
            <Text>2. Google Sheet</Text>
            <Text>3. Leaflet</Text>
            <Text>4. HTML</Text>
            <Text>5. Apps Script</Text>
            <Text>6. Font Awesome 5</Text>
            <Text>7. GitHub</Text>
            </View>
            </View>

            </View>

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
                backgroundColor: '#8EACCD',
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
  }
});