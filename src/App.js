import React from 'react';
import { PriceList } from './Components/PriceList/PriceList';
import { getNewData, initialData } from './data';
import './styles.css';

class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      data: initialData
    };

  };

  componentDidMount = () => {
    this.interval = setInterval(()=>this.updateData(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  updateData = () => {
    this.setState({ data: getNewData() });
  }

  render = () => {
    return (
      <PriceList data={this.state.data} />
    );
  };
}

export default App;
