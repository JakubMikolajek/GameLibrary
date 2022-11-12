import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'

const Register = ({onPress}) => {

    const registerHandler = () => {
        return (
            Alert.alert("Zarejestrowano pomyślnie", "Po zamknięciu okna zostaniesz przekierowny na twój profil.")
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.registerContainer}>
                <Text>Zarejestruj się</Text>
                <View>
                    <TextInput style={styles.input} placeholder="Email"/>
                    <TextInput style={styles.input} placeholder="Login"/>
                    <TextInput style={styles.input} placeholder="Hasło" secureTextEntry={true}/>
                    <TextInput style={styles.input} placeholder="Potwierdź hasło" secureTextEntry={true}/>
                </View>
                <Button title="Zarejestruj" onPress={registerHandler}/>
            </View>
            <View>
                <Text>Masz już konto?</Text>
                <Button title="Zaloguj się" onPress={onPress}/>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 50
    },
    registerContainer: {
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