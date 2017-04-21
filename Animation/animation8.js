/**
 * Created by shaotingzhou on 2017/4/18.
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

const arr = []

for (var i = 0; i < 500; i++) {

    arr.push(i)

}

export default class Animation8 extends Component {
// 构造
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0)

    }
    componentDidMount(){
        this.animate()
    }

    animate () {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })
        const textSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        })
        const rotateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        })
        return (
            <View style={styles.container}>
                <NavigatorBar backAction = {()=>this.backAction()} />

                <View style={styles.animationStyle}>


                    <Animated.View
                        style={{
          marginLeft,
          height: 30,
          width: 40,
          backgroundColor: 'red'}} />
                    <Animated.View
                        style={{
          opacity,
          marginTop: 10,
          height: 30,
          width: 40,
          backgroundColor: 'blue'}} />
                    <Animated.View
                        style={{
          marginLeft: movingMargin,
          marginTop: 10,
          height: 30,
          width: 40,
          backgroundColor: 'orange'}} />
                    <Animated.Text
                        style={{
          fontSize: textSize,
          marginTop: 10,
          color: 'green'}} >
                        Animated Text!
                    </Animated.Text>
                    <Animated.View
                        style={{
          transform: [{rotateX}],
          marginTop: 50,
          height: 30,
          width: 40,
          backgroundColor: 'black'}}>
                        <Text style={{color: 'white'}}>Hello from TransformX</Text>
                    </Animated.View>
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
    animationStyle: {
        paddingTop: 150
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});



