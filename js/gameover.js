import { Engine, TextAlign, BaseAlign, Actor, Label, Input, FontUnit, Vector, Color, Scene, Font } from 'https://esm.sh/excalibur'
import { Resources } from './resources.js'

export class GameOver extends Scene {

    onInitialize(engine) {
        const bg = new Actor()
        bg.graphics.use(Resources.Gameover.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2)
        this.add(bg)

        // een Label is een Actor die automatisch een Text graphic toevoegt.
        const label = new Label({
            text: 'Game over man!\nPress space to restart',
            pos: new Vector(engine.screen.resolution.width/2, engine.screen.resolution.height/3),
            font: new Font({
                unit: FontUnit.Px,
                family: 'PressStart',
                size: 20,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
            })
        })
        this.add(label)
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            engine.goToScene('level')
        }
    }
}