import Mars from "./mars";

export class Rover{
    orders: string;
    direction: string

    posX: number
    posY: number
    lost: string|null

    private directionIndex: number
    private COORDINATES = ['N','E','S','W']

    constructor( initPosition: string, orders: string){
        initPosition = initPosition.replace(/\s/g, "")
        this.posX = Number(initPosition[0])
        this.posY = Number(initPosition[1])
        this.direction = initPosition[2]
        this.directionIndex = this.COORDINATES.indexOf(this.direction)
        this.lost = null
        this.orders = orders
    }

    executeOrders() {
        for (let i = 0; i< this.orders.length; i++){
            this.move(this.orders[i])
        }
    }

    move(instruction: string) {
        if(!this.lost){
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
    }
    reportPosition() : string{
        let result = this.posX + ' ' + this.posY
        return this.lost === null ? result: result +' ' + this.lost
    }

    private moveForward() {

        if (this.direction === 'N') {
            this.posY = this.evaluateNewPosition(this.posY, Mars.maxDimensionY,1)
        }
        if (this.direction === 'E') {
            this.posX =  this.evaluateNewPosition(this.posX, Mars.maxDimensionX,1)
        }
        if (this.direction === 'S') {
            this.posY = this.evaluateNewPosition(this.posY, 0,-1)
        }
        if (this.direction === 'W') {
            this.posX = this.evaluateNewPosition(this.posX, 0,-1)
        }
    }

    private evaluateNewPosition(pos:number, maxDimension:number,movementIndex: number):number {
        if(pos === maxDimension){
            this.lost = "LOST"
            let position = [this.posX, this.posY]
            // @ts-ignore
            Mars.lostRoverPositions.push(position) // for what make it easy if we can make it hard...
            return pos
        }else{
            return pos+movementIndex
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