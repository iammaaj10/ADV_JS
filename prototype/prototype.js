//let myname="Maaj    "
//console.log(myname.truelength());

let myheros=["g-one","ra-one"]

let heropower={
    gone:"genius",
    raone:"powerful",
    getraonepower:function(){
        // console.log(`raone power is ${this.raone}`);
    }

}

Object.prototype.maaj=function(){
    // console.log(`maaj is present in all objects`);
}

Array.prototype.heymaaj=function(){
    // console.log(`Maaj says hellow to superheros`);
}
//heropower.maaj()
myheros.maaj()
myheros.heymaaj()
//heropower.maaj()

// inheritance

const user={
    name1:"maaj"
}
const Teacher={
    makevideo:true,

}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeassign:'JS',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

// modern syntax

Object.setPrototypeOf(Teacher,user)


let anotherusername="ChaiAurCode   "
String.prototype.truelength=function(){
    
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherusername.truelength()
"maaj".truelength()
"latee".truelength()