class ground{
    constructor(x, y){
        var options = {
     isStatic:true
        }
       this.body = Bodies.rectangle(x, y, 20, 20, options) ;
       this.width = width;
       this.height = height;
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
    }
}