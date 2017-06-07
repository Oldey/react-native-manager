import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Card extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});

export { Card };
