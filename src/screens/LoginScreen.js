import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    TouchableOpacity,
    TextInput 
} from 'react-native'

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Hân hạnh phục vụ</Text>
            <Text style={styles.title1}>Quý khách</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder={"Tên tài khoản"}
                    placeholderTextColor={"#fff"}
                    style={styles.input1}
                />
                <TextInput
                    placeholder={"Mật khẩu"}
                    placeholderTextColor={"#fff"}
                    style={styles.input2}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.btnForgot}
                // onPress
                >
                    <Text style={styles.titleForgot}>Quên mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress ={ () => navigation.navigate("Home")}
                >
                    <Text style={styles.titleLogin}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e8ab00",
        // justifyContent: "center",
        alignItems: "center",
        padding: 16,
        flex: 1,
        height: "100%"
    },
    title: {
        color: "#0a4955",
        fontSize: 28,
        fontWeight: "700",
    },
    title1: {
        color: "#0a4955",
        fontSize: 36,
        fontWeight: "700",
    },
    logo: {
        width: 140,
        height: 140
    },
    form: {
        width: "90%"
    },
    input1: {
        borderBottomWidth: 1,
        borderBottomColor: "#0a4955",
        color: "#0a4955"
    },
    input2: {
        borderBottomWidth: 1,
        borderBottomColor: "#0a4955",
        color: "#0a4955"
    },
    button: {
        flexDirection: "row",
        marginTop:8,
        // justifyContent:"space-between"
    },
    btnForgot:{
        alignSelf:"flex-start",
        // backgroundColor:"#fff",
        width:"45%"
    },
    titleForgot:{
        color:"#0a4955",
    },
    btnLogin:{
        alignSelf:'flex-end',
        // backgroundColor:"#fff",
        width:"45%"
    },
    titleLogin:{
        color:"#0a4955",
        fontWeight:"700",
        alignSelf:"flex-end",
    }

})
