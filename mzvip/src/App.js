import React from 'react';

import './App.css';
import MainHeader from "./view/main-header";
import MainFooter from "./view/main-footer";
import RouteIndex from "./route/index"
import GoTop from "./view/base/go-top"
import "./view/common/common.css"
import "./view/common/main.css" 

function App() {
  return <div className="warp">
      <MainHeader />
      <main className="main">
        <RouteIndex />
      </main>
      <MainFooter />
      <GoTop />
    </div>;
  
}

export default App;
