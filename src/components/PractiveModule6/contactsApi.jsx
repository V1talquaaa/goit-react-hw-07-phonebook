import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64a153140079ce56e2daf8e6.mockapi.io/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => 'contacts',
    }),
  }),
})

export const { useFetchContacts } = contactsApi;