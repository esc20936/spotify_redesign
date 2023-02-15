import React,{useState} from 'react'


export default function MainPageNavBar() {
    const [selectedOption, setSelectedOption] = useState({
        featured: true,
        podcasts: false,
        newreleases: false,
        charts: false
    })
    const mainOptionStyle = 'text-white text-5xl'
    const unActiveOptionStyle = 'text-gray-400 '

    const handleOptionClick = (option) => {
        setSelectedOption({
            featured: false,
            podcasts: false,
            newreleases: false,
            charts: false,
            [option]: true
        })
    }

  return (
    <nav className='w-3/4 h-1/12 flex flex-row items-center justify-start mt-6 mb-12'>
            <div className='w-11/12 h-full flex flex-row items-center justify-start space-x-12 ml-12'>
                <div className=' h-full flex flex-row items-end justify-center'>
                    <a onClick={()=>handleOptionClick('featured')} className={`${selectedOption.featured ? mainOptionStyle:unActiveOptionStyle } font-mainFont`}>Featured</a>
                </div>
                <div className=' h-full flex flex-row items-end justify-center'>
                    <a onClick={()=>handleOptionClick('podcasts')}  className={`${selectedOption.podcasts ? mainOptionStyle:unActiveOptionStyle } font-mainFont`}>Podcasts</a>
                </div>
                <div className=' h-full flex flex-row items-end justify-center'>
                    <a onClick={()=>handleOptionClick('newreleases')} className={`${selectedOption.newreleases ? mainOptionStyle:unActiveOptionStyle } font-mainFont`}>New Releases</a>
                </div>
                <div className=' h-full flex flex-row items-end justify-center'>
                    <a onClick={()=>handleOptionClick('charts')} className={`${selectedOption.charts ? mainOptionStyle:unActiveOptionStyle} font-mainFont`}>Charts</a>
                </div>
            </div>
        </nav>
  )
}
