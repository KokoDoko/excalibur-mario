import { CollisionType, Actor, Input, Vector, DegreeOfFreedom, Engine, Sprite } from 'https://esm.sh/excalibur'
import { Coin } from "./coin.js"
import { Resources } from './resources.js'
// import { Game } from  './game'

export class Mario extends Actor {

    game
    sprite

    constructor() {
        super({ width: Resources.Mario.width, height: Resources.Mario.height }) // collision box!
    }
    
    onInitialize(engine) {
        this.game = engine
        this.sprite = Resources.Mario.toSprite()
        this.graphics.use(this.sprite)

        // enable physics
        this.body.useGravity = true
        this.body.collisionType = CollisionType.Active
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation) // voorkom draaien om de z as
        this.reset()
        
        // hit something
        this.on('collisionstart', (event) => this.hitSomething(event))

        //this.body.inertia = Infinity
        //this.body.inverseInertia = Infinity
        // console.log(this.body.mass)
        // console.log(this.body.inertia)
        // console.log(this.body.bounciness)
        // console.log(this.body.friction)
    }

    reset(){
        this.pos = new Vector(this.game.screen.resolution.width / 2, this.game.screen.resolution.height / 3)
    }

    hitSomething(event){
        if(event.other instanceof Coin) {
            event.other.pickedUpByMario()
            //@ts-ignore // todo check of ui bestaat
            this.game.currentScene.ui.updateScore()
        }
    }

    onPreUpdate(engine, delta) {
        let xspeed = 0
        if (engine.input.keyboard.wasPressed(Input.Keys.W) || engine.input.keyboard.wasPressed(Input.Keys.Up)) {
            this.body.applyLinearImpulse(new Vector(0,-4000))
        }
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            xspeed = -300
            this.sprite.flipHorizontal = true
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            xspeed = 300
            this.sprite.flipHorizontal = false
        }
        this.vel = new Vector(xspeed, this.vel.y)

        // check out of bounds
        if(this.pos.y > 1200) {
            engine.goToScene('game-over')
        }
    }

}