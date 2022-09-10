interface Address {
  zip_code: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export function formatAddress({
  city,
  neighborhood,
  number,
  state,
  street,
  complement,
}: Address) {
  const address = ['Entrega em', `<span>${street}, ${number}</span>`]

  if (complement) address.push(`- ${complement} -`)

  address.push(`${neighborhood} -`, `${city},`, state)

  return address.join(' ')
}
