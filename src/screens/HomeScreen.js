import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native'

const DATA = [
    {
        id: '1',
        nameFood: 'Trà dâu bười hồng',
        image: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-0/p526x296/192361802_303751681339899_2688367173543877982_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=_jx7lp_eDQsAX9SWHmi&_nc_ht=scontent.fhan2-3.fna&tp=6&oh=6d6ef349223fdc774ec6ccf62d4fb320&oe=60CD2FFE',
        fromFood: 'Đồng Nai',
        cost: 46,
        unit: ".000 vnĐ",
        rating: 5,
        amount: 20,
        fav: true,
        address: '1096 phạm văn thuận, p. Tân Mai, Biên Hoà'
    },
    {
        id: '2',
        nameFood: 'Trà nho đen táo xanh',
        image: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/186520706_303762224672178_3023130426650851283_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=nm2tPgk7-ckAX-GHdJb&_nc_ht=scontent.fhan2-4.fna&oh=671386e8aa2b5bfbd56c943e3d7f3a8f&oe=60CC6708',
        fromFood: 'Đồng Nai',
        cost: 46,
        unit: ".000 vnĐ",
        rating: 5,
        amount: 20,
        fav: true,
        address: '1096 phạm văn thuận, p. Tân Mai, Biên Hoà'
    },
    {
        id: '3',
        nameFood: 'Xoài đá xay thạch thỏ',
        image: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/189947170_303762214672179_4851844174919730415_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=_RfeLuEWG2oAX-fe6YL&tn=dbdl0shCwpLHn4ZG&_nc_ht=scontent.fhan2-2.fna&oh=a6aaebea221d3f837dc4250161c60b6e&oe=60CD5601',
        fromFood: 'Đồng Nai',
        cost: 46,
        unit: ".000 vnĐ",
        rating: 5,
        amount: 20,
        fav: true,
        address: '1096 phạm văn thuận, p. Tân Mai, Biên Hoà'
    },
    {
        id: '4',
        nameFood: 'Trà bali bách hương',
        image: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/171779996_274540720927662_6263091838012459983_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=z7m3EpY2r9sAX827FjB&_nc_ht=scontent.fhan2-2.fna&oh=5b0c9e8f285dbe2e11fe7598f8e4854a&oe=60CDA0AB',
        fromFood: 'Đồng Nai',
        cost: 46,
        unit: ".000 vnĐ",
        rating: 5,
        amount: 20,
        fav: true,
        address: '1096 phạm văn thuận, p. Tân Mai, Biên Hoà'
    },
    {
        id: '5',
        nameFood: 'Trà kiwi dưa lưới',
        image: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/171995241_274540677594333_5498603210590828989_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=OU0pmIyvnZUAX_JYrp9&_nc_ht=scontent.fhan2-4.fna&oh=415e766a32dcbd68698d17e0625fcddf&oe=60CCBE7D',
        fromFood: 'Đồng Nai',
        cost: 46,
        unit: ".000 vnĐ",
        rating: 5,
        amount: 20,
        fav: true,
        address: '1096 phạm văn thuận, p. Tân Mai, Biên Hoà'
    },
];

const renderItemH = ({ item }) => (
    <View style={styles.itemH}>
        <Image source={{ uri: item.image }} style={styles.imgItem} />
        <Text style={styles.nameFoodH}>{item.nameFood}</Text>
        <Text style={styles.fromFoodH}>{item.fromFood}</Text>
    </View>
);
const renderItemV = ({ item }) => (
    <TouchableOpacity
        style={styles.itemV}
        // onPress={() => navigation.navigate('Profile', item)}
    >
        <Image source={{ uri: item.image }} style={styles.imgItem} />
        <View style={styles.boxV}>
            <Text style={styles.nameFoodV}>{item.nameFood}</Text>
            <Text style={styles.fromFoodV}>{item.fromFood}</Text>
            <Text style={styles.cost}>{item.cost}{item.unit}</Text>
            <Text style={styles.address}>
                {item.address}
            </Text>
        </View>
        {/* <Dot
            name="dot-single"
            size={42}
            color={item.amount === 0 ? 'red' : 'green'}
            style={styles.dotstatus}
        /> */}
    </TouchableOpacity>
);

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* <View style={styles.header}>
                    <TextInput
                        style={styles.input}
                    />
                </View> */}

                <View style={styles.article}>
                    <Text style={styles.titleSlider}>Khám phá</Text>
                    <Text style={styles.titleSlider}>Món ngon của La Ann</Text>
                    <FlatList
                        style={styles.flatListH}
                        data={DATA}
                        renderItem={renderItemH}
                        horizontal
                    // keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.footer}>
                    <View style={styles.nearme}>
                        <Text>Gần tôi</Text>
                    </View>
                    <FlatList
                        style={styles.flatListV}
                        data={DATA}
                        renderItem={renderItemV}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        backgroundColor: "#e8ab00",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: 16
    },
    input: {
        borderRadius: 15,
        backgroundColor: "#fff",
        height: 28,
        fontSize: 12,
        padding: 8,
        width: 240,
        marginRight: 8
    },
    article: {
        // backgroundColor: "#900",
        height: 280,
        // borderBottomColor:"#a5b1c2",
        // borderBottomWidth:1,
    },
    titleSlider: {
        color: "#000",
        fontSize: 28,
        fontWeight: "700",
        marginHorizontal: 12,
    },
    flatListH: {
        marginLeft: 12,
        marginTop: 6
    },
    itemH: {
        marginRight: 16
    },
    nameFoodH: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
        marginTop: 4,
    },
    fromFoodH: {
        fontSize: 16,
        color: "#000",
        opacity: 0.8,
        marginTop: 4,
    },
    imgItem: {
        width: 100,
        height: 120,
        borderRadius: 10
    },
    itemV: {
        flexDirection: "row",
        marginBottom: 12,
    },
    boxV: {
        marginLeft: 12,
        paddingVertical: 8,
        width: 160
    },
    nameFoodV: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
    },
    fromFoodV: {
        fontSize: 16,
        color: "#000",
        opacity: 0.8,
        marginTop: 4,
    },
    cost: {
        color: "#900",
        fontSize: 16,
        marginTop: 4
    },
    address: {
        color: "#a5b1c2",
    },
    dotstatus: {
        alignSelf: "flex-end",
        marginBottom: 100
    },
    line: {
        backgroundColor: "#a5b1c2",
        marginHorizontal: 12,
        height: 1
    },
    footer: {
        marginHorizontal: 12,
        marginTop: 6
    },
    nearme: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
