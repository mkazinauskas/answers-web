export default function Home() {
  return (
    <>
      <MainSection />
      <Categories />
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

function Categories() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Most popular categories this week</h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Explore answers by categories from below. Plase keep in mind these are just several availale categories in our system.</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Cloud</h3>
              <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Speed</h3>
              <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6">
            <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Dark Mode</h3>
              <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
