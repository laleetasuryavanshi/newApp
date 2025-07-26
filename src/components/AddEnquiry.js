import React, { useState } from 'react';
import axios from 'axios';

const AddEnquiry = () => {
    const [enquiry, setEnquiry] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEnquiry({ ...enquiry, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/enquiry', enquiry);
            alert('Enquiry submitted successfully!');
            setEnquiry({ name: '', email: '', message: '' });
        } catch (error) {
            alert('Error submitting enquiry: ' + error.message);
        }
    };

    return (
        <section id="enquiry">
            <h2>Add Enquiry</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={enquiry.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={enquiry.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={enquiry.message} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default AddEnquiry;
