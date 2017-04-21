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
export default class Animation5 extends Component {
// 构造
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0)
        this.animatedValue2 = new Animated.Value(0)
        this.animatedValue3 = new Animated.Value(0)
    }
    componentDidMount(){
        this.animate()
    }

    animate(){
        this.animatedValue.setValue(0)
        this.animatedValue2.setValue(0)
        this.animatedValue3.setValue(0)

        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
                }
            )
        }
        Animated.parallel([
            createAnimation(this.animatedValue, 4000, Easing.ease),
            createAnimation(this.animatedValue2, 3000, Easing.ease, 1000),
            createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)

        ]).start()

    }
    render() {
        const scaleText = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 2]
        })

        const spinText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
        })
        const introButton = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 400]
        })
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <NavigatorBar backAction = {()=>this.backAction()} />
                <View style={styles.container}>
                    <Animated.View
                        style={{ transform: [{scale: scaleText}] }}>
                        <Text>Welcome</Text>
                    </Animated.View>
                </View>

                <Animated.View
                    style={{ marginTop: 20, transform: [{rotate: spinText}] }}>
                    <Text
                        style={{fontSize: 20}}>
                        欢迎!!!
                    </Text>
                </Animated.View>

                <Animated.View
                    style={{top: introButton, position: 'absolute'}}>
                        <Text
                            style={{color: 'blue', fontSize: 20}} onPress={()=>this.animate()}>
                            Click Here To Start
                        </Text>
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


