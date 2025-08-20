import React from 'react'
import { FaClock } from 'react-icons/fa6'

const ExperienceJourney = () => {
  return (
    <div className='h-screen bg-pink-700 text-white'>
                        <div className="flex items-center justify-center min-h-screen px-4">
                            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
                                {/* Icon with bounce animation */}
                                <div className="flex items-center justify-center mb-6 animate-bounce">
                                    <FaClock className='text-pink-700' size={30} />
                                </div>
        
        
                                {/* Title */}
                                <h1 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                                    Experience Journey
                                </h1>
                                <h1 className="text-1xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                                    Page Under Construction
                                </h1>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    We’re building something awesome. Please check back soon!
                                </p>
        
        
                                {/* Progress Bar Animation */}
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden mb-4">
                                    <div className="bg-pink-700 h-2 w-1/2 animate-ping"></div>
                                </div>
        
        
                                <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
                                    Work in progress…
                                </p>
                            </div>
                        </div>
                    </div>
  )
}

export default ExperienceJourney