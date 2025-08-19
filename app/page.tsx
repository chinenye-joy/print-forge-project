import Image from "next/image";

export default function Home() {
  return (
    <section className="p-5 md:p-8 bg-white ">
      <div className="container mx-auto  max-w-6xl  flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/5 text-left">
          <h1 className="text-4xl md:text-5xl text-black font-bold">
            Discover what's possible with 3D printing
          </h1>
          <p className="text-s text-xl text-gray-600 mt-5">
            Join our community of creators and explore a vest liberty of
            user-submitted models.
          </p>
          <button className=" border-2 border-black bg-white text-black hover:bg-gray-950 hover:text-white py-2 mt-7 md:mt-12 px-3 transition duration-300 font-bold">
            Browse Models
          </button>
        </div>

        <div className="w-full md:w-3/5 mt-10 md:mt-0">
          <Image
            src="/frame 4.png"
            alt="3D Printing Hero Image"
            width={470}
            height={470}
            className="mx-auto mt-10 rounded-lg "
          />
        </div>
      </div>
    </section>
  );
}
