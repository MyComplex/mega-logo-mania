class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
    render() {
        return `
<svg width='300' height='200' version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g>
        <!-- <circle r='95' cx='50%' cy='50%' fill='red' stroke='orange' stroke-width='5' /> -->
        <!-- <polygon points='150, 14.375 232.2725, 161.875 67.7275, 161.875' fill='red' stroke='orange' stroke-width='5' /> -->
        <rect x='55' y='5' width='190' height='190' fill='red' stroke='orange' stroke-width='5' />
        <text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='136' fill='silver' stroke='black'>STS</text>
    </g>
</svg>
    `
    }
}

class Circle extends Shape {
    constructor(type, color, code) {
        super(type, color);
        this.code = code;
    }
}

class Triangle extends Shape {

}

class Square extends Shape {

}

class Letters {
    constructor(letters, color) {
        this.letters = letters;
        this.color = color;
    }
    render() {
        return ``
    }
}