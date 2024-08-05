let yPos = 40; // Initial y position for both circles
let diameter = 20; // Diameter of the circles (reduced size)
let separation = 0; // Starting separation distance

function setup() {
  createCanvas(150, 80); // Smaller canvas size
}

function draw() {
  background(200);

  // Update separation distance
  separation += 0.3; // Adjusted speed for smaller circles

  // Calculate new y positions for circles based on separation
  let topCircleY = yPos - separation / 2;
  let bottomCircleY = yPos + separation / 2;

  // Draw top circle
  circle(75, topCircleY, diameter); // Centered on smaller canvas
  
  // Draw bottom circle
  circle(75, bottomCircleY, diameter); // Centered on smaller canvas

  // Draw lines when circles have moved a certain distance
  if (separation >= diameter) {
    // Left side lines
    line(75 - separation / 2, yPos, 45, yPos); // left mid straight-line
    line(75 - separation / 2, yPos, 60, topCircleY); // left upper angled-line
    line(75 - separation / 2, yPos, 60, bottomCircleY); // left lower angled-line
    line(60, bottomCircleY, 30, bottomCircleY); // left lower straight-line
    line(60, topCircleY, 30, topCircleY); // left upper straight-line

    // Right side lines
    line(75 + separation / 2, yPos, 105, yPos); // right mid straight-line
    line(75 + separation / 2, yPos, 90, topCircleY); // right upper angled-line
    line(75 + separation / 2, yPos, 90, bottomCircleY); // right lower angled-line
    line(90, bottomCircleY, 120, bottomCircleY); // right lower straight-line
    line(90, topCircleY, 120, topCircleY); // right upper straight-line
    
    // Stop the animation when edges of circles are just touching
    noLoop();
  }
}
