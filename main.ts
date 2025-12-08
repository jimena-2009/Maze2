namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Good2 = SpriteKind.create()
    export const Good1 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Good3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const Good4 = SpriteKind.create()
    export const Enemy5 = SpriteKind.create()
    export const Good5 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile1)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths11, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy5)
    sprites.destroyAllSpritesOfKind(SpriteKind.Good5)
    O15 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    O16 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    O17 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    O18 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    O19 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    O20 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    C17 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    C17.setPosition(0, 0)
    O15.setPosition(0, 0)
    O16.setPosition(0, 0)
    O17.setPosition(0, 0)
    O18.setPosition(0, 0)
    O19.setPosition(0, 0)
    O20.setPosition(0, 0)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadTurn1)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good5, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Good2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    O8 = sprites.create(img`
        . 1 1 1 1 1 . . . . . . . . . . 
        . 1 1 1 1 1 1 . . . . . . . . . 
        . 1 1 1 1 1 1 . . . . . . . . . 
        . 1 1 1 1 1 1 1 . . . . . . . . 
        . 1 1 1 1 1 1 1 1 . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . 1 1 1 1 1 1 1 1 1 
        . . . . . . . . 1 1 1 1 1 1 1 1 
        . . . . . . . . . 1 1 1 1 1 1 1 
        . . . . . . . . . . 1 1 1 1 1 1 
        . . . . . . . . . . . 1 1 1 1 1 
        `, SpriteKind.Enemy3)
    O9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 5 5 5 5 5 . . . . . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . 5 5 5 5 5 5 . . . . . . . . 
        . . . 5 5 5 5 5 . . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        `, SpriteKind.Enemy3)
    O7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b b b b b b . . . . . . 
        `, SpriteKind.Enemy3)
    O10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        . . . . . 3 3 . . . . . . . . . 
        . . . . . 3 3 . . . . 3 3 . . . 
        . . . . 3 . 3 . . . 3 3 . . . . 
        . . . . 3 3 . . . . 3 . . . . . 
        . . . . 3 3 . . . 3 . . . . . . 
        . . . . 3 3 . . . 3 . . . . . . 
        . . . . 3 3 . . 3 . . . . . . . 
        . . . . 3 3 . 3 . . . . . . . . 
        . . . . . 3 3 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy3)
    C11 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 . . . . . 2 . . . . 
        . . . . 2 . . . . 2 2 2 . . . . 
        . . . . 2 . . . 2 . . 2 . . . . 
        . . . 2 . . . 2 . . . 2 . . . . 
        . . . 2 . . . 2 . . 2 . . . . . 
        . . 2 . . . 2 . . . 2 . . . . 2 
        . . 2 . . 2 . . . 2 . . . . 2 2 
        . 2 . . 2 2 . . . 2 . . . 2 . 2 
        . 2 . 2 . . . . 2 . . . 2 . . 2 
        . 2 2 . . . . . 2 . . 2 . . . 2 
        . . . . . . . 2 . . 2 . . . . 2 
        . . . . . . . 2 . 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        `, SpriteKind.Good3)
    C12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 3 . . . . . . 
        . . . . . . . . 3 . . . 3 . . . 
        . . . . . . . 3 3 . . 3 3 . . . 
        . . . . . . 3 3 . . 3 . 3 . . . 
        . . . . . 3 3 . . . 3 3 . . . . 
        . . . . 3 . 3 . . . 3 . . . . . 
        . . . . 3 3 . . . . 3 . . . . . 
        . 3 3 3 . 3 . . . 3 . . . . . . 
        . . . . . 3 . . 3 3 . . . . . . 
        . . . . . 3 . . 3 . . . . 3 3 . 
        . . . . 3 . . 3 3 . . . 3 . . . 
        . . . . 3 . 3 . 3 . 3 3 . . . . 
        . . . . 3 3 . . 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Good3)
    C13 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a . . . . . . . . . 
        . . . . . a . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . . a . . . . . a a . . . . . 
        . . . a . . . . a . a . . . . . 
        . . . a . . . a . . a . . . . . 
        . . . a . . a . . . a . . . . . 
        . . a . . . a . . . a . . . . . 
        . . a . a a . . . a . . . . . a 
        . . a a . . . . . a . . . a a a 
        . . . . . . . . . a . . a . . a 
        . . . . . . . . . a . a . . . a 
        . . . . . . . . a a a . . . . . 
        . . . . . . . . a . . . . . . . 
        `, SpriteKind.Good3)
    O8.setPosition(0, 0)
    O9.setPosition(0, 0)
    O7.setPosition(0, 0)
    O10.setPosition(0, 0)
    C11.setPosition(0, 0)
    C12.setPosition(0, 0)
    C13.setPosition(0, 0)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile1)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy4, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, sprites.builtin.oceanDepths9)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadTurn4, function (sprite, location) {
    game.gameOver(true)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Good1)
    Ockatle4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 . . 2 . . . . 
        . . . 2 2 . . . 2 . . 2 . . . . 
        . . . 2 2 . . . 2 . . 2 . . . . 
        . . . 2 2 . . . 2 . . 2 . . . . 
        . . . 2 2 2 2 2 2 . . 2 . . . . 
        . . . 2 . . . . . . . 2 . . . . 
        . . . 2 . . . . . . . 2 . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy2)
    Obstacle5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 . . 3 3 3 . 3 . . . 
        . . . . 3 . . 3 3 3 3 3 3 . . . 
        . . . 3 . . 3 3 3 3 3 3 3 . . . 
        . . . 3 . 3 . 3 3 . 3 3 3 . . . 
        . . . 3 . 3 3 3 . 3 . 3 3 . . . 
        . . . 3 3 3 3 3 . 3 . 3 . . . . 
        . . . 3 3 3 3 3 3 . 3 3 . . . . 
        . . . . 3 . 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy2)
    Obstacke6 = sprites.create(img`
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 . 9 9 . . . 9 . . 
        . . . 9 9 9 9 . 9 . . . 9 . . . 
        . . 9 9 9 . 9 9 9 9 . . 9 9 . . 
        . . 9 9 . 9 . 9 9 . . 9 9 9 . . 
        . . . 9 9 . 9 9 9 . 9 9 . 9 . . 
        . . 9 9 . 9 9 9 . 9 9 9 . 9 . . 
        . . 9 9 9 9 9 9 9 9 9 9 . 9 . . 
        . 9 9 9 9 9 9 . 9 9 9 . . 9 9 . 
        9 9 9 . 9 9 9 9 9 9 9 . . 9 9 . 
        . 9 9 9 9 9 . 9 9 9 9 . 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 . . 9 9 9 . 
        . 9 9 9 . 9 9 9 9 9 . 9 . 9 . . 
        . . 9 . 9 9 9 . 9 9 9 . 9 9 . . 
        . . . . 9 9 . . 9 9 . . 9 . . . 
        . . . . . . . . 9 9 . . . . . . 
        `, SpriteKind.Enemy2)
    C7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 3 3 . . . . 
        . . . . . . . 3 3 3 3 3 . . . . 
        . . . . . . . 3 3 3 . 3 . . . . 
        . . . . . . . 3 3 . . 3 . . . . 
        . . . . . . 3 3 3 . . 3 . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . 3 . 3 . 3 . 3 . . . . . 
        . . . . 3 . 3 . 3 3 . . . . . . 
        . . . . 3 . 3 . 3 3 . . . . . . 
        . . . . 3 . 3 . 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Good2)
    C8 = sprites.create(img`
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Good2)
    C9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        `, SpriteKind.Good2)
    C10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        a a a a a a a a a a a a a a a . 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        . . . a a a a a a a a a a a a a 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Good2)
    Ockatle4.setPosition(60, 60)
    Obstacle5.setPosition(120, 94)
    Obstacke6.setPosition(249, 39)
    C8.setPosition(0, 0)
    C7.setPosition(0, 0)
    C9.setPosition(0, 0)
    C10.setPosition(0, 0)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles23, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy3)
    sprites.destroyAllSpritesOfKind(SpriteKind.Good3)
    _011 = sprites.create(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        `, SpriteKind.Enemy4)
    O12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 5 5 5 . . . . . . . . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . . . . . . . . . . . . 5 5 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy4)
    O13 = sprites.create(img`
        . . . . . . . . 7 7 7 7 7 7 7 7 
        . . . . . 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
        . . . . . . 7 7 7 7 7 7 7 . . . 
        . . . . . . 7 7 7 7 7 7 7 . . . 
        . . . . . . 7 7 7 7 7 7 7 . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 . 
        . . . . . . . . 7 7 7 7 7 7 7 7 
        . . . . . . . . 7 7 7 7 7 7 7 7 
        . . . . . . . . 7 7 7 7 7 7 7 7 
        . . . . . . . . . 7 7 7 7 7 7 7 
        . . . . . . . . . . . 7 7 7 7 7 
        `, SpriteKind.Enemy4)
    O14 = sprites.create(img`
        . . . . . . . . . . . . 6 6 6 6 
        . . . . . . . . . . 6 6 6 6 6 6 
        . . . . . . . . 6 6 6 6 6 6 6 6 
        . . . . . . . 6 6 6 6 6 6 6 6 6 
        . . . . . . 6 6 6 6 6 6 6 6 6 6 
        . . . . . 6 6 6 6 6 6 6 6 6 6 6 
        . . . . 6 6 6 6 6 6 6 6 6 6 . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 . . . . . 
        . . 6 6 6 6 6 6 6 6 . . . . . . 
        . 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 6 . . . . . . . 
        6 6 6 6 6 6 6 6 . . . . . . . . 
        6 6 6 6 6 6 6 . . . . . . . . . 
        6 6 6 6 6 6 . . . . . . . . . . 
        6 6 6 6 6 . . . . . . . . . . . 
        `, SpriteKind.Enemy4)
    C14 = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . . c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c c . . . . . . 
        . . . . c c c c c . . . . . . . 
        `, SpriteKind.Good4)
    C15 = sprites.create(img`
        b b b b b b . . . . . . b b b b 
        b b b b b b . . . . b b b b b b 
        b b b b b b b b . b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        . b b b b b b b b b b b b b b b 
        . . b b b b b b b b b b b b . . 
        . . . b b b b b b b b b b . . . 
        . . b b b b b b b b b b b b b . 
        . b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b . . b b b b b b b 
        b b b b b b . . . . . b b b b b 
        b b b b b . . . . . . . . b b b 
        b b b b . . . . . . . . . b b b 
        `, SpriteKind.Good4)
    C16 = sprites.create(img`
        9 9 9 . . . . . . . . . . . . . 
        9 9 9 9 . . . . . . . . . . . . 
        9 9 9 9 9 . . . . . . . . . . . 
        9 9 9 9 9 9 . . . . . . . . . . 
        9 9 9 9 9 9 9 9 . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 . . . . . 
        . 9 9 9 9 9 9 9 9 9 9 9 . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . 9 9 9 9 9 9 9 9 9 . 
        . . . . . . . 9 9 9 9 9 9 9 9 9 
        . . . . . . . 9 9 9 9 9 9 9 9 9 
        . . . . . . . . . 9 9 9 9 9 9 9 
        . . . . . . . . . . 9 9 9 9 9 9 
        . . . . . . . . . . . 9 9 9 9 9 
        `, SpriteKind.Good4)
    _011.setPosition(0, 0)
    O12.setPosition(0, 0)
    O13.setPosition(0, 0)
    O14.setPosition(0, 0)
    C14.setPosition(0, 0)
    C15.setPosition(0, 0)
    C16.setPosition(0, 0)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.oceanDepths9)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy5, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadTurn1)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
let C16: Sprite = null
let C15: Sprite = null
let C14: Sprite = null
let O14: Sprite = null
let O13: Sprite = null
let O12: Sprite = null
let _011: Sprite = null
let C10: Sprite = null
let C9: Sprite = null
let C8: Sprite = null
let C7: Sprite = null
let Obstacke6: Sprite = null
let Obstacle5: Sprite = null
let Ockatle4: Sprite = null
let C13: Sprite = null
let C12: Sprite = null
let C11: Sprite = null
let O10: Sprite = null
let O7: Sprite = null
let O9: Sprite = null
let O8: Sprite = null
let C17: Sprite = null
let O20: Sprite = null
let O19: Sprite = null
let O18: Sprite = null
let O17: Sprite = null
let O16: Sprite = null
let O15: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . 1 . . . . . 1 . . . . . 
    . . . . 1 3 . . . 3 1 . . . . . 
    . . . . 1 3 1 . 1 3 1 . . . . . 
    . . . . 1 3 1 . 1 3 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 f 1 1 1 f 1 1 . . . . 
    . . . 1 1 f 1 1 1 f 1 1 . . . . 
    . . . 1 1 f 1 1 1 f 1 1 . . . . 
    . . . 1 1 1 1 3 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 d 1 1 1 d 1 1 . . . . 
    `, SpriteKind.Player)
let Obstacke = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e 5 5 . . . 
    . . . e e 5 1 1 1 1 1 e e 5 . . 
    . . e e e 1 1 f 1 f 1 1 e e e . 
    . . e 5 1 1 1 1 1 1 1 1 1 5 e . 
    . e 5 1 1 f 1 1 1 1 1 f 1 1 e 5 
    . e e 1 1 1 1 1 f 1 1 1 1 1 e 5 
    . e e 1 1 1 1 1 f 1 1 1 1 1 e 5 
    . e e 1 f 1 1 1 f f 1 1 f 1 e 5 
    . e e 1 1 1 1 1 1 1 1 1 1 1 e 5 
    . e e 1 1 1 1 1 1 1 1 1 1 1 e e 
    . e e 1 1 f 1 1 1 1 1 f 1 1 1 e 
    . . e e 1 1 1 1 1 1 1 1 1 e e . 
    . . e e e 1 1 f 1 f 1 1 e e 5 . 
    . . . 5 e e 1 1 1 1 1 e e 5 . . 
    . . . . . e e e e e 5 5 . . . . 
    `, SpriteKind.Enemy)
let Obstacle2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e 5 5 . . . 
    . . . e e 5 1 1 1 1 1 e e 5 . . 
    . . e e e 1 1 f 1 f 1 1 e e e . 
    . . e 5 1 1 1 1 1 1 1 1 1 5 e . 
    . e 5 1 1 f 1 1 1 1 1 f 1 1 e 5 
    . e e 1 1 1 1 1 1 1 1 1 1 1 e 5 
    . e e 1 1 1 1 1 1 1 1 1 1 1 e 5 
    . e e 1 f 1 f f f 1 1 1 f 1 e 5 
    . e e 1 1 1 1 1 1 f 1 1 1 1 e 5 
    . e e 1 1 1 1 1 1 1 1 1 1 1 e e 
    . e e 1 1 f 1 1 1 1 1 f 1 1 1 e 
    . . e e 1 1 1 1 1 1 1 1 1 e e . 
    . . e e e 1 1 f 1 f 1 1 e e 5 . 
    . . . 5 e e 1 1 1 1 1 e e 5 . . 
    . . . . . e e e e e 5 5 . . . . 
    `, SpriteKind.Enemy)
let Obstaclle3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e 5 5 . . . 
    . . . e e 5 1 1 1 1 1 e e 5 . . 
    . . e e e 1 1 f 1 f 1 1 e e e . 
    . . e 5 1 1 1 1 1 1 1 1 1 5 e . 
    . e 5 1 1 f 1 1 1 1 1 f 1 1 e 5 
    . e e 1 1 1 1 1 1 1 1 1 1 1 e 5 
    . e e 1 1 1 1 1 1 f 1 1 1 1 e 5 
    . e e 1 f 1 1 1 f 1 1 1 f 1 e 5 
    . e e 1 1 1 1 1 f 1 1 1 1 1 e 5 
    . e e 1 1 1 1 1 f 1 1 1 1 1 e e 
    . e e 1 1 f 1 1 1 1 1 f 1 1 1 e 
    . . e e 1 1 1 1 1 1 1 1 1 e e . 
    . . e e e 1 1 f 1 f 1 1 e e 5 . 
    . . . 5 e e 1 1 1 1 1 e e 5 . . 
    . . . . . e e e e e 5 5 . . . . 
    `, SpriteKind.Enemy)
let Carrot = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 9 9 9 . . . 
    . . . . . 9 9 9 9 9 9 9 9 . . . 
    . . . . . 9 9 9 9 9 9 . 9 . . . 
    . . . . . 9 9 9 9 9 9 . 9 . . . 
    . . . . . . 9 9 9 9 9 . 9 . . . 
    . . . . . . 9 9 9 9 9 9 . . . . 
    . . . . . . 9 9 9 9 9 9 . . . . 
    . . . . . . 9 . 9 9 9 . . . . . 
    . . . . . . 9 9 9 9 9 . . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . 3 . . . . . 
    . . . . . . 3 3 . 3 3 3 . . . . 
    . . . . . 3 3 . 3 3 . 3 . . . . 
    . . . . . 3 . 3 3 . . 3 . . . . 
    . . . . . 3 3 3 . . 3 3 . . . . 
    . . . . 3 3 . 3 . . 3 . . . . . 
    . . . . 3 . 3 3 . 3 . . . . . . 
    . . . . 3 3 3 . . 3 . . . . . . 
    . . . 3 3 3 3 . 3 3 . . . . . . 
    . . . 3 . 3 . 3 3 . . . . . . . 
    . . . . 3 3 . 3 3 . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 . 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . 5 . . 5 5 5 5 5 . . . . . 
    . . 5 . . 5 5 5 5 5 5 . . . . . 
    . . 5 . 5 5 . 5 5 5 5 . . . . . 
    . . 5 . 5 5 5 . 5 5 5 . . . . . 
    . . 5 5 5 5 5 . 5 5 5 . . . . . 
    . . 5 5 5 5 5 . 5 5 5 . . . . . 
    . . 5 5 5 5 5 . 5 5 5 . . . . . 
    . . . 5 . . 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 . 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . . 5 . . 5 . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    `, SpriteKind.Good1)
let Carrot_5 = sprites.create(img`
    . . . . . . . . 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . 9 . 9 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 9 9 9 . 9 . . . . 
    . . . 9 9 9 9 9 9 9 . 9 . . . . 
    . . . 9 9 9 9 9 9 9 . 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot6 = sprites.create(img`
    . . . . . . . . c . . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . c c c c c . . . . . 
    . . . . . c . c c c . c . . . . 
    . . . . c . c c c c c c . . . . 
    . . . . c c c c c c c c . . . . 
    . . . c c c c c c c c c . . . . 
    . . . c c c c c c c c c . . . . 
    . . . c c c c c c c c c c . . . 
    . . . c c c c c c c c . c . . . 
    . . . c c c c c c c c c . . . . 
    . . . c c c c c . c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c . c c . c . . . . . . 
    . . . . . c c c c c . . . . . . 
    `, SpriteKind.Good1)
controller.moveSprite(mySprite)
Obstacke.setPosition(60, 71)
Obstacle2.setPosition(206, 70)
Obstaclle3.setPosition(107, 57)
Carrot.setPosition(114, 89)
Carrot2.setPosition(160, 50)
Carrot3.setPosition(0, 0)
Carrot4.setPosition(0, 0)
Carrot_5.setPosition(0, 0)
tiles.setCurrentTilemap(tilemap`level6`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(300)
info.setScore(0)
info.setLife(5)
