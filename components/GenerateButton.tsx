import React from 'react'

function GenerateButton({content, onClick} : buttonProps) {
  return (
    <button type="button" onClick={onClick} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      {content}
      </button>
  )
}

export default GenerateButton
