import { Outlet, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* This is to display child routes 
        when they are navigated to like /, /menu, etc from appjsx
        */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
