import singupValidator from "../../validators/user/singup";
import bcrypt from 'bcrypt'

import User from '../../db/Models/User'


const handler = async (req, res) => {

    if (req.method === "POST"){
        // validator is here
        const err = singupValidator(req);

        // if validation field
        if (err) {
            return res.status(411).send(err)
        }


        //save data to database

        try{
            bcrypt.hash(req.body.password, 10, async (err, hash) => {
                if(!err){
                    await User.create({
                        name: req.body.name,
                        profession: req.body.profession,
                        birthday: req.body.birthday,
                        password: hash,
                        email: req.body.email
                    })

                    return res.status(200).send({
                        message: "Registration completed",
                    })
                }else{
                    throw new Error('Something went wrong!')
                }

            })

        }catch (e) {
            req.status(400).send({
                message: e.method
            })
        }

    }


}

export default handler


export const config = {
    api: {
        bodyParser: {
            sizeLimit: '500kb'
        }
    }
}
