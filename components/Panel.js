import React from 'react';
import { Dimensions, StyleSheet, Button, View } from 'react-native';

export default () => {
    return (
        <View style={styles.panel}>
            <Button title="Lista"></Button>
            <Button title="Mostrar"></Button>
        </View>
    );
}

const styles = StyleSheet.create ({
    panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});