import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
import Button from './Button';

function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <Button to="-1" type="small">
        &larr; Go back
      </Button>
    </div>
  );
}

export default Error;
