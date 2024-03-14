"use client"
import Form from "@/components/Form";
import GenerateButton from "@/components/GenerateButton";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
  const [excuse, setExcuse] = useState({
    http_code: '',
    tag: '',
    message: '',
  })
  const [newExcuse, setNewExcuse] = useState({
    http_code: '',
    tag: '',
    message: '',
  })
  const [allExcuses, setAllExcuses] = useState([])

  const [randomNumber, setRandomNumber] = useState<number>(0)
  const [timerNumber, setTimerNumber] = useState<number>(1000)

  const [loader, setLoader] = useState<boolean>(false);
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

  // Gets a random int to set the state of the loader timer
  function getRandomIntForTimer(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return 1000 * Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // Gets a random int to pick an excuse, int is different on every instance
  function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var newRandom = Math.floor(Math.random() * max);
    do {
      var newRandom = Math.floor(Math.random() * max);
    } while (newRandom === randomNumber)
    setRandomNumber(newRandom);
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
    const randomTimer: number = getRandomIntForTimer(1, 6);
    setTimerNumber(randomTimer);
    const index: number = getRandomNumber(0, allExcuses.length);
    const randomExcuse: any = allExcuses[index]
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setExcuse({
        http_code: randomExcuse.http_code,
        tag: randomExcuse.tag,
        message: randomExcuse.message,
      });
    }, randomTimer)
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

      <h1 className="font-extrabold text-3xl mt-4">
        LES EXCUSES DE DEV
      </h1>
      <div className="m-auto">
        {excuse.message === '' ? <span className="text-xs italic">Votre excuse est presque prête...Plus qu'à appuyer sur le bouton !</span> : excuse.message}
      </div>
      <div className="text-center mb-60">
        <GenerateButton onClick={getExcuse} content={loader ? 'Loading...' : 'Générer une nouvelle excuse'} />
        <button type="button" onClick={() => setOpen(true)} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
          Créer une nouvelle excuse
        </button>
      </div>
    </main>
  );
}
