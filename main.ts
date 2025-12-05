scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths11, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadTurn1)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile1)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(30)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadTurn4, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(45)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles23, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.oceanDepths9)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(20)
})
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
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile1)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
