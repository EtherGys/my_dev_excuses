"use client"
import Form from '@/components/Form';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

function newPage() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [excuse, setExcuse] = useState({
        http_code: '',
        tag: '',
        message: '',
    })

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm<excuseProps>();



    async function createExcuse() {
     
        setSubmitting(true);

        try {
            const response = await fetch('/api/excuse/new', {
                method: 'POST',
                body: JSON.stringify({
                    http_code: excuse.http_code,
                    tag: excuse.tag,
                    message: excuse.message
                })
            })

            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error);

        } finally {
            setSubmitting(false);
        }
    }






    const onSubmit: SubmitHandler<excuseProps> = () => createExcuse();

    return (
        <div className='mx-4 md:mx-0'>
            <Form
                excuse={excuse}
                errors={errors}
                register={register}
                setExcuse={setExcuse}
                submitting={submitting}
                handleSubmit={handleSubmit(onSubmit)}
            />
        </div>
    )
}

export default newPage
