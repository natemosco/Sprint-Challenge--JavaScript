// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(cubeAttributes){
        this.newLength = cubeAttributes.length;
        this.newWidth = cubeAttributes.width;
        this.newHeight = cubeAttributes.height;
    }
    volume(){return (this.newLength * this.newWidth * this.newHeight)};
    surfaceArea(){return 2*((this.newLength * this.newWidth) + (this.newLength * this.newHeight) + (this.newWidth * this.newHeight));
    }
};
let cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.