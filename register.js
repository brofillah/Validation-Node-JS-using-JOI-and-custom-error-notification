// Import validation
const {
    registerUserValidation
} = require('../../apps/validation')

// ======== Using validate ==========
const {
    error
} = registerUserValidation(req.body)

if (error) return res.status(422).json({
    error: true,
    error: error.details[0].message
})