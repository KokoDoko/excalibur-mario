import { Engine, TextAlign, BaseAlign, Line, Label, Text, FontUnit, Vector, Color, Circle, ScreenElement, Font } from 'https://esm.sh/excalibur'

// screenelement heeft geen collision, altijd on top, beweegt niet mee met camera
// beperking: je kan alleen text en graphics toevoegen via graphics.add
// geeft warning Excalibur only supports convex polygon colliders
export class UI extends ScreenElement {

    score = 0
    scoreText

    constructor() {
        super({ x: 10, y: 10 })
    }

    onInitialize(engine) {
        this.scoreText = new Text({
            text: 'Score: 0',
            font: new Font({
                unit: FontUnit.Px,
                family: 'PressStart',
                size: 20,
                color: Color.White,
                baseAlign: BaseAlign.Top
            }),
        })
        this.graphics.add(this.scoreText)
    }

    reset(){
        this.score = 0
        this.scoreText.text = `Score: 0`
    }

    updateScore() {
        this.score++
        this.scoreText.text = `Score: ${this.score}`
    }
}

/* drawing lines and circles
const circleBlue = new Circle({ radius: 30, color: Color.Blue })
const testLine = new Line({
    start: new Vector(0, 0),
    end: new Vector(200, 200),
    color: Color.Green,
    thickness: 10,
})
this.graphics.add(testLine)
this.graphics.add(circleBlue)
*/