// @flow
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorBoundary } from './ErrorBoundary';
import { Header } from './Header';
import { LimioProvider } from '@limio/sdk';
import LimioHeader from './components/limio-header';
import GroupedOffers from './components/grouped-offers';
import LimioFooter from './components/limio-footer';
import BasketPage from './components/basket-page/components';
import './App.css';

function App() {
  const endpoint = 'https://localhost:9002';
  const [key] = useState(0);

  const HomePage = () => {
    return (
      <div>
        <Header endpoint={endpoint} />
        <div>
          <ErrorBoundary>
            <LimioProvider key={key}>
              <LimioHeader />
              <GroupedOffers />
              <LimioFooter />
            </LimioProvider>
          </ErrorBoundary>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/basket' element={<BasketPage />} />
      </Routes>
    </Router>
  );
}

// I added the router here to allow for the basket page to be displayed

export default App;
