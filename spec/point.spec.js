import '../auto_mock_off';
import { Point } from '../point';

describe('Point', () => {
    it('sets up instance properties correctly', () => {
        let p = new Point(1, 5);

        expect(p.x).toBe(1);
        expect(p.y).toBe(5);
    });
});
