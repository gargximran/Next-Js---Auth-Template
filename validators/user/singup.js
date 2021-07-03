const singupValidator = (req) => {
    const errors = {}
    if(!req?.body?.name){
        errors.name = 'Name is required!'
    }

    if(!req?.body?.profession){
        errors.profession = 'Profession is required!'
    }

    if(!req?.body?.birthday){
        errors.birthday = 'Birthday is required!'
    }

    if(!req?.body?.password){
        errors.password = 'Password is required!'
    }


    if(Object.keys(errors).length){
        return {
            message: 'Required fields cannot be empty!',
            errors
        }
    }
    else{
        return false
    }
}


export default singupValidator
