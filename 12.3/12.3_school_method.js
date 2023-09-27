const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id:13,
            name: "Houston",
            age: 21,
        },
    ],
    //use find a person to see if it's a teacher or student
    findPerson: function(type, id) {
        if (type === 'teacher') {
            return this.teachers.filter(teacher => teacher.id === id)[0] || null;
        } else if (type === 'student') {
            return this.students.filter(student => student.id === id)[0] || null;
        } else {
            return null;
        }
    }
};

// try this here
console.log(school.findPerson('teacher', 1)); 
console.log(school.findPerson('student', 10)); 
