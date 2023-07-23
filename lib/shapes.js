class Shape {
    constructor() {
        this.color = '';
    };

    fillColor(selectedColor) {
        this.color = selectedColor;
    };
};

class Circle extends Shape {
    render() {
        return ``
    }
}

module.exports = { Circle, Triangle, Square };