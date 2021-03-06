/* this clock can changed by
	only changing its
	size variable.
  I make all things depend on 
  size variable. so it become slightly
  difficult to understand.
*/
let size =500;

function setup() {
  createCanvas(size*2, size*1.5);
  angleMode(DEGREES);
  noFill();
  strokeWeight(size/75);
  print(300/8);
}

function draw() {
  background(0);
  var hr = hour();
  var mn = minute();
  var sc = second();

  translate(width / 2, height / 2);
	rotate(-90);
  stroke(250, 100, 150);
  var hrAngle = map(hr % 12, 0, 12, 0,360);
  arc(0, 0, size, size ,  0, hrAngle);

  stroke(50, 100, 255);
  var mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, size-20, size-20, 0, mnAngle);

  stroke(100, 255, 150);
  var scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, size-40, size-40, 0, scAngle);

  push();
  stroke(250, 100, 150);
  rotate(hrAngle);
  line(0, 0, size/5, 0);
  pop();

  push();
  stroke(50, 100, 255);
  rotate(mnAngle);
  line(0, 0, size/4, 0);
  pop();

  push();
  stroke(100, 255, 150);
  rotate(scAngle);
  line(0, 0, size/3, 0);
  pop();
  
	push();
	stroke(255);
  strokeWeight(size/35);
  point(0,0);
	pop();
  
  var period;
  if(hr>=12)
    period="P.M";
  else
    period="A.M";
  push();
  textSize(size/12);
  stroke(255);
  textFont('Helvetica');
  rotate(90);
  text(period,size/6,-size/6);
	pop();
  
}
