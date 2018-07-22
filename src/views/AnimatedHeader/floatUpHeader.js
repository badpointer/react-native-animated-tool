import React, { Component } from 'react';
import { View, StyleSheet, Animated, TextInput,Text } from 'react-native';

import { ButtonHighlight, CurvedHeader } from '../../components'

class FloatUpHeader extends Component {

    state = {
        headerAnimation: new Animated.Value(0),
        transitonYValue: -150,
        transitionDuration: 800
    }

    startAnimation = () => {
        Animated.timing(
            this.state.headerAnimation,
            {
                toValue: this.state.transitonYValue,
                duration: this.state.transitionDuration
            }
        ).start(() => {
            Animated.timing(
                this.state.headerAnimation,
                {
                    toValue: 0,
                    duration: this.state.transitionDuration
                }
            ).start();
        });
    }


    render() {
        const { buttonContainers, button, text } = styles;

        const headerAnimatedStyle = {
            transform: [
                {
                    translateY: this.state.headerAnimation
                }
            ]
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[headerAnimatedStyle]} >
                    <CurvedHeader />
                </Animated.View>


                {/* Input Here */}

                <View style={styles.animationButtonContainer}>
                    <ButtonHighlight text="Start Animation" onClick={this.startAnimation} />
                </View>

                {/* Back Button to Home */}
                <View style={buttonContainers}>
                    <ButtonHighlight buttonColor={button} fontColor={text} text="Go Back" onClick={this.props.history.goBack} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainers: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: '#FFF2E0'
    },
    text: {
        color: '#916600',
        padding: 10
    },
    animationButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },


});

export {
    FloatUpHeader
}