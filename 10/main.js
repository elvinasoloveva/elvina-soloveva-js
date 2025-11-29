class Boat {
  constructor(color, material, maxSpeed) {
    this.color = color;       
    this.material = material; 
    this.maxSpeed = maxSpeed; 
  }

  sail() {
    console.log("Плывём по волнам!");
  }
}

class Transport {
  constructor(name) {
    this.name = name;
  }

  startEngine() {
    console.log("Двигатель запускается...");
  }
}

class Bus extends Transport {
  constructor(name, passengerCount) {
    super(name);
    this.passengerCount = passengerCount; 
  }

  drive() {
    console.log(`Едем по маршруту с ${this.passengerCount} пассажирами`);
  }
}

class Plane extends Transport {
  constructor(name) {
    super(name);
  }

  startEngine() {
    console.log("Турбины запускаются...");
  }
}
