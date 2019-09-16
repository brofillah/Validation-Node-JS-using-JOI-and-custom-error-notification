const Joi = require('@hapi/joi')

// Validasi Registrasi
const registerUserValidation = data => {
    return Joi.validate(data, {
        username: Joi.string().trim().alphanum().min(6).error(() => "Panjang username minimal 6 karaketer"),
        phone: Joi.string().trim().regex(/^[0-9]{12,13}$/).error(() => "Nomor telepon harus menggunakan angka yang benar"),
        email: Joi.string().trim().min(6).required().email().error(() => "Panjang e-mail minimal 6 karakter, dan harus menggunakan format e-mail"),
        password: Joi.string().trim().regex(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{6,20})/).min(4).required().max(100).error(() => "Password harus mengandung huruf kecil(a-z), huruf besar(A-Z), angka(0-9), dan tanda kusus(!@#$%...)")
    })
}

// Export variable validasi yg di inginkan
module.exports = {
    registerUserValidation
}