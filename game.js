kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    height: 1080,
    width: 1080,
    background: [0,0,0,1]
})

const HORIZONTAL_SPEED = 200;
const VERTICAL_SPEED = 200;

loadSprite('walls', 'sprites/walls.png')
loadSprite('woodTile', 'sprites/woodTile.png')
loadSprite('testBoi', 'sprites/testBoi.png')
loadSprite('transition', 'sprites/transition.png')
loadSprite('bean', 'sprites/bean.png')
loadSprite('testInvul', 'sprites/testInvul.png')

scene("tutorial" , ({ level }) => {
    layers(['bg', 'obj', 'ui'], 'obj')
    const maps = [
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',  
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ]    
    ]
    const levelConfig = {
        width: 54,
        height: 54,
        '*': () => [
            sprite('walls'),
            solid(),
            area(),
        ],
        '&': () => [
            sprite('woodTile'),
            solid(),
            area(),
        ],
        '|': () =>[
            sprite('transition'),
            area(),
            'transition'
        ],
        '@': () => [
            sprite('bean'),
            solid(),
            area(),
            'dangerous'
        ],
    }

    const player = add([
        sprite('testBoi'),
        area(),
        health(3),
        pos(300,500),
        solid(),
        invuln(),
        origin('bot'),
        'player'
    ])

    function invuln() {
        let timer = 0;
        let isInvuln = false;
        return{
            update(){
                if(isInvuln){
                    timer -= dt()
                    if(timer <= 0){
                        this.vulnify();
                    }
                }
            },
            isInvuln(){
                return isInvuln;
            },
            vulnify() {
                timer = 0;
                isInvuln = false;
                player.use(sprite('testBoi'))    
            },
            invulnify(time) {
                timer = time;
                isInvuln = true;
                player.use(sprite('testInvul'))                                                                                                  
            }
        }
    }

    onCollide('player', 'transition', () => {
        go("level 1", {
            level: (level + 1) % maps.length,
        })
    })

    player.onCollide('dangerous', () => {
        if(player.isInvuln() == false){
            player.hurt(1)
            player.invulnify(2)
        }
        
    })

    player.on("death", () => {
        go('lose')
    })


    onKeyDown('left', () => {
        player.move(-HORIZONTAL_SPEED,0);
    })

    onKeyDown('right', () => {
        player.move(HORIZONTAL_SPEED,0);
    })

    onKeyDown('up', () => {
        player.move(0,-VERTICAL_SPEED);
    })

    onKeyDown('down', () => {
        player.move(0,VERTICAL_SPEED);
    })

    const gameLevel = addLevel(maps[level], levelConfig)

})

scene("level 1" , ({ level }) => {
    layers(['bg', 'obj', 'ui'], 'obj')
    const maps = [
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
                [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
    ]

    const levelConfig = {
        width: 54,
        height: 54,
        '*': () => [
            sprite('walls'),
            solid(),
            area(),
        ],
        '&': () => [
            sprite('woodTile'),
            solid(),
            area(),
        ],
        '|': () =>[
            sprite('transition'),
            area(),
            'transition'
        ],
        '@': () => [
            sprite('bean'),
            solid(),
            area(),
            'dangerous'
        ],
    }

    const player = add([
        sprite('testBoi'),
        area(),
        health(3),
        pos(300,500),
        solid(),
        invuln(),
        origin('bot'),
        'player'
    ])

    function invuln() {
        let timer = 0;
        let isInvuln = false;
        return{
            update(){
                if(isInvuln){
                    timer -= dt()
                    if(timer <= 0){
                        this.vulnify();
                    }
                }
            },
            isInvuln(){
                return isInvuln;
            },
            vulnify() {
                timer = 0;
                isInvuln = false;
                player.use(sprite('testBoi'))    
            },
            invulnify(time) {
                timer = time;
                isInvuln = true;
                player.use(sprite('testInvul'))                                                                                                  
            }
        }
    }

    onCollide('player', 'transition', () => {
        go("level 1", {
            level: (level + 1) % maps.length,
        })
    })

    player.onCollide('dangerous', () => {
        if(player.isInvuln() == false){
            player.hurt(1)
            player.invulnify(2)
        }
        
    })

    player.on("death", () => {
        go('lose')
    })


    onKeyDown('left', () => {
        player.move(-HORIZONTAL_SPEED,0);
    })

    onKeyDown('right', () => {
        player.move(HORIZONTAL_SPEED,0);
    })

    onKeyDown('up', () => {
        player.move(0,-VERTICAL_SPEED);
    })

    onKeyDown('down', () => {
        player.move(0,VERTICAL_SPEED);
    })

    const gameLevel = addLevel(maps[level], levelConfig)

})

    scene("level 2" , ( { level } ) => {
        layers(['bg', 'obj', 'ui'], 'obj')
    const maps = [
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
                [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
        [
            '********************',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  |',
            '*                  |',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*                  *',
            '*        @         *',
            '********************',
        ],
    ]

    const levelConfig = {
        width: 54,
        height: 54,
        '*': () => [
            sprite('walls'),
            solid(),
            area(),
        ],
        '&': () => [
            sprite('woodTile'),
            solid(),
            area(),
        ],
        '|': () =>[
            sprite('transition'),
            area(),
            'transition'
        ],
        '@': () => [
            sprite('bean'),
            solid(),
            area(),
            'dangerous'
        ],
    }

    const player = add([
        sprite('testBoi'),
        area(),
        health(3),
        pos(300,500),
        solid(),
        invuln(),
        origin('bot'),
        'player'
    ])

    function invuln() {
        let timer = 0;
        let isInvuln = false;
        return{
            update(){
                if(isInvuln){
                    timer -= dt()
                    if(timer <= 0){
                        this.vulnify();
                    }
                }
            },
            isInvuln(){
                return isInvuln;
            },
            vulnify() {
                timer = 0;
                isInvuln = false;
                player.use(sprite('testBoi'))    
            },
            invulnify(time) {
                timer = time;
                isInvuln = true;
                player.use(sprite('testInvul'))                                                                                                  
            }
        }
    }

    onCollide('player', 'transition', () => {
        go("level 1", {
            level: (level + 1) % maps.length,
        })
    })

    player.onCollide('dangerous', () => {
        if(player.isInvuln() == false){
            player.hurt(1)
            player.invulnify(2)
        }
        
    })

    player.on("death", () => {
        go('lose')
    })


    onKeyDown('left', () => {
        player.move(-HORIZONTAL_SPEED,0);
    })

    onKeyDown('right', () => {
        player.move(HORIZONTAL_SPEED,0);
    })

    onKeyDown('up', () => {
        player.move(0,-VERTICAL_SPEED);
    })

    onKeyDown('down', () => {
        player.move(0,VERTICAL_SPEED);
    })

    const gameLevel = addLevel(maps[level], levelConfig)

})

    scene('lose', () =>{
        add([origin('center'), pos(width()/2, height()/2)])
        go("level 1", {level: 0})
    })

window.onload = function () {
    scene('main', () => {
        add([
           text('The Lionheart Knight',6),
           pos(width()/2,height()/3),
           origin('center') 
        ]);
        add([
            text('Start')
        ])
    })
    go("main" , { level: 0 })
}    
