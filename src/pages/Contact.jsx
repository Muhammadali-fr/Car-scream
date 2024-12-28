import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for toast notifications
import '../components/styles.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const botToken = '7166400728:AAENydLWNB8DEtbhVjT9X3QJj3NOxtNnNM4';
        const chatId = '5724981036';

        const messageText = `New Racer's message:
        Name: ${name}
        Email: ${email}
        Message: ${message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                body: JSON.stringify({
                    chat_id: chatId,
                    text: messageText,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (data.ok) {
                toast.success('Message sent successfully!');
            } else {
                toast.error('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred.');
        }

        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact min-h-screen bg-gray-900 text-white flex justify-center items-center md:w-5/6 ml-auto">
            <div className="backdrop-blur border border-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl text-center mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-semibold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 bg-white border border-gray-600 rounded-md text-black"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 bg-white border border-gray-600 rounded-md text-black"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-semibold mb-2">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full p-3 bg-white border border-gray-600 rounded-md text-black"
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-white hover:bg-gray-300 text-black font-semibold rounded-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Toast container */}
            <ToastContainer />
        </div>
    );
};

export default Contact;
