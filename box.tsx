import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native'
import React, { memo } from 'react'
type box ={
    name : string,
    style?: StyleProp<ViewStyle>;
}
const Box = memo((props: box) => {
  return (
    <View style={[styles.box, props.style]}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  )
})

export default Box

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'white', 
        borderWidth: 2,           
        borderColor: 'black',     
        justifyContent: 'center', 
        alignItems: 'center',     
        marginTop: 20,            
        borderRadius: 8,          
    },
    text: {
        color: 'black',             
        fontWeight: 'bold',
    }
})