class user{
    constructor(username)
    {
        this.username=username
    }

    logMe()
    {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends  user {
    constructor(username,email,pass){
        super(username)
        this.emai=email
        this.pass=pass

    }

    addcousre(){
        console.log(`new cousre was added by ${this.username}`);
    }
}

const teacher= new Teacher("maaj","maj@.in",123)

teacher.addcousre()
teacher.logMe()

const teacher1 =new user("maaj")

teacher1.logMe()

console.log(teacher instanceof Teacher);
console.log(Teacher instanceof user);
