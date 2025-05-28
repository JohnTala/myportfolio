import { useState } from 'react';

export default function Contact() {
  const [userDetails, setDetails] = useState(JSON.parse(localStorage.getItem('UserDetails')) || []);
  const [modal, setModal] = useState(false);
  const [newDetails, setNewDetails] = useState({
    id: 1,
    username: '',
    usersurname: '',
    useremail: '',
    usermessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDetails({ ...newDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = userDetails.length ? userDetails[userDetails.length - 1].id + 1 : 1;
    const myObj = { ...newDetails, id };
    const listDetails = [...userDetails, myObj];
    setDetails(listDetails);
    localStorage.setItem('UserDetails', JSON.stringify(listDetails));
    setModal(true);
    setTimeout(() => {
      window.location.replace('/contact');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Contact</h3>
        <form className="space-y-4 bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
            name="username"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Your Surname"
            className="w-full p-3 border border-gray-300 rounded"
            name="usersurname"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
            name="useremail"
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded"
            rows="5"
            name="usermessage"
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm"
            onClick={() => setModal(false)}
          ></div>
          <div className="z-10 bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center relative">
            <p className="text-lg mb-4">{newDetails.usermessage}</p>
            <p className="font-semibold">{newDetails.username} {newDetails.usersurname}</p>
            <p className="italic text-sm">{newDetails.useremail}</p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
