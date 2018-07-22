import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const CurvedHeader = (props) => {
    const {header,textContainer, fontStyle} = styles;
    return (
        <View style={header} >
            <View style={textContainer}>
                <Text>HEADER</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 65,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderLeftWidth: 1.5,
        borderBottomWidth: 2.5,
        borderRightWidth: 1.5,
        borderColor: '#EDF3',
        opacity: .7,
        backgroundColor: '#EAEEEE'
        //Continer
    },
    textContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    fontStyle: {
        color: '#EDF3',
        fontWeight: 'bold',
        lineHeight:2,
    }
})

export {
    CurvedHeader
}