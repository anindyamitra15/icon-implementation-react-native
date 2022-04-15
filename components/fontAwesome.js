import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/style';

const FontAwesomeDemo = () => {
  const icons = ['glass', 'music', 'search'];
  return (
    <SafeAreaView>
      <Text style={styles.heading}>FontAwesome Icons</Text>
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


export default FontAwesomeDemo;
