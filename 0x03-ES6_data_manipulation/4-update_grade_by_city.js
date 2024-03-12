export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((value) => value.location === city).map((data) => {
    const grady = newGrades.filter((x) => x.studentId === data.id);

    // eslint-disable-next-line no-param-reassign
    if (grady[0] !== undefined) data.grade = grady[0].grade;
    // eslint-disable-next-line no-param-reassign
    else data.grade = 'N/A';
    return data;
  });
}
