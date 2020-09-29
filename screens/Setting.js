import React from "react"
import { Text, Block } from "../components"
import { StyleSheet, Image } from "react-native"
import {mocks} from "../constants"

export default function Setting() {
    return (
        <Block flex={false} style={styles.mainContainer}>
            <Block style={{paddingTop: 20}} flex={false}>
                <Text h2 bold left >Setting</Text>
            </Block>
            {/* <Block flex={false}>
                <Image source={mocks.profile.avatar1}/>
            </Block> */}
        </Block>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingLeft: 20,
    }
})