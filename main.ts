function SpaceShip () {
    SpaceShip1 = sprites.create(img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 b b 1 . . . . . . 
        . . . . . . 1 b b 1 . . . . . . 
        . . . . . 1 b b b b 1 . . . . . 
        . . . . . 1 b 9 9 b 1 . . . . . 
        . . . . . 1 b 9 9 b 1 . . . . . 
        . 1 4 . 1 b 9 9 9 9 b 1 . 4 1 . 
        . 1 2 . 1 b b b b b b 1 . 2 1 . 
        . 1 c 1 1 b b b b b b 1 1 c 1 . 
        . 1 c 1 b b b b b b b b 1 c 1 . 
        . 1 c 1 b b b 1 1 b b b 1 c 1 . 
        . 1 b b b c 1 c c 1 c b b b 1 . 
        1 c b b c c 1 1 1 1 c c b b c 1 
        1 c b b c c 1 . . 1 c c b b c 1 
        . . 1 1 2 2 1 . . 1 2 2 1 1 . . 
        . . . . 1 1 . . . . 1 1 . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(SpaceShip1)
    characterAnimations.loopFrames(
    SpaceShip1,
    [img`
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 b b 1 . . . . . 
        . . . . . . 1 b b b 1 . . . . . 
        . . . . . . 1 b b b b 1 . . . . 
        . . . . . . 1 b 9 9 b 1 . . . . 
        . . 1 4 . 1 b 9 9 9 b 1 . . . . 
        . . 1 2 . 1 b b 9 9 9 b 1 . 4 1 
        . . 1 c 1 1 b b b b b b 1 . 2 1 
        . . 1 c 1 b b b b b b b 1 1 c 1 
        . . 1 c 1 b b b b b b b b 1 c 1 
        . . 1 b b b c 1 1 1 b b b 1 c 1 
        . . c b b c c 1 c c 1 c b b b 1 
        . . c b b c c 1 1 1 1 c c b b c 
        . . . 1 1 2 2 1 4 4 1 c c b b c 
        . . . . . 1 1 . 2 4 1 2 2 1 1 . 
        . . . . . . . . . 2 . 1 1 . . . 
        `,img`
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 b b 1 . . . . . 
        . . . . . . 1 b b b 1 . . . . . 
        . . . . . . 1 b b b b 1 . . . . 
        . . . . . . 1 b 9 9 b 1 . . . . 
        . . 1 4 . 1 b 9 9 9 b 1 . . . . 
        . . 1 2 . 1 b b 9 9 9 b 1 . 4 1 
        . . 1 c 1 1 b b b b b b 1 . 2 1 
        . . 1 c 1 b b b b b b b 1 1 c 1 
        . . 1 c 1 b b b b b b b b 1 c 1 
        . . 1 b b b c 1 1 1 b b b 1 c 1 
        . . c b b c c 1 c c 1 c b b b 1 
        . . c b b c c 1 1 1 1 c c b b c 
        . . . 1 1 2 2 1 4 4 1 c c b b c 
        . . . . . 1 1 . 4 2 1 2 2 1 1 . 
        . . . . . . . . 2 . . 1 1 . . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    SpaceShip1,
    [img`
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 1 b b 1 . . . . . . . 
        . . . . . 1 b b b 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 b 9 9 b 1 . . . . . . 
        . . . . 1 b 9 9 9 b 1 . 4 1 . . 
        1 4 . 1 b 9 9 9 b b 1 . 2 1 . . 
        1 2 . 1 b b b b b b 1 1 c 1 . . 
        1 c 1 1 b b b b b b b 1 c 1 . . 
        1 c 1 b b b b b b b b 1 c 1 . . 
        1 c 1 b b b 1 1 1 c b b b 1 . . 
        1 b b b c 1 c c 1 c c b b c . . 
        c b b c c 1 1 1 1 c c b b c . . 
        c b b c c 1 4 4 1 2 2 1 1 . . . 
        . 1 1 2 2 1 4 2 . 1 1 . . . . . 
        . . . 1 1 . 2 . . . . . . . . . 
        `,img`
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 1 b b 1 . . . . . . . 
        . . . . . 1 b b b 1 . . . . . . 
        . . . . 1 b b b b 1 . . . . . . 
        . . . . 1 b 9 9 b 1 . . . . . . 
        . . . . 1 b 9 9 9 b 1 . 4 1 . . 
        1 4 . 1 b 9 9 9 b b 1 . 2 1 . . 
        1 2 . 1 b b b b b b 1 1 c 1 . . 
        1 c 1 1 b b b b b b b 1 c 1 . . 
        1 c 1 b b b b b b b b 1 c 1 . . 
        1 c 1 b b b 1 1 1 c b b b 1 . . 
        1 b b b c 1 c c 1 c c b b c . . 
        c b b c c 1 1 1 1 c c b b c . . 
        c b b c c 1 4 4 1 2 2 1 1 . . . 
        . 1 1 2 2 1 2 4 . 1 1 . . . . . 
        . . . 1 1 . . 2 . . . . . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    SpaceShip1,
    [img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 b b 1 . . . . . . 
        . . . . . . 1 b b 1 . . . . . . 
        . . . . . 1 b b b b 1 . . . . . 
        . . . . . 1 b 9 9 b 1 . . . . . 
        . . . . . 1 b 9 9 b 1 . . . . . 
        . 1 4 . 1 b 9 9 9 9 b 1 . 4 1 . 
        . 1 2 . 1 b b b b b b 1 . 2 1 . 
        . 1 c 1 1 b b b b b b 1 1 c 1 . 
        . 1 c 1 b b b b b b b b 1 c 1 . 
        . 1 c 1 b b b 1 1 b b b 1 c 1 . 
        . 1 b b b c 1 c c 1 c b b b 1 . 
        1 c b b c c 1 1 1 1 c c b b c 1 
        1 c b b c c 1 4 4 1 c c b b c 1 
        . . 1 1 2 2 1 4 2 1 2 2 1 1 . . 
        . . . . 1 1 . 2 . . 1 1 . . . . 
        `,img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 b b 1 . . . . . . 
        . . . . . . 1 b b 1 . . . . . . 
        . . . . . 1 b b b b 1 . . . . . 
        . . . . . 1 b 9 9 b 1 . . . . . 
        . . . . . 1 b 9 9 b 1 . . . . . 
        . 1 4 . 1 b 9 9 9 9 b 1 . 4 1 . 
        . 1 2 . 1 b b b b b b 1 . 2 1 . 
        . 1 c 1 1 b b b b b b 1 1 c 1 . 
        . 1 c 1 b b b b b b b b 1 c 1 . 
        . 1 c 1 b b b 1 1 b b b 1 c 1 . 
        . 1 b b b c 1 c c 1 c b b b 1 . 
        1 c b b c c 1 1 1 1 c c b b c 1 
        1 c b b c c 1 4 4 1 c c b b c 1 
        . . 1 1 2 2 1 2 4 1 2 2 1 1 . . 
        . . . . 1 1 . . 2 . 1 1 . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
let Asteroid1: Sprite = null
let SpaceShip1: Sprite = null
info.setScore(0)
info.setLife(3)
SpaceShip()
game.onUpdateInterval(1000, function () {
    Asteroid1 = sprites.create(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, SpriteKind.Enemy)
    Asteroid1.startEffect(effects.ashes)
    Asteroid1.setFlag(SpriteFlag.AutoDestroy, true)
    animation.runImageAnimation(
    Asteroid1,
    [img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `,img`
        . . . . . . c a a c c 8 . . . . 
        . . . . . a a 8 f a c c . . . . 
        . . . . c c 8 f c a c c c . . . 
        . . c c c a a c a b b c c c . . 
        . c c b b a a a a b f f c c . . 
        c c b b a c c a b 8 f f f 8 . . 
        c a b a f f c c b a f f f 8 8 . 
        c b b f f f c c a b 8 f f f c . 
        c b 6 f f a c a c c a c c c c . 
        c c 6 6 a a a c c c c c a a c c 
        c c a 6 b b a a c c c a a f f c 
        . c c a b 8 f c c c a a f f 8 8 
        . . c b c f f f c c a c f f c . 
        . . c 6 c f f f f c a 8 c c c . 
        . . c c 6 c 8 f f c c c c c . . 
        . . . . c a a c c c c c c . . . 
        `,img`
        . . . . . c c c c c c . . . . . 
        . . . . c c c b b a c c . . . . 
        . c c c c a 6 6 b b b c c . . . 
        . c 6 b a 6 6 f f a b b c . . . 
        c 6 c c b b a f f f a b c c . . 
        a c f f 8 b a a f f c a a c a . 
        a 8 f f f a a c c c c a a 8 a c 
        c f f f c a c a c c a a c f 8 a 
        c f f c c c c c a b b a a c f a 
        c c c c c c c c b a 8 b b a a c 
        c c a a a c c a 8 f f f b c c c 
        c c 8 c a a c c f f f f c c c 8 
        c c c f f a a c f f f c c c . . 
        . c c f f f a c f 8 8 c c . . . 
        . . c c 8 f c c c 8 . . . . . . 
        . . . . 8 c c . . . . . . . . . 
        `,img`
        . . . c c c c c c a a c . . . . 
        . . c c c c c f f 8 c 6 c c . . 
        . c c c 8 a c f f f f c 6 c . . 
        . c f f c a c c f f f c b c . . 
        8 8 f f a a c c c f 8 b a c c . 
        c f f a a c c c a a b b 6 a c c 
        c c a a c c c c c a a a 6 6 c c 
        . c c c c a c c a c a f f 6 b c 
        . c f f f 8 b a c c f f f b b c 
        . 8 8 f f f a b c c f f a b a c 
        . . 8 f f f 8 b a c c a b b c c 
        . . c c f f b a a a a b b c c . 
        . . c c c b b a c a a c c c . . 
        . . . c c c a c f 8 c c . . . . 
        . . . . c c a f 8 a a . . . . . 
        . . . . 8 c c a a c . . . . . . 
        `],
    100,
    true
    )
    Asteroid1.setPosition(randint(5, 145), 0)
    Asteroid1.changeScale(randint(0.1, 0.5), ScaleAnchor.Middle)
    Asteroid1.vy = randint(10, 50)
})
