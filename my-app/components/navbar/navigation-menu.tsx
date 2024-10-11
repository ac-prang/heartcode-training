// import Link from "next/link";
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
// import { ModeToggle } from "../mode-toggle";
// // import { ThemeToggle } from "../theme-toggle";
// import { NavigationItem, NavItem } from "./navigation-item";

// const navItems: NavItem[] = [
// 	{ navigationLink: "/", navigationDescription: "Project Heartcode" },
// 	{ navigationLink: "/quiz", navigationDescription: "Quiz" },
// 	{ navigationLink: "/about-me", navigationDescription: "About Me" },
// ]

// // export default function NavigationBar() {
// // 	return (
// //     	<NavigationMenu className="sticky top-0 list-none flex justify-between min-w-full h-[60px] bg-muted px-5">
// //         	<div className="flex flex-row justify-start gap-4">
// //             	{navItems.map((navItem, index) => <NavigationItem key={index} navigationLink={navItem.navigationLink} navigationDescription={navItem.navigationDescription} />)}
// //         	</div>
// //         	<div className="flex flex-row justify-end">
// //             	<ThemeToggle />
// //         	</div>
// //     	</NavigationMenu>
// // 	)
// // }

// export function NavigationBar() {
//     return (
//         <NavigationMenu className="flex flex-row justify-start min-w-full list-none h-16 sticky top-0 p-5">
//             <div className = "flex flex-row">
//             <NavigationMenuItem>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                         Home
//                     </NavigationMenuLink>
//             </NavigationMenuItem></div>
//             <NavigationMenuItem>
//                 <Link href="/quiz" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                         Quiz
//                     </NavigationMenuLink>
//                 </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//                 <Link href="/about-me" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                         About me
//                     </NavigationMenuLink>
//                 </Link>
//             </NavigationMenuItem>
//             <ModeToggle/>
//         </NavigationMenu>
//     )
// }
import { ModeToggle } from "../mode-toggle";
import { NavigationMenu } from "../ui/navigation-menu";
import { NavigationItem, NavItem } from "./navigation-item";

const navItems: NavItem[] = [
	{ navigationLink: "/", navigationDescription: "Project Heartcode" },
	{ navigationLink: "/quiz", navigationDescription: "Quiz" },
	{ navigationLink: "/about-me", navigationDescription: "About Me" },
]

export function NavigationBar() {
	return (
    	<NavigationMenu className="sticky top-0 list-none flex justify-between min-w-full h-[60px] bg-muted px-5">
        	<div className="flex flex-row justify-start gap-4">
            	{navItems.map((navItem, index) => <NavigationItem key={index} navigationLink={navItem.navigationLink} navigationDescription={navItem.navigationDescription} />)}
        	</div>
        	<div className="flex flex-row justify-end">
            	<ModeToggle/>
        	</div>
    	</NavigationMenu>
	)
}
