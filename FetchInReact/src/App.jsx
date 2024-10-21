import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import FetchAppProvider from "./store/FetchAppContext";

function App() {
  return (
    <FetchAppProvider>
      <div className="app-container">
        <SideBar />
        <div className="app-content">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </FetchAppProvider>
  );
}

export default App;
