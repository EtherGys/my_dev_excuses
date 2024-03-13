"use client"
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function dataPage() {
  const [excuse, setExcuse] = useState({
    http_code: '',
    tag: '',
    message: ''
  })
  const searchParams = useSearchParams();
  const code = usePathname();


  useEffect(() => {
    const getExcuseDetails = async () => {
      const response = await fetch(`/api/excuse/703`)
      const data = await response.json();

      setExcuse(data);
    }
    if (code) getExcuseDetails();
  }, [code])
  console.log(code);

  return (
    <div className='mx-10 min-h-screen flex flex-col'>
            <h1 className='font-extrabold text-3xl'>
              Code http : {excuse.http_code}
            </h1>
            <h2>
              Message d'excuse : "{excuse.message}"
            </h2>
            <h2>
              Tag : #{excuse.tag}
            </h2>
    </div>
  )
}

export default dataPage
