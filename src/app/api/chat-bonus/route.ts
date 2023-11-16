import { NextRequest, NextResponse } from "next/server";

const scrape_website_definition = {
  name: 'scrape_website',
  description: 'Please scrape a website',
  parameters: {
    type: 'object',
    properties: {
      website: {
        type: 'string',
        description: 'Website URL',
      },
    },
    required: ['website'],
  },
};

const scrape_website = async ({website}: {website: string; }) => {
  console.log('>>> Third party scraping with:', {website});
  
  try {
    const response = await fetch(website);
    const parsed = await response.text();

    return {
      html: parsed,
    }
  } catch (e) {
    console.error('>>> Scraping error, using fallback:', e);
    // fallback
    return {
      html: `
      <html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="description" content="JSConf Colombia 2023">
      <meta name="viewport" content="width=device-width">
      <!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> -->
      <link rel="icon" href="/favicon.ico">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
      <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            rel="stylesheet">
      <title>JSConf Colombia 2023</title>
      <meta name="astro-view-transitions-enabled" content="true">
      <meta name="astro-view-transitions-fallback" content="animate">
      <link rel="stylesheet" href="/_astro/index.d6ae0b64.css">
      <script type="module" src="/_astro/hoisted.1a56ad47.js" data-astro-exec=""></script>
      <style type="text/css">
            @font-face {
                  font-weight: 400;
                  font-style: normal;
                  font-family: circular;

                  src: url('chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/fonts/CircularXXWeb-Book.woff2') format('woff2');
            }

            @font-face {
                  font-weight: 700;
                  font-style: normal;
                  font-family: circular;

                  src: url('chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/fonts/CircularXXWeb-Bold.woff2') format('woff2');
            }
      </style>
</head>

<body>
      <main class="relative">
            <nav class="fixed left-3 right-0 top-36 z-10 hidden w-44 lg:block">
                  <p
                        class="mb-3 rounded bg-white/50 text-center font-chakra font-semibold text-bluecol backdrop-opacity-50">
                        Menu
                  </p>
                  <ul class="rounded bg-white/50 py-5 backdrop-opacity-50">
                        <li class="mb-4"><a
                                    class="block w-full py-1 pl-7 font-chakra text-sm hover:bg-bluecol hover:text-cream"
                                    href="#schedule">Schedule</a></li>
                        <li class="mb-4"><a
                                    class="block w-full py-1 pl-7 font-chakra text-sm hover:bg-bluecol hover:text-cream"
                                    href="#speakers">Speakers</a></li>
                        <li class="mb-4"><a
                                    class="block w-full py-1 pl-7 font-chakra text-sm hover:bg-bluecol hover:text-cream"
                                    href="#venue">Venue</a></li>
                        <li class="mb-4"><a
                                    class="block w-full py-1 pl-7 font-chakra text-sm hover:bg-bluecol hover:text-cream"
                                    href="#sponsors">Sponsors</a></li>
                        <li><a class="block w-full py-1 pl-7 font-chakra text-sm hover:bg-bluecol hover:text-cream"
                                    href="#recommendations">Recommendations</a></li>
                  </ul>
            </nav>
            <div class="fixed z-50 w-full bg-yellowcol">
                  <p class="py-3 text-center font-chakra text-3xl">SOLD OUT</p>
            </div>
            <header class="flex items-end justify-between bg-bluecol px-7 py-5 pt-16">
                  <div class="md:w-5/12"><img src="/images/jsconfco-logo-white.svg" alt="JSConf Colombia 2023"></div>
                  <h1 class="sr-only">JSConf Colombia 2023</h1>
                  <div class="flex flex-col items-end justify-between md:w-7/12 md:flex-row">
                        <div class="text-right md:text-center">
                              <p class="font-chakra text-sm text-cream md:text-base">Medellín</p>
                              <p class="font-chakra text-sm text-cream md:text-base">November 17th &amp; 18th / 2023</p>
                        </div>
                        <div class="flex gap-3 text-center"><a href="https://twitter.com/jsconfco" target="_blank"
                                    rel="noreferrer"><span class="sr-only">JSconf Colombia Twitter</span><svg
                                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                          stroke-width="2" stroke="#f8eee0" fill="none" stroke-linecap="round"
                                          stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                    </svg></a><a href="https://www.instagram.com/jsconfco/" target="_blank"
                                    rel="noreferrer"><span class="sr-only">JSconf Colombia Instagram</span><svg
                                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                          fill="none" stroke="#f8eee0" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round">
                                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                    </svg></a><a href="https://www.linkedin.com/company/jsconf-colombia/"
                                    target="_blank" rel="noreferrer"><span class="sr-only">JSconf Colombia
                                          LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                          viewBox="0 0 24 24" fill="none" stroke="#f8eee0" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round">
                                          <path
                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                          </path>
                                          <rect width="4" height="12" x="2" y="9"></rect>
                                          <circle cx="4" cy="4" r="2"></circle>
                                    </svg></a></div>
                  </div>
            </header>
            <section class="relative bg-bluecol px-7 pb-5"><img src="/images/sello.svg" alt="logo"
                        class="absolute z-30 hidden md:w-24 lg:-top-20 lg:right-56 lg:block lg:w-48">
                  <div class="relative w-full rounded-lg bg-cream pt-4">
                        <div class="flex flex-col items-center justify-center gap-3 py-5">
                              <h2 class="font-source text-3xl font-semibold uppercase text-redcol">Hey Colombia!</h2>
                              <picture>
                                    <source srcset="/images/croquis-colombia-mobile.svg" media="(max-width: 768px)"><img
                                          src="/images/croquis-colombia-desktop.svg" alt="croquis colombia">
                              </picture>
                        </div>
                        <p
                              class="relative bottom-5 left-5 w-4/5 font-source text-base font-semibold text-bluecol lg:absolute lg:bottom-14 lg:left-20 lg:w-1/3 lg:text-2xl">
                              Bringing the Colombian JavaScript community under one roof.
                        </p><img src="/images/mapa-colombia.svg" alt="mapa colombia"
                              class="invisible absolute bottom-5 right-5 lg:visible">
                  </div>
            </section>
            <section class="flex flex-col gap-4 bg-floralWhite px-7 pb-8 pt-9" id="schedule">
                  <header class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <h2 class="font-chakra text-5xl font-semibold md:text-6xl">Schedule</h2>
                        <div class="contents w-3/5 justify-between lg:flex">
                              <p class="max-w-[22ch] font-chakra text-sm lg:text-base"><strong>Opening Event</strong>
                                    and Keynotes in Merged Auditorium.
                              </p>
                              <p class="hidden w-52 font-chakra text-base lg:block"><strong>Mixed</strong> Frontend and
                                    Backend <strong>Talks.</strong></p>
                        </div>
                  </header>
                  <div class="lg:ml-44">
                        <section class="flex flex-col gap-4 lg:flex-row lg:gap-6">
                              <section class="relative flex flex-col gap-4 lg:w-1/2 lg:pt-4"><img
                                          src="/images/banano-schedule-mobile.svg"
                                          class="absolute -left-7 top-0 lg:-left-6 lg:-top-4 lg:w-36"
                                          alt="banano colombia">
                                    <table
                                          class="w-full table-fixed border-collapse overflow-hidden rounded-t-xl bg-cream">
                                          <thead>
                                                <tr class="bg-bluecol">
                                                      <th colspan="2"
                                                            class="pb-4 pr-6 pt-5 text-right font-source text-base font-semibold text-white md:text-center lg:pb-9 lg:pt-10 lg:text-2xl">
                                                            Day 1 - November 17th</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-base font-semibold lg:py-4">
                                                            MERGED AUDITORIUM</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold">
                                                            7:00 - 9:00</td>
                                                </tr>
                                                <tr>
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Registration</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold">
                                                            9:00 - 9:20</td>
                                                </tr>
                                                <tr>
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Opening Event</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold">
                                                            9:25 - 9:50</td>
                                                </tr>
                                                <tr>
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Lies, Damn Lies, and Benchmarks - Rafael Gonzaga</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold">
                                                            9:55 - 10:20</td>
                                                </tr>
                                                <tr>
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Making Art with JavaScript and Garbage - Colleen Lavin</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold">
                                                            10:25 - 10:45</td>
                                                </tr>
                                                <tr>
                                                      <td colspan="2"
                                                            class="py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            BREAK</td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <table
                                          class="w-full table-fixed border-collapse overflow-hidden rounded-t-xl bg-cream">
                                          <thead>
                                                <tr>
                                                      <th
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 font-source text-base font-semibold lg:py-4">
                                                            MAIN AUDITORIUM</th>
                                                      <th class="px-2 py-2 font-source text-base font-semibold lg:py-4">
                                                            SECONDARY AUDITORIUM</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            10:50 - 11:15</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Hacking a Vending Machine with JavaScript, WhatsApp and
                                                            Firebase - Luís Leão</td>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Machine learning con JavaScript utilizando Tensorflow.js -
                                                            Aileen Villanueva Lecuona</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            11:20 - 11:45</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            JavaScript en Acción: Innovación y Accesibilidad con Voz, IA
                                                            y Desarrollo Ágil - Ricardo Castillo</td>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            The Scrolling Pineapple Show - Juan Caicedo</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            11:50 - 12:15</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Unlock the Power of JavaScript Generators - Drishti Jain
                                                      </td>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Promoviendo Comunidades Sostenibles con JavaScript de la
                                                            mano de US Green Building Council - Valeria Cerpa</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            12:20 - 1:50</td>
                                                </tr>
                                                <tr>
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            LUNCH</td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <table
                                          class="w-full table-auto border-collapse overflow-hidden rounded-t-xl bg-cream">
                                          <thead>
                                                <tr>
                                                      <th
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 font-source text-base font-semibold lg:py-4">
                                                            MAIN AUDITORIUM</th>
                                                      <th class="px-2 py-2 font-source text-base font-semibold lg:py-4">
                                                            SECONDARY AUDITORIUM</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            1:55 - 2:10</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Creando experiencias de usuario guiadas por eventos -
                                                            Esneyder Palacios</td>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Descubre cómo Backstage y los Developer Portals
                                                            transformarán tu experiencia de desarrollo - Sebastian Gomez
                                                      </td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            2:15 - 2:40</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Making Music with the Web Audio API - Steve Kinney</td>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Overcoming the complexities of Bash scripts by harnessing
                                                            the Power of JavaScript - Peter Mbanugo</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            2:45 - 3:10</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Combinando arte y tecnología: Experiencias inmersivas con
                                                            Realidad aumentada y geolocalización - Anuar Harb</td>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Full Spectrum File Upload - Austin Gil</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            3:15 - 3:35</td>
                                                </tr>
                                                <tr>
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            BREAK</td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <table
                                          class="w-full table-auto border-collapse overflow-hidden rounded-t-xl bg-cream">
                                          <thead>
                                                <tr>
                                                      <th
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol py-2 font-source text-base font-semibold lg:py-4">
                                                            MAIN AUDITORIUM</th>
                                                      <th class="px-2 py-2 font-source text-base font-semibold lg:py-4">
                                                            SECONDARY AUDITORIUM</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            3:40 - 4:05</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            FROM DRAIN TO GAIN! Aprovechamiento de agua para baños
                                                            sostenibles - Maria Velandia</td>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Mi Experiencia como Programadora Wayuu en la Industria de la
                                                            tecnología - Rina Plata</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            4:10 - 4:35</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-bluecol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            IDX, WebIDE's and the future of JavaScript debugging -
                                                            Kaushik Sathupadi</td>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Chatting with the Canvas; How to assemble art from AI Image
                                                            Prompts - Jorrik Klijnsma</td>
                                                </tr>
                                                <tr class="bg-bluecol_200">
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold">
                                                            4:40 - 5:00</td>
                                                </tr>
                                                <tr>
                                                      <td colspan="2"
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            CLOSING DAY 1</td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </section>
                              <section class="relative flex flex-col gap-4 lg:w-1/2 lg:pt-4"><img
                                          src="/images/papaya-schedule-mobile.svg"
                                          class="absolute right-0 top-16 lg:-top-6 lg:h-auto lg:w-24"
                                          alt="papaya colombia">
                                    <p class="w-52 pt-[22px] font-chakra text-sm lg:hidden"><strong>Mixed</strong>
                                          Frontend and Backend <strong>Talks.</strong></p>
                                    <table
                                          class="w-full table-auto border-collapse overflow-hidden rounded-t-xl bg-cream">
                                          <thead>
                                                <tr class="bg-yellowcol">
                                                      <th colspan="2"
                                                            class="pb-4 pl-6 pt-5 text-left font-source text-base font-semibold text-black md:text-center lg:pb-9 lg:pt-10 lg:text-2xl">
                                                            Day 2 - November 18th</th>
                                                </tr>
                                                <tr>
                                                      <th
                                                            class="border border-l-0 border-solid border-yellowcol py-2 font-source text-base font-semibold md:w-32 lg:py-4">
                                                            TIME</th>
                                                      <th
                                                            class="border border-b-0 border-r-0 border-solid border-yellowcol py-2 font-source text-base font-semibold lg:py-4">
                                                            MERGED AUDITORIUM</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td
                                                            class="border border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            9:00 - 9:25</td>
                                                      <td
                                                            class="border border-r-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Optimization and performance analysis of JavaScript
                                                            applications - Jessica Felix</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            9:30 - 9:55</td>
                                                      <td
                                                            class="border border-r-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            JavaScript can be as fast as C++ - Juan José Arboleda</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            10:00 - 10:15</td>
                                                      <td
                                                            class="border border-r-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Arte Generativo y Creatividad Computacional con JavaScript:
                                                            Explorando la belleza de los algoritmos - Maris Botero</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            10:20 - 10:45</td>
                                                      <td
                                                            class="border border-b-0 border-r-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Explorando la creatividad con JavaScript : Introducción al
                                                            Creative Coding - Martin Manriquez</td>
                                                </tr>
                                                <tr class="bg-yellowcol_100">
                                                      <td
                                                            class="py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            10:50 - 11:10</td>
                                                      <td
                                                            class="border border-b-0 border-r-0 border-t-0 border-solid border-yellowcol py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            BREAK</td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <table
                                          class="w-full table-auto border-collapse overflow-hidden rounded-t-xl bg-cream">
                                          <tbody>
                                                <tr>
                                                      <td
                                                            class="px-2 py-2 text-center font-source text-xs font-semibold md:w-32 lg:py-4">
                                                            11:15 - 11:30</td>
                                                      <td
                                                            class="border border-r-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Online Q&amp;A with &lt;Sorpresa /&gt;</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            11:35 - 12:00</td>
                                                      <td
                                                            class="border border-r-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Navigating the Backend Landscape with JavaScript (Panel)
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            12:05 - 12:30</td>
                                                      <td
                                                            class="border border-b-0 border-r-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Web Wonders: Emerging Trends in the JavaScript UI/UX Arena
                                                            (Panel)</td>
                                                </tr>
                                                <tr class="bg-yellowcol_100">
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            12:30 - 2:00</td>
                                                      <td
                                                            class="border border-b-0 border-r-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            LUNCH</td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <table
                                          class="w-full table-auto border-collapse overflow-hidden rounded-t-xl bg-cream">
                                          <tbody>
                                                <tr>
                                                      <td
                                                            class="border border-l-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold md:w-32 lg:py-4">
                                                            2:00 - 2:15</td>
                                                      <td
                                                            class="border border-r-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            Playwright, Selenium or Cypress, what is the best option for
                                                            JavaScript developers - Miguel Teheran</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            2:20 - 2:45</td>
                                                      <td
                                                            class="border border-r-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            How to consume gigabytes of data in JavaScript without
                                                            slowing down applications - Erick Wendel</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            2:50 - 3:05</td>
                                                      <td
                                                            class="border border-r-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            JavaScript para construir paz - Juan Almanza</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold">
                                                            3:10 - 3:25</td>
                                                      <td
                                                            class="border border-b-0 border-r-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold">
                                                            Supercharge Your React Apps with GPT in 15 Minutes - Juan
                                                            Guillermo Murillo</td>
                                                </tr>
                                                <tr class="bg-yellowcol_100">
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            3:30 - 3:50</td>
                                                      <td
                                                            class="border border-b-0 border-r-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            BREAK</td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <table
                                          class="w-full table-auto border-collapse overflow-hidden rounded-t-xl bg-cream">
                                          <tbody>
                                                <tr>
                                                      <td
                                                            class="border border-l-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold md:w-32">
                                                            3:55 - 4:25</td>
                                                      <td
                                                            class="border border-r-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold">
                                                            Code &amp; Coffee: Exploring the Terrain for JavaScript
                                                            Talent in Colombia (Panel)</td>
                                                </tr>
                                                <tr>
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold">
                                                            4:30 - 5:00</td>
                                                      <td
                                                            class="border border-b-0 border-r-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold">
                                                            Closing Remarks</td>
                                                </tr>
                                                <tr class="bg-yellowcol_100">
                                                      <td
                                                            class="border border-b-0 border-l-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            5:00 - 7:00</td>
                                                      <td
                                                            class="border border-b-0 border-r-0 border-t-0 border-solid border-yellowcol px-2 py-2 text-center font-source text-xs font-semibold lg:py-4">
                                                            AFTER PARTY</td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </section>
                        </section>
                  </div>
            </section>
            <section
                  class="bg-yellowcol px-7 pb-20 pt-5 lg:bg-[url('/images/pepas-down.svg')] lg:bg-[right_bottom_-1rem] lg:bg-no-repeat"
                  id="speakers">
                  <header class="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <h2 class="mb-8 font-chakra text-5xl font-semibold md:mb-0 md:text-6xl">Speakers</h2>
                        <p class="font-chakra lg:w-1/3">
                              We are so grateful to all speakers who have participated in past editions of our event.
                              Sharing our knowledge has been the key to our growth over the past 10 years. We are
                              excited to
                              welcome new participants to this year's event. Let's make this farewell party one that we
                              will
                              never forget!
                        </p><img class="hidden lg:block" src="/images/chontaduro.svg" alt="chontaduro colombia">
                  </header>
                  <div class="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:ml-44 lg:grid-cols-6">
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/jessica-felix.png" alt="Jessica Felix"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Optimization and performance analysis of Javascript
                                                            applications</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Jessica Felix</p><a
                                          href="https://twitter.com/jessilyneh" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Jessica Felix Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/anuar-harb.png" alt="Anuar Harb"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Combinando arte y tecnología: Experiencias inmersivas con
                                                            Realidad aumentada y geolocalización</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Anuar Harb</p><a
                                          href="https://twitter.com/anuarharb" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Anuar Harb Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/steve-kinney.png" alt="Steve Kinney"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Making Music with the Web Audio API</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Steve Kinney</p><a
                                          href="https://twitter.com/stevekinney" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Steve Kinney Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/erick-wendel.png" alt="Erick Wendel"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            How to consume gigabytes of data in JavaScript without
                                                            slowing down applications</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Erick Wendel</p><a
                                          href="https://twitter.com/erickwendel_" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Erick Wendel Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/juan-caicedo.png" alt="Juan Caicedo"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            The Scrolling Pineapple Show</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Juan Caicedo</p><a
                                          href="https://twitter.com/_juancaicedo" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Juan Caicedo Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/kaushik-sathupadi.png"
                                                      alt="Kaushik Sathupadi" class="h-full rounded object-cover"
                                                      width="308" height="278" loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            IDX, WebIDEs and the future of JavaScript debugging</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Kaushik Sathupadi</p><a
                                          href="https://twitter.com/_ksat" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Kaushik Sathupadi
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/valeria-belen-cerpa-salas.png"
                                                      alt="Valeria Cerpa" class="h-full rounded object-cover"
                                                      width="308" height="278" loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Promoviendo Comunidades Sostenibles con JavaScript de la
                                                            mano de US Green Building Council</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Valeria Cerpa</p><a
                                          href="https://twitter.com/valcerpasalas" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Valeria Cerpa Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/miguel-teheran.png" alt="Miguel Teheran"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Playwright, Selenium or Cypress, what is the best option for
                                                            JavaScript developers</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Miguel Teheran</p><a
                                          href="https://twitter.com/Mteheran" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Miguel Teheran Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/ricardo-castillo.png" alt="Ricardo Castillo"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            JavaScript en Acción: Innovación y Accesibilidad con Voz, IA
                                                            y Desarrollo Ágil</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Ricardo Castillo</p><a
                                          href="https://twitter.com/diruzcode" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Ricardo Castillo
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/austin-gil.png" alt="Austin Gil"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Full Spectrum File Uploads</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Austin Gil</p><a
                                          href="https://twitter.com/heyAustinGil" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Austin Gil Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/maria-velandia.png" alt="Maria Velandia"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            FROM DRAIN TO GAIN! Aprovechamiento de agua para baños
                                                            sostenibles</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Maria Velandia</p><a
                                          href="https://twitter.com/manvedu" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Maria Velandia Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/juan-almanza.png" alt="Juan Almanza"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Javascript para construir paz</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Juan Almanza</p><a
                                          href="https://twitter.com/scidroid" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Juan Almanza Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/peter-mbanugo.png" alt="Peter Mbanugo"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Overcoming the complexities of Bash scripts by harnessing
                                                            the Power of JavaScript</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Peter Mbanugo</p><a
                                          href="https://twitter.com/p_mbanugo" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Peter Mbanugo Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/rafael-gonzaga.png" alt="Rafael Gonzaga"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Lies, Damn Lies, and Benchmarks</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Rafael Gonzaga</p><a
                                          href="https://twitter.com/_rafaelgss" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Rafael Gonzaga Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/jorrik-klijnsma.png" alt="Jorrik Klijnsma"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Chatting with the Canvas; How to assemble art from AI Image
                                                            Prompts</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Jorrik Klijnsma</p><a
                                          href="https://twitter.com/Jorrik_Klijnsma" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Jorrik Klijnsma
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/aileen-villanueva-lecuona.png"
                                                      alt="Aileen Villanueva" class="h-full rounded object-cover"
                                                      width="308" height="278" loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Machine learning con Javascript utilizando Tensorflow.js</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Aileen Villanueva</p><a
                                          href="https://twitter.com/aileenvl" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Aileen Villanueva
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/colleen-lavin.png" alt="Colleen Lavin"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Making Art with JavaScript and Garbage</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Colleen Lavin</p><a
                                          href="https://twitter.com/colleencodes" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Colleen Lavin Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/juan-guillermo-murillo-castillo.png"
                                                      alt="Juan Guillermo Murillo" class="h-full rounded object-cover"
                                                      width="308" height="278" loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Supercharge Your React Apps with GPT in 15 Minutes</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Juan Guillermo Murillo</p><a
                                          href="https://twitter.com/juangmurillo2" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Juan Guillermo Murillo
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/maris-botero.png" alt="Maris Botero"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Arte Generativo y Creatividad Computacional con JavaScript:
                                                            Explorando la belleza de los algoritmos</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Maris Botero</p><a
                                          href="https://twitter.com/marisbotero" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Maris Botero Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/rina-plata.png" alt="Rina Plata"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Mi Experiencia como Programadora Wayuu en la Industria de la
                                                            tecnología</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Rina Plata</p><a
                                          href="https://twitter.com/rina_plata" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Rina Plata Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/martin-manriquez.png" alt="Martin Manriquez"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Explorando la creatividad con javascript : Introducción al
                                                            Creative Coding</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Martin Manriquez</p><a
                                          href="https://twitter.com/holasoymalva" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Martin Manriquez
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/drishti-jain.png" alt="Drishti Jain"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Unlock the Power of JavaScript Generators</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Drishti Jain</p><a
                                          href="https://twitter.com/drishtijjain" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Drishti Jain Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/esneyder-palacios.png"
                                                      alt="Esneyder Palacios" class="h-full rounded object-cover"
                                                      width="308" height="278" loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Creando experiencias de usuario guiadas por eventos</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Esneyder Palacios</p><a
                                          href="https://twitter.com/Sneyder_A" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Esneyder Palacios
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/sebastian-gomez.png" alt="Sebastian Gomez"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Descubre cómo Backstage y los Developer Portals
                                                            transformarán tu experiencia de desarrollo</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Sebastian Gomez</p><a
                                          href="https://twitter.com/sebasgojs" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Sebastian Gomez
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/juan-jose-arboleda.png"
                                                      alt="Juan José Arboleda" class="h-full rounded object-cover"
                                                      width="308" height="278" loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            JavaScript can be as fast as C++</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Juan José Arboleda</p><a
                                          href="https://twitter.com/soyjuanarbol" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Juan José Arboleda
                                                Instagram</span><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                        <article>
                              <div class="group h-[178px] w-full cursor-pointer perspective md:h-[188px] lg:h-[300px]">
                                    <div class="relative h-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                          <figure class="absolute h-full rounded border border-black backface-hidden">
                                                <img src="/images/speakers/luis-leao.png" alt="Luís Leão"
                                                      class="h-full rounded object-cover" width="308" height="278"
                                                      loading="lazy" decoding="async"></figure>
                                          <div
                                                class="absolute h-full w-full overflow-hidden my-rotate-y-180 backface-hidden">
                                                <div
                                                      class="flex h-full items-center rounded border border-black bg-cream px-2">
                                                      <p
                                                            class="text-gray-800 font-chakra text-sm font-semibold uppercase text-black lg:text-lg">
                                                            Hacking a Vending Machine with Javascript, WhatsApp and
                                                            Firebase</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="mt-1 flex flex-row items-start gap-1">
                                    <p class="flex-1 bg-black pl-1 font-chakra text-white">Luís Leão</p><a
                                          href="https://twitter.com/luisleao" target="_blank" rel="noreferrer"
                                          class="bg-black p-1"><span class="sr-only">Luís Leão Instagram</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                          </svg></a>
                              </div>
                        </article>
                  </div>
                  <p class="mt-12 text-left font-source lg:ml-44"><strong>People who will be speaking at
                              JSconf.</strong></p>
            </section>
            <section class="bg-khaki px-7 py-5" id="venue">
                  <header
                        class="mb-5 flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                        <h2 class="font-chakra text-5xl font-semibold md:text-6xl">Venue</h2>
                        <p class="font-chakra lg:w-1/4"><span class="text-lg font-semibold text-redcol">Centro de
                                    eventos de El Tesoro</span>, Carrera
                              25A # 1A Sur - 45 / Sótano 4 de la torre sur. Medellín, Colombia.
                        </p><a target="_blank" rel="noreferrer" href="https://goo.gl/maps/SQwZr944RGUwV3CEA"
                              class="rounded border border-bluecol bg-white px-9 py-2 text-redcol underline">google
                              maps</a>
                  </header>
                  <main class="flex flex-col gap-5 lg:ml-24 lg:flex-row">
                        <div class="flex justify-center lg:h-96 lg:w-2/3"><img src="/images/auditorium.png"
                                    alt="Centro de eventos de El Tesoro" class="lg:w-4/5"></div>
                        <div class="flex flex-col items-center justify-center lg:w-1/3">
                              <p class="mb-10 lg:mb-20">
                                    Strategic location, with easy access to all of the city's points of interest.
                              </p><a href="https://eltesoro.com.co/servicio/bici-parking/" target="_blank"
                                    rel="noreferrer"
                                    class="mb-3 rounded border border-bluecol bg-white px-9 py-2 underline">Bike parking
                                    and charging</a><a href="https://eltesoro.com.co/gastronomia/" target="_blank"
                                    rel="noreferrer"
                                    class="mb-3 rounded border border-bluecol bg-white px-9 py-2 underline">Food
                                    court</a><a href="https://eltesoro.com.co/servicios/" target="_blank"
                                    rel="noreferrer"
                                    class="rounded border border-bluecol bg-white px-9 py-2 underline">More services</a>
                        </div>
                  </main>
            </section>
            <section class="bg-black px-7 py-5" id="sponsors">
                  <header class="flex flex-col justify-between gap-5 lg:flex-row">
                        <h2 class="font-chakra text-5xl font-semibold text-cream md:text-6xl">Sponsors</h2>
                        <div class="flex flex-col items-start gap-3 md:gap-5">
                              <p class="font-chakra text-cream">
                                    Contact <a href="mailto:sponsors@jsconf.co?subject=Sponsor JSConf Colombia 2023"
                                          class="text-yellowcol">sponsors@jsconf.co</a>, and we'll make something great
                                    happen together.
                              </p><a href="mailto:sponsors@jsconf.co?subject=Sponsor JSConf Colombia 2023"
                                    class="text-red rounded border border-redcol bg-cream px-9 py-2">Mail</a>
                        </div>
                        <p class="font-chakra text-cream lg:w-96">
                              We believe in these companies and people as much as they do in us. We are committed to
                              working
                              together to make the last one a remarkable experience for all of us. It's been a decade of
                              community, innovation, and impact.
                        </p>
                  </header>
            </section>
            <section class="flex justify-center bg-cream px-7 py-5">
                  <div class="flex flex-col gap-8 lg:w-3/5">
                        <article class="flex flex-col gap-8">
                              <h3 class="font-chakra text-5xl text-redcol">Platinum</h3>
                              <div class="grid grid-cols-1 gap-y-4 self-center lg:grid-cols-2 lg:self-stretch">
                                    <div class="flex flex-col gap-1 w-44 lg:w-96">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Publicis Sapient</p><a href="https://twitter.com/PublicisSapient"
                                                      target="_blank" rel="noreferrer" class="bg-black p-1"><span
                                                            class="sr-only">Publicis Sapient Twitter</span><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-40">
                                                <div class="transition hover:scale-110"><a
                                                            href="https://www.publicissapient.com" target="_blank"
                                                            rel="noreferrer"><img
                                                                  src="/images/sponsors/publicis-logo.png"
                                                                  alt="Publicis Sapient"
                                                                  class="rounded object-scale-down" loading="lazy"></a>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="flex flex-col gap-1 w-44 lg:w-96">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Platzi</p><a href="https://twitter.com/platzi" target="_blank"
                                                      rel="noreferrer" class="bg-black p-1"><span class="sr-only">Platzi
                                                            Twitter</span><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="#f8eee0" fill="none" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-40">
                                                <div class="transition hover:scale-110"><a href="https://platzi.com/"
                                                            target="_blank" rel="noreferrer"><img
                                                                  src="/images/sponsors/platzi-logo.png" alt="Platzi"
                                                                  class="rounded object-scale-down" loading="lazy"></a>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="flex flex-col gap-1 w-44 lg:w-96">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Google / IDX</p><a href="https://twitter.com/googledevs"
                                                      target="_blank" rel="noreferrer" class="bg-black p-1"><span
                                                            class="sr-only">Google / IDX Twitter</span><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-40">
                                                <div class="transition hover:scale-110"><a href="https://idx.dev"
                                                            target="_blank" rel="noreferrer"><img
                                                                  src="/images/sponsors/googleidx-logo.png"
                                                                  alt="Google / IDX" class="rounded object-scale-down"
                                                                  loading="lazy"></a></div>
                                          </div>
                                    </div>
                              </div>
                        </article>
                        <article class="flex flex-col gap-8">
                              <h3 class="text-right font-chakra text-5xl text-yellowcol">Gold</h3>
                              <div class="grid grid-cols-2 gap-4 lg:gap-0">
                                    <div class="flex flex-col gap-1 w-40 lg:w-80">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Temporal</p><a href="https://twitter.com/temporalio"
                                                      target="_blank" rel="noreferrer" class="bg-black p-1"><span
                                                            class="sr-only">Temporal Twitter</span><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-32">
                                                <div class="transition hover:scale-110"><a href="https://temporal.io/"
                                                            target="_blank" rel="noreferrer"><img
                                                                  src="/images/sponsors/temporal-logo.png"
                                                                  alt="Temporal" class="rounded object-scale-down"
                                                                  loading="lazy"></a></div>
                                          </div>
                                    </div>
                                    <div class="flex flex-col gap-1 w-40 lg:w-80">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Fullstack Labs</p><a href="https://twitter.com/FullStack_Labs"
                                                      target="_blank" rel="noreferrer" class="bg-black p-1"><span
                                                            class="sr-only">Fullstack Labs Twitter</span><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-32">
                                                <div class="transition hover:scale-110"><a
                                                            href="https://www.fullstacklabs.co/" target="_blank"
                                                            rel="noreferrer"><img
                                                                  src="/images/sponsors/fullstacklabs-logo.png"
                                                                  alt="Fullstack Labs" class="rounded object-scale-down"
                                                                  loading="lazy"></a></div>
                                          </div>
                                    </div>
                              </div>
                        </article>
                        <article class="flex flex-col gap-8">
                              <h3 class="font-chakra text-5xl text-greencol">Silver</h3>
                              <div class="grid grid-cols-2 gap-y-4">
                                    <div class="flex flex-col gap-1 w-36 lg:w-72">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Nodo - EAFIT</p><a href="https://www.instagram.com/nodo.eafit/"
                                                      target="_blank" rel="noreferrer" class="bg-black p-1"><span
                                                            class="sr-only">Nodo - EAFIT Instagram</span><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            viewBox="0 0 24 24" fill="none" stroke="#f8eee0"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5">
                                                            </rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                                                            </path>
                                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-28">
                                                <div class="transition hover:scale-110"><a
                                                            href="https://www.nodoeafit.com" target="_blank"
                                                            rel="noreferrer"><img src="/images/sponsors/nodo-logo.png"
                                                                  alt="Nodo - EAFIT" class="rounded object-scale-down"
                                                                  loading="lazy"></a></div>
                                          </div>
                                    </div>
                              </div>
                        </article>
                        <article class="flex flex-col gap-8">
                              <h3 class="text-right font-chakra text-5xl text-bluecol">Bronze</h3>
                              <div class="grid grid-cols-2 gap-y-4">
                                    <div class="flex flex-col gap-1 w-28 lg:w-64">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Laboratoria</p><a href="https://twitter.com/Laboratoriala"
                                                      target="_blank" rel="noreferrer" class="bg-black p-1"><span
                                                            class="sr-only">Laboratoria Twitter</span><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-24">
                                                <div class="transition hover:scale-110"><a
                                                            href="https://www.laboratoria.la/" target="_blank"
                                                            rel="noreferrer"><img
                                                                  src="/images/sponsors/laboratoria-logo.png"
                                                                  alt="Laboratoria" class="rounded object-scale-down"
                                                                  loading="lazy"></a></div>
                                          </div>
                                    </div>
                                    <div class="flex flex-col gap-1 w-28 lg:w-64">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Sancrisoft</p><a href="https://twitter.com/sancrisoft"
                                                      target="_blank" rel="noreferrer" class="bg-black p-1"><span
                                                            class="sr-only">Sancrisoft Twitter</span><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0"
                                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-24">
                                                <div class="transition hover:scale-110"><a
                                                            href="https://www.sancrisoft.com/" target="_blank"
                                                            rel="noreferrer"><img
                                                                  src="/images/sponsors/sancrisoft-logo.png"
                                                                  alt="Sancrisoft" class="rounded object-scale-down"
                                                                  loading="lazy"></a></div>
                                          </div>
                                    </div>
                                    <div class="flex flex-col gap-1 w-28 lg:w-64">
                                          <div class="flex flex-row items-start gap-0.5">
                                                <p
                                                      class="flex-1 bg-black py-0.5 pl-1 font-chakra text-sm text-white md:py-0 md:text-base">
                                                      Runme</p><a href="https://twitter.com/runmedev" target="_blank"
                                                      rel="noreferrer" class="bg-black p-1"><span class="sr-only">Runme
                                                            Twitter</span><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" viewBox="0 0 24 24" stroke-width="2"
                                                            stroke="#f8eee0" fill="none" stroke-linecap="round"
                                                            stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                      </svg></a>
                                          </div>
                                          <div
                                                class="flex items-center overflow-hidden rounded border border-black bg-cream  lg:h-24">
                                                <div class="transition hover:scale-110"><a href="https://runme.dev/"
                                                            target="_blank" rel="noreferrer"><img
                                                                  src="/images/sponsors/runme-logo.png" alt="Runme"
                                                                  class="rounded object-scale-down" loading="lazy"></a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </article>
                        <article class="flex flex-col gap-8">
                              <h3 class="text-center font-chakra text-5xl">Supporter</h3>
                              <div class="flex justify-center gap-3">
                                    <div class="flex h-10 w-28 items-center rounded border lg:h-24 lg:w-64"><a
                                                href="https://www.dailybot.com/solution-kits/software-development?utm_source=jsconf"
                                                target="_blank" rel="noreferrer"><img
                                                      src="/images/supporters/dailybot-logo.png" alt="DailyBot"></a>
                                    </div>
                                    <div class="flex h-10 w-28 items-center rounded border lg:h-24 lg:w-64"><a
                                                href="https://www.redocflow.com/" target="_blank" rel="noreferrer"><img
                                                      src="/images/supporters/redocflow-logo.png" alt="Redocflow"></a>
                                    </div>
                              </div>
                        </article>
                  </div>
            </section>
            <section
                  class="bg-khaki bg-[url('/images/pepas-down.svg')] bg-contain bg-left-bottom bg-no-repeat px-7 pb-44 pt-5 md:bg-auto md:pb-72 lg:bg-[left_bottom_-1rem] lg:pb-36 lg:pl-48">
                  <p class="font-chakra md:w-1/2 lg:w-1/4">
                        Thanks to the old and new ones, it's been a pleasure to work side-by-side with you. We hope you
                        keep going making these communities bigger.
                  </p>
                  <div class="mt-12 flex justify-center"><a href="https://www.jsconf.mx/es" target="_blank"
                              rel="noreferrer"><img src="/images/supporters/jsconfmx.png" alt="JSConf Mexico"
                                    class="w-64"></a></div>
            </section>
            <section class="bg-bluecol bg-[url('/images/banano.svg')] bg-auto bg-right-bottom bg-no-repeat px-7 py-5"
                  id="recommendations">
                  <header class="mb-9 flex flex-col lg:mb-24 lg:flex-row">
                        <h2 class="font-chakra text-4xl font-semibold text-cream md:text-5xl lg:w-1/2 lg:text-6xl">
                              Recommendations
                        </h2>
                        <div class="lg:w-1/2">
                              <p class="font-chakra text-cream lg:w-1/2">
                                    We're excited to help you have a fantastic time with us! Here are a few
                                    recommendations to
                                    make it even better
                              </p>
                        </div>
                  </header>
                  <main
                        class="mb-24 grid grid-rows-2 gap-x-12 gap-y-12 md:grid-cols-2 lg:ml-24 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-32">
                        <div><a href="https://jsconf.com/codeofconduct.html"
                                    class="rounded border border-redcol bg-white px-3 py-2 font-chakra text-redcol lg:px-9"
                                    target="_blank" rel="noreferrer">Code of conduct</a></div>
                        <div><a href="https://eltesoro.com.co/servicio/baby-zone/"
                                    class="rounded border border-redcol bg-white px-3 py-2 font-chakra text-redcol lg:px-9"
                                    target="_blank" rel="noreferrer">Baby Zone</a></div>
                        <div><a href="https://medium.com/colombia-dev/jsconf-colombia-2023-see-you-at-the-last-one-4553892902c8"
                                    class="rounded border border-redcol bg-white px-3 py-2 font-chakra text-redcol lg:px-9"
                                    target="_blank" rel="noreferrer">Blog: See you at the last one</a></div>
                        <div><a href="https://medium.com/colombia-dev/jsconf-colombias-grand-finale-1151896cd792"
                                    class="rounded border border-redcol bg-white px-3 py-2 font-chakra text-redcol lg:px-9"
                                    target="_blank" rel="noreferrer">Blog: JSConf Colombia’s Grand Finale</a></div>
                        <div><a href="https://wa.link/0doxpx"
                                    class="rounded border border-redcol bg-white px-3 py-2 font-chakra text-redcol lg:px-9"
                                    target="_blank" rel="noreferrer">Hotel</a></div>
                  </main>
            </section>
            <section
                  class="bg-yellowcol bg-no-repeat px-7 pb-9 pt-5 md:pb-16 lg:bg-[url('/images/pepas-down.svg')] lg:bg-[left_bottom_-1rem]">
                  <header>
                        <h2 class="mb-8 font-chakra text-5xl font-semibold text-white md:mb-0 md:text-6xl">
                              Volunteers
                        </h2>
                  </header>
                  <div class="grid grid-cols-1 lg:grid-cols-2">
                        <div class="space-y-5 lg:col-start-2">
                              <p class="font-chakra text-lg">
                                    Thanks to all people who have been part of this amazing journey.
                              </p>
                              <p class="font-chakra text-lg"><strong>2023</strong><br>
                                    Julian Arango • Eimer Barrera • <strong>Andrés Bedoya G.</strong> • <strong>Josue
                                          Bustamante</strong> • Maria Cifuentes • <strong>Alejandra Duque</strong> •
                                    María Franco • Christian Galeano •
                                    <strong>Viviana Gómez</strong> • Andrea Gomez • Dindi Lamadrid • Lizie Perez •
                                    <strong>Lizz Parody</strong> • Anibal Ortega • <strong>Vanessa Marely</strong> •
                                    Santiago Montoya • <strong>Maria Moreno</strong> • Miguelangel Rendon • Juan Regino
                                    • Nathaly Riaño • Ana Salazar • <strong>Ana Sosa</strong> • Sofia Videa • Rafael
                                    Villarreal • Kelly Villa • Diana Vargas • Johana Vrilli • Victor
                                    Zapata • David Zuluaga
                              </p>
                        </div>
                  </div>
            </section>
            <footer class="flex flex-col gap-9 bg-black px-7 py-5 md:flex-row md:gap-24">
                  <div class="md:w-1/2">
                        <h3 class="mb-3 font-chakra text-4xl text-cream md:text-5xl">La última y nos vamos.</h3>
                        <p class="mb-3 font-chakra text-cream">
                              JSConf Colombia is not just a conference; it's a celebration. One that is a testament to
                              the
                              power of unity, knowledge, and passion. So, let's make this farewell party unforgettable.
                        </p>
                        <p class="mb-3 font-chakra text-cream">
                              Thank you so much to all who have been part of this dream. Your support, dedication, and
                              effort helped us achieve our goals.
                        </p>
                        <p class="font-chakra text-cream">JSConf Colombia Crew</p>
                  </div>
                  <div class="md:w-1/2">
                        <p class="font-chakra text-4xl font-light text-cream md:text-5xl">Contact information:</p>
                        <p class="font-chakra text-4xl font-light text-cream md:text-5xl"><a
                                    href="mailto:hola@jsconf.co">hola@jsconf.co</a></p>
                        <div class="flex w-2/6 gap-3 py-4 lg:w-1/6"><a href="https://twitter.com/jsconfco"
                                    target="_blank" rel="noreferrer"><span class="sr-only">JSConf Colombia
                                          Twitter</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                          viewBox="0 0 24 24" stroke-width="2" stroke="#f8eee0" fill="none"
                                          stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                    </svg></a><a href="https://www.instagram.com/jsconfco/" target="_blank"
                                    rel="noreferrer"><span class="sr-only">JSConf Colombia Instagram</span><svg
                                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                          fill="none" stroke="#f8eee0" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round">
                                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                    </svg></a><a href="https://www.linkedin.com/company/jsconf-colombia/"
                                    target="_blank" rel="noreferrer"><span class="sr-only">JSConf Colombia
                                          LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                          viewBox="0 0 24 24" fill="none" stroke="#f8eee0" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round">
                                          <path
                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                          </path>
                                          <rect width="4" height="12" x="2" y="9"></rect>
                                          <circle cx="4" cy="4" r="2"></circle>
                                    </svg></a></div>
                        <p class="flex items-baseline gap-2 font-chakra text-lg text-cream">
                              Diseño por: <a href="https://asisifelicia.com/" target="_blank" rel="noreferrer"><img
                                          src="/images/asisifelicia.svg" alt="Asisi Felicia"></a></p>
                  </div>
            </footer>
      </main>
      <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
            <section id="shadow-host-companion"></section>
      </div>
</body>

</html>
      `,
    }
  }
};

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };
  const data = {
    model: 'gpt-4-1106-preview',
    messages: [{ role: 'user', content: query }],
    tools: [
      {
        type: 'function',
        function: scrape_website_definition,
      }
    ]
  };
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
  const parsed = await response.json();
  const message = parsed.choices[0].message;

  if (message.tool_calls) {
    const [firstCall] = message.tool_calls;
    const function_name = firstCall.function.name;

    if (function_name === 'scrape_website') {
      const functionArgs = JSON.parse(firstCall.function.arguments);
      const { html } = await scrape_website(functionArgs);

      const data = {
        model: 'gpt-4-1106-preview',
        messages: [
          { role: 'user', content: query },
          { role: 'function', name: 'scrape_website', content: JSON.stringify({ html }) },
        ],
        tools: [
          {
            type: 'function',
            function: scrape_website_definition,
          }
        ]
      };
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      const parsed = await response.json();
      return NextResponse.json({ messages: parsed }, { status: 200 });
    }
  } else {
    return NextResponse.json({ messages: parsed }, { status: 200 })
  }
}