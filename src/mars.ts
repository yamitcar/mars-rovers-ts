let Mars = {
    maxDimensionX: 0,
    maxDimensionY: 0,
    lostRoverPositions: [],
    createPlanet(marsDimensions: string){
        marsDimensions = marsDimensions.replace(/\s/g, "")
        this.maxDimensionX = Number(marsDimensions[0])
        this.maxDimensionY = Number(marsDimensions[1])
    }
}
export default Mars