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
        Mars.createPlanet("3 3")
        rover = new Rover( "0 0 N", "F")
        rover.executeOrders()
        expect(rover.direction).toEqual("N")
        expect(rover.reportPosition()).toEqual("0 1 N")
    });

    it('Should move to E', () => {
        Mars.createPlanet("3 3")
        rover = new Rover( "0 0 E", "F")
        rover.executeOrders()
        expect(rover.direction).toEqual("E");
        expect(rover.reportPosition()).toEqual("1 0 E")
    });

    it('Should move to W', () => {
        Mars.createPlanet("3 3")
        rover = new Rover("1 1 W", "F")
        rover.executeOrders()
        expect(rover.direction).toEqual("W")
        expect(rover.reportPosition()).toEqual("0 1 W")
    });

    it('Should move to S', () => {
        Mars.createPlanet("3 3")
        rover = new Rover( "1 1 S", "F")
        rover.executeOrders()
        expect(rover.direction).toEqual("S")
        expect(rover.reportPosition()).toEqual("1 0 S")
    });

    it('Should be a lost rover by S', () => {
        Mars.createPlanet("1 1")
        rover = new Rover( "0 0 S", "F")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("0 0 S LOST")
        expect(Mars.lostRoverPositions.length).toEqual(1)
        expect(Mars.lostRoverPositions[0]).toEqual([0, 0])
    });

    it('Should be a lost rover by N', () => {
        Mars.createPlanet("1 1")
        rover = new Rover( "0 1 N", "F")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("0 1 N LOST")
        expect(Mars.lostRoverPositions.length).toEqual(1)
        expect(Mars.lostRoverPositions[0]).toEqual([0,1])
    });

    it('Should be a lost rover by E', () => {
        Mars.createPlanet("1 1")
        rover = new Rover( "1 1 E", "F")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("1 1 E LOST")
        expect(Mars.lostRoverPositions.length).toEqual(1)
        expect(Mars.lostRoverPositions[0]).toEqual([1,1])
    });

    it('Should be a lost rover by W', () => {
        Mars.createPlanet("1 1")
        rover = new Rover( "1 1 W", "FF")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("0 1 W LOST")
        expect(Mars.lostRoverPositions.length).toEqual(1)
        expect(Mars.lostRoverPositions[0]).toEqual([0,1])
    });

    it('if LOST Should ignore other orders', () => {
        Mars.createPlanet("1 1")
        rover = new Rover( "1 1 W", "FFFFFFF")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("0 1 W LOST")
        expect(Mars.lostRoverPositions.length).toEqual(1)
        expect(Mars.lostRoverPositions[0]).toEqual([0,1])
    });

    it('if a rover was LOST Should ignore the order', () => {
        Mars.createPlanet("1 1")
        rover = new Rover( "1 1 W", "FF")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("0 1 W LOST")

        rover = new Rover( "1 1 W", "FF")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("0 1 W")

    });

    it('if a rover was LOST Should ignore the order and continue with the others', () => {
        Mars.createPlanet("2 2")
        rover = new Rover( "1 1 N", "FF")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("1 2 N LOST")

        rover = new Rover( "0 0 E", "FLFFFRF")
        rover.executeOrders()
        expect(rover.reportPosition()).toEqual("2 2 E")

    });

});