import React from "react"
import { Text, Block } from "../components"
import { Image, Dimensions } from "react-native"


const { width, height } = Dimensions.get("window");

export default function Welcome() {
    return (
        <Block>
            <Image style={{ width: width, height: height}} source={require("../assets/splash.png")} />
        </Block>
    )
}
