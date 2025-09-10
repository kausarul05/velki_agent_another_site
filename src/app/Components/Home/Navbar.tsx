import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import logo from "@/../public/download2.png"

interface NavbarProps {
  setSearchAgentId: (id: string) => void;
}

export default function Navbar({ setSearchAgentId }: NavbarProps) {
  const [inputId, setInputId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Prevent page reload
    setSearchAgentId(inputId.trim());  // Send trimmed input to parent
  };

  const messages = [
    "💥 নতুন একাউন্ট খুলতে আমাদের নিজের WhatsApp নাম্বার মেসেজ করুন... ⬇️",
    "📢 যেকোনো সমস্যায় কাস্টমার সার্ভিস এর সাথে যোগাযোগ করুন",
  ];

  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animation: number;
    let position = window.innerWidth; // শুরু হবে ডান দিক থেকে
    const speed = 2; // স্ক্রল স্পিড (px per frame)

    const step = () => {
      if (el) {
        position -= speed;
        el.style.transform = `translateX(${position}px)`;

        if (position < -el.scrollWidth) {
          // একবার পুরো স্ক্রল শেষ হলে
          position = window.innerWidth;
          setCurrent((prev) => (prev + 1) % messages.length); // পরের মেসেজ
        }
      }
      animation = requestAnimationFrame(step);
    };

    step();

    return () => cancelAnimationFrame(animation);
  }, [current]);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-start py-10 pt-2 pb-0 px-4">
      {/* Header */}
      <div className="w-full flex flex-row items-center justify-between shadow">
        <div>
          <Image
            src={logo}
            alt="Velki Logo"
            width={250}
            height={250}
            className='mb-4 object-fill lg:h-14 lg:w-full w-48'
            priority={true}
          />
          {/* <h1 className='text-3xl text-black font-bold'>Velki</h1> */}
        </div>
        <div className="w-full text-right lg:text-xl text-sm pb-2 text-red-700 font-semibold">
          <a
            href={`https://wa.me/+15064058213`}
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 text-white px-4 py-2 rounded-full inline-block'
          >
            কাস্টমার সার্ভিস
          </a>
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 text-white border-b-2 border-orange-600 mb-5">
        <div
          ref={scrollRef}
          className="whitespace-nowrap text-white font-semibold flex items-center gap-2 py-2 px-4"
          style={{ willChange: "transform" }}
        >
          {messages[current]}
        </div>
      </div>

      {/* Agent Form Card */}
      <div className="bg-white text-black shadow-lg rounded-lg p-8 pt-4 w-full max-w-md">
        <h2 className="text-center text-lg font-semibold mb-6">
          এজেন্ট এর আইডি নম্বর দিয়ে খুঁজুন:
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="agentType" className="block mb-1 font-medium">
              Agent Type:
            </label>
            <select
              id="agentType"
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>মাস্টার এজেন্ট</option>
              <option>সাব এজেন্ট</option>
            </select>
          </div>
          <div>
            <label htmlFor="agentId" className="block mb-1 font-medium">
              Agent ID:
            </label>
            <input
              type="text"
              id="agentId"
              value={inputId}
              onChange={(e) => {
                setSearchAgentId(e.target.value)
                setInputId(e.target.value)
              }}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="এজেন্ট আইডি দিন"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 text-white py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
