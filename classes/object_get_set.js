const user={
    _email:'maaj122@gmail.com',
    _pass:"abc",
  // _ used for private 

get email(){
 return this._email.toUpperCase()
},

set email(value){
    this._email=value
}
}

const tea= Object.create(user)
console.log(tea.email);