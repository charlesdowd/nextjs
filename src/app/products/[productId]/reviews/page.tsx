import { FunctionComponent } from 'react';
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  params: {
    productId: string
  } & ParsedUrlQuery
}

const Reviews: FunctionComponent<IProps> = ({ params }) => {
  const { productId } = params
  return (
    <div>
      <h1>Reviews for product #{productId}</h1>
      <h3>Review a</h3>
      <h3>Review b</h3>
      <h3>Review c</h3>
    </div>
  )
}

export default Reviews