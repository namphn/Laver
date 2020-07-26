import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import GlobalStyles from '../GlobalStyles'
import { Block, Badge, Card, Text } from '../components'
import { theme } from '../constants'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get("window");

export default function Profile() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Block >
                <Block flex={false}>
                    <Image source={require('../assets/images/plants_1.png')} style={styles.cover} resizeMode='cover' />
                </Block>
                <Block flex={false} >
                    <Block flex={false} left padding={100} style={styles.info}>
                        <Block flex={false} style={styles.name}>
                            <Text h2 bold>Phạm Hoàng Nam</Text>
                        </Block>
                        <Block flex={false} wrap row space='between'>
                            <Block flex={false} row>
                                <Icon name='location-on' size={17} color='#0dd686' style={{ paddingRight: 4 }} />
                                <Text bold color={theme.colors.brow}>Hà Nội</Text>
                            </Block>
                            <Block flex={false} row>
                                <Icon name='location-city' size={17} color='#0dd686' style={{ paddingRight: 4 }} />
                                <Text bold color={theme.colors.brow}>Việt Nam</Text>
                            </Block>
                        </Block>
                        <Block flex={false} style={styles.description}>
                            <Text>my favorite foods are oners that are made with love and happoness. follow me fo ther best tasbes in Viet Nam</Text>
                        </Block>
                        <Block flex={false} wrap row space='between' style={styles.follow}>
                            <Block flex={false}>
                                <Text bold h2>212</Text>
                                <Text h3 color='gray' >Followers</Text>
                            </Block>
                            <Block flex={false}>
                                <Text bold h2>2.5K</Text>
                                <Text h3 color='gray' >Following</Text>
                            </Block>
                        </Block>
                    </Block>
                </Block>
                <ScrollView>
                    <Block row>
                        <Block row flex={false}>
                            <Text>category</Text>
                        </Block>
                        <Block>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity style={styles.ListImage}>
                                    <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.ListImage}>
                                    <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                                </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                                    <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                                </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                                    <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                                </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                                    <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                                </TouchableOpacity>
                            </ScrollView>
                        </Block>
                    </Block>


                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity><TouchableOpacity style={styles.ListImage}>
                            <Image source={require('../assets/images/explore_4.png')} style={styles.image} />
                        </TouchableOpacity>
                    </ScrollView>
                </ScrollView>

            </Block>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base * 2,
        paddingTop: theme.sizes.base
    },
    cover: {
        height: height / 4,
        width: width,
        borderRadius: 10
    },
    info: {
        paddingHorizontal: width / 8,
        paddingTop: 10
    },
    description: {
        paddingTop: 5
    },
    name: {
        paddingBottom: 10
    },
    follow: {
        paddingTop: 8
    },
    ListImage: {
        paddingLeft: width / 8,
        paddingTop: 8,
        flexDirection: 'row',
        paddingLeft: 7
    },
    image: {
        borderRadius: 12
    }
})
