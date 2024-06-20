// singleton method or by using constructor
const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "indokalpa",
            lastName: "saikia"
        }
    }
}

//console.log(regularUser.fullname.userFullName.lastName)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// combining process is same as that of arrays
//const obj3 = {obj1,obj2};// wrong
//const obj3 = Object.assign({},obj1,obj2);//source obj1,obj2 is assigned to target {}
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

// from DB, we get array of objects.
const users = [{id: 1,email: "indo@gmail.com"}, {id: 2, email: "manjeet@gmail.com"}, {id: 1,email: "indo@gmail.com"}];
users[1].email;

//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLogged"));// check is property available in Obj.4

//  ********* Object Destructuring *********
// extract properties of obj and assign them to variables
const course = {
    courseName: "JS in hindi",
    coursePrice: "999",
    courseInstructor: "indokalpa"
}
// console.log(course.courseInstructor);
// syntactical sugar
const {courseInstructor} = course;
console.log(courseInstructor);

// JSON is just another object.key is also a string and not held in any variable.
// {
//     "name": "indokalpa",
//     "courseName": "JS in hindi"
// }