"use client"

import { cn } from "utils"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { DashboardLinksEnum, DocsLinks } from "@/lib/types/links"

const tabs = [
  { name: "Dashboard", href: DashboardLinksEnum.Index },
  { name: "Documentation", href: DocsLinks.Index },
  { name: "Contracts", href: DashboardLinksEnum.Contracts },
  { name: "NFTs", href: DashboardLinksEnum.Marketplace },
  { name: "DAO", href: DashboardLinksEnum.DAO },
]

export function DashboardTabNavigation() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      <div className="mx-3 sm:hidden pb-2 relative tab-nav-select">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          onChange={(e) => {
            const link = tabs.find((tab) => tab.name === e.target.value)?.href
            router.push(`${link}`)
          }}
          id="tabs"
          name="tabs"
          className="block rounded-md border border-zinc-400 dark:border-zinc-600 pl-3 pr-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-zinc-800 bg-zinc-200 h-12 text-base leading-7 w-full mx-0 my-1 float-right px-6 py-0 font-semibold appearance-none"
          defaultValue={tabs.find((tab) => pathname.startsWith(tab.href))?.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block mt-3">
        <div className="nav-shadow px-6">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={cn(
                  pathname.startsWith(tab.href)
                    ? "dark:border-white dark:text-white text-black border-black"
                    : "border-transparent dark:text-zinc-400/80 text-zinc-600/80 dark:hover:border-zinc-300 hover:border-black",
                  "whitespace-nowrap border-b-2 relative inline-block text-sm transition-colors duration-200 ease-in-out cursor-pointer px-3 dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:hover:text-white hover:text-black py-2 rounded-t-md"
                )}
                aria-current={
                  pathname.startsWith(tab.href) ? "page" : undefined
                }
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
