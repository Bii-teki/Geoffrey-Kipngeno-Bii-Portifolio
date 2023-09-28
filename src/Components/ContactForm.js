import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    emailjs.sendForm('service_er317t1', 'template_04u1n8h', event.target, 'lV6V0FxzcCKPsYVAO')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Optionally reload the page after sending the email
        window.location.reload();
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
      });
  }
  return (
    <form className="max-w-md mx-auto bg-white p-8 mt-10 rounded shadow-md" onSubmit={handleFormSubmit}>
      <input type="hidden" name="contact_number" />
      <div className="mb-4">
        <label htmlFor="from_name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input type="text" id="from_name" name="from_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="from_email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" id="from_email" name="from_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
        <input type="text" id="subject" name="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-6">
        <label htmlFor="html_message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea id="html_message" name="html_message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
    </form>
  );
}

export default ContactUs;
