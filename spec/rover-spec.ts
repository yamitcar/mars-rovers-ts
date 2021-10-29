import { Rover } from '../src/rover';
describe("Mars Rover", ()=> {
    let rover: Rover

    it('Should start with map, position and orders', () => {
        rover = new Rover("5 3", "1 1 E", "RFRFRFRF")
        expect(rover.maxMarsDimensionX).toEqual(5)
        expect(rover.maxMarsDimensionY).toEqual(3)
        expect(rover.posX).toEqual(1)
        expect(rover.posY).toEqual(1)
        expect(rover.direction).toEqual("E")
        expect(rover.orders).toEqual("RFRFRFRF")
    });

    it('Should change directions with R', () => {
        rover = new Rover("1 1", "0 0 N", "")
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
        rover = new Rover("1 1", "0 0 N", "")
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
        rover = new Rover("1 1", "0 0 N", "LLRR")
        rover.executeOrders()
        expect(rover.direction).toEqual("N");
    });


});