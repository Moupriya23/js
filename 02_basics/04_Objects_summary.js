// const tinderUser = new Object()     // Singleton object

const tinderUser = {}  // Non Singleton object


tinderUser.id = "123abc" 
tinderUser.name = "Moupriya" 
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Moupriya",
            lastname: "Roy"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}   // spread operator ...

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "M@mail.com"
    },
    {
        id: 1,
        email: "M@mail.com"
    },
    {
        id: 1,
        email: "M@mail.com"
    },
]

users[1].email

// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


// *****************************

const course = {
    coursename: "js in bengali",
    price: "999",
    courseInstructor: "Moupriya"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "Hey Learners")

// {
//     name: "Moupriya"
//     course: "js"
//     price: "free"
// }

