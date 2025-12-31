import React from "react";
import Navbar from "@/components/Navbar";

export default function Hackathon() {
  const posterSrc = "/assets/balance-bytes-poster.png"; // put the attached poster here
  const registrationUrl = "https://forms.gle/SjaEh5GNJdVQ4tXs7";
  const qrSrc = "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" + encodeURIComponent(registrationUrl);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700">BALANCE-BYTES</h1>
          <p className="mt-2 text-gray-700">
            🌟 The Gender Equality Club of Kongu Engineering College proudly presents BALANCE-BYTES 🌟
          </p>
        </header>

        {/* Content */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Poster column */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={posterSrc}
                alt="Balance-Bytes Poster"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-md font-semibold shadow"
              >
                Register Now
              </a>

              <a
                href={posterSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700"
              >
                View Poster
              </a>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>🔔 Register Soon! (Scan the QR from the poster)</p>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg shadow flex items-center gap-4">
              <img src={qrSrc} alt="QR code" className="w-36 h-36 bg-white p-1 rounded-sm" />
              <div className="text-sm text-gray-700">
                <p className="font-semibold">Scan to Register</p>
                <p className="mt-1">Or click the Register Now button</p>
              </div>
            </div>
          </div>

          {/* Details column */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-gray-800 space-y-4 leading-relaxed">
              <p>💻⚙️ Get ready for an intense 7-hour hackathon that brings together innovation, technology, and equality under one roof!</p>

              <p>🚀 Balance-Bytes is a platform to showcase your problem-solving skills through software and hardware solutions, while creating tech that promotes balance and inclusion.</p>

              <h3 className="text-lg font-semibold mt-2">Event Highlights</h3>
              <p>🧑‍💻Domains</p>
              <ul className="list-disc list-inside ml-4">
                <li>Software</li>
                <li>Hardware</li>
              </ul>

              <p>📌 Four problem statements will be provided for each domain</p>

              <h4 className="font-semibold">🏆 What’s in it for you?</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Certificates for all participants</li>
                <li>Certificates for winners</li>
                <li>Opportunity to showcase your talent in your chosen domain</li>
              </ul>

              <p>❗Click the below link to register</p>
              <p>
                <a
                  href={registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-block bg-gray-100 px-3 py-1 rounded-md"
                >
                  {registrationUrl}
                </a>
              </p>

              <p>Exciting cash prices for winners 🏆</p>

              <p>
                <strong>📅 Date:</strong> January 03, 2026<br />
                <strong>⏰ Time:</strong> 8:45 AM – 4:45 PM<br />
                <strong>📍 Venue:</strong> CC12 (Admin Block)
              </p>

              <p>🔔 Register Soon! (Scan the QR from the poster)</p>

              <div className="mt-4">
                <h4 className="font-semibold">📞 For Queries:</h4>
                <ul className="list-inside ml-4">
                  <li>Harinee – 7418870969</li>
                  <li>Dheepisha – 63698 39957</li>
                  <li>Dharanidharan – 99940 35718</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-700 text-white px-4 py-2 rounded-md font-semibold"
              >
                Register Now
              </a>
              <a
                href={posterSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-300 px-4 py-2 rounded-md text-gray-700"
              >
                Download Poster
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
