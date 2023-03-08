import { Actor, Color, ScreenElement, Engine, Vector, Physics, ParallaxComponent, Scene } from 'https://esm.sh/excalibur'
import { Resources } from "./resources.js"
import { Mario } from "./mario.js"
import { UI } from "./ui.js"
import { Platform } from "./platform.js"
import { Crate } from "./crate.js"
import { Coin } from "./coin.js"

export class Level extends Scene {

    mario
    ui

    onInitialize(engine) {
        
        // alle init die maar 1x gedaan hoeft te worden
        const bg = new Actor()
        bg.graphics.use(Resources.Background.toSprite())
        bg.pos = new Vector(engine.screen.resolution.width / 2, engine.screen.resolution.height / 2)
        bg.addComponent(new ParallaxComponent(new Vector(0.5, 0.5)))
        this.add(bg)

        // bouw de platformen
        this.spawnPlatforms()
        
        this.mario = new Mario()
        this.add(this.mario)

        this.ui = new UI()
        this.add(this.ui)

        this.camera.strategy.lockToActor(this.mario)
        //this.currentScene.camera.strategy.lockToActor(this.mario)
        //this.currentScene.camera.strategy.elasticToActor(this.mario, 0.2, 0.6)
    }

    // de scene wordt geactiveerd omdat ergens in de game goToScene wordt aangeroepen
    // hier moet je de dingen resetten die opnieuw moeten beginnen zoals de positie van de speler
    onActivate(ctx) {
        // voorbeeld - check uit welke scene de speler komt
        // if (ctx.previousScene instanceof Level) {  }

        this.spawnCratesCoins()
        this.ui.reset()
        this.mario.reset()
    }

    spawnPlatforms(){
        for (let pos of Resources.PlatformData.data) {
            const platform = new Platform(pos.x, pos.y)
            this.add(platform)
        }
    }

    spawnCratesCoins() {
        for (let i = 0; i < 8; i++) {
            const crate = new Crate()
            this.add(crate)
            const coin = new Coin()
            this.add(coin)
        }
    }
}