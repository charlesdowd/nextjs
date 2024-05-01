import { FunctionComponent } from 'react';
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  params: {
    productId: string
  } & ParsedUrlQuery
}

const ProductDetails: FunctionComponent<IProps> = ({ params }) => {
  const { productId } = params
  return (
    <div>
      <h1>Product Details for product: {productId}</h1>
    </div>
  )
}

export default ProductDetails