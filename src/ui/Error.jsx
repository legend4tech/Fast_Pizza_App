import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
import Button from './Button';

function Error() {
  const error = useRouteError();
  return (
    <div className="ml-3 sm:ml-0">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1" type="small">
        &larr; Go back
      </LinkButton>
    </div>
  );
}

export default Error;
