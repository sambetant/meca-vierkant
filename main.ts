function Rechts () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, Speed)
}
function Links () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, Speed)
}
function Vooruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, Speed)
}
function achteruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, Speed)
}
let Speed = 0
Speed = 300
basic.forever(function () {
    Vooruit()
    basic.pause(1000)
    Links()
    basic.pause(1000)
    achteruit()
    basic.pause(1000)
    Rechts()
    basic.pause(1000)
})
