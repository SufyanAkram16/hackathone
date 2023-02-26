import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, Timestamp } from "firebase/firestore"; 
import { db } from 'Firebase/firebase.config';

export interface eventType {
    title:string,
    date: Timestamp,
    time:string,
    location: string,
    description: string,

}

const sendEventsToFirebase = createAsyncThunk('events/sendevents', async (eventsData) => {
    const docRef = await addDoc(collection(db, "events"), {
        title:eventsData.title, date:eventsData.date, time:eventsData.time,location:eventsData.location, description:eventsData.description
      });
    return eventsData
    

})

export const eventSlice = createSlice({
    name: 'events',
    initialState: { eventsData: {}, allData:[]  },
    reducers: {
    },

    extraReducers:(builder)=> {
        builder.addCase(sendEventsToFirebase.fulfilled,(state,action)=> {
            console.log(action.payload);

            let newState: any = {
                ... state,
                eventsData: action.payload
            }

            state.allData.push(newState)
            
        })
    }
})




export default eventSlice.reducer