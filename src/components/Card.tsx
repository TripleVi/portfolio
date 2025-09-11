import clsx from 'clsx'

const Card: React.FC<React.ComponentPropsWithoutRef<'div'>> = props => {
  const { className, ...rest } = props
  return (
    <div {...rest} className={clsx('bg-base-100 rounded-box p-6 shadow-sm', className)} />
  )
}

export default Card
