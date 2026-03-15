# shadcn/ui

shadcn/ui is a beautifully designed, customizable component library for React applications built on Tailwind CSS and Radix UI primitives. Unlike traditional component libraries that are installed as npm packages, shadcn/ui provides a unique approach where components are copied directly into your project, giving you full ownership and control over the source code. This allows developers to customize, extend, and build upon the components to create their own design systems.

The project includes a powerful CLI tool (`shadcn`) that handles project initialization, component installation, and registry management. It supports multiple frameworks including Next.js, Vite, React Router, Astro, Laravel, and TanStack Start. The CLI can fetch components from the official registry or custom registries, making it easy to share and distribute component libraries across teams and organizations.

## CLI Commands

### Initialize a Project

The `init` command sets up shadcn/ui in your project by installing dependencies, configuring Tailwind CSS, and creating the necessary configuration files.

```bash
# Interactive initialization with prompts
npx shadcn init

# Initialize with a specific template
npx shadcn init --template next

# Initialize with defaults (Next.js, base-nova preset)
npx shadcn init --defaults

# Initialize a monorepo project
npx shadcn init --template next --monorepo

# Initialize with a specific preset
npx shadcn init --preset nova

# Initialize from a custom registry URL
npx shadcn init https://your-registry.com/r/style

# Force overwrite existing configuration
npx shadcn init --force

# Enable RTL support
npx shadcn init --rtl

# Choose component library base (radix or base)
npx shadcn init --base radix
```

### Add Components

The `add` command installs components and their dependencies into your project from the registry.

```bash
# Add a single component
npx shadcn add button

# Add multiple components
npx shadcn add button card dialog

# Add all available components
npx shadcn add --all

# Add component with automatic confirmation
npx shadcn add button --yes

# Overwrite existing components
npx shadcn add button --overwrite

# Add component to a specific path
npx shadcn add button --path ./src/custom-components

# Preview changes without writing files (dry run)
npx shadcn add button --dry-run

# Show diff for a specific file
npx shadcn add button --diff ./components/ui/button.tsx

# View file contents that would be written
npx shadcn add button --view

# Add from a custom registry using namespace
npx shadcn add @acme/custom-button

# Add from a URL
npx shadcn add https://your-registry.com/r/button.json
```

### Search Components

The `search` command queries registries to find available components using fuzzy matching.

```bash
# Search the official shadcn registry
npx shadcn search @shadcn -q "button"

# Search multiple registries
npx shadcn search @shadcn @acme -q "dialog"

# List all items in a registry
npx shadcn search @shadcn --limit 50

# Paginate through results
npx shadcn search @shadcn --offset 20 --limit 10
```

### Build Registry

The `build` command compiles your component registry from a `registry.json` definition file.

```bash
# Build registry with default paths
npx shadcn build

# Build from custom registry file
npx shadcn build ./my-registry.json

# Output to custom directory
npx shadcn build --output ./dist/registry
```

### Run Migrations

The `migrate` command helps update components when switching icon libraries or adding RTL support.

```bash
# List available migrations
npx shadcn migrate --list

# Migrate to a different icon library
npx shadcn migrate icons

# Migrate to radix-ui
npx shadcn migrate radix

# Add RTL support to components
npx shadcn migrate rtl

# Migrate specific files
npx shadcn migrate rtl ./components/ui/button.tsx

# Skip confirmation prompts
npx shadcn migrate icons --yes
```

### MCP Server Commands

The `mcp` command provides Model Context Protocol integration for AI-assisted development.

```bash
# Start MCP server
npx shadcn mcp

# Initialize MCP configuration for Claude Code
npx shadcn mcp init --client claude

# Initialize MCP configuration for Cursor
npx shadcn mcp init --client cursor

# Initialize MCP configuration for VS Code
npx shadcn mcp init --client vscode

# Initialize MCP configuration for Codex
npx shadcn mcp init --client codex

# Initialize MCP configuration for OpenCode
npx shadcn mcp init --client opencode
```

## Configuration

### components.json Schema

The `components.json` file configures how shadcn/ui works in your project.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "@acme": "https://acme.com/r/{name}.json",
    "@internal": {
      "url": "https://internal.example.com/r/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

## Component Examples

### Button Component

A versatile button component with multiple variants and sizes built on Radix UI primitives.

```tsx
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Default button */}
      <Button>Click me</Button>

      {/* Button variants */}
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>

      {/* Button sizes */}
      <Button size="default">Default</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <PlusIcon className="h-4 w-4" />
      </Button>

      {/* Disabled state */}
      <Button disabled>Disabled</Button>

      {/* As child - render as different element */}
      <Button asChild>
        <a href="/dashboard">Go to Dashboard</a>
      </Button>

      {/* With icon */}
      <Button>
        <MailIcon className="mr-2 h-4 w-4" />
        Login with Email
      </Button>
    </div>
  )
}
```

### Card Component

A flexible card component for displaying content in a contained layout.

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontalIcon className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="vite">Vite</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
```

### Dialog Component

A modal dialog component for displaying important content that requires user attention.

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### Form with React Hook Form

Integration with react-hook-form for building validated forms with shadcn/ui components.

```tsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Profile updated!", {
      description: `Username: ${values.username}, Email: ${values.email}`,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Toast Notifications with Sonner

Display toast notifications using the sonner integration.

```tsx
"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Simple toast */}
      <Button onClick={() => toast("Event has been created")}>
        Show Toast
      </Button>

      {/* Toast with description */}
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        With Description
      </Button>

      {/* Success toast */}
      <Button onClick={() => toast.success("Successfully saved!")}>
        Success
      </Button>

      {/* Error toast */}
      <Button
        variant="destructive"
        onClick={() => toast.error("Something went wrong")}
      >
        Error
      </Button>

      {/* Toast with action */}
      <Button
        onClick={() =>
          toast("Event created", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo clicked"),
            },
          })
        }
      >
        With Action
      </Button>

      {/* Promise toast */}
      <Button
        onClick={() => {
          const promise = new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Sonner" }), 2000)
          )
          toast.promise(promise, {
            loading: "Loading...",
            success: (data) => `${data.name} has been added`,
            error: "Error",
          })
        }}
      >
        Promise
      </Button>
    </div>
  )
}
```

### Data Table

Create data tables with sorting, filtering, and pagination using TanStack Table.

```tsx
"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table"
import { useState } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Payment {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]

export function DataTableDemo({ data }: { data: Payment[] }) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
```

## Registry API

### Fetching Registry Items

Programmatic access to the component registry for building custom tooling.

```typescript
import {
  getRegistry,
  getRegistryItems,
  resolveRegistryItems,
  getShadcnRegistryIndex,
  getRegistryStyles,
  getRegistryBaseColors,
} from "shadcn/registry"

// Get the full registry index
const index = await getShadcnRegistryIndex()
// Returns: Array of registry items with name, type, dependencies, files

// Get specific registry items
const items = await getRegistryItems(["button", "card", "dialog"], {
  config: {
    style: "new-york",
    tailwind: { baseColor: "neutral" },
  },
})

// Resolve items with all dependencies
const resolvedTree = await resolveRegistryItems(
  ["@shadcn/command", "@shadcn/dialog"],
  { useCache: true }
)

// Get available styles
const styles = await getRegistryStyles()
// Returns: [{ name: "new-york", label: "New York" }, ...]

// Get base color options
const baseColors = await getRegistryBaseColors()
// Returns: ["slate", "gray", "zinc", "neutral", "stone"]

// Fetch from custom registry
const customRegistry = await getRegistry("@acme/registry", {
  config: {
    registries: {
      "@acme": "https://acme.com/r/{name}.json",
    },
  },
})
```

### Registry Item Schema

The structure of registry items for creating custom registries.

```typescript
import { registryItemSchema } from "shadcn/schema"

// Example registry item definition
const buttonItem = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "button",
  type: "registry:ui",
  title: "Button",
  description: "A customizable button component",
  dependencies: ["class-variance-authority", "radix-ui"],
  devDependencies: [],
  registryDependencies: [],
  files: [
    {
      path: "ui/button.tsx",
      type: "registry:ui",
      content: `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground...",
        destructive: "bg-destructive text-destructive-foreground...",
        outline: "border border-input bg-background...",
        secondary: "bg-secondary text-secondary-foreground...",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`,
    },
  ],
  cssVars: {
    light: {
      primary: "222.2 47.4% 11.2%",
      "primary-foreground": "210 40% 98%",
    },
    dark: {
      primary: "210 40% 98%",
      "primary-foreground": "222.2 47.4% 11.2%",
    },
  },
  categories: ["buttons"],
}

// Validate using the schema
const validated = registryItemSchema.parse(buttonItem)
```

### Creating a Custom Registry

Build and host your own component registry.

```json
// registry.json
{
  "name": "@acme/ui",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "fancy-button",
      "type": "registry:ui",
      "title": "Fancy Button",
      "description": "A button with fancy animations",
      "dependencies": ["framer-motion"],
      "registryDependencies": ["button"],
      "files": [
        {
          "path": "ui/fancy-button.tsx",
          "type": "registry:ui"
        }
      ]
    },
    {
      "name": "data-table",
      "type": "registry:component",
      "title": "Data Table",
      "description": "Advanced data table with sorting and filtering",
      "dependencies": ["@tanstack/react-table"],
      "registryDependencies": ["table", "button", "input"],
      "files": [
        {
          "path": "components/data-table.tsx",
          "type": "registry:component"
        },
        {
          "path": "components/data-table-pagination.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

```bash
# Build your registry
npx shadcn build ./registry.json --output ./public/r

# Users can then add your components
npx shadcn add @acme/fancy-button
```

## MCP Tools

### Available MCP Tools for AI Assistants

The shadcn MCP server provides tools for AI assistants to interact with component registries.

```typescript
// MCP tool: get_project_registries
// Returns configured registries from components.json
// Response: { registries: ["@shadcn", "@acme"] }

// MCP tool: list_items_in_registries
// Lists all items from specified registries
{
  registries: ["@shadcn"],
  limit: 50,
  offset: 0
}
// Response: { items: [...], pagination: { total, hasMore } }

// MCP tool: search_items_in_registries
// Fuzzy search across registries
{
  registries: ["@shadcn"],
  query: "button dialog",
  limit: 10
}
// Response: { items: [...], pagination: {...} }

// MCP tool: view_items_in_registries
// Get detailed item information with file contents
{
  items: ["@shadcn/button", "@shadcn/card"]
}
// Response: { name, description, type, files: [...] }

// MCP tool: get_item_examples_from_registries
// Find usage examples and demos
{
  registries: ["@shadcn"],
  query: "button-demo"
}
// Response: Full example code with dependencies

// MCP tool: get_add_command_for_items
// Get the CLI command to add items
{
  items: ["@shadcn/button", "@shadcn/card"]
}
// Response: "npx shadcn add @shadcn/button @shadcn/card"
```

## Summary

shadcn/ui provides a comprehensive solution for building modern React applications with beautifully designed, accessible components. The main use cases include rapid prototyping with pre-built components, creating custom design systems by extending the base components, and building enterprise applications with consistent UI patterns. The copy-paste approach ensures full ownership of the code, enabling teams to maintain and customize components without dependency version conflicts.

The integration patterns support multiple frameworks and build tools through the template system, with first-class support for Next.js App Router, Vite, React Router, Astro, and Laravel. The registry system enables organizations to create and share custom component libraries internally or publicly, while the MCP integration allows AI assistants to help developers discover, understand, and implement components efficiently. Whether you're building a simple landing page or a complex dashboard application, shadcn/ui provides the foundation for creating polished, production-ready user interfaces.
