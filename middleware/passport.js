const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

function initialize(passport) {
    const authenticateUser = () => (username, password, done) => {
        
    }
    passport.us(new LocalStrategy({ usernameField: 'username' }),
    authenticateUser)
}