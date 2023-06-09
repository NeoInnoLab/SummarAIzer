import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Rapid API - Artical Extractor amd Summarizer: https://rapidapi.com/restyler/api/article-extractor-and-summarizer

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set(
        'X-RapidAPI-Host',
        'article-extractor-and-summarizer.p.rapidapi.com'
      );
      return headers;
    },
  }),
  // what we want to call from the api
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
      // encodeURIComponent() function encodes special characters that may be present in the parameter values
      // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
