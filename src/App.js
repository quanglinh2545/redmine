import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HeadLine from './components/HeadLine';
import Aside from './components/Aside';
import BoxList from './components/BoxList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <main>
          <section id="content">
            <HeadLine />
          </section>
          <Aside />
          <BoxList />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;