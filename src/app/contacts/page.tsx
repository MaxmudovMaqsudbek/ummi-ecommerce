'use client'
import { FC } from "react";
import { toast } from "react-toastify";

const ContactsPage:FC= () => {

	const sendMessages = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = "7720240514:AAGrjbH-GuMcDwa02lEk9yAujSfdgRjLN_I";
        const chat_id =  1768611600;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
		const message = document.getElementById('message') as HTMLTextAreaElement;
        

		if (!name|| !email|| !message) {
            toast.error("Please fill out all fields.");
            return;
        }
		const nameInput = name.value;
        const emailInput = email.value;
        const messageInput = message.value;

		const MessageFull = `Ismi: ${nameInput} \nEmaili: ${emailInput} \nMessage: ${messageInput}`
        
		try {
            const response = await fetch(url, {
				method: 'POST', // Specify the HTTP method
				headers: {
					'Content-Type': 'application/json', // Set the content type to JSON
				},
				body: JSON.stringify({
					chat_id: chat_id, // Data to send in the request body
					text: MessageFull,
				}),
            });

            // Reset the form if the response is successful
            if (response.status === 200) {
                // Safely reset the form
            const form = document.getElementById("myForm") as HTMLFormElement | null;
            form?.reset();

            toast.success("Message sent successfully!");
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("An error occurred. Please try again.");
        }
    };
    


	return (
		<section className='text-gray-600 body-font relative'>
			<div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
				<div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11985.486427716061!2d69.1964984!3d41.3225321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20b0ed7791%3A0xbda158d85cc7b797!2sUmmiy%20Boutique!5e0!3m2!1sru!2s!4v1733168746691!5m2!1sru!2s" 
                width="100%" 
                height="100%" 
                className='absolute inset-0'
                style={{border:0, filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} 
                allowFullScreen loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
						
					<div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
						<div className='lg:w-1/2 px-6'>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
								ADDRESS
							</h2>
							<p className='mt-1'>
								You can come easily with map, if you need help, please do not hesitate to contact us!
							</p>
						</div>
						<div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
								EMAIL
							</h2>
							<a className='text-indigo-500 leading-relaxed'>
								example@gmail.com
							</a>
							<h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
								PHONE
							</h2>
							<p className='leading-relaxed'>+998-97-123-45-67</p>
						</div>
					</div>
				</div>
				<div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
					<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
						Feedback
					</h2>
					<p className='leading-relaxed mb-5 text-gray-600'>
                    Please share your feedback with us: we truly value your thoughts and suggestions.
					</p>
					<form
					id='myForm' 
					onSubmit={sendMessages}
					action="methof">
					<div className='relative mb-4'>
						<label
							htmlFor='name'
							className='leading-7 text-sm text-gray-600'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							required
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='email'
							className='leading-7 text-sm text-gray-600'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-sm text-gray-600'
						>
							Message
						</label>
						<textarea
						    required
							id='message'
							name='message'
							className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
						></textarea>
					</div>
					<button className='text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
						Submit
					</button>
					</form>
					<p className='text-xs text-gray-500 mt-3'>
						Chicharrones blog helvetica normcore iceland tousled brook
						viral artisan.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ContactsPage;