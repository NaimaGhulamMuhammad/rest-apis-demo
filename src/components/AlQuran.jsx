import React, {useState} from 'react';
import {Input,  List} from "antd";
import axios from "axios";

const url = "https://al-quran1.p.rapidapi.com/corpus";
// const host = process.env['horoscope_host'];
// const key = process.env['horoscope_key']

const AlQuran = () => {
  
const { Search } = Input;
const [data, setData] = useState('')
const [word, setWord] = useState('');
  
  const onSearch = async (value) => {
    setWord(value)
    const res = await axios.get(`${url}/${value}`,
         {headers: {
    'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com',
    'X-RapidAPI-Key': 'eb1ff496camsh59c0c7f6e4f9729p1bffc3jsnd0409f574b2b'}}
    )
    setData(res.data);
    console.log('res', res,value)
  };
return(
  <>
    <p>API URL:</p> <a href="https://rapidapi.com/raz0229/api/al-quran1/">{url}</a><br /> <br/>
    <Search
      placeholder="input word to search in Quran"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  {data && <List
            dataSource={data}
             renderItem = {item => (
               <List.Item>
                  <List.Item.Meta
                    title={<><h4>Surah No: {item.surah_no}</h4>, <h5><em>Verse: {item.verse_no}</em></h5></>}
                    description={item.content}
                  />
               </List.Item>
             )}>
          </List>}
  </>
)
}

export default AlQuran;