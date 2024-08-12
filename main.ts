function ledLighting (soundLevel: number) {
    pins.analogWritePin(AnalogPin.P0, pins.map(
    soundLevel,
    thresholds[0],
    255,
    0,
    1023
    ))
    pins.analogWritePin(AnalogPin.P1, pins.map(
    soundLevel,
    thresholds[1],
    255,
    0,
    1023
    ))
    pins.analogWritePin(AnalogPin.P2, pins.map(
    soundLevel,
    thresholds[2],
    255,
    0,
    1023
    ))
}
let thresholds: number[] = []
thresholds = [50, 100, 150]
basic.forever(function () {
    ledLighting(input.soundLevel())
})
