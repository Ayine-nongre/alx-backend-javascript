export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => {
      let count = 0;
      // eslint-disable-next-line guard-for-in, no-unused-vars
      for (const value in employeesList) {
        count += 1;
      }

      return count;
    },
  };

  return obj;
}
