import { useRoute } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Header from '../components/Header'
import useAuth from '../hooks/useAuth'
import getMatchedUserInfo from '../lib/getMatchedUserInfo'

const MessageScreen = () => {
    const { user } = useAuth()
    const { params } = useRoute()

    const { matchDetails } = params
    return (
        <SafeAreaView>
            <Header
                title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName}
                callEnabled
            />
            <Text>Message screen</Text>
        </SafeAreaView>
    )
}

export default MessageScreen
