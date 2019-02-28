var Service = /** @class */ (function () {
    function Service(users) {
        this.users = users;
    }
    return Service;
}());
var Business = /** @class */ (function () {
    function Business(name, email) {
        this.name = name;
        this.email = email;
    }
    return Business;
}());
var s1 = new Service([{ name: 'Bob', email: 'bob@gmail.com', empId: '0009A1', salary: 20000 }, { name: 'Barb', email: 'barb@gmail.com', empId: '0009f1', salary: 500000 }]);
var b1 = new Business('Barb', 'barb1@gmail.com');
var identifyUser = function (mail) {
    /*if (obj instanceof Service)
    {
        console.log('this is employee')
    }
    else{
        console.log('self employeed')
    }*/
    for (var index = 0; index < s1.users.length; index++) {
        if (s1.users[index].email == mail) {
            console.log('this is employee');
        }
    }
    console.log('self employed');
};
identifyUser("barb@gmail.com");
