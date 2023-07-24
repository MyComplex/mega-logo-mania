class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
    render() {
        return ``
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