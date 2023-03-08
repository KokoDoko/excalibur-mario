import { Engine, Physics, Vector } from 'https://esm.sh/excalibur'
import { ResourceLoader } from "./resources.js"
import { Level } from "./level.js"
import { GameOver } from "./gameover.js"

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })

        Physics.useRealisticPhysics()
        Physics.gravity = new Vector(0, 800)

        this.start(ResourceLoader).then(() => this.startGame())
    }

    
    startGame(){
        // alle scenes toevoegen
        this.add('level', new Level())
        this.add('game-over', new GameOver())

        // naar game level springen - level state blijft bewaard als wisselt van scenes
        // via activate/deactivate in het level kan je bepalen wat er na goToScene moet gebeuren
        this.goToScene('level')
    }

}

new Game()