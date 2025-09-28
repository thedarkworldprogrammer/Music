import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  const raw = [
    {
      image:
        'https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto/c_crop%2Cg_custom/v1728462701/yiwwlrbe78ahhohjjmum.jpg',
      name: 'Raabta',
      artist: 'Arijit Singh',
      added: false,
    },
    {
      image:
        'https://filmfare.wwmindia.com/content/2024/mar/shreyaghoshal21710244558.jpg',
      name: 'Manwa Laage',
      artist: 'Shreya Ghoshal',
      added: false,
    },
    {
      image:
        'https://www.bollywoodshaadis.com/img/article-20231028517245062690000.jpg',
      name: 'O Bewafa Ye To Bata',
      artist: 'Kishore Kumar',
      added: false,
    },
    {
      image:
        'https://static.toiimg.com/thumb/msid-89386079,imgsize-36578,width-900,height-1200,resizemode-6/89386079.jpg',
      name: 'Kaliyon Ka Chaman',
      artist: 'Lata Mangeshkar',
      added: false,
    },
  ]

  const [data, setData] = useState(raw)
  // const settingData = setData
  const handleClick = (index) => {
    setData((prev) =>
      prev.map((items, itemsIndex) => {
        if (itemsIndex === index) return { ...items, added: !items.added }
        return items
      })
    )
  }
  return (
    <div className="p-4">
      <Navbar data={data} />
      <div className="flex gap-7 flex-wrap mt-6 px-10 items-center justify-center">
        {data.map((items, index) => (
          <Card
            key={index}
            items={items}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default App
