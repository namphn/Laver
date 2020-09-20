import React, {useEffect} from "react"
import {
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList
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

export default function PeopleSearch(props) {

    const {
        navigation,
    } = props;

    const renderImages = ({ item }) => {
        return (
            <Image resizeMode="contain" source={{uri: item.url}} style={styles.image} />
        )
    }

    const goToProfileScreen = () => {
        navigation.navigate("OtherPeopleProfile");
    }

    return (
        <Block style={styles.mainContainer}>
            <TouchableOpacity onPress={goToProfileScreen}>
                <Block flex={false} style={styles.container} center>
                    <Image source={{uri: props.avatar}} style={styles.friendAvatar} />
                    <Block flex={false} >
                        <Text style={styles.friendName}>{props.name}</Text>
                    </Block>
                </Block>
            </TouchableOpacity>
            <Block flex={false}>
                {
                    props.images ? (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={props.images}
                            renderItem={renderImages}
                            style={{ paddingTop: 5 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        ></FlatList>
                    ) : null
                }
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingLeft: width / 20,
        paddingRight: width / 20,
        paddingTop: 15,
        borderBottomColor: "white",
    },
    friendAvatar: {
        width: width / 10,
        height: width / 10,
        borderRadius: width / 20
    },
    friendName: {
        fontWeight: "bold",
        fontSize: 16,
        paddingLeft: 20,
    },
    followButtonContainer: {
        height: width / 40,
    },
    followButton: {
        height: 35,
        width: width / 6,
    },
    image: {
        height: "100%",
        width: 100,
        resizeMode: "stretch",
        margin: 5,
        aspectRatio: 1.5
    },
    mainContainer: {
        shadowOffset: {width: 2, height: 2},
        shadowColor: "black",
        shadowOpacity: 0.2,
    }
})
