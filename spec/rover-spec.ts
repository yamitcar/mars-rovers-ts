import { Rover } from '../src/rover';
describe("Mars Rover", ()=> {
    let rover: Rover;

    it('Should start with map, position and orders', () => {
        rover = new Rover("5 3", "1 1 E", "RFRFRFRF")
        expect(rover.maxMarsDimensionX).toEqual(5);
        expect(rover.maxMarsDimensionY).toEqual(3);
        expect(rover.posX).toEqual(1);
        expect(rover.posY).toEqual(1);
        expect(rover.direction).toEqual("E");
        expect(rover.orders).toEqual("RFRFRFRF");
    });

});