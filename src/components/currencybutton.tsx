import React from 'react'
import { PropsWithChildren } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type CurrencyButtonProps = PropsWithChildren<
    {
        name: String;
        flag: String
    }>

const Currencybutton = (props: CurrencyButtonProps): JSX.Element => {

    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flags}>{props.flag}</Text>
            <Text style={styles.countary}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {

        alignItems: 'center'
    },
    flags: {
        fontSize: 28,
        color: 'red',
        backgroundColor: 'white',
        marginTop: 8,
        alignItems: 'center',
        alignContent: 'center'

    },
    countary: {
        backgroundColor: 'white',
        fontSize: 28,
        color: 'black',

        marginTop: 8


    }
})
export default Currencybutton