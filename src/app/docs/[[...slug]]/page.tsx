import { FunctionComponent } from 'react';
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  params: {
    slug: string[];
  } & ParsedUrlQuery;
}

const Docs: FunctionComponent<IProps> = ({ params }) => {
  const { slug } = params
  console.log('slug: ', slug)
  if (!slug)
    return (
      <h1>Docs Home Page</h1>
    )

  else {
    return (
      <div>
        <h1>Docs</h1>
        <h2>slug: {slug?.toString()}</h2>
      </div>
    )
  }
}

export default Docs