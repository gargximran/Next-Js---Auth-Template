import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../../db/Models/User'


const handler = async (req, res) => {
    if (req.method === "POST") {
        if (req?.body?.email && req?.body?.password) {
            const {email} = req.body
            const {password} = req.body
            const user = await User.findAll({
                where: {
                    email
                }
            })

            // check the password with bcrypt
            if (user[0]) {
                const match = await bcrypt.compare(password, user[0].password)

                if (match) {
                    // create token if matched
                    const token = jwt.sign({
                        id: user[0].id,
                        name: user[0].name,
                        email: user[0].email,
                        profession: user[0].profession,
                        birthday: user[0].birthday
                    }, 'secret')

                    return res.status(200).send({
                        message: 'Login success!',
                        token: token,
                        user: {
                            name: user[0].name,
                            birthday: user[0].birthday,
                            profession: user[0].profession,
                            email: user[0].email
                        }
                    })

                } else {
                    return res.status(404).send({
                        message: 'Invalid credentials!'
                    })
                }
            } else {
                // if user not found
                return res.status(404).send({
                    message: 'Invalid credentials!'
                })
            }

        }else{
            return res.status(404).send({
                message: 'Invalid credentials!'
            })
        }
    }

}

export default handler


export const config = {
    api: {
        bodyParser: {
            sizeLimit: '50kb'
        }
    }
}
