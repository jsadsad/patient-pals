export const getPatients = (patients) => {
  return patients.filter((user) => user.role === 'Patient')
}

export const getPartners = (partners) => {
  return partners.filter((user) => user.role === 'Patient Partner')
}

export const getUserConversations = (conversations, id) => {
  return conversations.filter((conversation) => conversation.senderId === id)
}
