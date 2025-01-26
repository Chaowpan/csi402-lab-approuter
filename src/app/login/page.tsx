"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("กรุณาลงทะเบียนก่อนเข้าสู่ระบบ");
      router.push("/register");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">เข้าสู่ระบบ</h1>
      <p>กรุณาใส่ข้อมูลเพื่อเข้าสู่ระบบ</p>
      {/* Form Login */}
      <form className="mt-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
