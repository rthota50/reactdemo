import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import SearchPage from './containers/search-page';
import Modal from './components/modal'
import SearchInput from './components/search-input';
import Logo from './app-icon.svg'

function App() {
  console.log(Logo);
  return (
    <Fragment>
      <Modal />
      <div className="container is-fluid">
        <article className="media">
          <figure className="media-left">
            <img src={Logo}  alt="Tradeshift" />
          </figure>
          <div className="media-content">
            <div className="content">
              <h3 className="title">Tradeshift Global Search</h3>
            </div>

          </div>

        </article>
      </div>
      <div className="container">
        <section className="section">
          <div className="container">
            <h1 className="title">Tradeshift Global Search</h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
        </section>
        <SearchPage />
      </div>
    </Fragment>

  );
}

export default App;
