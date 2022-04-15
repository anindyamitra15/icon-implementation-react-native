import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from '../styles/style';

const AntDesignDemo = () => {
  const icons = ['stepforward', 'stepbackward', 'forward'];
  return (
    <SafeAreaView>
      <Text style={styles.heading}>AntDesign Icons</Text>
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


export default AntDesignDemo;
