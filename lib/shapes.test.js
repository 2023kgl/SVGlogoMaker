const { Circle, Square, Triangle } = require('./shapes')

// TRIANGLE
  
    describe('Triangle', () => {
      it('should render triangle SVG', () => {
        const svg = '<polygon points = "150, 18 244, 182 56, 182" fill="red"/>';
        const triangle = new Triangle();
        triangle.setColor("red");
        const newSvg = triangle.render();
        expect(newSvg).toEqual(svg);
      });
    });

// SQUARE

    describe('Square', () => {
        it('should render square SVG', () => {
            const svg = '<rect x="100" y="50" width="300" height="300" fill="blue"/>';
            const square = new Square();
            square.setColor("blue");
            const newSvg = square.render();
            expect(newSvg).toEqual(svg)
        })
    })


// CIRCLE

    describe('Cirlce', () => {
        it('should render circle SVG', () => {
            const svg = '<circle cx="25" cy="75" r="20" fill="green"/>'
            const circle = new Circle();
            circle.setColor("green");
            const newSvg = circle.render();
            expect(newSvg).toEqual(svg)
        })
    })

