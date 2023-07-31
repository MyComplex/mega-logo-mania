/* Import subclasses for testing */
const { Logo, Circle, Triangle, Square } = require('./logoComponents');

/* Component testing */
describe('Logo class', () => {
    /* Circle subclass test */
    describe('Circle subclass', () => {
        it('should return the code for an svg circle shape type', () => {
            const code = "<circle r='95' cx='50%' cy='50%' fill='blue' stroke='black' />";
            const shape = new Circle('blue');
            const result = shape.renderShape();

            expect(result).toEqual(code);
        });
    });
    /* Triangle subclass test */
    describe('Triangle subclass', () => {
        it('should return the code for an svg Triangle shape type', () => {
            const code = "<polygon points='150, 14.375 232.2725, 161.875 67.7275, 161.875' fill='green' stroke='black' />";
            const shape = new Triangle('green');
            const result = shape.renderShape();

            expect(result).toEqual(code);
        });
    });
    /* Square subclass test */
    describe('Square subclass', () => {
        it('should return the code for an svg Square shape type', () => {
            const code = "<rect x='55' y='5' width='190' height='190' fill='purple' stroke='black' />";
            const shape = new Square('purple');
            const result = shape.renderShape();

            expect(result).toEqual(code);
        });
    });
    /* Logo with Circle subclass shape test */
    describe('Logo with Circle subclass shape', () => {
        it('should return the code for an svg logo with Circle subclass shape', () => {
            const code = `<svg width='300' height='200' version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g>
        <circle r='95' cx='50%' cy='50%' fill='orange' stroke='black' />
        <text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='136' fill='blue' stroke='black'>XYZ</text>
    </g>
</svg>`;
            const shape = new Circle('orange', 'XYZ', 'blue');
            const result = shape.renderLogo();

            expect(result).toEqual(code);
        });
    });
    /* Logo with Triangle subclass shape test */
    describe('Logo with Triangle subclass shape', () => {
        it('should return the code for an svg logo with Triangle subclass shape', () => {
            const code = `<svg width='300' height='200' version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g>
        <polygon points='150, 14.375 232.2725, 161.875 67.7275, 161.875' fill='green' stroke='black' />
        <text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='136' fill='red' stroke='black'>XYZ</text>
    </g>
</svg>`;
            const shape = new Triangle('green', 'XYZ', 'red');
            const result = shape.renderLogo();

            expect(result).toEqual(code);
        });
    });
    /* Logo with Square subclass shape test */
    describe('Logo with Square subclass shape', () => {
        it('should return the code for an svg logo with Square shape subclass', () => {
            const code = `<svg width='300' height='200' version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g>
        <rect x='55' y='5' width='190' height='190' fill='silver' stroke='black' />
        <text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='136' fill='white' stroke='black'>XYZ</text>
    </g>
</svg>`;
            const shape = new Square('silver', 'XYZ', 'white');
            const result = shape.renderLogo();

            expect(result).toEqual(code);
        });
    });
});