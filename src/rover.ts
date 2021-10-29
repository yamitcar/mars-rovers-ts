export class Rover{
    orders: string;

    maxMarsDimensionX: number
    maxMarsDimensionY: number
    direction: string

    posX: number;
    posY: number;

    private directionIndex: number
    private COORDINATES = ['N','E','S','W']

    constructor(marsDimensions: string, initPosition: string, orders: string){
        marsDimensions = marsDimensions.replace(/\s/g, "")
        initPosition = initPosition.replace(/\s/g, "")
        this.maxMarsDimensionX = Number(marsDimensions[0])
        this.maxMarsDimensionY = Number(marsDimensions[1])
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