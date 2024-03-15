"use client"
import React, { useEffect, useState } from 'react'
import GenerateButton from './GenerateButton'

function MainComponent({handleClick} : mainProps) {
    const [excuse, setExcuse] = useState({
        http_code: '',
        tag: '',
        message: '',
      })
    const [allExcuses, setAllExcuses] = useState<[]>([])

    const [randomNumber, setRandomNumber] = useState<number>(0)
    const [timerNumber, setTimerNumber] = useState<number>(1000)

    const [loader, setLoader] = useState<boolean>(false);


    // Gets a random int to set the state of the loader timer
    function getRandomIntForTimer(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        return 1000 * randomInt;
    }


    // Gets a random int to pick an excuse, int is different on every instance
    function getRandomNumber(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var newRandom = Math.floor(Math.random() * max);
        do {
            var newRandom = Math.floor(Math.random() * max);
        } while (newRandom === randomNumber)
        setRandomNumber(newRandom);
        return randomNumber;
    }

    // Gets and manages the state of all excuses available
    useEffect(() => {
        const fetchAllExcuses = async () => {
            const response = await fetch(`/api/excuse`);
            const data = await response.json();
            setAllExcuses(data);
        }

        fetchAllExcuses();
    }, [])



    // Load an excuse on click action
    const getExcuse = async () => {
        const randomTimer: number = getRandomIntForTimer(1, 5);
        setTimerNumber(randomTimer);
        const index: number = getRandomNumber(0, allExcuses.length);
        const randomExcuse: any = allExcuses[index]
        setLoader(true);
        console.log(randomTimer);
        
        setTimeout(() => {
            setLoader(false);
            setExcuse({
                http_code: randomExcuse.http_code,
                tag: randomExcuse.tag,
                message: randomExcuse.message,
            });
        }, randomTimer)
    }

    return (
        <>
            <h1 className="font-extrabold text-3xl mt-4">
                LES EXCUSES DE DEV
            </h1>
            <div className="m-auto">
                {excuse.message === '' ? <span className="text-xs italic">Votre excuse est presque prête...Plus qu'à appuyer sur le bouton !</span> : excuse.message}
            </div>
            <div className="text-center mb-60">
                <GenerateButton onClick={getExcuse} content={loader ? 'Loading...' : 'Générer une nouvelle excuse'} />
                <button type="button" onClick={handleClick} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                    Créer une nouvelle excuse
                </button>
            </div>
        </>
    )
}

export default MainComponent
