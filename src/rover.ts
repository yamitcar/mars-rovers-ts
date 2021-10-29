export class Rover{
    orders: string;

    maxMarsDimensionX: number
    maxMarsDimensionY: number
    direction: string;
    posX: number;
    posY: number;


    constructor(marsDimensions: string, initPosition: string, orders: string){
        marsDimensions = marsDimensions.replace(/\s/g, "")
        initPosition = initPosition.replace(/\s/g, "")
        this.maxMarsDimensionX = Number(marsDimensions[0])
        this.maxMarsDimensionY = Number(marsDimensions[1])
        this.posX = Number(initPosition[0])
        this.posY = Number(initPosition[1])
        this.direction = initPosition[2]
        this.orders = orders
    }

}