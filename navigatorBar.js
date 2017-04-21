/**
 * Created by shaotingzhou on 2017/4/14.
 */
/**
 * Created by shaotingzhou on 2017/4/14.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
//Dimentsions
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width; //屏宽
export default class NavigatorBar extends Component {
    render() {
        return (
            <View style={styles.navOutViewStyle}>
                    <Text onPress={this.props.backAction}>️⬅️</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navOutViewStyle:{
        height:64,
        backgroundColor:'red',
        width:screenWidth,
        justifyContent:'center',
        paddingLeft:10
    },
});


