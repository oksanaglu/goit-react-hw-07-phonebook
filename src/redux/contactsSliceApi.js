import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
      baseUrl: 'https://63d6b087e60d5743697d6445.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          phone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;

