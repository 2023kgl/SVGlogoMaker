const { Circle, Square, Triangle } = require('./shapes')

// TRIANGLE
  
    describe('Triangle', () => {
      it('should render triangle SVG', () => {
        const svg = '<polygon points = "150,1 244,152 50,150" fill="red"/>';
        const triangle = new Triangle();
        triangle.setColor("red");
        const newSvg = triangle.render();
        expect(newSvg).toEqual(svg);
      });
    });

// SQUARE

    describe('Square', () => {
        it('should render square SVG', () => {
            const svg = '<rect x="50" y="0" width="200" height="200" fill="blue"/>';
            const square = new Square();
            square.setColor("blue");
            const newSvg = square.render();
            expect(newSvg).toEqual(svg)
        })
    })


// CIRCLE

    describe('Cirlce', () => {
        it('should render circle SVG', () => {
            const svg = '<circle cx="150" cy="100" r="100" fill="green"/>'
            const circle = new Circle();
            circle.setColor("green");
            const newSvg = circle.render();
            expect(newSvg).toEqual(svg)
        })
    })

