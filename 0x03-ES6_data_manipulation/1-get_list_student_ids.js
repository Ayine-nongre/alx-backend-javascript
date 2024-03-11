export default function getListStudentIds(arr) {
  const newArr = [];
  if (Array.isArray(arr)) {
    arr.map((value) => newArr.push(value.id));
  }

  return newArr;
}
