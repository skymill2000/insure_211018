import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiTest from "./commponents/ApiTest";
import NewsPage from "./page/NewsPage";
import PharmacyPage from "./page/PharmacyPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/apitest" exact>
          <ApiTest></ApiTest>
        </Route>
        <Route path="/news" exact>
          <NewsPage></NewsPage>
        </Route>
        <Route path="/pharmacy" exact>
          <PharmacyPage></PharmacyPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
