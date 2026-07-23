import Link from 'next/link'
import React from 'react'
import { Logo } from '../assets/icons'
import { footerSectionsData } from '@/constants/homeSectionsData'

const Footer = () => {
  return (
    <footer className="w-full min-h-[7 0vh] mx-auto flex flex-col items-start lg:pt-4 pb-4 lg:pb-6 justify-start gap-6 lg:gap-[75px] bg-board-black">
      <div className="max-w-[90%] w-full text-white mx-auto flex flex-col items-center justify-start gap-[10vh]">
        <div className="flex flex-col items-center justify-start gap-7 max-w-[40%]">
          <Link href="/" className="">
            <div className="flex items-center text-blue-navy">
              <Logo className="fill-white/80 h-13!" />
            </div>
          </Link>
          <div className="subtitle2 text-center text-white/80">Centre de gestion des cours de répétition à domicile. Nous connectons les élèves avec des professeurs qualifiés et offrons aux parents une transparence totale sur le suivi scolaire.</div>
        </div>
        <div className="grid lg:grid-cols-5 w-full gap-16">
          {
            footerSectionsData.map((fsd) => (
              <div
                key={fsd.title}
                className="flex flex-col items-start justify-start gap-3"
              >
                <div className="subtitle2 text-start text-white">
                  {fsd.title}
                </div>

                <div className="subtitle2 flex flex-col items-start gap-2 text-white/70">
                  {fsd.items.map((item) =>
                    item.href ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span key={item.label}>
                        {item.label}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))
          }
        </div>
        <div className="subtitle2 text-center text-white">© 2026 D²Répétition. Tous droits réservés.</div>
      </div>
    </footer>
  )
}

export default Footer
