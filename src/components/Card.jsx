import React from 'react'

const Card = ({ items, index, handleClick }) => {
  return (
    <div className="flex border w-fit px-2 py-3 gap-3 rounded-sm relative pb-6 mt-10">
      <div className="bg-orange-500 w-28 h-28 rounded-sm overflow-hidden">
        <img className="object-cover w-full" src={items.image} alt="" />
      </div>
      <div>
        <h1 className="font-semibold text-sm w-20">{items.name}</h1>
        <p className="text-sm text-slate-600 whitespace-nowrap">
          {items.artist}
        </p>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`cursor-pointer rounded-lg 
          ${
            items.added ? 'bg-teal-500' : 'bg-orange-500'
          } text-xs w-max px-2 py-1 text-white absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2`}
      >
        {items.added ? 'Added' : 'Add to favourite'}
      </button>
    </div>
  )
}

export default Card
