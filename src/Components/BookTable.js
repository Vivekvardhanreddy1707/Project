import React, { useState } from 'react';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    tableNumber: '',
    menu: '', // Add the menu field to the form data
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      people: '',
      tableNumber: '',
      menu: '',
      message: '',
    });
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <h4>Reservation</h4>
      <h2>Book Your table</h2>
      <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
            <div className="input-group">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" />
              <input type="tel" name="Phone" value={formData.email} onChange={handleInputChange} placeholder="Phone" />
            </div>
            <div className="input-group">
              <input type="Date" name="Date" value={formData.email} onChange={handleInputChange} placeholder="Date" />
              <input type="Time" name="Time" value={formData.email} onChange={handleInputChange} placeholder="Time" />
              <input type="number" name="Noof people" value={formData.email} onChange={handleInputChange} placeholder="No. of people" />
            </div>
            <div className="input-group">
              <input type="number" name="Table.no" value={formData.email} onChange={handleInputChange} placeholder="Table number" />
            </div>
            <div className="text-area-group">
              <textarea name="menu" value={formData.email} onChange={handleInputChange} rows="3" placeholder="Menu" />
              <textarea name="message" value={formData.email} onChange={handleInputChange} rows="5" placeholder="Message" />
            </div>
            <button type="submit">Book a Table</button>
          </form>
        </section>
      );
};

export default BookTable;
