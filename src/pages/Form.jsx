import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SimpleForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Contact Form</h2>

            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Submit
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full"
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Success!</h2>
            <p className="text-gray-700 mb-4">Your form was submitted successfully.</p>
            <button
              onClick={handleClose}
              className="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
