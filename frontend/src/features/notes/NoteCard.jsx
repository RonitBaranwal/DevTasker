const NoteCard = ({ title, content ,dispatch,id}) => {
    return (
        <div className='bg-white dark:bg-gray-800 p-4 rounded-md shadow-md flex flex-col justify-between h-full mx-20 my-10'>
            <div>
                <h3 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'>
                    {title}
                </h3>
                <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {content}
                </p>
            </div>
            <div className='text-right mt-4'>
                <button className='text-red-500 text-sm hover:text-red-600' onClick={()=>dispatch({type:"DELETE",payload:id})}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteCard;
