import React, { useEffect, useState } from 'react';
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => { // Fix function name here
      setLoading(true);

      try {
        const res = await fetch(`/api/messages/${selectedConversation?._id}`); // Fix property access here
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        setMessages(data);
      } catch (error) {
        console.error('Error:', error.message); // Log error to console
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages(); // Fix function name here
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages; // Export default instead of named export
