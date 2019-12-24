import React, {useState} from 'react';
import {setUpdateIntervalForType, accelerometer,gyroscope,SensorTypes } from "react-native-sensors";
import { StyleSheet, Text, View, Button } from 'react-native';
import BallAccel from './components/BallAccel';
import BallGyro from './components/BallGyro';

export default function App() {
  setUpdateIntervalForType(SensorTypes.gyroscope, 100);
  setUpdateIntervalForType(SensorTypes.accelerometer, 50  );
  const [xspeed, setXspeed] = useState(0);
  const [xa, setXa] = useState(0);
  const [ya, setYa] = useState(0);
  const [za, setZa] = useState(0);

  const [xg, setXg] = useState(0);
  const [yg, setYg] = useState(0);
  const [zg, setZg] = useState(0);
  const [mode, setMode] = useState('accel');
 

const subscription1 = gyroscope.subscribe(({ x, y, z, timestamp }) =>{   

    setXg(x*30) 
    setYg(y*30)
  
}); 

const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>{
  //if(x>=0){
    //setXspeed(xspeed + x*1000 )

  //}

  //if(y>=0)



  //accel
  setXa(x*-7) 
  //setY(ya)
  setZa(z*-7)
  
}); 

const changeMode = () => {
  if(mode === 'accel')
    setMode('gyro')
  else
    setMode('accel')
}

const viewMode = mode==='accel'? <BallAccel xSpeed={xa} ySpeed={za}/> : <BallGyro xSpeed={xg} ySpeed={yg}/>;
//
  return (
    <View style={styles.container}>
      <Text>{xa}</Text>
<Text>{ya}</Text>
<Text>{za}</Text>
<Button title={mode} onPress={changeMode}></Button>
{viewMode}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
//<Ball xSpeed={x} ySpeed={y}/>
//accel ball <Ball xSpeed={x} ySpeed={z}/>

/*
<Text>{x}</Text>
<Text>{y}</Text>
<Text>{z}</Text>
*/