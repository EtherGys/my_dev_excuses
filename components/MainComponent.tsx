"use client"
import React, { useState } from 'react'
import GenerateButton from './GenerateButton'
import { Transition } from '@headlessui/react'

function MainComponent({ handleClick }: mainProps) {
    const [excuse, setExcuse] = useState({
        http_code: '',
        tag: '',
        message: '',
    })
    const [isTitleShowing, setIsTitleShowing] = useState(false)
    const [isButtonShowing, setIsButtonShowing] = useState(false)

    setTimeout(() => {
        setIsTitleShowing(true);
    }, 1000);

    setTimeout(() => {
        setIsButtonShowing(true);
    }, 3000);

    return (
        <>
            <h1 className={isButtonShowing ? 'text-4xl font-semibold' : 'text-4xl font-semibold m-auto '}>
                <Transition
                    show={isTitleShowing}
                    enter="transition-all ease-in-out duration-500"
                    enterFrom="opacity-0 translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    Les excuses de dev
                </Transition>
            </h1 >
            <div className="m-auto">
                <Transition
                    show={isButtonShowing}
                    enter="transition-all ease-in-out duration-500"
                    enterFrom="opacity-0 translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {excuse.message === '' ? <span className="text-xs italic">Votre excuse est presque prête...Plus qu'à appuyer sur le bouton !</span> : excuse.message}
                </Transition >
            </div>
            <div className="text-center mb-60">
                <Transition
                    show={isButtonShowing}
                    enter="transition-all ease-in-out duration-500"
                    enterFrom="opacity-0 translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <GenerateButton setExcuse={setExcuse} />
                    <button type="button" onClick={handleClick} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                        Créer une nouvelle excuse
                    </button>
                </Transition >
            </div >

        </>
    )
}

export default MainComponent
