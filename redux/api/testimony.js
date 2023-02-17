import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const testimony = createApi({
  reducerPath: 'testimony',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://assessment5874.vercel.app/api',
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