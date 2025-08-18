import Image from "next/image";

export default function Home() {
  return (
    <section className=" flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl text-black font-bold text-center md:text-left">Discover what's possible with 3D printing</h1>
        <p className="text-lg text-gray-700 mt-5">
          Join our community of creators and explore a vest liberty of
          use-submitted models
        </p>
        <button className=" border-2 border-black bg-white text-black py-2 mt-5 px-3 font-bold">Explore Models</button>
      </div>

      <div className="">
        <Image
          src="/frame 4.png"
          alt="3D Printing Hero Image"
          width={800}
          height={600}
          className="mx-auto mt-10 rounded-lg "
        />
      </div>
    </section>
  );
}
