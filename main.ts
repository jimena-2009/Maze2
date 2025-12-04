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
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . 7 7 . 7 . . . . . . 
    . . . . . . 7 . . 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . 7 . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 . 7 7 . . . . . 
    . . . . . . 7 . . . 7 . . . . . 
    . . . . . . 7 . . . . 7 . . . . 
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
