import React, {useState, useEffect} from 'react';
import {Select, message, Divider, Button} from "antd";
import axios from "axios";
import {ReloadOutlined} from "@ant-design/icons"

const url ="https://quotes-villa.p.rapidapi.com/quotes"

const Quote = () => {
  
const { Option } = Select;
const [quote, setQuote] = useState('')
const [data, setData] = useState({})
const [category, setCategory] = useState('courage');
  
  async function onChange(value) {
    setCategory(value)
 //setData(result.data);
}
  function onSearch(val) {
  console.log('search:', val);
}
    console.log(category)

  useEffect(()=> {
    async function getQuote() {
      const result = await axios.get(`${url}/${category}`, {headers:
      {
		'X-RapidAPI-Host': 'quotes-villa.p.rapidapi.com',
		'X-RapidAPI-Key': 'eb1ff496camsh59c0c7f6e4f9729p1bffc3jsnd0409f574b2b'	}})
      const data = result.data;
      setData(data)
      const getRandomeQuote = Math.floor((Math.random() * data.length) + 1);

      console.log('randome',getRandomeQuote)
      setQuote(data[getRandomeQuote]);
      
    }
     getQuote();
  }, [category])

  console.log('quote',quote)
return(
  <>
    <p>API URL:</p> <a href="https://rapidapi.com/raz0229/api/al-quran1/">{url}</a><br /> <br/>
     <Select showSearch 
          placeholder="Select Category"
        defaultActiveKey="courage"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
          >
          <Option value="hope">Hope</Option>
          <Option value="imagination">Imagination</Option>
          <Option value="humour">Humour</Option>
          <Option value="inspiration">Inspiration</Option>
          <Option value="science">Science</Option>
          <Option value="success">Success</Option>
          <Option value="age">Age</Option>
          <Option value="time">Time</Option>
          <Option value="wisdome">wisdome</Option>
          <Option value="attitude">Attitude</Option>
          <Option value="dreams">Dreams</Option>
          <Option value="courage">Courage</Option>
          <Option value="culture">Culture</Option>
          <Option value="friendship">Friendship</Option>
          <Option value="happiness">Happiness</Option>
        </Select>

    <Divider orientation="left">Quote Of the Day</Divider>
    <h3>{quote?.text}</h3>
<Divider orientation="right">{quote?.author}</Divider>
    <Button type="primary" shape="circle" icon={<ReloadOutlined />} onClick={() => setQuote(data[Math.floor(Math.random() * data.length)+1])}></Button>
  </>
)
}

export default Quote;