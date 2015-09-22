import { Pet } from './pet';

export class Cat extends Pet {
    constructor(name) {
        super(name);
    }

    get name() {
      // use string interpolation
      return `super ${super.name}`;
    }
}
