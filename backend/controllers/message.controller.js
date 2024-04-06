import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // Corrected typo in req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });
        conversation.messages.push(newMessage._id);


        //Socket io Functionality  here


        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(200).json(newMessage); // Changed status code to 200 for successful response
    } catch (error) {
        console.error("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};



export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages"); // Fix missing quotes around "messages" to reference the field correctly
        
        if (!conversation) {
            return res.status(404).json({ error: "Conversation not found" });
        }

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.error("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
