import { FC } from 'react'

interface IProps {
  children: React.ReactNode
}

const ProductDetailsLayout: FC<IProps> = ({ children }) => {
  return (
    <>

      {children}
      <h2>Featured Products</h2>
      {/* Carousel here */}
    </>
  )
}

export default ProductDetailsLayout