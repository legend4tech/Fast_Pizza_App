import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {/* {isLoading && <Loader />} */}
      {(isLoading || isSubmitting) && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
