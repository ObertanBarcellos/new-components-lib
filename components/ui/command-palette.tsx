"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "./dialog"

export interface CommandPaletteCommand {
  id: string
  label: string
  keywords?: string[]
  icon?: React.ReactNode
  onSelect?: () => void
  group?: string
}

export interface CommandPaletteProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  commands?: CommandPaletteCommand[]
  placeholder?: string
  emptyMessage?: string
  className?: string
  trigger?: React.ReactNode
  onCommandSelect?: (command: CommandPaletteCommand) => void
}

const CommandPalette = React.forwardRef<HTMLDivElement, CommandPaletteProps>(
  (
    {
      open: controlledOpen,
      onOpenChange,
      commands = [],
      placeholder = "Digite um comando ou pesquise...",
      emptyMessage = "Nenhum resultado encontrado.",
      className,
      trigger,
      onCommandSelect,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")
    const isControlled = controlledOpen !== undefined
    const open = isControlled ? controlledOpen : internalOpen

    const setOpen = React.useCallback(
      (newOpen: boolean) => {
        if (!isControlled) {
          setInternalOpen(newOpen)
        }
        onOpenChange?.(newOpen)
        if (!newOpen) {
          setSearch("")
        }
      },
      [isControlled, onOpenChange]
    )

    // Keyboard shortcut handler
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen(!open)
        }
        if (e.key === "Escape" && open) {
          setOpen(false)
        }
      }

      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [open, setOpen])

    const handleCommandSelect = React.useCallback(
      (command: CommandPaletteCommand) => {
        command.onSelect?.()
        onCommandSelect?.(command)
        setOpen(false)
      },
      [onCommandSelect, setOpen]
    )

    // Group commands by group
    const groupedCommands = React.useMemo(() => {
      const groups: Record<string, CommandPaletteCommand[]> = {}
      const ungrouped: CommandPaletteCommand[] = []

      commands.forEach((cmd) => {
        if (cmd.group) {
          if (!groups[cmd.group]) {
            groups[cmd.group] = []
          }
          groups[cmd.group].push(cmd)
        } else {
          ungrouped.push(cmd)
        }
      })

      return { groups, ungrouped }
    }, [commands])

    const filteredCommands = React.useMemo(() => {
      if (!search.trim()) return commands

      const searchLower = search.toLowerCase()
      return commands.filter((cmd) => {
        const labelMatch = cmd.label.toLowerCase().includes(searchLower)
        const keywordMatch = cmd.keywords?.some((kw) => kw.toLowerCase().includes(searchLower))
        return labelMatch || keywordMatch
      })
    }, [commands, search])

    return (
      <>
        {trigger && (
          <div onClick={() => setOpen(true)} className="cursor-pointer">
            {trigger}
          </div>
        )}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="overflow-hidden p-0 max-w-2xl" ref={ref} {...props}>
            <CommandPrimitive className={cn("overflow-hidden", className)}>
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <CommandPrimitive.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder={placeholder}
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="ml-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <CommandPrimitive.List className="max-h-[300px] overflow-y-auto p-1">
                {filteredCommands.length === 0 ? (
                  <CommandPrimitive.Empty className="py-6 text-center text-sm text-muted-foreground">
                    {emptyMessage}
                  </CommandPrimitive.Empty>
                ) : (
                  <>
                    {Object.entries(groupedCommands.groups).map(([groupName, groupCommands]) => {
                      const filteredGroupCommands = groupCommands.filter((cmd) =>
                        filteredCommands.includes(cmd)
                      )
                      if (filteredGroupCommands.length === 0) return null

                      return (
                        <div key={groupName}>
                          <CommandPrimitive.Group
                            heading={groupName}
                            className="px-2 py-1.5 text-xs font-semibold text-muted-foreground"
                          >
                            {filteredGroupCommands.map((cmd) => (
                              <CommandPrimitive.Item
                                key={cmd.id}
                                value={cmd.id}
                                keywords={cmd.keywords}
                                onSelect={() => handleCommandSelect(cmd)}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              >
                                {cmd.icon && (
                                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                    {cmd.icon}
                                  </div>
                                )}
                                <span>{cmd.label}</span>
                              </CommandPrimitive.Item>
                            ))}
                          </CommandPrimitive.Group>
                        </div>
                      )
                    })}
                    {groupedCommands.ungrouped.filter((cmd) => filteredCommands.includes(cmd)).length > 0 && (
                      <div>
                        {groupedCommands.ungrouped
                          .filter((cmd) => filteredCommands.includes(cmd))
                          .map((cmd) => (
                            <CommandPrimitive.Item
                              key={cmd.id}
                              value={cmd.id}
                              keywords={cmd.keywords}
                              onSelect={() => handleCommandSelect(cmd)}
                              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                              {cmd.icon && (
                                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                  {cmd.icon}
                                </div>
                              )}
                              <span>{cmd.label}</span>
                            </CommandPrimitive.Item>
                          ))}
                      </div>
                    )}
                  </>
                )}
              </CommandPrimitive.List>
            </CommandPrimitive>
          </DialogContent>
        </Dialog>
      </>
    )
  }
)
CommandPalette.displayName = "CommandPalette"

export { CommandPalette }

