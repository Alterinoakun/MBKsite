import { useState } from 'react';

export default function ContactFormInteractive() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">Nama</label>
        <input type="text" id="name" name="name" className="w-full border rounded px-3 py-2" required value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">Email</label>
        <input type="email" id="email" name="email" className="w-full border rounded px-3 py-2" required value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 font-medium">Pesan</label>
        <textarea id="message" name="message" rows={4} className="w-full border rounded px-3 py-2" required value={form.message} onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Kirim Pesan</button>
      {submitted && <p className="text-green-600 mt-4">Terima kasih! Pesan Anda telah dikirim (simulasi).</p>}
    </form>
  );
}
