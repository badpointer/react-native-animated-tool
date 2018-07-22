import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Logo = props => {
    return (
        <View style={styles.boxBody}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 15 }}>React Native Animation Tool</Text>
            <View style={styles.box} />
        </View>
    )
}

const styles = StyleSheet.create({
    boxBody: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        opacity: 0.2,
        // Test Border Types
        borderWidth: 20,

        //# Border [right,left,bottom,top] Color
        borderColor: 'gray',
        borderStartColor: 'yellow',
        borderEndColor: 'blue',
        // backfaceVisibility: 'hide'
        // borderRightColor : '',
        // borderLeftColor: '',
        // borderTopColor: '',
        // borderBottomColor: '',

        //# Border Top [Start, Left, Right, End] Radius
        // borderTopStartRadius: 100 / 2,
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
        // borderTopEndRadius: 50,

        //# Border Bottom [Start, Left, Right, End] Radius
        // borderTopStartRadius: 100 / 2,
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
        // borderTopEndRadius: 50,
    }
});

export {
    Logo
}