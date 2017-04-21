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
    Animated,
    TouchableOpacity,
    Image,
    Easing
} from 'react-native';
import  NavigatorBar from '../navigatorBar'
export default class Animation2 extends Component {
// 构造
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
    }
    componentDidMount () {
       this.anim()
    }
    anim (){
        this.spinValue.setValue(0)
        Animated.timing(this.spinValue , {
            toValue: 1, // 目标值
            duration: 4500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start(()=>this.anim());
    }
    render() {
        return (
            <View>
                <NavigatorBar backAction = {()=>this.backAction()} />

                <Animated.View style={[styles.container, {
                    opacity: this.spinValue
                }]}>
                    <View style={{width:200,height:200,borderRadius:100,backgroundColor:'black'}}>

                    </View>
                </Animated.View>

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

