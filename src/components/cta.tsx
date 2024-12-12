'use client'
import { FC } from "react";
import { toast } from "react-toastify";

const Cta:FC = () => {

	const sendMessages = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = "7720240514:AAGrjbH-GuMcDwa02lEk9yAujSfdgRjLN_I";
        const chat_id =  1768611600;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
		
        

		if (!name|| !email) {
            toast.error("Please fill out all fields.");
            return;
        }
		const nameInput = name.value;
        const emailInput = email.value;
        

		const MessageFull = `Ismi: ${nameInput} \nEmaili: ${emailInput}`
        
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
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
				<div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
					<h1 className='title-font font-medium text-3xl text-gray-900'>
					Discover authentic, eco-friendly products crafted with care
					</h1>
					<p className='leading-relaxed mt-4'>
					Step into a world of curated style and thoughtful craftsmanship. Our collection features ethically sourced, eco-conscious products designed for those who value quality and sustainability. From artisanal goods to trend-inspired staples, we bring you a handpicked selection that elevates everyday living.
					</p>
					<br />
					<p>
					Celebrate individuality with unique designs that resonate with your lifestyle. Whether you are searching for timeless pieces or innovative creations, our shop is your destination for finding something truly special. Embrace sustainable luxury and explore a vibrant mix of modern aesthetics and authentic charm
					</p>
				</div>
				<div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
					<h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
						Sign Up
					</h2>
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
					
					
					<button className='text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
						Submit
					</button>
					</form>
					<p className='text-xs text-gray-500 mt-3'>
						Literally you probably have not heard of them jean shorts.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Cta;