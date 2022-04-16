import React, {useState} from 'react';
import {Select, Descriptions, message} from "antd";
import axios from "axios";

const url ="https://horostory.p.rapidapi.com/horoscope?date=today"

const Horoscope = () => {
  
const { Option } = Select;
const [data, setData] = useState('')
const [sign, setSign] = useState('');
  async function onChange(value) {
  console.log(`selected ${value}`);
    setSign(value)
    const result = await axios.get(`${url}&sign=${value}`, {headers:
      {
		'X-RapidAPI-Host': 'horostory.p.rapidapi.com',
		'X-RapidAPI-Key': 'eb1ff496camsh59c0c7f6e4f9729p1bffc3jsnd0409f574b2b'
	}})
  if(result.status == 200)
    setData(result.data);
  else message.error("Something Went Wrong");
    console.log('result', result)
}
  function onSearch(val) {
  console.log('search:', val);
}
  
return(
  <>
    <p>API URL:</p> <a href="https://rapidapi.com/raz0229/api/al-quran1/">{url}</a><br /> <br/>
     <Select showSearch 
          placeholder="Select your Sign"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
          >
          <Option value="aries">Aries</Option>
          <Option value="taurus">Taurus</Option>
          <Option value="gemini">Geimini</Option>
          <Option value="cancer">Cancer</Option>
          <Option value="leo">Leo</Option>
          <Option value="virgo">Virgo</Option>
          <Option value="libra">Libra</Option>
          <Option value="scorpio">Scorpio</Option>
          <Option value="sagittarius">Sagittarius</Option>
          <Option value="capricorn">Capricorn</Option>
          <Option value="aquarius">Aquarius</Option>
          <Option value="pisces">Pisces</Option>
        </Select>


     {sign && <Descriptions title={`Daily Horoscope of ${sign}`} layout="vertical" bordered>
    <Descriptions.Item label="Date">{data?.currentDate}</Descriptions.Item>
    <Descriptions.Item label="Lucky Number">{data?.luckyNumber}</Descriptions.Item>
    <Descriptions.Item label="Compatibility">{data?.compatibility}</Descriptions.Item>
        <Descriptions.Item label="Descripiton">{data?.description}</Descriptions.Item>
    <Descriptions.Item label="Luck Time" span={2}>
      {data?.luckyTime}
    </Descriptions.Item>
  </Descriptions>}
  </>
)
}

export default Horoscope;