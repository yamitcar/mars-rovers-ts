import Mars from "./mars";
import {Rover} from "./rover";

const fs = require('fs');

fs.readFile('./src/input1.txt', function(err: any, data: { toString: () => string; }) {
    if(err) throw err;
    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    let line = arr.shift()
    Mars.createPlanet(line)

    while(arr.length > 0){
        // @ts-ignore
        let rover = new Rover(arr.shift(), arr.shift())
        rover.executeOrders()
        arr.shift() //clean with line
        console.log(rover.reportPosition())
    }




});