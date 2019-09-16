const Joi = require("@hapi/joi");

// Validasi Registrasi
const registerUserValidation = data => {
    return Joi.validate(data, {
        username: Joi.string()
            .trim()
            .alphanum()
            .min(6)
            .error(() => "Your message in here!"),
        phone: Joi.string()
            .trim()
            .regex(/^[0-9]{12,13}$/)
            .error(() => "Your message in here!"),
        email: Joi.string()
            .trim()
            .min(6)
            .required()
            .email()
            .error(() => "Your message in here!"),
        password: Joi.string()
            .trim()
            .regex(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{6,20})/)
            .min(4)
            .required()
            .max(100)
            .error(() => "Your message in here!")
    });
};

// Export variable validasi yg di inginkan
module.exports = {
    registerUserValidation
};
