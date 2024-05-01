import { FunctionComponent } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { notFound } from 'next/navigation';

interface IProps {
  params: {
    productId: string,
    reviewId: string,
  } & ParsedUrlQuery
}


const Review: FunctionComponent<IProps> = ({ params }) => {
  const { productId, reviewId } = params
  if (parseInt(reviewId) > 1000) return notFound()
  return (
    <h1>This is review {reviewId} for product {productId}</h1>
  )
}

export default Review