import '../auto_mock_off';
import { Cat } from '../cat';

describe('Cat', () => {
    it('sets up instance properties correctly', () => {
        let cat = new Cat("Boris");

        expect(cat._name).toBe("Boris");
    });

    it('name call return the name of the pet', () => {
        let cat = new Cat("Boris");
        
        expect(cat.name).toBe("super Boris");
    });
});
