import React, { useEffect, useState } from "react";

export const useLocalStorageState = (key, initialValue) => {
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;
    // console.log(`Key: ${key}, Stored Value: ${storedValue}`);
    const [value, setValue] = useState(storedValue);
  
    useEffect(() => {
      const storedItem = localStorage.getItem(key);
      if (storedItem !== null) {
        setValue(JSON.parse(storedItem));
      }
    }, [key]);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };
  