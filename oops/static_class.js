/*
class Class_Name {
    static property;
    static method(){

    }
}

*/

class UserDetail {
    //properties
    static user = {
        name: 'Deepak',
        age: 31,
    };
    address = 'vrindavan';

    //methods***********
    static getUser() {
        return this.user; //static method can access only staic property
    }

    static getAddress() {
        /*
        return this.address; //static method can't access normal property with out creating instance
        */
        return new this(); // accessing non static property
    }

    myaddress() {
        return this.address; //only show in prototype
    }
}
// console.log(UserDetail.user);
// console.log(UserDetail.getUser());
console.log(UserDetail.getAddress());
// const user = new UserDetail();
// console.log(user.myaddress());
