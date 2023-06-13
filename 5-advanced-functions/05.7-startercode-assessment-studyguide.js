const books = [
  {
    id: 1,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },

  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    publisher: {
      name: "Warner Books",
      state: "California",
    },
  },
  {
    id: 3,
    title: "How to win friends and influence People",
    author: "Dale Carnegie",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    publisher: {
      name: "Penguin Books",
      state: "Maryland",
    },
  },
];

const students = {
  Spongebob: {
    finished: [1, 2],
    notFinished: [3, 4],
  },
  Squidward: {
    finished: [1],
    notFinished: [2, 3, 4],
  },
  Sandy: {
    finished: [1, 3, 4],
    notFinished: [2],
  },
};

/*
1. GET BOOKS BY PUBLISHER NAME
*/
function getBooksByPublisher(books, publisherName) {
  const result = books.filter((element)=>{
    //return something (condition) that evaluates to a boolean
    // if(element.publisher.name === publisherName){
    //   return true;
    // }else{
    //   return false;
    // }
    return element.publisher.name === publisherName
  })

  return result;
}

// console.log(getBooksByPublisher(books, "Simon & Schuster"));

/* 
2. GET A STUDENTS FINISHED BOOKS

WRITE A FUNCTION THAT TAKES AN ARRAY OF BOOKS, OBJECT CONTAINING ALL STUDENTS, AND A STUDENT NAME.
IT WILL RETURN AN ARRAY OF BOOK OBJECTS THAT REPRESENT THE BOOKS THAT THE GIVEN USER HAS FINISHED.
*/

function getFinishedBooksFromStudent(books=[],students={},studentName=""){
  //looked at students object first at the key representing the studentName
  const finished = students[studentName].finished //[1,2]
  const result = []
  //look at the books array and forEach element, check if the id is inside of finished. If it is, push it to our result
  books.forEach((bookObj)=>{
    if(finished.includes(bookObj.id)){
      result.push(bookObj)
    }
  })

  return result;
}

function getFinishedBooksFromStudentAdvanced(books=[],students={},studentName=""){
  //looked at students object first at the key representing the studentName
  const finished = students[studentName].finished //[1,2]
  //look at the books array and forEach element, check if the id is inside of finished. If it is, push it to our result
  const result = books.filter((bookObj)=>{
    return finished.includes(bookObj.id)
  })

  return result;
}

// console.log(getFinishedBooksFromStudent(books, students, "Squidward"))
// console.log(getFinishedBooksFromStudentAdvanced(books, students, "Spongebob"))



/* 
3. FIND IF A GIVEN STUDENT HAS READ ALL THE BOOKS FROM A GIVEN PUBLISHER. RETURN TRUE OR FALSE

FUNCTION INPUTS: LIST OF BOOKS, OBJECT CONTAINING ALL STUDENTS, PUBLISHER NAME, STUDENT NAME

*/

function hasStudentReadAllBooksFromPublisher(books, students, publisherName, studentName){
  //get a filtered list of only books from the given publisherName
  const filteredBooks = getBooksByPublisher(books, publisherName)
  const finishedBookIds = students[studentName].finished //[1,2]

  let result = true;

  filteredBooks.forEach((bookObj)=>{
    //check if the current bookObj's id is not inside finishedBookIds array, set result = false
    if(finishedBookIds.includes(bookObj.id) === false){
      result = false
    }
  })
  return result
}


function hasStudentReadAllBooksFromPublisherAdvanced(books, students, publisherName, studentName){
  //get a filtered list of only books from the given publisherName
  const filteredBooks = getBooksByPublisher(books, publisherName)
  const finishedBookIds = students[studentName].finished //[1,2]

  //check if every id in filteredBooks is inside of the finishedBookIds
  const result = filteredBooks.every((bookObj)=>{
    return finishedBookIds.includes(bookObj.id)
  })
  return result;
}


console.log(hasStudentReadAllBooksFromPublisher(books, students, "Simon & Schuster", "Spongebob"))

/* 
4. GIVEN AN OBJECT CONTAINING ALL STUDENTS, AND TWO STUDENT NAMES, DETERMINE IF THE FIRST STUDENT HAS READ ANY BOOKS THAT THE SECOND STUDENT HAS NOT READ YET. IF SO, RETURN TRUE. IF THE FIRST STUDENT HAS NOT READ ANY BOOKS THE SECOND STUDENT HAS NOT READ, RETURN FALSE.

*/

function hasStudentReadOtherStudentsUnfinishedBooks(students, studentA, studentB){

}

// console.log(hasStudentReadOtherStudentsUnfinishedBooks(students, "Spongebob", "Sandy"))
/* 
5. RETURN ALL THE STUDENT NAMES WHO HAVE READ ANY BOOK IN THE GIVEN STUDENT'S NOTFINISHED BOOKS

INPUTS: OBJECT OF STUDENTS, STUDENT NAME

*/


function studentsWhoHaveRead(students, studentName){

}

// console.log(studentsWhoHaveRead(students, "Spongebob"))
