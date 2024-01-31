import React, { useState, useRef } from 'react';
import { Player } from "@lordicon/react";

const iconHome = require("../../../assets/home-system-regular-41.json")
const HomeIconState {
    inHome:"in-Home",
    
}
export const HomeIcon = ()=>{
    const [state, useState] = useState(false);
    const playerRef = useRef(null);
    const play = () => {
        playerRef.current?.playFromBeginning();
    };

}