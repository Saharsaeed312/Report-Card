function generateReport() {
  const studentName = document.getElementById("name").value;
  const studentId = document.getElementById("id").value;
  const studentClass = document.getElementById("class").value;

  const subjects = [
      { subjectName: "Math", marks: 90 },
      { subjectName: "English", marks: 85 },
      { subjectName: "Science", marks: 80 }
  ];

  if (studentName && studentId && studentClass) {
      const totalMarks = subjects.reduce((acc, subject) => acc + subject.marks, 0);
      const percentage = (totalMarks / (subjects.length * 100)) * 100;
      const grade = getGrade(percentage);

      Swal.fire({
          title: 'Student Report Card',
          html: `
              <p><strong>Name:</strong> ${studentName}</p>
              <p><strong>ID:</strong> ${studentId}</p>
              <p><strong>Class:</strong> ${studentClass}</p>
              <p><strong>Total Marks:</strong> ${totalMarks}</p>
              <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
              <p><strong>Grade:</strong> ${grade}</p>
          `,
          icon: 'info',
          confirmButtonText: 'Okay'
      });
  } else {
      Swal.fire({
          title: 'Error',
          text: 'Please fill out all fields!',
          icon: 'error',
          confirmButtonText: 'Okay'
      });
  }
}

function getGrade(percentage) {
  if (percentage >= 80) return "A+";
  else if (percentage >= 70) return "A";
  else if (percentage >= 60) return "B";
  else if (percentage >= 50) return "C";
  else return "Fail";
}
