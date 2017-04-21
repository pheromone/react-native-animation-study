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
    Easing,
    PanResponder
} from 'react-native';
import  NavigatorBar from '../navigatorBar'
export default class Animation3 extends Component {
// 构造
    constructor(props) {
        super(props);
        this.state = {
            trans: new Animated.ValueXY(),
        };
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true, //响应手势
            onPanResponderMove: Animated.event(
                [null, {dx: this.state.trans.x, dy:this.state.trans.y}] // 绑定动画值
            ),
            onPanResponderRelease: ()=>{//手松开，回到原始位置
                Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}
                ).start();
            },
            onPanResponderTerminate:()=>{//手势中断，回到原始位置
                Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}
                ).start();
            },
        });
    }

    render() {
        return (
            <View>
                <NavigatorBar backAction = {()=>this.backAction()} />

                <Animated.View style={{width:100,
                                 height:100,
                                 borderRadius:50,
                                 backgroundColor:'red',
                                 transform:[
                                   {translateY:this.state.trans.y},
                                   {translateX:this.state.trans.x},
                                 ],
                                }}
                    {...this._panResponder.panHandlers}
                >
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


