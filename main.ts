/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack McNulty
 * Created on: Oct 2025
 * This program compares two numbers
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let number1: number = 0
number1 = randint (0,99)
let number2: number = 0
number2 = randint (0,99)

// button A 
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString('#1 :')
    basic.showNumber(number1)
})

// button B
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString('#2 :')
    basic.showNumber(number2)
})

// comparing numbers
input.onGesture(Gesture.Shake, function() {
    if (number1 >= number2)
    basic.showString(number1.toString() + ">" + number2.toString())
    
    else
    basic.showString(number2.toString() + ">" + number1.toString()),

// pause and show you're ready again
basic.pause(1000),
basic.showIcon(IconNames.Sad)
})
