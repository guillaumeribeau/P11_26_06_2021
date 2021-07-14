import React, { Component } from 'react';
import RouterKasa from './components/RouterKasa';

class App extends Component {
  render() {
    return (
      <div>
        <RouterKasa/>
      </div>
    );
  }
}

export default App;










  // render() {
  //   return (
  //     <BrowserRouter>
  //       <Router>
  //         <Switch>
  //           <Route path="/" exact component={Home} />
  //           <Route path="/a-propos" exact component={About} />
  //           <Route
  //             path="/appartement/:id"
  //             render={(props) => <Appartement {...props} />}
  //           />
  //           <Route path="/" component={NotFound} />
  //         </Switch>
  //       </Router>
  //     </BrowserRouter>
  //   );
  // }