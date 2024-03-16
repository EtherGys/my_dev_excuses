"use client"
import React, { useEffect, useState } from 'react'
import GenerateButton from './GenerateButton'

function MainComponent({handleClick} : mainProps) {
    const [excuse, setExcuse] = useState({
        http_code: '',
        tag: '',
        message: '',
      })

    return (
        <>
            <h1 className="font-extrabold text-3xl mt-4">
                LES EXCUSES DE DEV
            </h1>
            <div className="m-auto">
                {excuse.message === '' ? <span className="text-xs italic">Votre excuse est presque prête...Plus qu'à appuyer sur le bouton !</span> : excuse.message}
            </div>
            <div className="text-center mb-60">
                <GenerateButton setExcuse={setExcuse} />
                <button type="button" onClick={handleClick} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                    Créer une nouvelle excuse
                </button>
            </div>
        </>
    )
}

export default MainComponent
