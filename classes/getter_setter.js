class user{
    constructor(email,pass)
    {
        this.email=email
        this.pass=pass    
    }

    get email(){
        return `${this._email.toUpperCase()}`;
    }

    set email(value){
        this._email=value
    }
    get pass(){
        return `${this._pass}maaj`
    }

    set pass(e){
        this._pass=e
}
}

const maaj= new user("maaj@gmsil.com","abc")
console.log(maaj.pass);
console.log(maaj.email);