import React from 'react'

const StatCard = ({title,value,icon}) => {
  return (
      <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 flex items-center justify-between'>
          <div>
              <div className='text-gray-500 dark:text-gray-400 text-sm uppercase'>
                  {title}
              </div>
              <div className='text-2xl font-bold text-gray-800 dark:text-white'>
                  {value}
              </div>
          </div>
          <div className='text-3xl'>{icon}</div>
      </div>
  );
}

export default StatCard;