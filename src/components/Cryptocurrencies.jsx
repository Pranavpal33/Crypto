import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Card } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoapi'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)

  }, [cryptoList, searchTerm])
  if (isFetching) {
    return "Loading...."
  }
  return (
    <>
    { (!simplified) &&(
        <div className='search-crypto'>
          <input placeholder='Search currency' onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    )}
      <Row gutter={[32, 32]} className="crypto-card-container" >
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.rank}>
            <Link  to={`/crypto/${currency.rank}`}>
              <Card title={`${currency.rank}.${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl}></img>} hoverable>
                <p>Price : {millify(currency.price)}</p>
                <p>Market Cap : {millify(currency.marketCap)}</p>
                <p>Daily change : {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
