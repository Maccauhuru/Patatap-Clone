
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
for(var x=0;x < 1000; x+=100){
  for(var y=0; y < 1000; y+=100){
  new Path.Circle(new Point(x, y), 10).fillColor = 'red';
  }
}
   

