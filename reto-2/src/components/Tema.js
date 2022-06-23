import { useState, useEffect } from 'react'

const Tema = () => {

    const [theme, setTheme] = useState('light');

    const setMode = mode => {
        window.localStorage.setItem('CAMBIO_TEMA', mode);
        setTheme(mode);
    }

    const changeTheme = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    }


    useEffect(() => {
        const saveTheme = window.localStorage.getItem('CAMBIO_TEMA');
        saveTheme ? setTheme(saveTheme) : setMode('light');
    }, [])

    return [theme, changeTheme]
}

export default Tema