import { ImageSource, Sound, Resource, Loader } from 'https://esm.sh/excalibur'

// voordat je upload naar github pages moet je de prefix wisselen
let prefix = '/excalibur-mario/'
//let prefix = "../"

const Resources = {
    Background: new ImageSource(prefix + "images/background.png"),
    Gameover: new ImageSource(prefix + "images/gameover.png"),
    Coin: new ImageSource(prefix + "images/coin.png"),
    Crate: new ImageSource(prefix + "images/crate.png"),
    Ground: new ImageSource(prefix + "images/ground.png"),
    Mario: new ImageSource(prefix + "images/mario.png"),
    Platform: new ImageSource(prefix + "images/platform.png"),
    CoinSound: new Sound(prefix + "assets/coin.mp3"),
    PlatformData: new Resource(prefix + "data/platforms.json", "json")
}

const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Gameover,
    Resources.Coin,
    Resources.Crate,
    Resources.Ground,
    Resources.Mario,
    Resources.Platform,
    Resources.CoinSound,
    Resources.PlatformData
])

export { Resources, ResourceLoader }

// https://maximorlov.com/deploying-to-github-pages-dont-forget-to-fix-your-links/