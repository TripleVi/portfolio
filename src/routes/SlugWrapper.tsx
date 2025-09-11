import { useParams } from 'react-router'

import { ProjectPage, NotFoundPage } from '@/pages'

const SlugWrapper = () => {
  const { slug } = useParams()

  if (slug!.includes('-i.')) return <ProjectPage />

  return <NotFoundPage />
}

export default SlugWrapper
