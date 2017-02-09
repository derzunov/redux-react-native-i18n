import translate from 'translatr'
import React from 'react'
import { Text } from 'react-native'

const Loc = ({ currentLanguage, locKey, number, dictionary, dispatch, ...rest }) => {
    return <Text { ...rest }>
        { translate( dictionary, currentLanguage, locKey, number ) }
    </Text>
}

export default Loc