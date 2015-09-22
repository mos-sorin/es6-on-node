import '../auto_mock_off';
import { Pet } from '../pet';

describe('Pet', () => {
    it('sets up instance properties correctly', () => {
        let pet = new Pet("Boris");

        expect(pet._name).toBe("Boris");
    });

    it('name call return the name of the pet', () => {
        let pet = new Pet("Boris");
        
        expect(pet.name).toBe("Boris");
    });
});
