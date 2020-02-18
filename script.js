document.addEventListener("DOMContentLoaded", function() {
 
  //   class Animal {
  //     constructor(weight, heigt, color) {
  //       this.weight = weight;
  //       this.heigt = heigt;
  //       this.color = color;
  //     }
  //     eat() {
  //       console.log("кушает");
  //     }
  //     sleep() {
  //       console.log("спит");
  //     }
  //   }
  //   class Dog extends Animal {
  //     bark() {
  //       console.log("гавкает");
  //     }
  //   }
  //   class Shepherd extends Dog {
  //     guard() {
  //       console.log("защищает");
  //     }
  //   }
  //   let dog = new Shepherd(10, 5, "Черный");
  //   dog.eat();
  //   console.log(dog.color);

  class Shape {
    constructor(height, width, color) {
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
  class Cirkle extends Shape {
    radius() {
      this.div.style.borderRadius = "50%";
    }
    draw() {
      super.draw();
      this.radius();
    }
  }
  let c = new Cirkle(50, 50, "black");

  c.draw();
  c.draw();
  c.draw();
});
