"use client"
import Link from 'next/link'
import { useState } from 'react'


export default function Form({ excuse, setExcuse, submitting, handleSubmit, register, errors }: formProps) {
 

    function errorHandler(errorInput: any, minNum: number, maxNum: number) {
        return (
            <>
                {errorInput && errorInput.type === "required" && (
                    <span className='ml-2 text-red-600'>Le champ est obligatoire</span>
                )}
                {errorInput && errorInput.type === "minLength" && (
                    <span className='ml-2 text-red-600'>Le champ doit contenir au moins {minNum} caractères</span>
                )}
                {errorInput && errorInput.type === "maxLength" && (
                    <span className='ml-2 text-red-600'>Le champ doit contenir moins de {maxNum} caractères</span>
                )}
            </>
        )
    }


    return (
        
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>

                    Ajouter une excuse
                </span>
            </h1>
            <p className='desc text-left max-w-md'>
                Quelle sera la meilleure excuse ?
            </p>

            <form
                onSubmit={handleSubmit}
                noValidate
                className='mt-10 w-full m-w-2xl flex flex-col gap-7'
            >
                {/* Title */}
                <label htmlFor="http_code">
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Code http de l'excuse
                    </span>
                    <input
                        value={excuse.http_code}
                        {...register("http_code", {
                            required: true, minLength: 2, maxLength: 60, onChange: (e: any) => setExcuse({
                                ...excuse, http_code: e.target.value
                            })
                        })}
                        name="http_code"
                        id="http_code"
                        placeholder='Choisissez un code http ...'
                        required
                        className='form_input border border-gray-300'
                    ></input>
                    {errorHandler(errors.http_code, 2, 3)}
                </label>

                {/* Message */}
                <label htmlFor="message">
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Votre message
                    </span>
                    <textarea
                        value={excuse.message}
                        {...register("message", {
                            required: true, minLength: 1, maxLength: 200, onChange: (e: any) => setExcuse({
                                ...excuse, message: e.target.value
                            })
                        })}
                        name="message"
                        id="message"
                        placeholder='Écrivez les étapes de la recette'
                        required
                        className='form_textarea border border-gray-300'
                    ></textarea>
                    {errorHandler(errors.recipe, 5, 200)}
                </label>

                {/* Tag */}
                <label htmlFor="tag">
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Tag
                    </span>
                    <input
                        value={excuse.tag}
                        required
                        {...register("tag", {
                            required: true, minLength: 2, maxLength: 60, onChange: (e: any) => setExcuse({
                                ...excuse, tag: e.target.value
                            })
                        })}
                        name="tag"
                        id="tag"
                        placeholder='#Tag'
                        className='form_input border border-gray-300'
                    ></input>
                    {errorHandler(errors.tag, 2, 30)}
                </label>


                <div className='flex-end mx-3 mb-5 gap-4'>
    
                    <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm bg-orange-600 rounded-full text-white'>
                        {submitting ? `En cours...` : 'Valider'}
                    </button>

                </div>
            </form>
        </section>
    )
}
