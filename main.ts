input.onButtonPressed(Button.A, function () {
    number = randint(0, 2)
    if (number == 0) {
        basic.showIcon(IconNames.Sad)
    } else if (number == 1) {
        basic.clearScreen()
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    number = randint(0, 2)
    if (number == 0) {
        basic.showIcon(IconNames.Sad)
        music.playMelody("C5 A B G A F G E ", 500)
    } else if (number == 1) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("E D G F B A C5 B ", 500)
        basic.clearScreen()
    } else if (number == 2) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("E D G F B A C5 B ", 500)
        basic.clearScreen()
    }
})
let number = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
