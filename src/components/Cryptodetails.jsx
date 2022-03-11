import React, {useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import {useParams} from 'react-router-dom'
import millify from 'millify'
import {Col, Row, Typography, Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined,
   StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import {useGetCryptoDetailsQuery} from '../services/cryptoapi'

const {Title,Text} = Typography
const {Option} = Select


const Cryptodetails = () => {
  const {coinId}=useParams();
  const [timePeriod, settimePeriod]=useState('7d')
  const {data: A, isFetching} = useGetCryptoDetailsQuery(coinId)
  console.log(A)

  return (
    <div>
      Cryptodetails {coinId}
    </div>
  )
}

export default Cryptodetails
 