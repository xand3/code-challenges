// Abbreviate a Two Word Name

export function abbrevName(name: string): string {
  const [firstName, lastName] = name.split(" ")

  return `${firstName[0]}.${lastName[0]}`.toUpperCase()
}
