'use client'
import React from 'react'
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music_courses.json";
import { Button } from './ui/moving-border';
import Link from 'next/link';

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
function FeaturedSection() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className='py-12 bg-gray-900 md:mt-56 2xl:px-96 lg:px-36'>
       <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8
                font-extrabold tracking-tight text-white sm:text-4xl'>Learn With The Best</p>
            </div>
       </div>
       <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {
                    featuredCourses.map((course:Course) => (
                       <div key={course.id} className='flex justify-center'>
                            <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900 flex flex-col overflow-hidden h-full">
                               <div
                               className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'
                               >
                                <p
                                className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'
                                >{course.title}</p>
                                <p
                                className='text-sm text-neutral-400 flex-grow'
                                >{course.description}</p>
                                <Link href={`/courses`} className='text-white'>
                                learn more
                                </Link>
                               </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
       </div>
       <div className='mt-20 text-center'>
            <Link href={"/courses"}>
            <Button
        borderRadius="1.7rem"
        className="bg-white dark:bg-white text-black dark:text-black border-neutral-200 border-4 dark:border-slate-800"
      >
       View All Courses
      </Button>
            </Link>
       </div>
    </div>
  )
}

export default FeaturedSection