"use client"

import { useState, Fragment } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  TrophyIcon,
  CalendarIcon,
  CheckIcon,
  ArrowSmallRightIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Entraînements', href: '#entrainements' },
  { name: 'L\'association', href: '#association' },
  { name: 'Horaires', href: '#horaires' },
  { name: 'Tarif', href: '#tarif' },
  { name: 'Contact', href: '#contact' },
]

const footerNavigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
          />
        </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
          />
        </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
          />
        </svg>
    ),
  },
]

const features = [
  {
    name: 'Natation',
    description:
        'Nos entraînement sont conçus pour tous les niveaux, que vous soyez un débutant cherchant à améliorer votre technique ou un triathlète chevronné visant à renforcer votre endurance aquatique.',
    icon: CheckIcon,
  },
  {
    name: 'Cyclisme',
    description:
        'Nos entraînements de cyclisme incluent des intervalles de vitesse, des montées stimulantes, et des conseils techniques pour vous aider à atteindre votre plein potentiel.',
    icon: CheckIcon,
  },
  {
    name: 'Course à pied',
    description:
        'Rejoignez-nous pour une séance de course à pied stimulante qui vous préparera à donner le meilleur de vous-même lors de la course finale de vos prochaines compétitions.',
    icon: CheckIcon,
  },
  {
    name: 'Renforcement musculaire',
    description:
        'Sous la supervision de nos entraîneurs qualifiés, vous développerez votre force, votre stabilité et votre résistance, contribuant ainsi à améliorer votre performance globale en triathlon.',
    icon: CheckIcon,
  },
]

const includedFeatures = [
  'Accès à tous les entraînements',
  'Stage de préparation',
  '10% de réduction chez nos partenaires',
  'La tri-fonction du club',
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [showWarning, setShowWarning] = useState(true)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Transition.Root show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setShowModal}>
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <ExclamationTriangleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Ce site est une démonstration
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Vous êtes sur une démonstration de Pixilab, aucune action n'est réellement executée.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        onClick={() => setShowModal(false)}
                    >
                      J'ai compris
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {showWarning && <div className="pointer-events-none fixed inset-x-0 z-50 top-20 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-blue-500 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-sm leading-6 text-white">
            <a href="#">
              <strong className="font-semibold">Attention</strong>
              <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                <circle cx={1} cy={1} r={1} />
              </svg>
              Ce site est une démonstration, le club présenté n'existe pas.
            </a>
          </p>
          <button type="button" className="-m-1.5 flex-none p-1.5" onClick={() => setShowWarning(false)}>
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>}
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="mx-auto max-w-7xl">
            <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
              <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Demo Sport</span>
                  <TrophyIcon className="w-6 h-6 text-blue-500" />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                  {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:border-blue-500 border-transparent border-b">
                        {item.name}
                      </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Demo Sport</span>
                  <TrophyIcon className="w-6 h-6 text-blue-500" />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Les inscriptions sont ouvertes.{' '}
                      <button onClick={() => setShowModal(true)} className="whitespace-nowrap font-semibold text-blue-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Cliquez pour vous inscrire <span aria-hidden="true">&rarr;</span>
                      </button>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Bienvenue sur le site de l'AS Triathlon
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Notre association est l'endroit idéal pour les passionnés de sport à la recherche d'une aventure épique mêlant natation, cyclisme et course à pied. Nous rassemblons des athlètes de tous niveaux, dans une atmosphère de soutien et d'enthousiasme.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                        href="#association"
                        className="rounded-md bg-blue-600 px-8 py-5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Découvrir
                    </a>
                    <button
                        type={"button"}
                        onClick={() => setShowModal(true)}
                        className="rounded-md bg-red-600 px-8 py-5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Inscriptions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1627156399021-721b0f720f8d?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
          </div>
        </div>
      </div>
      <div id="entrainements" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos entraînements
            </h2>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
              {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div id="association" className="overflow-hidden bg-white pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">L'association</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                La vie de notre association sportive est un véritable tourbillon d'activité, de passion et de camaraderie. Chaque jour, des athlètes de tous âges et de tous horizons se rassemblent pour partager leur amour du sport.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Les entraînements sont le cœur battant de l'association, où les athlètes se retrouvent pour perfectionner leurs compétences, repousser leurs limites et se préparer pour les compétitions à venir. Les coachs jouent un rôle crucial en guidant les membres à travers des exercices, des tactiques et des stratégies spécifiques, tout en favorisant un esprit d'équipe et un sens de la discipline.
              </p>
              <div className="mt-10 flex">
                <button
                    type={"button"}
                    onClick={() => setShowModal(true)}
                    className="rounded-md bg-red-600 px-8 py-5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Inscriptions
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                    src="https://images.unsplash.com/photo-1628689529124-3e0db67e984c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                      src="https://images.unsplash.com/photo-1613937574892-25f441264a09?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                      src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                      src="https://images.unsplash.com/photo-1560073743-0a45c01b68c4?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="horaires" className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos horaires</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Vous trouverez ci-contre les horaires d'entraînement pour la saison 2023-2024
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CalendarIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Lundi &bull; 19h à 20h
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <ArrowSmallRightIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Natation
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CalendarIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Mardi &bull; 19h30 à 21h
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <ArrowSmallRightIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Course à pied
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CalendarIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Mercredi &bull; 18h à 20h
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <ArrowSmallRightIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Natation
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CalendarIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Jeudi &bull; 19h à 20h30
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <ArrowSmallRightIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Course à pied
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CalendarIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Vendredi &bull; 7h30h à 8h30
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <ArrowSmallRightIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Natation
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CalendarIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Samedi &bull; 12h à 13h
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <ArrowSmallRightIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Natation
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CalendarIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Dimanche &bull; 8h à 12h
                </dt>
              </div>
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <ArrowSmallRightIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  Cyclisme
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white pt-12">
        <div className="bg-blue-500 pb-12 sm:pb-12 xl:pb-0">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    alt=""
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                    viewBox="0 0 162 128"
                    fill="none"
                    aria-hidden="true"
                    className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                >
                  <path
                      id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    En tant qu'adhérente du club, je ne peux qu'exprimer ma satisfaction et ma gratitude pour cette expérience incroyable. Rejoindre cette association sportive a été l'une des meilleures décisions que j'ai prises.
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Judith Black</div>
                  <div className="mt-1 text-blue-200">Adhérente depuis 4 ans</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div id="tarif" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tarif de l'adhésion</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Le prix contient la cotisation au club, la licence ainsi que l'assurance.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Adhésion à l'AS Triathlon</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                L'adhésion est valable pour une année complète.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Ce qui est inclus</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Possibilité de payer en 3 fois</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">220,00 €</span>
                  </p>
                  <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      className="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Inscription
                  </button>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Si vous souhaitez récupérer la facture, demandez la à Jacques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="relative isolate bg-white px-6 pb-24 sm:pb-32 lg:px-8">
        <div
            className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
        >
          <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contactez-nous</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Nous répondons à vos questions.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Prénom
              </label>
              <div className="mt-2.5">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Nom de famille
              </label>
              <div className="mt-2.5">
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                Numéro de téléphone
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Pays
                  </label>
                  <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                  >
                    <option>FR</option>
                    <option>BE</option>
                    <option>CH</option>
                  </select>
                  <ChevronDownIcon
                      className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                      aria-hidden="true"
                  />
                </div>
                <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
              <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                        agreed ? 'bg-blue-600' : 'bg-gray-200',
                        'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                    )}
                >
                  <span className="sr-only">J'accepte que mes données soient traitées informatiquement par le club.</span>
                  <span
                      aria-hidden="true"
                      className={classNames(
                          agreed ? 'translate-x-3.5' : 'translate-x-0',
                          'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                En cochant cette case, vous acceptez que vos données soient traitées informatiquement par le club.
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
                type="button"
                onClick={() => setShowModal(true)}
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {footerNavigation.map((item) => (
                <button type="button" key={item.name} onClick={() => setShowModal(true)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </button>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {(new Date()).getFullYear()} Pixilab. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
