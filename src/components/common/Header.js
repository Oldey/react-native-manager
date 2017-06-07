import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Icon.ToolbarAndroid
                    actions={[
                        { title: 'Settings', iconName: 'md-settings', iconSize: 30, show: 'always' },
                        { title: 'Follow me on Twitter', iconName: 'logo-twitter', iconColor: '#4099FF', show: 'ifRoom' }
                    ]}
                    overflowIconName='md-more'
                    navIconName='md-arrow-back'
                    titleColor='white'
                    title={this.props.title}
                    style={styles.toolbar}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        // backgroundColor: 'yellow',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 60,
        // paddingTop: 15,
        // borderBottomWidth: 1
    },
    toolbar: {
        backgroundColor: '#a9a9a9',
        height: 60
    }
});

export { Header };
