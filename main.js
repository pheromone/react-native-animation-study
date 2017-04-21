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
    View
} from 'react-native';
import One from './Animation/animation1'
import Two from './Animation/animation2'
import Three from './Animation/animation3'
import Four from './Animation/animation4'
import Five from './Animation/animation5'
import Six from './Animation/animation6'
import Seven from './Animation/animation7'
import Eight from './Animation/animation8'
export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions} onPress={()=>this.push1()}>
                   动画1
                </Text>
                <Text style={styles.instructions} onPress={()=>this.push2()}>
                    动画2
                </Text>
                <Text style={styles.instructions} onPress={()=>this.push3()}>
                    动画3
                </Text>
                <Text style={styles.instructions} onPress={()=>this.push4()}>
                    动画4
                </Text>
                <Text style={styles.instructions} onPress={()=>this.push5()}>
                    动画5
                </Text>
                <Text style={styles.instructions} onPress={()=>this.push6()}>
                    动画6
                </Text>
                <Text style={styles.instructions} onPress={()=>this.push7()}>
                    动画7
                </Text>
                <Text style={styles.instructions} onPress={()=>this.push8()}>
                    动画8
                </Text>
            </View>
        );
    }

    push1 = () =>{
         this.props.navigator.push({
             component:One
         })
    }

    push2 = () =>{
        this.props.navigator.push({
            component:Two
        })
    }

    push3 = () =>{
        this.props.navigator.push({
            component:Three
        })
    }

    push4 = () =>{
        this.props.navigator.push({
            component:Four
        })

    }

    push5 = () =>{
        this.props.navigator.push({
            component:Five
        })

    }

    push6 = () =>{
        this.props.navigator.push({
            component:Six
        })
    }

    push7 = () =>{
        this.props.navigator.push({
            component:Seven
        })
    }

    push8 = () =>{
        this.props.navigator.push({
            component:Eight
        })
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

