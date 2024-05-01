import { FunctionComponent } from 'react';
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  params: {
    productId: string,
    reviewId: string,
  } & ParsedUrlQuery
}


const Review: FunctionComponent<IProps> = ({ params }) => {
  const { productId, reviewId } = params
  return (
    <h1>This is review {reviewId} for product {productId}</h1>
  )
}

export default Review