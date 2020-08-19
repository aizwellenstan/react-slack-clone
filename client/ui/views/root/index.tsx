import React from "react";
import "client/ui/styles/css/App.css";
import Header from "client/ui/components/header";
import Sidebar from "client/ui/components/sidebar";
import Chat from "client/ui/components/chat";
import Login from "client/ui/components/login";
import { useStateValue } from "client/ui/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }] :any = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div style={{paddingTop: "61px"}}>ようこそ</div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
