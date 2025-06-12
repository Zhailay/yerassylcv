"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen,setIsopen] = useState(false);

  return (
    <div className="w-full h-full overflow-y-scroll overflow-x-hidden bg-zinc-800">
      <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] mx-auto relative md:px-0 px-4 md:my-10 bg-[#111111] rounded-xl overflow-hidden">
        <nav className="bg-[#111111] shadow-lg w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="#" className="lg:text-xl md:text-lg text-sm font-bold text-gray-700 gap-1">
                  <span className="px-1 mr-1 bg-yellow-300">Y</span>
                  <span className="px-1 mr-1 bg-yellow-300">E</span>
                  <span className="px-1 mr-1 bg-yellow-300">R</span>
                  <span className="px-1 mr-1 bg-yellow-300">S</span>
                  <span className="px-1 mr-1 bg-yellow-300">S</span>
                  <span className="px-1 mr-1 bg-yellow-300">Y</span>
                  <span className="px-1 mr-1 bg-yellow-300">L</span>
                </a>
              </div>

              <div className="hidden lg:flex space-x-8">
                <a href="#about" className="text-yellow-300 hover:text-yellow-300">О себе</a>
                <a href="#skills" className="text-gray-400 hover:text-yellow-300">Навыки</a>
                <a href="#experience" className="text-gray-400 hover:text-yellow-300">Опыт работы</a>
                <a href="#projects" className="text-gray-400 hover:text-yellow-300">Проекты</a>
                <a href="#hobby" className="text-gray-400 hover:text-yellow-300">Хобби</a>
              </div>

              <div className="lg:hidden flex items-center">
                <button onClick={() => setIsopen(!isOpen)} id="mobile-menu-button" className="text-yellow-300 hover:text-yellow-500 focus:outline-none cursor-pointer">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                </button>
              </div>
            </div>
          </div>

        <div id="mobile-menu" className={`absolute inset-0 bg-[#111111] bg-opacity-30 z-50 ${isOpen ? "" : "hidden"}`}>
          <div className="fixed inset-y-0 left-0 bg-[#111111] w-64 p-6">
              <button onClick={() => setIsopen(!isOpen)} id="close-menu-button" className="text-yellow-400 hover:text-yellow-600 focus:outline-none mb-4">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="space-y-4">
              <a href="#about" onClick={() => setIsopen(!isOpen)} className="block text-yellow-400 hover:text-yellow-400">О себе</a>
              <a href="#skills" onClick={() => setIsopen(!isOpen)} className="block text-gray-400 hover:text-yellow-400">Навыки</a>
              <a href="#experience" onClick={() => setIsopen(!isOpen)} className="block text-gray-400 hover:text-yellow-400">Опыт работы</a>
              <a href="#projects" onClick={() => setIsopen(!isOpen)} className="block text-gray-400 hover:text-yellow-400">Проекты</a>
              <a href="#hobby" onClick={() => setIsopen(!isOpen)} className="block text-gray-400 hover:text-yellow-400">Хобби</a>
            </nav>
          </div>
        </div>
        </nav>

        <div className="w-full h-full flex flex-col items-center">

          <section className="w-full relative flex items-center flex-col lg:flex-row" id="about">
            <Image className="lg:w-1/2" width={500} height={500} src="/yerassyl.png" alt="portraite" />

            <div
              className="lg:absolute lg:left-[40%] md:left-[30%] lg:w-[55%] lg:p-12 sm:p-6 p-4 flex flex-col justify-center bg-[#222222]">
              <p className="text-gray-400 text-sm mb-1">FullStack Developer</p>
              <h2 className="text-white md:text-5xl text-2xl font-bold mb-4">Жайлау Ерасыл</h2>
              <p className="text-gray-400 text-md mb-6">
                Я опытный Full-Stack разработчик с 5-ти летним стажем. Владею современными технологиями и фреймворками веб-разработки. Стремлюсь быть в курсе последних тенденций и достижений в области web-работки. Ищу роль, где я мог бы использовать свои навыки для обеспечения успеха интересных и сложных проектов.
              </p>

              <div>
                <a href="https://wa.me/+77072030498" className="md:px-6 px-4 py-2 text-white font-semibold  outline outline-yellow-300 rounded-full hover:bg-yellow-500 ease-in duration-300 cursor-pointer">Whatsapp</a>
              </div>
            </div>
          </section>

          <section className="md:pt-20 pt-10 md:px-20 px-2" id="skills">

            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white pb-2">Навыки</h2>
              <div className="border-[1px] border-white overflow-hidden">
                <hr className="border-[3px] border-yellow-300 w-[20%]" />
              </div>
            </div>

            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 gap-y-16 mt-8">
              <div className="flex sm:gap-4 gap-1">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white">Frameworks / Libraries</h3>
                  <div className="flex flex-wrap gap-10 mt-5 mb-5">
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/next.png" width={40} height={40}  alt="next logo"/> Next</div>
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/react.png" width={40} height={40}  alt="react logo"/> React</div>
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/redux.png" width={40} height={40}  alt="redux logo"/> Redux</div>
                  </div>
                </div>
              </div>

              <div className="flex sm:gap-4 gap-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white">Backend & API</h3>
                  <div className="flex flex-wrap gap-10 mt-5 mb-5">
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/node.png" width={40} height={40}  alt="node logo"/> Node</div>
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/express.png" width={40} height={40}  alt="express logo"/> Express</div>
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/nest.png" width={40} height={40}  alt="nest logo"/> Nest</div>
                  </div>
                </div>
              </div>

              <div className="flex sm:gap-4 gap-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white">Databases & ORM</h3>
                  <div className="flex flex-wrap gap-10 mt-5 mb-5">
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/mssql.png" width={40} height={40}  alt="Mssql logo"/> Mssql</div>
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/mysql.png" width={40} height={40}  alt="MySql logo"/> MySql</div>
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/mongo.png" width={40} height={40}  alt="Mongo logo"/> Mongo</div>
                      <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/prisma.png" width={40} height={40}  alt="Prisma logo"/> Prisma</div>
                  </div>
                </div>
              </div>

              <div className="flex sm:gap-4 gap-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white">CSS Lib's</h3>
                  <div className="flex flex-wrap gap-10 mt-5 mb-5">
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/shadcn.png" width={40} height={40} alt="shadcn logo" /> Shadcn</div>
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/tailwind.png" width={40} height={40} alt="tailwind logo" /> Tailwind</div>
                    <div className="flex items-center gap-3 text-sm/6 font-semibold text-white">
                      <Image className="bg-white p-2 rounded-full" src="/bootstrap.png" width={40} height={40} alt="bootstrap logo" /> Bootstrap</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="md:pt-20 pt-10 md:px-20 px-2" id="experience">

            <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-2">
              <div id="work">
                <div className="w-fit sm:mb-20 mb-10">
                  <h2 className="text-2xl font-bold text-white pb-2">Опыт работы</h2>
                  <div className="border-[1px] border-white overflow-hidden">
                    <hr className="border-[3px] border-yellow-300 w-[40%]" />
                  </div>
                </div>

                  <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                        <svg className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">TOO Luna8 <span className="bg-yellow-100 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300 ms-3">Последняя</span></h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Работаю с 08.2024</time>
                      <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-200">
                        "Разработка кадрового документооборота" <br />
                        "Разработка личных кабинетов кадровика, сотрудника" <br />
                        "Автоматизация процессов: прием; уволнение; перемещение; отпуска;"</p>

                    </li>
                    <li className="mb-10 ms-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                        <svg className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Zhetysu University</h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Работаю с 09.2019 по 09.2024</time>
                      <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                        "Разработка платформы для университета" <br />
                        "Личный кабинет обучающихся\преподавателей" <br />
                        "Реализация системы управления успеваемостью" <br />
                        "Разработка системы тестирования" <br />
                      </p>
                    </li>
                    <li className="ms-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                        <svg className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Студентческие годы</h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Начиная с 2015 по 2019</time>
                      <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                        "Разработка сайтов на Wordpress" <br />
                        "Разработка собственной LMS платформы" <br />
                      </p>
                    </li>
                  </ol>
              
              </div>
              <div id="education">
                 <div className="w-fit sm:mb-20 mb-10">
                  <h2 className="text-2xl font-bold text-white pb-2">Образование</h2>
                  <div className="border-[1px] border-white overflow-hidden">
                    <hr className="border-[3px] border-blue-300 w-[40%]" />
                  </div>
                </div>
                  <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Zhetysu University <span className="bg-blue-100 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">Последняя</span></h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023-2025</time>
                      <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-200">
                        Магистр педагогических наук <br /> Информатика</p>

                    </li>
                    <li className="mb-10 ms-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Zhetysu State University</h3>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2015-2019</time>
                      <p className="text-base font-normal text-gray-300 dark:text-gray-400">
                        Бакалавр <br />
                        Информационные системы
                      </p>
                    </li>
                  </ol>
              </div>
            </div>
          </section>

          <section className="w-full sm:pt-20 pt-10 md:px-20 px-6" id="projects">

            <div className="w-fit sm:mb-20 mb-10">
              <h2 className="text-2xl font-bold text-white pb-2">Мои работы</h2>
              <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
                <hr className="border-[3px] border-yellow-300 w-[60%]" />
              </div>
            </div>

            <div className="w-full flex md:flex-nowrap flex-wrap gap-4 items-center justify-center">
             <div className="grid grid-cols-2 gap-2">
                <div>
                    <Image className="h-auto max-w-full" width={500} height={500} src="/kadrovik.jpg" alt="Кабинет кадровика" />
                </div>
                <div>
                    <Image className="h-auto max-w-full" width={500} height={500} src="/employee.jpg" alt="Кабинет сотрудника" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Image className="h-auto max-w-full" width={250} height={500} src="/joldau.jpg" alt="Мобильное приложение" />
                    <Image className="h-auto max-w-full" width={250} height={500} src="/joldau.jpg" alt="Мобильное приложение" />
                </div>
                <div>
                  <Image
                  className="h-auto max-w-full"
                  src="/fhd_landing.gif"
                  alt="Анимация"
                  width={500}
                  height={500}
                  unoptimized 
                />
                </div>
                
            </div>
            </div>
          </section>

          <section className="w-full sm:py-20 py-10 md:px-20 px-6" id="hobby">

            <div className="w-fit sm:mb-20 mb-10">
              <h2 className="text-2xl font-bold text-white pb-2">Хобби</h2>
              <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
                <hr className="border-[3px] border-yellow-300 w-[80%]" />
              </div>
            </div>

            <div className="w-full grid gap-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">

              <div
                className="flex flex-col gap-4 items-center justify-center border border-2 border-gray-400 p-6 rounded-lg text-gray-400">
                <h3 className="sm:text-xl text-md font-bold text-gray-200">Чтение технических блогов</h3>
                
              </div>

              <div
                className="flex flex-col gap-4 items-center justify-center border border-2 border-gray-400 p-6 rounded-lg text-gray-400">
                <h3 className="sm:text-xl text-md font-bold text-gray-200">Разработка пет-проектов</h3>
              </div>
              <div
                className="flex flex-col gap-4 items-center justify-center border border-2 border-gray-400 p-6 rounded-lg text-gray-400">
                <h3 className="sm:text-xl text-md font-bold text-gray-200">Настольный теннис</h3>
              </div>
              <div
                className="flex flex-col gap-4 items-center justify-center border border-2 border-gray-400 p-6 rounded-lg text-gray-400">
                <h3 className="sm:text-xl text-md  font-bold text-gray-200">Настольные игры</h3>
              </div>
            </div>
          </section>
          <footer className="w-full mt-10 border-t-2 pt-4 pb-8 border-gray-500">
            <div className="flex sm:flex-row flex-col sm:justify-between items-center md:px-20 px-4">
              <div className="flex gap-4 items-center sm:text-xl text-sm text-gray-500">
                <a href="mailto:dever.yerassyl@gmail.com" className="hover:text-yellow-300">dever.yerassyl@gmail.com</a>
                <a href="https://github.com/Zhailay" className="hover:text-yellow-300">GitHub</a>
                <a href="https://www.linkedin.com/in/yerassyl-zhailau-b17476363/" className="hover:text-yellow-300">Linkedin</a>
              </div>
              <div className="text-lg text-gray-400">2025 Жайлау Ерасыл</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
