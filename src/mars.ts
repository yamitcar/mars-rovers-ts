let Mars = {
    maxDimensionX: 0,
    maxDimensionY: 0,
    lostRoverPositions: [],
    createPlanet(marsDimensions: string | undefined){
        if(marsDimensions !== undefined){
            marsDimensions = marsDimensions.replace(/\s/g, "")
            this.maxDimensionX = Number(marsDimensions[0])
            this.maxDimensionY = Number(marsDimensions[1])
            this.lostRoverPositions = []
        }
    }
}
export default Mars