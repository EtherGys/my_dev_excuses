"use client"
import Form from "@/components/Form";
import GenerateButton from "@/components/GenerateButton";
import MainComponent from "@/components/MainComponent";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Home() {

  const [newExcuse, setNewExcuse] = useState({
    http_code: '',
    tag: '',
    message: '',
  })

  const [open, setOpen] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm<excuseProps>();


  // Send a post request to API endpoint and handle the state of the modal window
  async function createExcuse() {
    setSubmitting(true);
    try {
      const response = await fetch('/api/excuse/new', {
        method: 'POST',
        body: JSON.stringify({
          http_code: newExcuse.http_code,
          tag: newExcuse.tag,
          message: newExcuse.message
        })
      })

      if (response.ok) {
        setOpen(false);
      }
    } catch (error) {
      console.log(error);

    } finally {
      setSubmitting(false);
    }
  }


  const onSubmit: SubmitHandler<excuseProps> = () => {
    createExcuse();
  }

  return (
    <main className="mx-10 min-h-screen flex flex-col">
      {/* Modal window to create new excuse */}
      {open &&
        (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Créer une nouvelle excuse</h3>
                <div className="mt-2 px-7 py-3">
                  <div className='mx-4 md:mx-0'>
                    <Form
                      excuse={newExcuse}
                      errors={errors}
                      register={register}
                      setExcuse={setNewExcuse}
                      submitting={submitting}
                      handleSubmit={handleSubmit(onSubmit)}
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      <MainComponent handleClick={() => { setOpen(true) }} />
    </main>
  );
}
