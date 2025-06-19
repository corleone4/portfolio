import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
const tabs = [
  { name: "Sobre mim", href: "#about-me" },
  { name: "Projetos", href: "#projects" },
  { name: "Certificados", href: "#certificates" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white dark:bg-[#272727]">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Logo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileNavbar(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-gray-200 text-gray-700"
          >
            <span className="sr-only text-gray-900 dark:text-white">
              Abrir menu
            </span>
            <Bars3Icon
              aria-hidden="true"
              className="size-6 dark:text-gray-200"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-2 lg:gap-x-20">
          {tabs.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden">
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Log in <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileNavbar}
        onClose={setMobileNavbar}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-[#333333] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <Logo />
            </a>
            <button
              type="button"
              onClick={() => setMobileNavbar(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Fechar</span>
              <XMarkIcon
                aria-hidden="true"
                className="size-6 dark:text-gray-200"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {tabs.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-200 dark:hover:bg-neutral-700 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
