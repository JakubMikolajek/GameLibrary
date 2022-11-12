import {Alert, Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Account = ({logout}) => {
    const logoutHandler = () => {
        Alert.alert("Wylogowano pomyślnie", "Zostałeś przekierowany do okna logowania.")
        logout()
    }

  return (
    <View>
      <Text>Account</Text>
        <Button title="Wyloguj" onPress={logoutHandler}/>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})