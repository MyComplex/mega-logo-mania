class Shape {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `
<svg width='300' height='200' version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g>
        ${this.type}

    </g>
</svg>`
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
        this.type = `<circle r='95' cx='50%' cy='50%' fill='${this.color}' />`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points='150, 14.375 232.2725, 161.875 67.7275, 161.875' fill='red' />`
    }

}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x='55' y='5' width='190' height='190' fill='red' />`
    }

}

class Letters {
    constructor(letters, color) {
        this.letters = letters;
        this.color = color;
    }
    render() {
        return `<text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='136' fill='${this.color}' stroke='black'>${this.letters}</text>`
    }
}