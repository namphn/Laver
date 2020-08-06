import React, { useState, useEffect } from "react"
import {
    View,
    SafeAreaView,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from "react-native"
import { Text, Card, Badge, Button, Block } from "../components"
import GlobalStyles from "../GlobalStyles"
import { theme, mocks } from "../constants"

const { width, height } = Dimensions.get("window");

export default function Home(props) {
    const [state, setState] = useState({
        active: "Products",
        categories: []
    })

    const { profile } = props;
    
    const tabs = ["Products", "Inspirations", "Shop"];

    const renderImage = (img, index) => {
        const { navigation } = props;
        const sizes = Image.resolveAssetSource(img);
        const fullWidth = width - theme.sizes.padding * 2.5;
        const resize = (sizes.width * 100) / fullWidth;
        const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;

        return (
            <TouchableOpacity
                key={`img-${index}`}
                onPress={() => navigation.navigate("Post")}
            >
                <Image
                    source={img}
                    style={[styles.image, { minWidth: imgWidth, maxWidth: imgWidth }]}
                />
            </TouchableOpacity>
        );
    }


    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Block flex={false} row center space="between" style={styles.header}>
                <Text h1 bold>
                    Laver
                </Text>
                <Button onPress={() => navigation.navigate("Profile")}>
                    <Image source={profile.avatar} style={styles.avatar} />
                </Button>
            </Block>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.home}>
                <Block>
                    <Block style={{marginBottom: height / 13  }}>
                        <TouchableOpacity>
                            <Image source={mocks.explore[0]} style={[styles.image, styles.mainImage]} />
                        </TouchableOpacity>
                    </Block>
                    <Block row space="between" wrap>
                        {mocks.explore.slice(1).map((img, index) => renderImage(img, index))}
                    </Block>
                </Block>
            </ScrollView>
        </SafeAreaView>
    );
}



Home.defaultProps = {
    profile: mocks.profile,
    categories: mocks.categories
};


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2
    },
    tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
    active: {
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 3
    },
    categories: {
        flexWrap: "wrap",
        paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base * 3.5
    },
    category: {
        // this should be dynamic based on screen width
        minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
    },
    image: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - theme.sizes.padding,
        marginBottom: theme.sizes.base,
        borderRadius: 10
    },
    mainImage: {
        minWidth: width - theme.sizes.padding,
        minHeight: width - theme.sizes.padding,
    },
    home: {
        marginHorizontal: theme.sizes.padding
    }
});
