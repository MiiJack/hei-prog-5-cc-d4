interface Toy {
  play(): string;
}

class Car implements Toy {
  play(): string {
    return "Play car";
  }
}

class LittleCarToy extends Car {
  play(): string {
    return "Play little car";
  }
}

class MiddleCarToy extends Car {}

class Doll implements Toy {
  play(): string {
    return "Play doll";
  }
}

class LittleDollToy extends Doll {
  play(): string {
    return "Play little doll";
  }
}

class MiddleDollToy extends Doll {}

interface ToyFactory {
  makeForKids(): Toy;
  makeForChild(): Toy;
}

abstract class AbstractToyFactory {
  static makeToy(factory: ToyFactory, type: string): Toy {
    if (type === "child") {
      return factory.makeForChild();
    }
    return factory.makeForKids();
  }
}

class CarFactory implements ToyFactory {
  makeForKids(): Toy {
    return new MiddleCarToy();
  }
  makeForChild(): Toy {
    return new LittleCarToy();
  }
}

class DollFactory implements ToyFactory {
  makeForKids(): Toy {
    return new MiddleDollToy();
  }
  makeForChild(): Toy {
    return new LittleDollToy();
  }
}

const myToy = AbstractToyFactory.makeToy(new DollFactory(), "child");
console.log(myToy.play());
