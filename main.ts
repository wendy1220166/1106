let 障礙 = 0
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogPin.P1) + "---" + pins.analogReadPin(AnalogPin.P2))
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1B,
        0,
        robotbit.Motors.M2A,
        160
        )
    } else if (pins.analogReadPin(AnalogPin.P2) > 500) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1B,
        115,
        robotbit.Motors.M2A,
        0
        )
    } else if (pins.analogReadPin(AnalogPin.P1) > 500 && pins.analogReadPin(AnalogPin.P2) > 500) {
        robotbit.MotorStopAll()
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1B,
        105,
        robotbit.Motors.M2A,
        150
        )
    }
})
basic.forever(function () {
    basic.showNumber(Math.round(sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    )))
    if (sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    ) > 2 && sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    ) < 10) {
        障礙 = 1
    } else {
    	
    }
})
