

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


function getTotalNumberOfClassesEnrolledIn(student={}, courses=[]) {
    //access at the given students id so we can use that id for searching the courses rosters
    const {id} = student;

    let count = 0;
    courses.forEach((courseObj)=>{
        const {roster} = courseObj;
        roster.forEach((rosterObj)=>{
            if(rosterObj.studentId === id){
                count++;
            }
        })
    })

    return count;
}

function getTotalNumberOfClassesEnrolledInAdvanced(student={}, courses=[]) {
    //access at the given students id so we can use that id for searching the courses rosters
    const {id} = student;

    let count = courses.reduce((accumulator, courseObj)=>{
        const {roster} = courseObj;
       
        const found = roster.find((rosterObj)=>{
            return rosterObj.studentId === id
        })
        if(found !== undefined){
            accumulator ++;
        }
        return accumulator
    },0)

    return count;
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfClassesEnrolledInAdvanced(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of authors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in


*/

function getCoursesStudentEnrolledIn(student={}, courses=[], instructors=[]) {
    const {id} = student;
    const result = [];
    //for each course in courses do:
    courses.forEach((courseObj)=>{
        const {roster} = courseObj;
        roster.forEach((rosterObj)=>{
            const {studentId} = rosterObj;
            if(studentId === id){
                //look for the courses instructor using the coures instructorId
                const {instructorId} = courseObj;
                let found = null;
                instructors.forEach((instructorObj)=>{
                    if(instructorObj.id === instructorId){
                        found = instructorObj;
                        //update the coureObj to have an "instructor" property with the value of an instructor element
                        courseObj.instructor = found;
                    }
                })
               
                result.push(courseObj)
            }
        })
    })
    return result;
}


function getCoursesStudentEnrolledInAdvanced(student={}, courses=[], instructors=[]) {
    const {id} = student;
    const result = courses.filter((courseObj)=>{
        const {roster} = courseObj;
        const isEnrolled = roster.some((rosterObj)=>{
            const {studentId} = rosterObj;
            return studentId === id
        })
        if(isEnrolled === true){
            //look for the courses instructor using the coures instructorId
            const {instructorId} = courseObj;
    
            const found = instructors.find((instructorObj)=>{
                return instructorObj.id === instructorId
            })
            if(found !== undefined) courseObj.instructor = found;
    
            // result.push(courseObj)
            return true
        }else{
            return false;
        }
    })
    return result;
}


const student3 =  {
    id: 3,
    name: {
        first: "Mickey",
        last: "Mouse"
    }
}
// console.log(getCoursesStudentEnrolledInAdvanced(student3, courses, instructors));
//[{1},{2},{4},{6}]

/*
11. Get count of courses who have at least on student not onPace- similar to getBooksBorrowedCount(books)
*/

function getCoursesNotOnPaceCount(courses=[]) {
    let count = 0;
    //forEach course in courses do:
    courses.forEach((courseObj)=>{
        const {roster} = courseObj;
        let isCourseOnPace = true;
        // roster.forEach((rosterObj)=>{
        //     if(rosterObj.onPace === false){
        //         isCourseOnPace = false;
        //         //break; //break does not work in forEach way
        //     }
        // })
        for(let rosterObj of roster){
            if(rosterObj.onPace === false){
                isCourseOnPace = false;
                break;
            }
        }
        if(isCourseOnPace === false){
            count++;
        }
    })
    return count;
}

// console.log(getCoursesNotOnPaceCount(courses)); //4

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]

result = []

categoriesLookup = {
    "software engineering": 3,
    "psychology": 2,
    "finance": 2
}

*/

const getMostCommonCategories = (courses=[]) => {
    const result = []
    //we will put the categores in an object because: 
    const categoriesLookup = {}

    //for each course object in courses do:
    courses.forEach((courseObj)=>{
        const {category} = courseObj;
        //look at the category and ask "does this categorey exist as a key(property) in the categoriesLookup object". If that categorey does not exist in the categoriesLookup object, then create a new key representing that category, and set value to be 1.
        if(categoriesLookup[category] === undefined){
            categoriesLookup[category] = 1;
        }else{
            //If the category already exists in the categoriesLookup object, then increment the value at that category by 1
            categoriesLookup[category] += 1
        }
    })

    // console.log(categoriesLookup)
    //loop through the categoriesLookup object
    for(let categoryKey in categoriesLookup){
        let obj = { name: categoryKey, count: categoriesLookup[categoryKey] }
        result.push(obj);
    }

    //sort the result array
    result.sort((a,b)=>{
        return b.count-a.count
    })
    //slice will give you a portion of an array from index 0 to index 2 (or whatever numbers you put there)
    return result.slice(0,2) //0,1
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


result = [

]
*/

function getMostPopularCourses(courses=[]) {
    //find the most popular courses based on roster size

    const result = [];
    //for each course element in courses, do:
    courses.forEach((courseObj)=>{
        const {name, roster} = courseObj;
        const obj = { name: name, rosterSize: roster.length}
        result.push(obj)
    })

    result.sort((elementA,elementB)=>{
        return elementB.rosterSize - elementA.rosterSize
    })
    return result.slice(0,2)
}

function getMostPopularCoursesAdvanced(courses=[]) {
    //find the most popular courses based on roster size

    const result = courses.map(({name, roster})=>{
        const obj = { name: name, rosterSize: roster.length}
        return obj
    })

    result.sort((elementA,elementB)=>{
        return elementB.rosterSize - elementA.rosterSize
    })
    return result.slice(0,2)

    //single line way
    //return courses.map(({name, roster})=> ({ name: name, rosterSize: roster.length})).sort((elementA,elementB)=> elementB.rosterSize - elementA.rosterSize).slice(0,2)
}

// console.log(getMostPopularCoursesAdvanced(courses));

/* 

14. Get instructors of largest classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

[

]

*/

function instructorsOfLargestClasses(courses=[], instructors=[]) {
   //find the most popular courses based on roster size first
   courses.sort((courseA, courseB)=>{
    return courseB.roster.length - courseA.roster.length;
   }) 
   //top 2 courses 
   const top2Courses = courses.slice(0,2);

   const result = [];
   top2Courses.forEach((courseObj)=>{
    const {instructorId,roster} = courseObj;
    //find the instructor information based on the instructorId
    const foundInstructor = instructors.find((instructorObj)=> instructorObj.id === instructorId)

    const obj =  { name: nameHelper(foundInstructor), numStudents: roster.length }
    result.push(obj)
   })
   return result;
}

function nameHelper(instructor={}) {
    return `${instructor.name.first} ${instructor.name.last}`
}

console.log(instructorsOfLargestClasses(courses, instructors));

