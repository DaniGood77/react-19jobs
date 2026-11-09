import React from 'react'

const App = () => {
  return (
    <>
        <nav ClassName="bg-indigo-700 border-b border-indigo-500">
      <div ClassName="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div ClassName="flex h-20 items-center justify-between">
          <div
            ClassName="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >

            <a ClassName="flex flex-shrink-0 items-center mr-4" href="index.html">
              <img
                ClassName="h-10 w-auto"
                src="images/logo.png"
                alt="React Jobs"
              />
              <span ClassName="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </a>
            <div ClassName="md:ml-auto">
              <div ClassName="flex space-x-2">
                <a
                  href="index.html"
                  ClassName="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</a
                >
                <a
                  href="jobs.html"
                  ClassName="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</a
                >
                <a
                  href="add-job.html"
                  ClassName="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>


    <section ClassName="bg-indigo-700 py-20 mb-4">
      <div
        ClassName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div ClassName="text-center">
          <h1
            ClassName="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Become a React Dev
          </h1>
          <p ClassName="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>


    <section ClassName="py-4">
      <div ClassName="container-xl lg:container m-auto">
        <div ClassName="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div ClassName="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 ClassName="text-2xl font-bold">For Developers</h2>
            <p ClassName="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <a
              href="jobs.html"
              ClassName="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </a>
          </div>
          <div ClassName="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 ClassName="text-2xl font-bold">For Employers</h2>
            <p ClassName="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="add-job.html"
              ClassName="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </a>
          </div>
        </div>
      </div>
    </section>


    <section ClassName="bg-blue-50 px-4 py-10">
      <div ClassName="container-xl lg:container m-auto">
        <h2 ClassName="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div ClassName="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div ClassName="bg-white rounded-xl shadow-md relative">
            <div ClassName="p-4">
              <div ClassName="mb-6">
                <div ClassName="text-gray-600 my-2">Full-Time</div>
                <h3 ClassName="text-xl font-bold">Senior React Developer</h3>
              </div>

              <div ClassName="mb-5">
               We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
              </div>

              <h3 ClassName="text-indigo-500 mb-2">$70 - $80K / Year</h3>

              <div ClassName="border border-gray-100 mb-5"></div>

              <div ClassName="flex flex-col lg:flex-row justify-between mb-4">
                <div ClassName="text-orange-700 mb-3">
                  <i ClassName="fa-solid fa-location-dot text-lg"></i>
                  Boston, MA
                </div>
                <a
                  href="job.html"
                  ClassName="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>

          <div ClassName="bg-white rounded-xl shadow-md relative">
            <div ClassName="p-4">
              <div ClassName="mb-6">
                <div ClassName="text-gray-600 my-2">Remote</div>
                <h3 ClassName="text-xl font-bold">Front-End Engineer (React)</h3>
              </div>

              <div ClassName="mb-5">
               Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
              </div>

              <h3 ClassName="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div ClassName="border border-gray-100 mb-5"></div>

              <div ClassName="flex flex-col lg:flex-row justify-between mb-4">
                <div ClassName="text-orange-700 mb-3">
                  <i ClassName="fa-solid fa-location-dot text-lg"></i>
                  Miami, FL
                </div>
                <a
                  href="job.html"
                  ClassName="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>

          <div ClassName="bg-white rounded-xl shadow-md relative">
            <div ClassName="p-4">
              <div ClassName="mb-6">
                <div ClassName="text-gray-600 my-2">Remote</div>
                <h3 ClassName="text-xl font-bold">React.js Developer</h3>
              </div>

              <div ClassName="mb-5">
                Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
              </div>

              <h3 ClassName="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div ClassName="border border-gray-100 mb-5"></div>

              <div ClassName="flex flex-col lg:flex-row justify-between mb-4">
                <div ClassName="text-orange-700 mb-3">
                  <i ClassName="fa-solid fa-location-dot text-lg"></i>
                  Brooklyn, NY
                </div>
                <a
                  href="job.html"
                  ClassName="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section ClassName="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        ClassName="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>

    </>
  )
}

export default App