import Api from '../../app/services/api';

export async function getPatients({ search, page, perPage }) {
  const call = await Api.get(
    `/patient/lazy?search=${search}&page=${page}&perPage=${perPage}`
  );

  return call.data;
}

export async function newPatient({ name, birthday, genderId, cpf }) {
  await Api.post('/patient', { name, birthday, genderId, cpf });
}
