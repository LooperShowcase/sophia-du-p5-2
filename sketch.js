function setup() {
  // The size of our starting canvas: 400px width, 400px height

  createCanvas(1200, 800);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(-90);

  background("white");

  noFill();
  let sc = second();
  let mn = minute();
  let hr = hour();

  stroke("#95d5b2");
  strokeWeight(8);
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 500, 500, 0, scAngle);

  stroke("#74c69d");
  strokeWeight(8);
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 450, 450, 0, mnAngle);

  stroke("#52b788");
  strokeWeight(8);
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 350, 350, 0, hrAngle);

  push();
  stroke("#a7c957");
  rotate(scAngle);
  line(0, 0, 150, 0);
  pop();

  push();
  stroke("#99d98c");
  rotate(mnAngle);
  line(0, 0, 130, 0);
  pop();

  push();
  stroke("#b5e48c");
  rotate(hrAngle);
  line(0, 0, 110, 0);
  pop();

  stroke("black");
  strokeWeight(8);
  point(0, 0);
}

//606c38
//283618
//a1c181
