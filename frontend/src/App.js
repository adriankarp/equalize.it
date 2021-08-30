import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./Router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { loadUser, setStripeKey } from "./actions/userActions";
import store from "./store";

const App = () => {
  const { stripeKey } = useSelector((state) => state.auth);
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      store.dispatch(loadUser());
      store.dispatch(setStripeKey());
    }
  }, []);

  //  am mutat router-ul in fisierul lui propriu pentru clean code
  //  Header-ul e pasat ca si children si afisat in router ca children
  return (
    <div
      className="App"
      style={{ maxHeight: "100vh", overflowY: "scroll", overflowX: "hidden" }}
    >
      <div style={{ minHeight: "80vh" }}>
        <AppRouter stripeKey={stripeKey}>
          <Header />
        </AppRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
