let x = 0
led.plot(0, 0)
let dir = 1
basic.forever(function () {
    let y = 0
    if (x < 4 && dir == 1) {
        led.unplot(x, 0)
        x += 1
        led.plot(x, 0)
        basic.pause(100)
    } else if (x >= 4 || x > 0) {
        dir = -1
        led.unplot(x, 0)
        x += -1
        led.plot(x, 0)
        basic.pause(100)
    } else {
        dir += 1
    }
    if (input.buttonIsPressed(Button.A)) {
        led.unplot(x, y)
        x += 2
        led.plot(x, y)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.unplot(x, y)
        x += -2
        led.plot(x, y)
    }
})
