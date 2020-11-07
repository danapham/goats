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

  removeGoat = (e) => {
    const removedGoat = this.state.goats.filter((goat) => goat.id !== e.target.id);

    this.setState({
      goats: removedGoat,
    });
  };

  render() {
    const { goats } = this.state;
    const rendorGoatToDom = () => (
      goats.map((goat) => <Goat key={goat.id} goat={goat} removeGoat={this.removeGoat} />)
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
