document.addEventListener("DOMContentLoaded", function() {
  
  class Shape {
    constructor(color, height, width = height) {
      this.height = height;
      this.width = width;
      this.color = color;
      this.div = document.createElement("div");
    }

    draw() {
      this.div.style.width = `${this.width}px`;
      this.div.style.height = `${this.height}px`;
      this.div.style.backgroundColor = `${this.color}`;
      document.body.append(this.div);
    }
  }
  class Circle extends Shape {
    radius() {
      this.div.style.borderRadius = "50%";
    }
    draw() {
      super.draw();
      this.radius();
    }
  }
  let circle1 = new Circle("green", 150);
  circle1.draw();

  class Square extends Shape {}

  let square1 = new Square("red", 50);
  square1.draw();

  class Rectangle extends Shape {}

  let rectangle1 = new Rectangle("blue", 250, 100);
  rectangle1.draw();
});
