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
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good5, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy4, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
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
        c . . . . . . . . . . . . . . c 
        a c . . c c c c c c c c . . c a 
        c a c c c a a a a a a c c c a c 
        c a c a a a a c c a a a a c a c 
        c a a a a a c a a a a a a a a c 
        c a a a a c a a a a a a a a a c 
        c a a a a a a a a a a a a a a c 
        c a a a a a a a a a a a a a a c 
        c a a a a a a a a a a a a a a c 
        c a a a a a a a a a c a a a a c 
        c a c a a a a a a c a a a c a c 
        c a c c c a a a a a a c c c a c 
        a c . . c c c c c c c c . . c a 
        c . . . . . . . . . . . . . . c 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy2)
    Obstacle5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 d d d d d d d 6 . . . 
        . . . 6 d d d d d d 1 d d 6 . . 
        . . 6 d d d b b d d d 1 d d 6 . 
        . . 6 d d d d b d d d d d d 6 . 
        . . 6 d d d d b b d d d d d 6 . 
        . . 6 d d d d d b d d d d d 6 . 
        . . 6 d b d d d b d d b b d 6 . 
        . . 6 d b b d d b d d c d d 6 . 
        . . 6 d d b b d b d c c d d 6 . 
        . . 6 d d d b b b b b d d d 6 . 
        . . 6 d d d d b b b d d d d 6 . 
        . . . 6 d d d b b b d d d 6 . . 
        . . . . 6 d d b d b d d 6 . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        `, SpriteKind.Enemy2)
    Obstacke6 = sprites.create(img`
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 b 3 3 3 3 3 3 3 3 3 3 3 . 
        3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 
        . . . . e . 5 4 4 5 . . . . . . 
        . . . . f . . e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . e e e e e e . . . . . 
        `, SpriteKind.Enemy2)
    C7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . 7 7 7 . 7 . 
        . . . . . . . . 4 4 4 4 7 7 . . 
        . . . . . . . 4 4 4 4 7 4 7 7 . 
        . . . . . . 4 4 4 4 4 4 4 4 7 7 
        . . . . . . 4 4 d 4 4 4 4 4 7 . 
        . . . . . 4 4 d 4 4 4 4 4 e . 7 
        . . . . 4 4 4 4 4 4 4 4 e e . . 
        . . . 4 4 d 4 4 4 4 4 e e . . . 
        . . . 4 4 4 4 4 4 4 e e . . . . 
        . . 4 4 4 4 4 4 e e . . . . . . 
        . . 4 4 4 4 4 e e . . . . . . . 
        . 4 4 4 4 e e . . . . . . . . . 
        . 4 4 e e . . . . . . . . . . . 
        `, SpriteKind.Good2)
    C8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . 7 . . . 
        . . . . . . . . . . 7 7 7 . 7 . 
        . . . . . . . . 4 4 4 4 7 7 . . 
        . . . . . . . 4 4 4 4 7 4 7 7 . 
        . . . . . . 4 4 4 4 4 4 4 4 7 7 
        . . . . . . 4 4 d 4 4 4 4 4 7 . 
        . . . . . 4 4 d 4 4 4 4 4 e . 7 
        . . . . 4 4 4 4 4 4 4 4 e e . . 
        . . . 4 4 d 4 4 4 4 4 e e . . . 
        . . . 4 4 4 4 4 4 4 e e . . . . 
        . . 4 4 4 4 4 4 e e . . . . . . 
        . . 4 4 4 4 4 e e . . . . . . . 
        . 4 4 4 4 e e . . . . . . . . . 
        . 4 4 e e . . . . . . . . . . . 
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
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
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
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
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
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy5, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
let C17: Sprite = null
let O20: Sprite = null
let O19: Sprite = null
let O18: Sprite = null
let O17: Sprite = null
let O16: Sprite = null
let O15: Sprite = null
let C10: Sprite = null
let C9: Sprite = null
let C8: Sprite = null
let C7: Sprite = null
let Obstacke6: Sprite = null
let Obstacle5: Sprite = null
let Ockatle4: Sprite = null
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
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . . . . . . 7 . . . 
    . . . . . . . . . . 7 7 7 . 7 . 
    . . . . . . . . 4 4 4 4 7 7 . . 
    . . . . . . . 4 4 4 4 7 4 7 7 . 
    . . . . . . 4 4 4 4 4 4 4 4 7 7 
    . . . . . . 4 4 d 4 4 4 4 4 7 . 
    . . . . . 4 4 d 4 4 4 4 4 e . 7 
    . . . . 4 4 4 4 4 4 4 4 e e . . 
    . . . 4 4 d 4 4 4 4 4 e e . . . 
    . . . 4 4 4 4 4 4 4 e e . . . . 
    . . 4 4 4 4 4 4 e e . . . . . . 
    . . 4 4 4 4 4 e e . . . . . . . 
    . 4 4 4 4 e e . . . . . . . . . 
    . 4 4 e e . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . . . . . . 7 . . . 
    . . . . . . . . . . 7 7 7 . 7 . 
    . . . . . . . . 4 4 4 4 7 7 . . 
    . . . . . . . 4 4 4 4 7 4 7 7 . 
    . . . . . . 4 4 4 4 4 4 4 4 7 7 
    . . . . . . 4 4 d 4 4 4 4 4 7 . 
    . . . . . 4 4 d 4 4 4 4 4 e . 7 
    . . . . 4 4 4 4 4 4 4 4 e e . . 
    . . . 4 4 d 4 4 4 4 4 e e . . . 
    . . . 4 4 4 4 4 4 4 e e . . . . 
    . . 4 4 4 4 4 4 e e . . . . . . 
    . . 4 4 4 4 4 e e . . . . . . . 
    . 4 4 4 4 e e . . . . . . . . . 
    . 4 4 e e . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . . . . . . 7 . . . 
    . . . . . . . . . . 7 7 7 . 7 . 
    . . . . . . . . 4 4 4 4 7 7 . . 
    . . . . . . . 4 4 4 4 7 4 7 7 . 
    . . . . . . 4 4 4 4 4 4 4 4 7 7 
    . . . . . . 4 4 d 4 4 4 4 4 7 . 
    . . . . . 4 4 d 4 4 4 4 4 e . 7 
    . . . . 4 4 4 4 4 4 4 4 e e . . 
    . . . 4 4 d 4 4 4 4 4 e e . . . 
    . . . 4 4 4 4 4 4 4 e e . . . . 
    . . 4 4 4 4 4 4 e e . . . . . . 
    . . 4 4 4 4 4 e e . . . . . . . 
    . 4 4 4 4 e e . . . . . . . . . 
    . 4 4 e e . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . . . . . . 7 . . . 
    . . . . . . . . . . 7 7 7 . 7 . 
    . . . . . . . . 4 4 4 4 7 7 . . 
    . . . . . . . 4 4 4 4 7 4 7 7 . 
    . . . . . . 4 4 4 4 4 4 4 4 7 7 
    . . . . . . 4 4 d 4 4 4 4 4 7 . 
    . . . . . 4 4 d 4 4 4 4 4 e . 7 
    . . . . 4 4 4 4 4 4 4 4 e e . . 
    . . . 4 4 d 4 4 4 4 4 e e . . . 
    . . . 4 4 4 4 4 4 4 e e . . . . 
    . . 4 4 4 4 4 4 e e . . . . . . 
    . . 4 4 4 4 4 e e . . . . . . . 
    . 4 4 4 4 e e . . . . . . . . . 
    . 4 4 e e . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot_5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . . . . . . 7 . . . 
    . . . . . . . . . . 7 7 7 . 7 . 
    . . . . . . . . 4 4 4 4 7 7 . . 
    . . . . . . . 4 4 4 4 7 4 7 7 . 
    . . . . . . 4 4 4 4 4 4 4 4 7 7 
    . . . . . . 4 4 d 4 4 4 4 4 7 . 
    . . . . . 4 4 d 4 4 4 4 4 e . 7 
    . . . . 4 4 4 4 4 4 4 4 e e . . 
    . . . 4 4 d 4 4 4 4 4 e e . . . 
    . . . 4 4 4 4 4 4 4 e e . . . . 
    . . 4 4 4 4 4 4 e e . . . . . . 
    . . 4 4 4 4 4 e e . . . . . . . 
    . 4 4 4 4 e e . . . . . . . . . 
    . 4 4 e e . . . . . . . . . . . 
    `, SpriteKind.Good1)
let Carrot6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . . . . . . 7 . . . 
    . . . . . . . . . . 7 7 7 . 7 . 
    . . . . . . . . 4 4 4 4 7 7 . . 
    . . . . . . . 4 4 4 4 7 4 7 7 . 
    . . . . . . 4 4 4 4 4 4 4 4 7 7 
    . . . . . . 4 4 d 4 4 4 4 4 7 . 
    . . . . . 4 4 d 4 4 4 4 4 e . 7 
    . . . . 4 4 4 4 4 4 4 4 e e . . 
    . . . 4 4 d 4 4 4 4 4 e e . . . 
    . . . 4 4 4 4 4 4 4 e e . . . . 
    . . 4 4 4 4 4 4 e e . . . . . . 
    . . 4 4 4 4 4 e e . . . . . . . 
    . 4 4 4 4 e e . . . . . . . . . 
    . 4 4 e e . . . . . . . . . . . 
    `, SpriteKind.Good1)
controller.moveSprite(mySprite)
Obstacke.setPosition(37, 71)
Obstacle2.setPosition(145, 120)
Obstaclle3.setPosition(107, 40)
Carrot.setPosition(140, 88)
Carrot2.setPosition(160, 50)
Carrot3.setPosition(225, 10)
Carrot4.setPosition(40, 10)
Carrot_5.setPosition(66, 225)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(300)
info.setScore(0)
info.setLife(5)
