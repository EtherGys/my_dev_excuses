"use client"
import Link from 'next/link'
import { useState } from 'react'


export default function Form({ excuse, setExcuse, submitting, handleSubmit, register, errors }: formProps) {


    // Handle frontend error messages with React Hook Form
    function errorHandler(errorInput: any, minNum: number, maxNum: number) {
        return (
            <>
                {errorInput && errorInput.type === "required" && (
                    <p className='ml-2 text-red-600'>Le champ est obligatoire</p>
                )}
                {errorInput && errorInput.type === "minLength" && (
                    <p className='ml-2 text-red-600'>Le champ doit contenir au moins {minNum} caractères</p>
                )}
                {errorInput && errorInput.type === "maxLength" && (
                    <p className='ml-2 text-red-600'>Le champ doit contenir moins de {maxNum} caractères</p>
                )}
            </>
        )
    }

    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <p className='desc text-left max-w-md'>
                Quelle sera la meilleure excuse ?
            </p>
            <form
                onSubmit={handleSubmit}
                noValidate
                className='mt-10 w-full m-w-2xl flex flex-col gap-7'
            >
                {/* code HTTP */}
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="http_code">
                    <span className='font-semibold text-base text-gray-700 '>
                        Code http de l'excuse
                    </span>
                    <input
                        value={excuse.http_code}
                        {...register("http_code", {
                            required: true, minLength: 2, maxLength: 3, onChange: (e: any) => setExcuse({
                                ...excuse, http_code: e.target.value
                            })
                        })}
                        name="http_code"
                        id="http_code"
                        placeholder='Choisissez un code http ...'
                        required
                        className='mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    ></input>
                    {errorHandler(errors.http_code, 2, 3)}
                </label>

                {/* Message */}
                <label htmlFor="message">
                    <span className='font-semibold text-base text-gray-700'>
                        Votre message
                    </span>
                    <textarea
                        value={excuse.message}
                        {...register("message", {
                            required: true, minLength: 2, maxLength: 200, onChange: (e: any) => setExcuse({
                                ...excuse, message: e.target.value
                            })
                        })}
                        name="message"
                        id="message"
                        placeholder="Écrivez votre message d'excuse"
                        required
                        className='mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    ></textarea>
                    {errorHandler(errors.message, 2, 200)}
                </label>

                {/* Tag */}
                <label htmlFor="tag">
                    <span className='font-semibold text-base text-gray-700'>
                        Tag
                    </span>
                    <input
                        value={excuse.tag}
                        required
                        {...register("tag", {
                            required: true, minLength: 2, maxLength: 30, onChange: (e: any) => setExcuse({
                                ...excuse, tag: e.target.value
                            })
                        })}
                        name="tag"
                        id="tag"
                        placeholder='Tag'
                        className='mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    ></input>
                    {errorHandler(errors.tag, 2, 30)}
                </label>

                {/* submit button */}
                <div className='flex-end mx-3 mb-5 gap-4'>
                    <button type='submit' disabled={submitting} className='px-6 py-2  bg-green-600 rounded-lg  text-white'>
                        {submitting ? `En cours...` : 'Valider'}
                    </button>
                </div>
            </form>
        </section>
    )
}
