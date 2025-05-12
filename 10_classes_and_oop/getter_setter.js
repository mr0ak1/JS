class user {
    constructor(email,password){
        this.email =email
        this.password = password
    }

    get email(){

        return `${this.new_email}qwe`

    }

    set email(val){
        this.new_email = val
    }

    get password(){
        return `${this.s_password}qwerty`
    }

    set password(value){
        this.s_password = value
    }
}

const hitesh = new user("hitesh@mail.xom",123)
console.log(hitesh.email);
console.log(hitesh);
