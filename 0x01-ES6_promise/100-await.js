import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto()
    .then((res) => res)
    .catch(() => null);

  const user = await createUser()
    .then((res) => res)
    .catch(() => null);

  return { photo, user };
}
