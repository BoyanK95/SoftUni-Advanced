function initState() {
    let startX = Math.floor(Math.random()* 1000);
    let startY = Math.floor(Math.random()* 500);

    const state = {
        player: 'Poko',
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
        },
        bugStats:{
            width:50,
            height: 50,
            nexSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
        },

        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
        }
    }

    return state
}