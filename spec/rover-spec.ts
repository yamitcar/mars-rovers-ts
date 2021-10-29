import { Rover } from '../src/rover'
import Mars from '../src/mars'

describe("Mars Rover", ()=> {
    let rover: Rover

    it('Should start with map, position and orders', () => {
        Mars.createPlanet("5 3")
        rover = new Rover( "1 1 E", "RFRFRFRF")
        expect(Mars.maxDimensionX).toEqual(5)
        expect(Mars.maxDimensionY).toEqual(3)
        expect(rover.posX).toEqual(1)
        expect(rover.posY).toEqual(1)
        expect(rover.direction).toEqual("E")
        expect(rover.orders).toEqual("RFRFRFRF")
    });

    it('Should change directions with R', () => {
        rover = new Rover("0 0 N", "")
        expect(rover.direction).toEqual("N")
        rover.move("R")
        expect(rover.direction).toEqual("E")
        rover.move("R")
        expect(rover.direction).toEqual("S")
        rover.move("R")
        expect(rover.direction).toEqual("W")
        rover.move("R")
        expect(rover.direction).toEqual("N");
    });

    it('Should change directions with L', () => {
        rover = new Rover( "0 0 N", "")
        expect(rover.direction).toEqual("N")
        rover.move("L")
        expect(rover.direction).toEqual("W")
        rover.move("L")
        expect(rover.direction).toEqual("S")
        rover.move("L")
        expect(rover.direction).toEqual("E")
        rover.move("L")
        expect(rover.direction).toEqual("N");
    });

    it('Should execute orders and finish in N direction', () => {
        rover = new Rover( "0 0 N", "LLRR")
        rover.executeOrders()
        expect(rover.direction).toEqual("N");
    });

    it('Should move to N', () => {
        rover = new Rover( "0 0 N", "F")
        rover.executeOrders()
        expect(rover.direction).toEqual("N");
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(1);
    });

    it('Should move to E', () => {
        rover = new Rover( "0 0 E", "F")
        rover.executeOrders()
        expect(rover.direction).toEqual("E");
        expect(rover.posX).toEqual(1);
        expect(rover.posY).toEqual(0);
    });

    it('Should move to W', () => {
        rover = new Rover("1 1 W", "F")
        rover.executeOrders()
        expect(rover.direction).toEqual("W");
        expect(rover.posX).toEqual(0);
        expect(rover.posY).toEqual(1);
    });

    it('Should move to S', () => {
        rover = new Rover( "1 1 S", "F")
        rover.executeOrders()
        expect(rover.direction).toEqual("S");
        expect(rover.posX).toEqual(1);
        expect(rover.posY).toEqual(0);
    });

});