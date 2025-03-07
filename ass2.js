document.getElementById("gradeForm").addEventListener("submit", function (event) {
    event.preventDefault();


    const name = document.getElementById("studentName").value.trim();
    const mathGrade = parseFloat(document.getElementById("mathGrade").value);
    const scienceGrade = parseFloat(document.getElementById("scienceGrade").value);
    const englishGrade = parseFloat(document.getElementById("englishGrade").value);


    if (isNaN(mathGrade) || isNaN(scienceGrade) || isNaN(englishGrade)) {
        alert("Please enter valid numeric grades!");
        return;
    }


    const average = ((mathGrade + scienceGrade + englishGrade) / 3).toFixed(2);


    let letterGrade = '';
    if (average >= 90) letterGrade = 'A';
    else if (average >= 75) letterGrade = 'B';
    else if (average >= 60) letterGrade = 'C';
    else letterGrade = 'F';

    const student = { name, mathGrade, scienceGrade, englishGrade, average, letterGrade };
    students.push(student);

    students.sort((a, b) => b.average - a.average);

    
    displayStudents();
});


const students = [];


function displayStudents() {
    const studentTable = document.getElementById("studentTable");
    studentTable.innerHTML = ""; 

    students.forEach((student) => {
        const row = `<tr>
            <td>${student.name}</td>
            <td>${student.mathGrade}</td>
            <td>${student.scienceGrade}</td>
            <td>${student.englishGrade}</td>
            <td>${student.average}</td>
            <td>${student.letterGrade}</td>
        </tr>`;
        studentTable.innerHTML += row;
    });
}
