import React from 'react'

function DownloandAds() {
    return (
        <div className="btn-download flex items-center]">
            <button type="button" class="text-gray-900 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center">
                <ion-icon name="logo-apple"></ion-icon>
                <span className='mx-[.5rem]'>Download</span>
            </button>
            <button type="button" class="text-gray-900 bg-gradient-git add README.mdto-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center">
                <ion-icon name="logo-google-playstore"></ion-icon>
                <span className='mx-[.5rem]'>Download</span>
            </button>

        </div>



    )
}

export default DownloandAds