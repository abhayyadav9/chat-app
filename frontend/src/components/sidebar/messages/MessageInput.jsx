import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../../hooks/useSendMessage';

function MessageInput() {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage(); // Change to 'sendMessage'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Use trim() to remove whitespace and check for empty string
    await sendMessage(message); // Change to 'sendMessage'
    setMessage('');
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          value={message} // Bind input value to message state
          onChange={(e) => setMessage(e.target.value)} // Update message state on input change
          className='border text-sm rounded-lg block w-full p-2.5 bg-black-500 border-gray-600 text-white'
          placeholder='send a message'
        />

        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
