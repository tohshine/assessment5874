import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const testimony = createApi({
  reducerPath: 'testimony',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  endpoints(builder) {
    return {
      fetchTestimony: builder.query({
        query: () => {
          return {
            url: '/testimony',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchTestimonyQuery } = testimony;
export { testimony };