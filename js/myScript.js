
  // Create a Paper.js Path to draw a line into it: 
  // var path = new Path(); 
  // //Give the stroke a color 
  // path.strokeColor = 'red'; 
  // var start = new Point(0,100); 
  // // Move to start and draw a line from there 
  // path.moveTo(start); 
  // // Note the plus operator on Point objects. 
  // // PaperScript does that for us, and much more!
  // path.lineTo(start + [ 500, -50 ]);
// create new shape, circle
  // var myCircle = new Path.Circle(new Point(100, 70), 10);
  // myCircle.fillColor = 'black';
// create a second circle
// for(var x=0;x < 1000; x+=100){
//   for(var y=0; y < 1000; y+=100){
//   new Path.Circle(new Point(x, y), 10).fillColor = 'red';
//   }
// }
var circles=[];

function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(point, 500);
  newCircle.fillColor="coral";
  circles.push(newCircle);
  //console.log(point);
  // When a key is pressed, create a new circle on the canvas:


}

function onFrame(event){
  for(var i=0;i<circles.length;i++){
    circles[i].fillColor.hue+=1;
    circles[i].scale(0.9);
  }
}
   

