function printRecords(recordIds) {
    const studentsFound = [];
    
    recordIds.forEach(function findStudent(studentId) {
        const doesStudentExist = studentRecords.find(function(record) {
            return record.id === studentId;
        });
        
        if (doesStudentExist) {
            studentsFound.push(doesStudentExist);
        }
    });
    
    studentsFound.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    
    studentsFound.forEach(function printStudent(student) {
        console.log(`${student.name} (${student.id}): ${student.paid ? "Paid" : "Not Paid"}`);
    });
}

function paidStudentsToEnroll() {
    const studentsToEnroll = [];

    studentRecords.forEach(function(student) {
        if (student.paid && !currentEnrollment.includes(student.id)) {
            studentsToEnroll.push(student.id);
        }
    });
    currentEnrollment = [...currentEnrollment, ...studentsToEnroll];
    return currentEnrollment;
}

function remindUnpaid(recordIds) {
    const studentsToRemind = [];
    studentRecords.filter(function filterstudent(student) {
        if (!student.paid && recordIds.includes(student.id)) {
            studentsToRemind.push(student.id);
        }
    });
    printRecords(studentsToRemind);
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
