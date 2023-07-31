/* Define Logo class with common properties and methods */
class Logo {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    };
    renderText() {
        return `<text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='136' fill='${this.textColor}' stroke='black'>${this.text}</text>`;
    };
    renderLogo() {
        return `<svg width='300' height='200' version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g>
        ${this.renderShape()}
        ${this.renderText()}
    </g>
</svg>`;
    };
};

/* Define Circle subclass passing common properties and defining a subclass specific method */
class Circle extends Logo {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    };
    renderShape() {
        return `<circle r='95' cx='50%' cy='50%' fill='${this.shapeColor}' stroke='black' />`;
    };
};

/* Define Triangle subclass passing common properties and defining a subclass specific method */
class Triangle extends Logo {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    };
    renderShape() {
        return `<polygon points='150, 14.375 232.2725, 161.875 67.7275, 161.875' fill='${this.shapeColor}' stroke='black' />`;
    };
};

/* Define Square subclass passing common properties and defining a subclass specific method */
class Square extends Logo {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    };
    renderShape() {
        return `<rect x='55' y='5' width='190' height='190' fill='${this.shapeColor}' stroke='black' />`;
    };
};

/* Export subclasses */
module.exports = { Circle, Triangle, Square };
