"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("กรุณาลงทะเบียนก่อนเข้าสู่ระบบ");
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">ระบบตรวจสอบผู้ใช้งาน</h1>
      <p className="mb-4 text-gray-600">
        กรุณาเข้าสู่ระบบหรือลงทะเบียนเพื่อเข้าถึงฟังก์ชันการทำงานของระบบ
      </p>
      <div className="space-x-4">
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={handleRegister}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Register
        </button>
      </div>
    </div>
  );
}
