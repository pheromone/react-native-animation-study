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

export default class Animation6 extends Component {
// 构造
    constructor(props) {
        super(props);
        this.animatedValue = []

        arr.forEach((value) => {
          this.animatedValue[value] = new Animated.Value(0)
        })
    }
    componentDidMount(){
        this.animate()
    }

    animate(){
       const animations = arr.map((item) => {
           return Animated.timing(
               this.animatedValue[item],
               {
                   toValue:1,
                   duration:50
               }
           )
       })
        Animated.sequence(animations).start()

    }
    render() {
        const animations = arr.map((a, i) => {

            return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />

        })
        return (
            <View style={styles.container}>
                <NavigatorBar backAction = {()=>this.backAction()} />
                {animations}

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
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});


