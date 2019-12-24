import React, { Component, useState } from 'react';
import { View, StyleSheet, Animated, Dimensions, Text   }  from 'react-native';
const screen = Dimensions.get('window');


class BallAccel extends Component {

    constructor(props) {
        super(props);
        this.state = {nowX: screen.width/2, nowY: screen.height/2};
      }

    componentWillMount() {  
        
        this.position = new Animated.ValueXY({x: this.state.nowX, y: this.state.nowY});    

    } 

    componentWillReceiveProps() {
      /* gyro
        this.position = new Animated.ValueXY({x: this.state.nowX, y: this.state.nowY });
        
        Animated.spring(this.position, {    
            toValue: {x: this.state.nowX+this.props.ySpeed, y:this.state.nowY+this.props.xSpeed  }      
        }).start();



        this.setState({nowX: this.state.nowX + this.props.ySpeed ,nowY: this.state.nowY + this.props.xSpeed })
        */

            //accel

        let that = this.state;
        let thatp = this.props;

        this.position = new Animated.ValueXY({x: that.nowX, y: that.nowY });
        
        Animated.spring(this.position, {    
            toValue: {x: that.nowX+thatp.xSpeed, y:that.nowY+thatp.ySpeed  }      
        }).start();
  
        
        if(that.nowX>screen.width || that.nowX<0 || that.nowY>screen.height || that.nowY<0)
            this.setState({nowX: screen.width/2, nowY: screen.height/2})
        else
            this.setState({nowX: that.nowX + thatp.xSpeed ,nowY: that.nowY+thatp.ySpeed })
   
        
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
        backgroundColor: 'lightblue',
        width: 50,
        height: 50,
        borderRadius: 30,
    },

});


export default BallAccel;