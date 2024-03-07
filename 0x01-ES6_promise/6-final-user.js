import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const user = await signUpUser(firstName, lastName).then((res) => ({
    status: 'fulfilled',
    value: res,
  }));

  const photo = await uploadPhoto(filename).then((res) => ({
    status: 'rejected',
    value: res,
  }));

  return [user, photo];
}
