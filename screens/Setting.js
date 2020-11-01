import React from "react"
import { Text, Block } from "../components"
import {
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native"
import FeatherIcon from "react-native-vector-icons/Feather"
import { mocks, theme } from "../constants"
import Icon from "react-native-vector-icons/Feather"
import {useDispatch} from "react-redux"
import {logOutAction} from "../actions/autthenAction"
import {logOut} from "../services/AuthService"

const { width, height } = Dimensions.get("window");

export default function Setting() {

    const dispatch = useDispatch();

    const onLogoutPress = () => {
        logOut();
        dispatch(logOutAction());
    }

    return (
        <Block flex={false} >
            <Block style={styles.header} flex={false}>
                <Text h2 bold left >Setting</Text>
            </Block>
            <Block flex={false} center style={{ paddingTop: 20 }}>
                <Image style={styles.avatar} source={{ uri: mocks.profile.avatar }} />
                <Block flex={false} style={{ paddingTop: 20 }}>
                    <Text h4 bold>Phạm Hoàng Nam</Text>
                </Block>
                <TouchableOpacity >
                    <Block flex={false} row style={{ paddingTop: 10 }}>
                        <Icon size={15} name="edit" color={theme.colors.green} />
                        <Block flex={false}
                            style={{ paddingLeft: 10 }}>
                            <Text color={theme.colors.green}>Edit profile</Text>
                        </Block>

                    </Block>
                </TouchableOpacity>
            </Block>
            <TouchableOpacity style={styles.logout} onPress={onLogoutPress}>
                <Block row center>
                    <Icon name="log-out" size={25} />
                    <Block style={{ paddingLeft: 10 }} flex={false}>
                        <Text h3 color={theme.colors.black}>Log out</Text>
                    </Block>
                </Block>
            </TouchableOpacity>
        </Block>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingLeft: 20,
    },
    header: {
        paddingTop: 20,
        paddingLeft: 20,
    },
    avatar: {
        width: width / 5,
        height: width / 5,
        borderRadius: width / 8,
    },
    logout: {
        position: "absolute",
        top: height - 100,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 15,      
        borderTopColor: "black",
        width: width * 2/3,
        borderTopWidth: 0.5
    }
})