import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    View,
    TouchableOpacity
} from "react-native"
import {
    Text,
    Block,
    Button,
    Input
} from "../components"
import GlobalStyles from "../GlobalStyles"
import { theme, mocks } from "../constants"
import IonIcon from "react-native-vector-icons/Octicons"

const { width, height } = Dimensions.get("window");

export default function People(props) {

    const { navigation } = props;

    return (
        <TouchableOpacity>
            <Block flex={false} style={styles.container} color="white" shadow>
                <Image source={mocks.profile.avatar} style={styles.friendAvatar} />
                <Block flex={false} center >
                    <Text style={styles.friendName}>Phạm Hoàng Nam</Text>
                    <Text>Thái Nguyên, Việt Nam</Text>
                </Block>
                <Block flex={false} style={styles.followButtonContainer}>
                    <Button gradient style={styles.followButton} center startColor={theme.colors.green} endColor="#28f7ed">
                        <Text bold center color="white">Follow</Text>
                    </Button>
                </Block>
            </Block>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingLeft: width / 20,
        paddingRight: width / 20,
        marginTop: 15,
        paddingTop: 15,
        justifyContent: "space-between",
        borderBottomColor: "white",
        borderBottomWidth: 2
    },
    friendAvatar: {
        width: width / 7,
        height: width / 7,
    },
    friendName: {
        paddingTop: width / 60,
        fontWeight: "bold",
        fontSize: 16
    },
    followButtonContainer: {
        height: width / 40,
    },
    followButton: {
        height: 35,
        width: width / 6,
    }
})
