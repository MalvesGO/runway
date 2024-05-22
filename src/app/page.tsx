import Image from "next/image";
import RunWay from "./components/RunWay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-black">
      <div className="">
        <Image
          className=""
          src="/urso.png"
          alt="Next.js Logo"
          width={480}
          height={50}
          priority
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-7xl text-orange-200 font-bold text-center p-8">
          Hello, Boss
        </h1>
        <span className="text-white text-2xl font-normal text-center mb-4">
          Could you kindly give me a raise, please???
        </span>
        <br />
        <RunWay />
      </div>
    </main>
  );
}
