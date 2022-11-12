import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'

const Login = ({onPress, login}) => {

    const loginHandler = () => {
        login()
        return (
            Alert.alert("Zalogowano pomyślnie", "Zostałeś przekierowny na twój profil.")

        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text>Zaloguj się</Text>
                <View>
                    <TextInput style={styles.input} placeholder="Login"/>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Hasło"/>
                </View>
                <Button title="Zaloguj" onPress={loginHandler}/>
            </View>
            <View>
                <Text>Jeśli nie masz konta</Text>
                <Button title="Zarejestruj się" onPress={onPress}/>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 50
    },
    loginContainer: {
        height: "60%",
        alignItems: "center",
    },
    input: {
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 16,
        height: 50,
        width: 300,
        padding: 10
    }
})