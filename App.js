/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import IonIconDemo from './components/ionicon';
import FontAwesomeDemo from './components/fontAwesome';
import {useColorScheme, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignDemo from './components/antdesign';
const App = () => {
  return <BottomTabNavigator />;
};

export default App;

const BottomTabNavigator = () => {
  const BottomNav = createBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    width: Dimensions.get('window').width,
  };

  return (
    <NavigationContainer>
      <BottomNav.Navigator
        screenOptions={route => ({
          tabBarIcon: props => {
            const icon_map = {
              FontAwesome: 'animation',
              Ionicon: 'emoji-emotions',
              AntDesign: 'auto-fix-high'
            };
            return (
              <Icon name={icon_map[route.route.name] || 'menu'} {...props} />
            );
          },
          tabBarActiveTintColor: '#02adeb',
          tabBarInactiveTintColor: '#7091b8',
        })}
        initialRouteName="FontAwesome">
        <BottomNav.Screen name="FontAwesome" component={FontAwesomeDemo} />
        <BottomNav.Screen name="Ionicon" component={IonIconDemo} />
        <BottomNav.Screen name="AntDesign" component={AntDesignDemo} />
      </BottomNav.Navigator>
    </NavigationContainer>
  );
};
