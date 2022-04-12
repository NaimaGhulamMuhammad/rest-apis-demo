import React, {useState, useEffect} from 'react';
import {Input,  Descriptions} from "antd";
import axios from "axios";

const url = "https://al-quran1.p.rapidapi.com/corpus";


const QuranInfo = () => {

  const [data, setData] = useState({});
useEffect(()=>{
  async function fetchInfo() {
    const res = await axios.get("https://al-quran1.p.rapidapi.com/",
  {
    headers:{
      'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com',
    'X-RapidAPI-Key': 'eb1ff496camsh59c0c7f6e4f9729p1bffc3jsnd0409f574b2b'
    }
  }
  )
    setData(res.data);
  }
    fetchInfo();
},[])
if(!data) return null;
else return(
  <>
    <p>API URL:</p> <a href="https://rapidapi.com/raz0229/api/al-quran1/">{url}</a><br /> <br/>
  <Descriptions title={`Base Information about Quran...`} layout="vertical" bordered>
    <Descriptions.Item label="Total Number Of Surahs">114</Descriptions.Item>
    <Descriptions.Item label="Makkan Surahs">{data?.total_meccan_surahs}</Descriptions.Item>
    <Descriptions.Item label="Medinan Surahs">{data?.total_medinan_surahs}</Descriptions.Item>
        <Descriptions.Item label="Total Verses">{data?.total_verses}</Descriptions.Item>
    <Descriptions.Item label="Total Words">
      {data?.number_of_words}
    </Descriptions.Item>
    <Descriptions.Item label="Total Unique Words" >
      {data?.number_of_unique_words}
    </Descriptions.Item>
    <Descriptions.Item label="Total Stem Words" >
      {data?.number_of_stems}
    </Descriptions.Item>
    <Descriptions.Item label="Total Root Words" >
      {data?.number_of_roots}
    </Descriptions.Item>
    <Descriptions.Item label="Number of Lemmas">
      {data?.number_of_lemmas}
    </Descriptions.Item>
  </Descriptions>
  </>
)
}

export default QuranInfo;