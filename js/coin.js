import { Engine, CollisionType, Actor, Color, Vector } from 'https://esm.sh/excalibur'
import { Resources } from './resources.js'

export class Coin extends Actor {

    constructor() {
        super({ radius: Resources.Coin.width/2 }) // collision circle! 
    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Coin.toSprite())
        // enable physics
        this.body.bounciness = 0.8
        this.body.useGravity = true
        this.body.collisionType = CollisionType.Active
        this.pos = new Vector(Math.random() * engine.screen.resolution.width * 2, Math.random() * engine.screen.resolution.height - 300)
    }

    pickedUpByMario(){
        Resources.CoinSound.play()
        this.kill()
    }

    onPostUpdate(engine, delta) {
        if (this.pos.y > engine.screen.resolution.height * 2) {
            this.kill()
        }
    }
}