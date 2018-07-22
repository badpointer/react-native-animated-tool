import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const ButtonHighlight = ({onClick, text,buttonColor, fontColor}) => {
    const {buttonStyle,fontStyle} = styles;
    
    return (
        <TouchableHighlight underlayColor="white" onPress={onClick}>
            <View style={[buttonStyle, buttonColor]}>
                <Text style={[fontStyle,fontColor]}>
                    {text}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'green'
    },
    fontStyle: {
        color: 'white',
        padding: 15
    }
});



export {
    ButtonHighlight
}