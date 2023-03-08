import { ImageSource, Sound, Resource, Loader } from 'https://esm.sh/excalibur'

const Resources = {
    Background: new ImageSource("../images/background.png"),
    Gameover: new ImageSource("../images/gameover.png"),
    Coin: new ImageSource("../images/coin.png"),
    Crate: new ImageSource("../images/crate.png"),
    Ground: new ImageSource("../images/ground.png"),
    Mario: new ImageSource("../images/mario.png"),
    Platform: new ImageSource("../images/platform.png"),
    CoinSound: new Sound("../assets/coin.mp3"),
    PlatformData: new Resource('../data/platforms.json', 'json'),
    SomeText: new Resource('../data/test.txt', 'text')
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