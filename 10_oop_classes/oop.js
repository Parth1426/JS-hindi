const user = {
    username:"hitesh",
    logincount :8,
    signedin : true ,

    getUserDetails : function(){
        //console.log("got user details from database")
       // console.log(`Username: ${this.username}`);//Username: hitesh

    } 
}

// console.log(user.username)//hitesh
// console.log(user.getUserDetails());//got user details from database

function user(useername,logincount,isloggedin){
    this.username=username
    this.logincount=logincount
    this.isloggedin=isloggedin

    return this
}

// const userone = user("parth",12,true)
// const usertwo = user("chai aur code",12,true)
// console.log(userone)//"parth",12,true//"chai aur code",12,true
//new keyword jr vaprla nhi tr values overwrite hotyat 

const userone = new user("parth",12,true)
const usertwo = new user("chai aur  code",12,true)

console.log(userone);//"parth",12,true
console.log(usertwo)//"chai aur  code",12,true