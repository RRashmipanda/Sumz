import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey =  '4b093054c1msh7f190aff2a9014dp1fd194jsne1a53070a465'



export const articleApi = createApi({

    reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
    headers.set( 'X-RapidAPI-Key', rapidApiKey);
    headers.set( 'X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

    return headers;
    }


  }),

   endpoints: (builder) => ({
    getSummary: builder.query({
        query: (params) => `summarize?url= ${encodeURIComponent(params.articleUrl)}&length=3`,
       




    }),

   }),

})


export const { useLazyGetSummaryQuery} = articleApi
