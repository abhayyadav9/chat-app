import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../../hooks/useSendMessage';

function MessageInput() {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form className='px-4 my-3 w-full' onSubmit={handleSubmit}>
      <div className='relative w-full'>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='border text-sm rounded-lg block w-full p-2.5 bg-black-500 border-gray-600 text-white'
          placeholder='Send a message'
        />

        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
