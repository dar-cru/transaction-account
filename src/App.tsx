import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RootState } from "./redux/rootReducer";
import NavigationBar from "./components/NavigationBar";
import AccountsList from "./views/AccountsList";
import CreateAccountForm from "./views/CreateAccountForm";
import LoginForm from "./views/LoginForm/LoginForm";
import TransactionsList from "./views/TransactionsList/TransactionsList.connected";

const App = () => {
  const { jwtToken } = useSelector((state: RootState) => state.authenticated);
  const isAuthenticated = !!jwtToken;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <>
            <NavigationBar isAuthenticated={isAuthenticated} />
            {isAuthenticated ? (
              <>
                <Route path={"/"} exact component={AccountsList} />
                <Route path={"/create"} exact component={CreateAccountForm} />
                <Route path={"/transactions"} component={TransactionsList} />
              </>
            ) : (
              <Route path={"/"} exact component={LoginForm} />
            )}
          </>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
