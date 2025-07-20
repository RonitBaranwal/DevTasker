import React from 'react'

const GithubCard = ({data,valueFor}) => {
  return (
      <div className='bg-gray-100 dark:bg-gray-700 rounded-md p-4'>
          <div className='text-lg font-semibold'>{data}</div>
          <div className='text-sm text-gray-600 dark:text-gray-300'>{valueFor}</div>
      </div>
  );
}

export default GithubCard