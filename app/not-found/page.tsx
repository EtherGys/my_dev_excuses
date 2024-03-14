"use client"

import { useRouter } from "next/navigation";

// Defines the 404 error page
export default function ErrorFound() {
    const router = useRouter();
    return (
        <main className="mx-10 min-h-screen flex flex-col">
            <div className=" m-auto text-center">
                <h1 className='font-semibold text-3xl mb-4 text-center'>
                    <span className='mx-4'>
                        404
                    </span>
                    <span className='mx-4 px-4 border-l-2 border-gray-800'>
                        Not Found
                    </span>
                </h1>
                <h2>
                    Oh non ! La page est introuvable...
                </h2>
                <div className='text-center my-8'>

                    <button type="button" onClick={() => router.push("/")} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Retour à la page d'accueil
                    </button>
                </div>
            </div>
        </main>
    )
}