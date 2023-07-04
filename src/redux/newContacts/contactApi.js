const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/dist/query")

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({baseUrl: 'https://64a153140079ce56e2daf8e6.mockapi.io/api/v1'}),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts']
        }),
        addContact: builder.mutation({
            query: (data) => ({
                url: 'contacts',
                method: 'POST',
                data
            })
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts']
        })
    })
})

export const {useGetContactsQuery, useDeleteContactMutation, useAddContactMutation} = contactsApi

// все що створює Query повертає об'єкт, а Mutation - масив.