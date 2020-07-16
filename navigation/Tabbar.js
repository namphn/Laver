import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import Homeicon from '../icons/HomeIcon'

const tabs = [
    { icon: <Homeicon/> },
]

export default function Tabbar() {
    return (
        <div>
            
        </div>
    )
}

const styles = StyleSheet.create({
    containter: {
        backgroundColor: 'white'
    },
    tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 40,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})