import React from 'react';

function Error() {
  return (
    <div class="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 font-[Inter]">
            
            <div class="py-16">
            <div class="text-center">
                <p class="text-sm font-semibold text-galleryButton uppercase tracking-wide">404 error</p>
                <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
                <p class="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                <div class="mt-6">
                <a href="/" class="text-base font-medium text-galleryButton hover:text-blue-400">Go back home<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
            </div>
        </main>
    </div>
  )
}

export default Error