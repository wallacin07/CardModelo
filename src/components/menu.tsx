// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// export default function Component() {
//   const [isOpen, setIsOpen] = useState(false)

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <header className="w-full bg-background">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-2xl font-bold">
//               Logo
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-4">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-foreground hover:text-primary transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Navigation */}
//           <div className="md:hidden">
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left" className="w-[240px] sm:w-[300px]">
//                 <nav className="flex flex-col space-y-4 mt-4">
//                   {menuItems.map((item) => (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className="text-foreground hover:text-primary transition-colors"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }