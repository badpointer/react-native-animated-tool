import React, { PureComponent } from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableHighlight } from 'react-native';
import {Logo} from '../../components'

class Home extends PureComponent {

    render() {
        console.log('render', this);
        const { homeComponent, button, text } = styles;
        return (
            <View style={{flex: 1}}>
                <Logo />
                <View style={homeComponent}>
                    <TouchableHighlight onPress={() => this.props.history.push('/headerfloat')} underlayColor="white" >
                        <View style={button}>
                            <Text style={text}>Header Animation Timing</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.history.push('/headerspring')} underlayColor="white" >
                        <View style={button}>
                            <Text style={text}>Header Animation Spring</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeComponent: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
    },
    button: {
        width: 150,
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#2196F3'
    },
    text: {
        padding: 10,
        color: 'white',
        fontWeight: '500',
        lineHeight: 20
    },

});

export {
    Home
}