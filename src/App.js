// BrowserRouter 우리가 아는 url 형식 | HashRouter 뒤에 #이 붙는다
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
//import { Route } from 'react-router-dom'; // 
//import { Router } from 'react-router-dom'; //url 지정
//import { Switch } from 'react-router-dom'; //어떤 url로 갈것인지 저앻준다

function App() {
  return( 
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;