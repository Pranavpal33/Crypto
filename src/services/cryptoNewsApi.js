 import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoNewsHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'f5cab7b32dmsh8f8f7385a2a710ap167a2ajsn80500ff91ef4'

}
const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews:builder.query({
            query:({newCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {useGetCryptoNewsQuery}= cryptoNewsApi;