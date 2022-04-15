import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/style';

const IonIconDemo = () => {
  const icons = ['information', 'information-circle', 'notifications-outline'];

  return (
    <SafeAreaView>
      <Text style={styles.heading}>Ion Icons</Text>
      {icons.map((icon, index) => {
        return (
          <Icon style={styles.iconStyle} key={index} name={icon}>
            : {icon}
          </Icon>
        );
      })}
    </SafeAreaView>
  );
};



export default IonIconDemo;
