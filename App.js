import React from "react";
import {View, Text, StyleSheet} from "react-native"

export default function App(){
  return (

    <view style={styles.container}>
      <view style={styles.card}>
        <text style={styles.titulo}>
          ola
        </text>
      </view>
    </view>
  );

}
const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor: '#00bdecff',
  alignItems:'center',
  justifyContent: 'center',

},
card: {
  backgroundColor: '#fff',
  padding:20,
  borderRadius: 15,
  width: '80',
  alignItems: 'center',
  shadowColor: '#000',
}
}

)
