export default function handleResponseFromAPI(promise) {
  return promise
  // eslint-disable-next-line no-unused-vars
    .then((res) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'Success',
      };
    })
  // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      console.log('Got a response from the API');
      Error();
    });
}
