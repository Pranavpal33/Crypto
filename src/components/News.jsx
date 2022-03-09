import React from 'react'
import {Select,Typography, Row, Col, Avtar, Card} from 'antd';
import moment from 'moment';
import {useGetCryptoNewsquery} from '../services/cryptoNewsApi'

const {Text,Title} = Typography
const {Options} = Select 

function News() {
   const {data:cryptoNews, isFetching}= useGetCryptoNewsquery({newsCatagory})
  return (
    <div>
      News
    </div>
  )
}

export default News
