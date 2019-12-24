import React, { Component, useState } from 'react';
import {setUpdateIntervalForType, accelerometer,gyroscope,SensorTypes } from "react-native-sensors";
import { View, StyleSheet, Animated, Dimensions, Text   }  from 'react-native';
const screen = Dimensions.get('window');


class BallGyro extends Component {

    constructor(props) {
        super(props);
        this.state = {nowX: screen.width/2, nowY: screen.height/2};
      }

    componentWillMount() {  
        
        this.position = new Animated.ValueXY({x: this.state.nowX, y: this.state.nowY});    

    } 

    componentWillReceiveProps() {

        let that = this.state;
        let thatp = this.props;
      // gyro
        this.position = new Animated.ValueXY({x: this.state.nowX, y: this.state.nowY });
        
        Animated.spring(this.position, {    
            toValue: {x: that.nowX+thatp.ySpeed, y:that.nowY+thatp.xSpeed  }      
        }).start();

        

        
        if(that.nowX>screen.width || that.nowX<0 || that.nowY>screen.height || that.nowY<0)
            this.setState({nowX: screen.width/2, nowY: screen.height/2})
        else
            this.setState({nowX: that.nowX + thatp.ySpeed ,nowY: that.nowY+thatp.xSpeed })
        
        
    }


    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
               <View style={ styles.ball}/> 
               </Animated.View>
            
         
            
        );
    }

}

const styles = StyleSheet.create({
    ball: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        borderRadius: 30,
    },

});


export default BallGyro;