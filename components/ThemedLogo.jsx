import { Image, useColorScheme } from 'react-native'
import React from 'react'


// images
import DarkLogo from '../assets/icon.png'
import LightLogo from '../assets/icon_11zon.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo