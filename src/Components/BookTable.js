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
    message: '',
    preOrder: [],
  });

  const [totalBill, setTotalBill] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (event, itemName, itemPrice) => {
    const quantity = event.target.value !== '' ? parseInt(event.target.value, 10) : 0;
    const price = itemPrice * quantity;

    const updatedPreOrder = [...formData.preOrder];
    const index = updatedPreOrder.findIndex(item => item.name === itemName);

    if (index !== -1) {
      updatedPreOrder[index] = { name: itemName, price, quantity };
    } else {
      updatedPreOrder.push({ name: itemName, price, quantity });
    }

    const newTotalBill = updatedPreOrder.reduce((acc, item) => acc + item.price, 0);
    
    setFormData({ ...formData, preOrder: updatedPreOrder });
    setTotalBill(newTotalBill);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Logic for handling form submission
  };

  const preOrderItems = [
    { name: 'Andhra Royyala Vepudu', price: 559 },
    { name: 'Kozhi Varuval', price: 469 },
    { name: 'Meen Varuval', price: 499 },
    { name: 'Cauliflower 65', price: 399 },
    { name: 'Masala Dosa', price: 269 },
    { name: 'Idli', price: 199 },
    { name: 'Vada', price: 229 },
    { name: 'hyderabadi chicken dum biryani', price: 599 },
    { name: 'Thalassery Biryani', price: 579 },
    { name: 'Chettinad Biryani', price: 629 },
    { name: 'Vegetable Pulao', price: 485 },
    // ... other items
  ];

  return (
      <section id="book-a-table" className="book-a-table">
        <h4>Reservation</h4>
        <h2>Book Your table</h2>
        <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
        <div className="input-group">
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" />
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" />
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" />
        </div>
        <div className="input-group">
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} placeholder="Date" />
          <input type="time" name="time" value={formData.time} onChange={handleInputChange} placeholder="Time" />
          <input type="number" name="people" value={formData.people} onChange={handleInputChange} placeholder="No. of people" />
        </div>
        <div className="input-group">
          <input type="number" name="tableNumber" value={formData.tableNumber} onChange={handleInputChange} placeholder="Table number" />
        </div>

          <h3>Pre order</h3>
          <div className="table-responsive">
            <table className="table black-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price (₹)</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {preOrderItems.map(item => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={formData.preOrder.find(order => order.name === item.name)?.quantity || 0}
                        className="quantity-input form-control"
                        onChange={(e) => handleQuantityChange(e, item.name, item.price)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Total Bill</h3>
          <span id="total-bill">₹{totalBill.toFixed(2)}</span>

          <div className="text-area-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              placeholder="Message"
            />
          </div>

          <button type="submit">Book a Table</button>
        </form>
      </section>
  );
};

export default BookTable;
