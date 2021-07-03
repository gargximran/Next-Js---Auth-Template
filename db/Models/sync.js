const User = require('./User')

const sync = async () => {


    try {
        await User.sync({alter: true})
    } catch (e) {
        return e.message
    }


}

sync()
