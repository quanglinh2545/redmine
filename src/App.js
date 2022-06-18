import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HeadLine from './components/HeadLine';
import Aside from './components/Aside';
import BoxList from './components/BoxList';
import Footer from './components/Footer';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <main>
          <section id="content">
            <Project />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;