import React from 'react'
import { View, Image, StyleSheet } from 'react-native'



export default function Notifi(props) {
    const {
        backgroundColor
    } = props

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/explore_3.png')}
                style={styles.avatar}
            />
        </View>
    )

  
}

const styles = StyleSheet.create({
    avatar: {
        width: 60, 
        height: 60, 
        borderRadius: 60 / 2
    },
    container: {
        height: 70,
        paddingTop: 2,
        paddingBottom: 2,
    }
})





