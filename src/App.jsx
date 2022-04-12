import React from 'react';
import {Tabs, Select} from "antd";
import Horoscope from "./components/Horoscope"
import Quote from "./components/Quotes"
import AlQuran from "./components/AlQuran"
import QuranInfo from "./components/QuranInfo"
import Facts from "./components/NumberFact"
import './App.css';


function App() {
const {TabPane} = Tabs;
  return (
    <div className="main">
   <Tabs tabPosition={"left"}>
      <TabPane tab="Daily Horoscope" key="1">
       <Horoscope />
      </TabPane>
      <TabPane tab="Get Quote" key="2">
       <Quote />
      </TabPane>
      <TabPane tab="Quran Search" key="3">
        <AlQuran />
      </TabPane>
     <TabPane tab="Quran Basic Info" key="4">
        <QuranInfo />
      </TabPane>
     <TabPane tab="Number Facts" key="5">
        <Facts />
      </TabPane>
    </Tabs>

      <div className="footer">
      <a href="">Fork</a> &nbsp; &nbsp;
      <a href="https://twitter.com/Codinggir">Follow me on twitter</a> &nbsp; &nbsp;
      <a href="https://www.linkedin.com/in/naima-ghulammuhammad/">Connect me on Linkedin</a> &nbsp; &nbsp;
      <a href="https://www.instagram.com/naimaghm/">@naimaghm</a> &nbsp; &nbsp;
      
      </div>
      </div>
  );
}

export default App;