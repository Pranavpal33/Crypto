
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f5cab7b32dmsh8f8f7385a2a710ap167a2ajsn80500ff91ef4'

}

const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoApiHeaders})


export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        })
    })
})

export const {
    useGetCryptosQuery,   
}=cryptoApi