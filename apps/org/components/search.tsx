"use client"

import { cn } from "utils"
import { Input } from "ui-server"

import { HTMLAttributes, SyntheticEvent } from "react"

import { toast } from "./ui-client/toast/use-toast"

interface DocsSearchProps extends HTMLAttributes<HTMLFormElement> {}

export function DocsSearch({ className, ...props }: DocsSearchProps) {
  function onSubmit(event: SyntheticEvent) {
    event.preventDefault()

    return toast({
      title: "Not implemented",
      description: "We're still working on the search.",
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative w-full", className)}
      {...props}
    >
      <Input
        type="search"
        placeholder="Search documentation..."
        className="h-8 w-full sm:w-64 sm:pr-12"
      />
      <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </form>
  )
}
