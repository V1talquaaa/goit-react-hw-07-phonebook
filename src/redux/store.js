import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { myContactSlice } from './contacts/contactSlice';
import { myFilterSlice } from './contacts/filterSlice';
import { contactsApi } from './newContacts/contactApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: myFilterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware),
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactsApi.middleware,
  // ],
});

// export const { add, remove } = myContactSlice.actions;
export const { filterContact } = myFilterSlice.actions;
