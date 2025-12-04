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
    . . . . . . . e e e e . . . . . 
    . . . . . e e 4 5 5 5 e e . . . 
    . . . . e 4 5 6 2 2 7 6 6 e . . 
    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
    e 5 e c 5 4 5 4 5 5 5 e e . . . 
    e 5 e e 5 5 5 5 5 4 e . . . . . 
    4 5 4 e 5 5 5 5 e e . . . . . . 
    . 4 5 4 5 5 4 e . . . . . . . . 
    . . 4 4 e e e . . . . . . . . . 
    `, SpriteKind.Player)
let Obstacke = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . 3 3 . 3 3 3 3 3 . . . . . 
    . . . 3 . 3 . 3 . 3 3 3 . . . . 
    . . 3 . 3 . 3 . 3 . 3 3 . . . . 
    . 3 . . 3 . 3 3 . . 3 3 . . . . 
    . 3 . . 3 3 3 3 . 3 . 3 . . . . 
    . 3 . . 3 . . . . 3 3 3 . . . . 
    . 3 . . 3 . . 3 3 . 3 . . . . . 
    . . 3 . . 3 3 . . . 3 . . . . . 
    . . . 3 . . 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
