export default function getListStudentIds(arr) {
  const newArr = [];
  if (Array.isArray(arr)) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].id);
    }
  }

  return newArr;
}
