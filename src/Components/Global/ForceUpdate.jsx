import React, { useState, useEffect } from 'react';

export function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    console.log('updated')
    return () => setValue(value => value + 1); // update the state to force render
}