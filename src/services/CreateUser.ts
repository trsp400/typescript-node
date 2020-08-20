interface TechObject {
    title: string,
    exp: number,
}

//interface is how we define types for a set of information, generally an object
interface CreateUserData {
    name?: string, // the "?" tells that the property is not required
    email: string,
    pass: string,
    techs: Array<string | TechObject> // tells that the 'tech' is an array that can contain strings and objects
}

export default function createUser({name = '', email, pass}: CreateUserData) {
     const user = {
         name,
         email,
         pass,
     }

     return user;
}