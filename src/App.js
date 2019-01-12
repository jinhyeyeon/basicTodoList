import React from 'react';
import './styles/common.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {
    modalOpen: false
  };

  render() {
    const {modalOpen} = this.state;
    return (
        <>
          <Header
            onModal={() => this.setState({modalOpen: true})}
          />                
          {modalOpen && (
              <Modal
                onClose={() => this.setState({modalOpen: false})}
              />
          )}
        </>
    );
  }
}

export default App;
