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

      <div className="sm:max-w-4xl flex flex-col items-center relative p-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Revolutionary way to answer questions</h1>

        <MainSectionSearch />

      </div>
    </section>
  );
}

function MainSectionSearch() {
  return (
    <form className="w-full flex flex-col sm:flex-row sm:justify-center">
      <div className="flex">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
              <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
              <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
              <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
              <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
          <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
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
