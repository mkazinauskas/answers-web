export default function Home() {
  return (
    <>
      Asking a question
    </>
  )
}

function MainSection() {
  return (
    <section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
      <img src={"/home/random/section" + Math.floor(Math.random() * 5) + ".jpeg"} loading="lazy" alt="Answers section main photo" className="w-full h-full object-cover object-center absolute inset-0" />
      <div className="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>

      <div className="sm:max-w-full flex flex-col items-center relative p-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Revolutionary way to answer questions</h1>
      </div>
    </section>
  );
}