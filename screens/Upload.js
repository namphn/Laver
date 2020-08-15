import React from "react"
import {
    Text,
    Block,
} from "../components"
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { theme } from "../constants"

export default function Upload({navigation}) {

    const goBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView>
            <Block flex={false} row style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
                <Text h3 paddingLeft>Create Posts</Text>
            </Block>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: theme.sizes.base,
    },
    backButton: {
        paddingLeft: 20
    }
})
