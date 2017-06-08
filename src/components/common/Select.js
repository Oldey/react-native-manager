import React, { Component } from 'react';
import { Picker, View, Text, StyleSheet } from 'react-native';

class Select extends Component {
    render() {
        const { label, selected, onValueChange } = this.props;
        const { labelStyle, containerStyle } = styles;

        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <Picker
                    style={styles.pickerStyle}
                    selectedValue={selected}
                    onValueChange={onValueChange}
                >
                    <Picker.Item label='Monday' value='Monday' />
                    <Picker.Item label='Tuesday' value='Tuesday' />
                    <Picker.Item label='Wednesday' value='Wednesday' />
                    <Picker.Item label='Thursday' value='Thursday' />
                    <Picker.Item label='Friday' value='Friday' />
                    <Picker.Item label='Saturday' value='Saturday' />
                    <Picker.Item label='Sunday' value='Sunday' />
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerStyle: {
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Select };
