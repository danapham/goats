import React, { Component } from 'react';
import goatData from '../../helpers/data/goatData';
import Goat from '../Goat';

class GoatCorral extends Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    goatData.getGoats().then((resp) => {
      this.setState({
        goats: resp,
      });
    });
  }

  render() {
    const { goats } = this.state;
    const rendorGoatToDom = () => (
      goats.map((goat) => <Goat key={goat.id} goat={goat} />)
    );

    return (
      <div>
        <h1>Goat Corral</h1>
        {rendorGoatToDom()}
      </div>
    );
  }
}

export default GoatCorral;
