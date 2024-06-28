import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Worker2({...props}) {
    const { item } = props

  return (

    <View style={styles.container}>
          <View className='bg-primary h-3/5 p-1 mx-1 my-0 justify-center items-center rounded-full'>
        <Text>avatar</Text>
      </View>
          <View className='space-y-1   w-5/6 pr-5'>
            <View className='flex-row justify-between items-center px-1 h-1/2'>
                  <Text style={styles.textmain}  >Elmasri ahmed </Text>
                  <View className='flex-row items-center space-x-1'>
                    <Text style={styles.textsub} > 4.5</Text>
                      <Ionicons name='star' color={"#FFA500"}/>
                  </View>
            </View>
       <View className='h-1/2'>
                  <Text style={styles.textsub} >foxdeath100@gmail.com   </Text>
                  <Text style={styles.textsub}>+213540430098</Text>
       </View>
        
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap', 
        backgroundColor: 'white',
        padding: 3,
        width: "98%",
        height: "100%",
        margin: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textmain:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    textsub:{
        fontSize: 14,
        color: 'grey',
    }
})