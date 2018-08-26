import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RouteContainer from './RouteContainer';

class  App extends React.Component<any, any>{
  render(){
    return <RouteContainer/>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));