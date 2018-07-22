import React, {PureComponent} from 'react'
import {View, StyleSheet ,Text, ScrollView, TouchableHighlight} from 'react-native';


class Home extends PureComponent {

    render() {
        console.log('render',this);
        const {homeComponent,button,text} = styles;
        return (
            <View style={homeComponent}>
                <TouchableHighlight onPress={()=> this.props.history.push('/headerfloat')} underlayColor="white" >
                    <View style={button}>
                        <Text style={text}>Header Animation Timing</Text>
                    </View>
                </TouchableHighlight> 
                <TouchableHighlight onPress={()=> this.props.history.push('/headerspring')} underlayColor="white" >
                    <View style={button}>
                        <Text style={text}>Header Animation Spring</Text>
                    </View>
                </TouchableHighlight> 
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
        paddingTop: 60
    },
    button: {
        width: 150,
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#2196F3'
    },
    text: {
        padding: 20,
        color: 'white'
    }
});

export {
    Home
}