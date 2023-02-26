import { timeStamp } from "console";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "Store/eventSlice";

const useUserPage = () => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<String>("");
  const [location, setlocation] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const dispatch = useDispatch();

  const storeEvents = useSelector((store: any) => store.eventSlice.events1);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(
      addEvent({
        title,
        date,
        time,
        location,
        description,
      })
    );

    console.log(storeEvents);
  };

  return {
    handleSubmit,
    title,
    setTitle,
    date,
    setDate,
    time,
    setTime,
    location,
    setlocation,
    description,
    setDescription,
  };
};

export default useUserPage;
