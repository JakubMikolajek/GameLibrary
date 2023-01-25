import {Button, Text, View} from 'react-native'
import React, {useContext} from 'react'
import {AuthContext} from "../../store/auth-context";

const Account = () => {
    const authCtx = useContext(AuthContext)
    const logoutHandler = () => {
        authCtx.logoutFn()
    }

  return (
    <View>
      <Text>Account</Text>
        <Button title="Wyloguj" onPress={logoutHandler}/>
    </View>
  )
}

export default Account
