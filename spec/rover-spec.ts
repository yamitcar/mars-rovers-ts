import { Rover } from '../src/rover';
describe("Mars Rover", ()=> {
    let rover: Rover;

    beforeEach(() => {
        rover = new Rover();
    });

    it('Should be a Rover', () => {
        expect(rover.constructor.name).toEqual("Rover");
    });

});