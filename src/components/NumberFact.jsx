import React, {useState, useEffect} from 'react';
import {Divider, Button,InputNumber, message} from "antd";
import {ReloadOutlined} from "@ant-design/icons"
import axios from "axios";

// const host = process.env['horoscope_host'];
// const key = process.env['horoscope_key']

const Facts = () => {
  
const [month, setMonth] = useState(0);
const [day, setDay] = useState(0);
const [fact, setFact] = useState({});
const url =`https://numbersapi.p.rapidapi.com/${month}/${day}/date`
  
  async function onSubmit(value) {
    const result = await axios.get(url, {
    params: {fragment: 'true', json: 'true'},
  headers: {
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
    'X-RapidAPI-Key': 'eb1ff496camsh59c0c7f6e4f9729p1bffc3jsnd0409f574b2b'} 
    })
    setFact(result.data);
    console.log('result', result)
}
 useEffect(()=>{},[fact])
return(
  <>
    <p>API URL:</p> <a href="https://rapidapi.com/divad12/api/numbers-1/">{url}</a><br /> <br/>
    
    <label>Input Month (1-12): </label>
     <InputNumber defaultValue={4} min={1} max={12} onChange={(val) => setMpnth(val)}></InputNumber><br />
    <label>Input Day: </label>
     <InputNumber defaultValue={12} min={1} max={31} onChange={(val) => setDay(val)}></InputNumber><br/> <br/><br/>
      <Button type="primary" onClick={onSubmit}>submit</Button>


   {fact && <><Divider orientation="left">The Day Fact</Divider>
    <h3>{fact?.text}</h3>
<Divider orientation="right">In the Year of {fact.year}</Divider>
    <Button type="primary" shape="circle" icon={<ReloadOutlined />} onClick={async () => await onSubmit()}></Button></>}
  </>
)
}

export default Facts;