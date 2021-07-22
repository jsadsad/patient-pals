export const getPatients = (array) => {
  return array.filter((user) => user.role === 'Patient')
}

export const getPartners = (array) => {
  return array.filter((user) => user.role === 'Patient Partner')
}
