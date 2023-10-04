// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '../../utility/_joinClassNames'
import { LinkInterface, LinkNavBar } from '../atoms/navBarLink'

const navigation:LinkInterface[] = [
  { name: 'HOME', href: '#', current: true, type: 'home' },
  { name: 'SPONSOR & PARTNERS', href: '#', current: false, type: 'home' },
  { name: 'RACE INFORMATION', href: '#', current: false, type: 'home' },
  { name: 'ABOUT EVENT', href: '#', current: false, type: 'home' },
  { name: 'CONTACT US', href: '#', current: false, type: 'home' }
];

const register:LinkInterface = { name: 'REGISTER', href: '#', current: false, type: 'register' }

export default function NavBar() {
  const stucture = {
    eventName : 'Barbie Run 2023',
    imageLogo : 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
    withHome : false,
    color : {
      primary : '#E01883',
      shadePrimary : '#AD1365',
      secondary : '#FFFFFF',
    }
  }

  const { eventName, imageLogo } = stucture;
  return (
    <Disclosure as="nav" className="bg-[var(--cusPrimaryColor)] border-bottom">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center lg:items-stretch">
                <div className="flex items-center">
                  <img
                    className="h-8 w-auto"
                    src={imageLogo}
                    alt={eventName}
                  />
                </div>
                <div className="hidden lg:ml-6 lg:flex space-x-4">
                  {navigation.map((item) => (
                    <LinkNavBar {...item} key={item.name} />
                  ))}
                </div>
                {
                  register == null ? '' :
                  <div className="hidden lg:ml-auto lg:flex">
                    <LinkNavBar {...register}  />
                  </div>
                }
                <div className="flex items-center ml-auto lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[var(--cusSecondary)] hover:bg-[var(--cusSecondary)] hover:text-[var(--cusPrimaryColor)]">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? `bg-[var(--cusShadePrimary)] text-[var(--cusSecondary)]` 
                    : `text-[var(--cusSecondary)] hover:bg-[var(--cusSecondary)] hover:text-[var(--cusPrimaryColor)]`,
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
