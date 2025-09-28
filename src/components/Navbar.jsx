import React from 'react'

const Navbar = ({ data }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Music</h1>
      <div className="flex gap-3 px-3 py-2 bg-orange-400 rounded-md text-xs">
        <p>Favourites</p>
        <span>{data.filter((item) => item.added).length}</span>
      </div>
    </div>
  )
}

export default Navbar
