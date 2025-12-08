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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    game.gameOver(true)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy3)
    sprites.destroyAllSpritesOfKind(SpriteKind.Good3)
    _011 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 3 2 2 2 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 3 2 . . 
        . . . 2 2 2 3 2 2 2 3 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 3 2 2 2 2 2 2 2 2 2 3 2 . 
        . . 2 2 2 2 2 2 3 2 2 2 2 2 2 . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        `, SpriteKind.Enemy4)
    O12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 d 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 d 8 . . 
        . . . 8 8 8 d 8 8 8 d 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 d 8 8 8 8 8 8 8 8 8 d 8 . 
        . . 8 8 8 8 8 8 d 8 8 8 8 8 8 . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . . . 6 6 6 6 6 . . . . . 
        `, SpriteKind.Enemy4)
    O13 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a a 5 a a a a . . . 
        . . . a a a a a a a a a 5 a . . 
        . . . a a a 5 a a a 5 a a a . . 
        . . a a a a a a a a a a a a a . 
        . . a 5 a a a a a a a a a 5 a . 
        . . a a a a a a 5 a a a a a a . 
        . . . . . a a a a a a a . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        `, SpriteKind.Enemy4)
    O14 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 7 3 3 3 3 . . . 
        . . . 3 3 3 3 3 3 3 3 3 7 3 . . 
        . . . 3 3 3 7 3 3 3 7 3 3 3 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . . 3 7 3 3 3 3 3 3 3 3 3 7 3 . 
        . . 3 3 3 3 3 3 7 3 3 3 3 3 3 . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . 9 9 9 9 9 9 9 . . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        `, SpriteKind.Enemy4)
    C14 = sprites.create(img`
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
        `, SpriteKind.Good4)
    C15 = sprites.create(img`
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
        `, SpriteKind.Good4)
    C16 = sprites.create(img`
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
        `, SpriteKind.Good4)
    _011.setPosition(109, 0)
    O12.setPosition(49, 55)
    O13.setPosition(188, 18)
    O14.setPosition(78, 190)
    C14.setPosition(190, 156)
    C15.setPosition(17, 127)
    C16.setPosition(122, 88)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile20`)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good5, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy4, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile20`)
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
    C10 = sprites.create(img`
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
    Ockatle4.setPosition(60, 60)
    Obstacle5.setPosition(120, 94)
    Obstacke6.setPosition(249, 39)
    C8.setPosition(64, 0)
    C7.setPosition(0, 56)
    C9.setPosition(130, 51)
    C10.setPosition(31, 120)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy5, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile21`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Good4, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy4)
    sprites.destroyAllSpritesOfKind(SpriteKind.Good4)
    O15 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 e . . . . . 
        . . . . 2 e e e e e 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Enemy5)
    O16 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 e . . . . . 
        . . . . 2 e e e e e 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Enemy5)
    O17 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 e . . . . . 
        . . . . 2 e e e e e 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Enemy5)
    O18 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 e . . . . . 
        . . . . 2 e e e e e 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.Enemy5)
    C17 = sprites.create(img`
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
        `, SpriteKind.Good5)
    C18 = sprites.create(img`
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
        `, SpriteKind.Good5)
    C19 = sprites.create(img`
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
        `, SpriteKind.Good5)
    O15.setPosition(97, 250)
    O16.setPosition(78, 187)
    O13.setPosition(208, 25)
    O14.setPosition(53, 213)
    C17.setPosition(33, 300)
    C18.setPosition(100, 308)
    C19.setPosition(48, 288)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile21`)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Good2)
    O7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 
        2 . . 4 2 2 2 4 2 2 2 4 2 2 2 4 
        2 . . 4 2 4 2 4 2 4 2 4 2 4 2 4 
        . 2 2 4 2 2 2 4 2 2 2 4 2 2 2 4 
        . . . 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy3)
    O8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 
        8 . . 6 8 8 8 6 8 8 8 6 8 8 8 6 
        8 . . 6 8 6 8 6 8 6 8 6 8 6 8 6 
        . 8 8 6 8 8 8 6 8 8 8 6 8 8 8 6 
        . . . 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . . . 6 6 6 6 6 6 6 6 6 6 . . 
        . . . . . 8 8 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy3)
    O9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c c c c c c c c c c c c 
        . c c b b b b b b b b b b b b b 
        c . . b c c c b c c c b c c c b 
        c . . b c b c b c b c b c b c b 
        . c c b c c c b c c c b c c c b 
        . . . b b b b b b b b b b b b . 
        . . . . b b b b b b b b b b . . 
        . . . . . c c c c c c c c . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy3)
    O10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . d d d d d d d d d . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        d d d 5 d d d 5 d d d 5 d . . . 
        . d d d 5 d 5 d 5 d 5 d 5 3 3 . 
        . . d d d 5 d d d 5 d d d . . 3 
        . . . d d d d d d d d d d . . 3 
        . . . d d d d d d d d d d 3 3 . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . d d d d d d d d d d . . . 
        . . . . d 5 d 5 5 d 5 d . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy3)
    C11 = sprites.create(img`
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
        `, SpriteKind.Good3)
    C12 = sprites.create(img`
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
        `, SpriteKind.Good3)
    C13 = sprites.create(img`
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
        `, SpriteKind.Good3)
    O7.setPosition(225, 200)
    O8.setPosition(160, 100)
    O9.setPosition(33, 0)
    O10.setPosition(170, 86)
    C11.setPosition(14, 7)
    C12.setPosition(131, 100)
    C13.setPosition(215, 200)
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    scene.cameraFollowSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
let C13: Sprite = null
let C12: Sprite = null
let C11: Sprite = null
let O10: Sprite = null
let O9: Sprite = null
let O8: Sprite = null
let O7: Sprite = null
let C19: Sprite = null
let C18: Sprite = null
let C17: Sprite = null
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
let C16: Sprite = null
let C15: Sprite = null
let C14: Sprite = null
let O14: Sprite = null
let O13: Sprite = null
let O12: Sprite = null
let _011: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 . . . . . 1 . . . . . 
    . . . . 1 3 . . . 3 1 . . . . . 
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
    . . . 1 1 1 d 1 d 1 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
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
