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
} from 'react-native';
import  NavigatorBar from '../navigatorBar'
export default class Animation4 extends Component {
// 构造
    constructor(props) {
        super(props);
        this.state = {

        };
        this.springValue = new Animated.Value(0.3)
    }
    spring () {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start()
    }
    componentDidMount () {
        this.spring()
    }

    render() {
        return (
            <View>
                <NavigatorBar backAction = {()=>this.backAction()} />
                <TouchableOpacity style={styles.container} onPress={()=>this.touchUpinAction()}>
                    <Animated.Image
                        style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
                        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
                </TouchableOpacity>
            </View>
        );


    }
    backAction =() =>{
        this.props.navigator.pop({
        })
    }
    touchUpinAction = ()=>{
        this.spring()
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


