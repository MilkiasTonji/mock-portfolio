import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    // css feature to detected the user's color preference and operating system setting
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(()=> {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPreference = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPreference){
                let check = userPreference === "dark" ? "dark": "light";
                setMode(check)

                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }
            // if there is any user preference through media query
            else{
                let check = mediaQuery.matches ? "dark": "light";
                setMode(check)
                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        mediaQuery.addEventListener("change",  handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange);

    },[])

    // fire this effect when there is change in mode
    useEffect(()=> {
        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark");
            window.document.documentElement.classList.add("dark");
        }else{
            window.localStorage.setItem("theme", "light");
            window.document.documentElement.classList.remove("dark");
        }
    },[mode])


  return [mode, setMode]

}

export default useThemeSwitcher