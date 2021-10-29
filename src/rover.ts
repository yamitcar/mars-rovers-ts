export class Rover{
    orders: string;
    direction: string

    posX: number;
    posY: number;

    private directionIndex: number
    private COORDINATES = ['N','E','S','W']

    constructor( initPosition: string, orders: string){
        initPosition = initPosition.replace(/\s/g, "")
        this.posX = Number(initPosition[0])
        this.posY = Number(initPosition[1])
        this.direction = initPosition[2]
        this.directionIndex = this.COORDINATES.indexOf(this.direction)
        this.orders = orders
    }

    executeOrders() {
        for (let i = 0; i< this.orders.length; i++){
            this.move(this.orders[i])
        }
    }

    move(instruction: string) {
        if(instruction === "R"){
            this.turnRight();
        }
        if(instruction === "L"){
            this.turnLeft();
        }
        if(instruction === 'F'){
            this.moveForward();
        }
    }

    private moveForward() {

        if (this.direction === 'N') {
            this.posY++
        }
        if (this.direction === 'E') {
            this.posX++
        }
        if (this.direction === 'S') {
            this.posY--
        }
        if (this.direction === 'W') {
            this.posX--
        }
    }

    private turnLeft() {
        this.directionIndex--
        if (this.directionIndex < 0) {
            this.directionIndex = this.COORDINATES.length - 1
        }
        this.direction = this.COORDINATES[this.directionIndex]
    }

    private turnRight() {
        this.directionIndex++
        if (this.directionIndex == this.COORDINATES.length) {
            this.directionIndex = 0
        }
        this.direction = this.COORDINATES[this.directionIndex]
    }


}