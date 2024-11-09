export default function HeroSection() {
    return (
      <section className="flex items-center justify-between max-w-screen-xl mx-auto py-16 px-8">
        <div className="w-1/2 text-left space-y-4">
          <h2 className="text-4xl font-bold">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
          <p className="text-lg">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] text-white py-2 px-4 rounded hover:bg-opacity-90">
            Explore Now
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src="images/jewelery.png" 
            alt="jewelry"
            className="rounded-lg w-[300px] h-auto object-cover"
          />
        </div>
      </section>
    );
  }
  