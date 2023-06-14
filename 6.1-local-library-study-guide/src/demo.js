

//import the data sets here
const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses=[]) {
    return courses.length
}

// console.log(getTotalCoursesCount(courses))

//2. Get Total accounts count
function getTotalAccountsCount(accounts) {
    return accounts.length
}


//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id
function findInstructorById(instructors=[], id) {
    return instructors.find((instructorObj)=> instructorObj.id === id)
}

// console.log(findInstructorById(instructors, 3))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id
function findCourseById(courses=[], id) {
    return courses.find((courseObj)=> courseObj.id === id)
}

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students=[], id) {
    return students.find((studentObj)=> studentObj.id === id)
}

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students) {
    students.sort((studentA,studentB)=>{
        if(studentA.name.first.toLowerCase() < studentB.name.first.toLowerCase()){
            return -1
        }else{
            return 1
        }
        //this is also a valid way to do the if else above
        // return studentA.name.first.toLowerCase() < studentB.name.first.toLowerCase() ? -1 : 1

    })
    return students
}

// console.log(sortStudentsByFirstName(students))

//7. Partition courses by student on pace
//find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace

/* 
onpace = []
notOnPace = []

*/

function partitionCoursesByStudentProgress(courses) {
    //initialize array to store onpace courses
    const onPace = []
    //initialize array to store notOnPace courses
    const notOnPace = []
    //for each element in the courses array do:
    courses.forEach((courseObj)=>{
        const {roster} = courseObj;
        //create a flag that will turn to false if at least one student in the roster's onPace === flase
        let isOnPace = true;
        //look at the roster and forEach object in the roster do:
        roster.forEach((rosterObj)=>{
            //check if the rosterObject.onPace === false, push this current course to the notOnPace array
            if(rosterObj.onPace === false){
                isOnPace = false;
                notOnPace.push(courseObj)
                return;
            }
        })
        //if we looped through the whole roster and no rosterObject.onpace was false, then we put the course to the onPace array
        if(isOnPace === true){
            onPace.push(courseObj)
        }

    })

    return [onPace, notOnPace]

}

function partitionCoursesByStudentProgressAdvanced(courses) {
    //initialize array to store onpace courses
    const onPace = courses.filter((courseObj)=>{
        const {roster} = courseObj;
        //create a flag that will turn to false if at least one student in the roster's onPace === flase
        const isOnPace = roster.every((rosterObj)=> rosterObj.onPace === true)

        //if we looped through the whole roster and no rosterObject.onpace was false, then we put the course to the onPace array
        return isOnPace

    })

    const notOnPace = courses.filter((courseObj)=>{
        const {roster} = courseObj;
        //create a flag that will turn to false if at least one student in the roster's onPace === flase
        const isNotOnPace = roster.some((rosterObj)=> rosterObj.onPace === false)

        return isNotOnPace

    })

    return [onPace, notOnPace]

}

function partitionCoursesByStudentProgressAdvancedShortWay(courses) {
    //initialize array to store onpace courses
    const onPace = courses.filter(({roster})=> roster.every((rosterObj)=> rosterObj.onPace === true))

    const notOnPace = courses.filter(({roster})=> roster.some((rosterObj)=> rosterObj.onPace === false))

    return [onPace, notOnPace]

}

// console.log(partitionCoursesByStudentProgressAdvancedShortWay(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, return an array of students that match the courses roster list, and add the onPace property from the roster objects to the student object. 

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true
        },
        {
            studentId: 2,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 4,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}
*/

function getStudentsForCourse(course={}, students=[]) {
    //initialize a result array to put the found students into
    const result = [];
    //have access to given courses roster
    const {roster} = course;
    //forEach element in the roster do:
    roster.forEach((rosterObj)=>{
        //access the value at the studentId property
        const {studentId} = rosterObj
        //search the students array to find the first element whose id equals to the studentId from roster
        let foundStudent = null;
        students.forEach((studentObj)=>{
            if(studentObj.id === studentId){
                foundStudent = studentObj;
                return;
            }
        })
        if(foundStudent !== null) result.push(foundStudent)
        //push the found student into our result

    })

    return result;
}

function getStudentsForCourseAdvanced(course={}, students=[]) {
    
    //have access to given courses roster
    const {roster} = course;
    //forEach element in the roster do:
    const result = roster.map((rosterObj)=>{
        //access the value at the studentId property
        const {studentId} = rosterObj
        //search the students array to find the first element whose id equals to the studentId from roster
        const foundStudent = students.find((studentObj)=>{
            return studentObj.id === studentId
        })
        
        return foundStudent

    })

    return result;
}

const getStudentsForCourseAdvancedShort = ({roster}={}, students=[]) =>  roster.map(({studentId})=> students.find((studentObj)=> studentObj.id === studentId))


let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true,
        },
        {
            studentId: 5,
            onPace: true,
        },
    ],
};

// console.log(getStudentsForCourseAdvancedShort(oneCourse, students))

/* 
9. getTotalNumberOfClassesForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }
*/

function getTotalNumberOfClassesEnrolledIn(student, courses) {
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfClassesEnrolledIn(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of authors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in



*/

function getCoursesStudentEnrolledIn(student, courses, instructors) {
    
}

// console.log(getCoursesStudentEnrolledIn(student1, courses, instructors));

/*
11. Get count of courses who have at least on student not onPace- similar to getBooksBorrowedCount(books)
*/

function getCoursesNotOnPaceCount(courses) {
    
}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]

*/

const getMostCommonCategories = (courses) => {
    
};

// console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 3 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 },
  { name: 'Python Fundamentals', rosterSize: 3 }
]
*/

function getMostPopularCourses(courses) {
    //find the most pop

}

// console.log(getMostPopularCourses(courses));

/* 

14. Get instructors of largest classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function instructorsOfLargestClasses(courses, instructors) {
   
}

function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`;
}

// console.log(instructorsOfLargestClasses(courses, instructors));

