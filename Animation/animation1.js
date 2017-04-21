/**
 * Created by shaotingzhou on 2017/4/14.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
    Image,
    Easing
} from 'react-native';
import  NavigatorBar from '../navigatorBar'
var myAnimated;
export default class Animation1 extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.spinValue = new Animated.Value(0)
    }
    spin () {
        this.spinValue.setValue(0)
        myAnimated = Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        )
        myAnimated.start(()=>this.spin())
    }
    componentDidMount () {
        this.spin()
    }
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View>
                <NavigatorBar backAction = {()=>this.backAction()} />
                <View style={styles.container}>
                    <Animated.Image
                        ref = "myAnimated"
                        style={{width: 227,height: 200,transform: [{rotate: spin}] }}
                        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                    />
                </View>
            </View>
        );
    }
    backAction =() =>{
        this.props.navigator.pop({
        })
    }


}

const styles = StyleSheet.create({
    container: {
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

