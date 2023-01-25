import {Button, Text, View} from 'react-native'
import React from 'react'
import {useDispatch} from "react-redux";
import {logoutStatus} from "../../store/account";

const Account = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logoutStatus())
    }

  return (
    <View>
      <Text>Account</Text>
        <Button title="Wyloguj" onPress={logoutHandler}/>
    </View>
  )
}

export default Account
