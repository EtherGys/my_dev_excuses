"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function dataPage() {
  const [excuse, setExcuse] = useState({
    http_code: '',
    tag: '',
    message: ''
  })
  const code = usePathname();
  const router = useRouter();

// Send GET method to API endpoint and handle error 404
  useEffect(() => {
    const getExcuseDetails = async () => {
      const response = await fetch(`/api/excuse/${code}`)

      if (!response.ok) {
        router.push('/not-found');
      } else {
        const data = await response.json();
        setExcuse(data);
      }
    }
    getExcuseDetails();
  }, [code])

  return (
    <main className="mx-10 min-h-screen flex flex-col">
      <div className=" m-auto text-center">
        {excuse.http_code === '' ?
          <div>Loading ...</div> :
          <>
            <h1 className='font-extrabold text-3xl'>
              Code http : {excuse.http_code}
            </h1>
            <h2>
              Message d'excuse : "{excuse.message}"
            </h2>
            <h2>
              Tag : #{excuse.tag}
            </h2>
          </>
        }
      </div>
    </main>
  )
}

export default dataPage
