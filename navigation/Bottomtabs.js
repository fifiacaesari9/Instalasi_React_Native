import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const webmap= require('../peta/map.html');
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <ScrollView>
          <Text style={styles.title}>My Maps</Text>
            <View style ={styles.listitems}>
              <Image source={require('../peta/Peta1.jpg')}style={styles.image}/>
             
              <Text style= {styles.caption}> Peta Perwilayahan DAS Tinalah Metode Median Elevasi </Text>
            </View>

            <View style ={styles.listitems}>
              <Image source={require('../peta/Peta2.jpg')}style={styles.image}/>
             
              <Text style= {styles.caption}> Peta Tentatif Habitat Bentik </Text>
            </View>

        </ScrollView>
    );
}
function MapScreen() {
    return (
            <WebView
        source={ webmap }
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
function MahasiswaScreen() {
  return (
      <View>
          <Getjsonfile/>
      </View>
  );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={HomeScreen} options={{
	tabBarLabel: 'Home',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="home" color={color} size={size} />
	),
}}
/>
                <Tab.Screen name="Maps" component={MapScreen} options={{
	tabBarLabel: 'Map',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="map-marked-alt" color={color} size={size} />
	),
}} />
<Tab.Screen name="Profile" component={ProfileScreen} options={{
	tabBarLabel: 'Profile',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="user-circle" color={color} size={size} />
	),
}} />
<Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
	tabBarLabel: 'Mahasiswa',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="users" color={color} size={size} />
	),
}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: '100%', 
    height: 600,
    resizeMode: 'stretch'
  },
  listitems: {
    padding: 20,
    alignItem : 'center',

  },
  caption : {
    fontSize : 14,
    fontWeight : 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 10,
  }
});