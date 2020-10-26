const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

function initialize(passport) {
    const authenticateUser = () => (username, password, done) => {
        const user = getByUsername(username)
        if (user == null) {
            return done(null, false, {message: 'No user with that username'})
        }

        try {
            if (await bcrypt.compare(password, user.password)) {

            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }

    }
    passport.use(new LocalStrategy({ usernameField: 'username' }),
    authenticateUser)

    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}

module.exports = initialize;