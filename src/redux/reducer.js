import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./action";

const contactsReducer = createReducer('', {
    [actions.filterContacts]:(state,action)=>state=action.payload
})


export default contactsReducer;