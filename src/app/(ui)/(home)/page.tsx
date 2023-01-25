import CategoriesComponent from "./categories-component";

export default function Home() {
  return (
    <>
      <MainSection />
      <CategoriesComponent />
      <FrequentlyAskedQuestions />
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

        <MainSectionSearch />

      </div>
    </section>
  );
}

function MainSectionSearch() {
  return (
      <form className="w-full">
        <label htmlFor="default-search" className="mb-2 md:text-lg text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 md:text-lg text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ask any question you want..." required />
          <button type="submit" className="text-white absolute right-2.5 md:bottom-3.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Frequently asked questions</h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
          <div>
            <h3 className="text-indigo-500 text-lg md:text-xl font-semibold mb-2">How does the product work?</h3>
            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
          </div>

          <div>
            <h3 className="text-indigo-500 text-lg md:text-xl font-semibold mb-2">What are the features?</h3>
            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
          </div>

          <div>
            <h3 className="text-indigo-500 text-lg md:text-xl font-semibold mb-2">What about integrations?</h3>
            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
          </div>

          <div>
            <h3 className="text-indigo-500 text-lg md:text-xl font-semibold mb-2">Is support available?</h3>
            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
          </div>

          <div>
            <h3 className="text-indigo-500 text-lg md:text-xl font-semibold mb-2">How does one upgrage a plan?</h3>
            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
          </div>

          <div>
            <h3 className="text-indigo-500 text-lg md:text-xl font-semibold mb-2">Which payment methods are available?</h3>
            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
