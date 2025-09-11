export const genSlug = (str: string, id: string | number) => {
  return (
    str
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .trim()
      .split(/\s+/)
      .join('-') + `-i.${id}`
  )
}

export const getIDsFromSlug = (slug: string) => {
  const ids = slug.split('-i.')
  if (ids[1]?.length > 0) {
    ids.shift()
    return ids
  }
  return []
}

export const getCategoryIdsFromSlug = (slug: string) => {
  const ids = slug.trim().split('-cat.')
  return ids[1]?.length ? ids[1].split('.') : []
}
