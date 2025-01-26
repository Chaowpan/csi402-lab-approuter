"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

export default function Register() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");


  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !userId) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }


    const expiry = dayjs().add(30, "minute").toISOString();
    localStorage.setItem("temporary_access", expiry);


    localStorage.setItem("user", JSON.stringify({ firstName, lastName, userId }));

    alert("ลงทะเบียนสำเร็จ! คุณสามารถใช้สิทธิ์การใช้งานชั่วคราวได้ 30 นาที");

    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">ลงทะเบียน</h1>
      <form onSubmit={handleRegister} className="w-1/3">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-left mb-1">
            ชื่อ
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border p-2 w-full"
            placeholder="กรอกชื่อ"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-left mb-1">
            นามสกุล
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border p-2 w-full"
            placeholder="กรอกนามสกุล"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userId" className="block text-left mb-1">
            รหัส
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border p-2 w-full"
            placeholder="กรอกรหัส"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full"
        >
          ลงทะเบียนเพื่อใช้งานชั่วคราว
        </button>
      </form>
    </div>
  );
}
