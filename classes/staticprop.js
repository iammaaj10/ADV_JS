class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createid(){
        return `123`
    }
}

// const maaj=new user("maaj")
// console.log(maaj.createid())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const vivo=new Teacher("vivo21","vivo@.in")

//console.log(vivo.createid())