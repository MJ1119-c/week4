let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 產生40個圓
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255), random(100, 200)), // 半透明顏色
      vx: random(-2, 2), // X 軸速度
      vy: random(-2, 2)  // Y 軸速度
    });
  }
}

function draw() {
  background(220);

  // 根據滑鼠的 X 位置調整圓的大小
  let sizeFactor = map(mouseX, 0, width, 20, 80);

  for (let circle of circles) {
    // 更新圓的位置
    circle.x += circle.vx;
    circle.y += circle.vy;

    // 碰撞邊界反彈
    if (circle.x - circle.size / 2 < 0 || circle.x + circle.size / 2 > width) {
      circle.vx *= -1;
    }
    if (circle.y - circle.size / 2 < 0 || circle.y + circle.size / 2 > height) {
      circle.vy *= -1;
    }

    // 繪製半透明圓
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor / 50);
  }
}
