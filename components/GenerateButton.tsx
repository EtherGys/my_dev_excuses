'use client'
import React, { useEffect, useState } from 'react'

function GenerateButton({ setExcuse }: buttonProps) {
  const [allExcuses, setAllExcuses] = useState<[]>([])

  const [randomNumber, setRandomNumber] = useState<number | undefined>(undefined)
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
    if (randomNumber === undefined) {
      setRandomNumber(newRandom);
      return randomNumber
    }
    do {
      var newRandom = Math.floor(Math.random() * max);
    } while (newRandom === randomNumber)
    setRandomNumber(newRandom);
    console.log('randomnumver', randomNumber);
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
    getRandomNumber(0, allExcuses.length);
    console.log(getRandomNumber(0, allExcuses.length));
    
    const randomExcuse: any = allExcuses[randomNumber]
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setExcuse({
        http_code: randomExcuse.http_code,
        tag: randomExcuse.tag,
        message: randomExcuse.message,
      });
    }, timerNumber)
  }

  return (
    <button type="button" onClick={() => getExcuse()} className="w-60 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      {loader ? 'Loading...' : 'Générer une nouvelle excuse'}
    </button>
  )
}

export default GenerateButton
