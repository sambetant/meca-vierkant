function Vooruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, Speed)
}
let Speed = 0
Speed = 300
basic.forever(function () {
    Vooruit()
})
