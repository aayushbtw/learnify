// import Image from "next/image";
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";

import { BookOpenText, Ambulance, BookKey, School } from "lucide-react";
export default function Home() {
  return (
    <>
      <section className="grid gap-4 p-6 bg-default-100 w-full rounded-lg">
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="lg:order-last">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full "
              height="310"
              src="/header.jpeg"
              width="550"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Engagement</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Learn through interactive exercises and quizzes that make
                    learning fun.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Convenience</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access your courses on any device. Learn at your own pace,
                    on your own schedule.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Quality</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Learn from top instructors and experts in their fields. Gain
                    knowledge that&apos;s practical and valuable.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-4 p-6 bg-default-100 w-full rounded-lg ">
        <div className="space-y-2">
          <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            Learn anything. Anywhere. Anytime.
          </h1>
          <p className="mx-auto max-w-5xl md:text-xl">
            Where knowledge meets innovation. Enrich your mind and expand your
            horizons.
          </p>
        </div>
      </section>

      <section className="grid gap-4 py-6 w-full">
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <BookOpenText size={64} className="mx-auto" />
            <h1 className="font-semibold mt-1">Courses</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Explore our diverse curriculum
            </p>
          </div>
          <div className="text-center">
            <Ambulance size={64} className="mx-auto" />
            <h1 className="font-semibold mt-1">Resources</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Access additional learning materials
            </p>
          </div>
          <div className="text-center">
            <BookKey size={64} className="mx-auto" />
            <h1 className="font-semibold mt-1">Access to E-Books</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A library of digital books on a wide range of subjects.
            </p>
          </div>
          <div className="text-center">
            <School size={64} className="mx-auto" />
            <h1 className="font-semibold mt-1">Online Exams</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Explore our diverse curriculum
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
