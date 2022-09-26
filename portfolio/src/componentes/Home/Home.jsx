import React from "react";
import { useLocalStorage } from "../useLocalStoraje";
import HomeEng from "./HomeEng";
import HomeEsp from './HomeEsp'

export default function Home(){
    const useLocal = useLocalStorage('idioma')
    
    if(useLocal[0] === 'en'){
        return <HomeEng/>
    }
    else {
        return <HomeEsp/>
    }
}