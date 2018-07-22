import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Animated, Easing } from 'react-native';

import { ButtonHighlight, CurvedHeader } from '../../components'

class SpringUpHeader extends Component {

    state = {
        headerAnimation: new Animated.Value(0)
    }

    startAnimation = () => {
        Animated.spring(
            this.state.headerAnimation,
            {
                toValue: -150,
                friction: 5,    // Controls "Bounciness"/overshoot
                tension: 10,
            }
        ).start(() => {
            Animated.spring(
                this.state.headerAnimation,
                {
                    toValue: 0,
                    friction: 5,    // Controls "Bounciness"/overshoot
                    tension: 10,    // Controls Speed. Defaut 40,
                    // speed: 12,      // Controls speed of the animation. Default 12,
                    // bounciness: 8,  // Controls bounciness. Default 8
                }
            ).start();
        });
    }

    render() {
        const { header, buttonContainers, button, text } = styles;

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
    header: {
        height: 65,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderLeftWidth: 1.5,
        borderBottomWidth: 2.5,
        borderRightWidth: 1.5,
        borderColor: '#EDF3F9',
        opacity: .7
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
    },
    playButton: {
        backgroundColor: 'green'
    },
    playFont: {
        color: 'white',
        padding: 20
    }
});

export {
    SpringUpHeader
}