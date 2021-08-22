class Car {
    color;
    speed;

    move() {
        document.write ("Xe có màu " + this.color + " chạy với vận tốc " + this.speed + "<br>")
    }
}

let car1 = new Car()
car1.color = "blue";
car1.speed = 80;
car1.move()

let car2 = new Car()
car1.color = "green";
car1.speed = 20;
car1.move()