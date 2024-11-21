"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import { homeLinks } from "@components/Pages/home/Home";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-24 ">
      <NavigationMenu className="relative overflow-visible">
        <NavigationMenuList className=" flex space-x-6 ">
          <NavigationMenuItem className="relative ">
            <NavigationMenuTrigger
                className="NavigationMenuTrigger px-4 py-2 rounded-md text-xl "
            >About Ardhi Analytics</NavigationMenuTrigger>
            <NavigationMenuContent className="NavigationMenuContent " >
              <ul className="p-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                        href="/"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b
                      from-gray-300/[0.25] to-gray-400/[0.25] p-6 no-underline outline-none focus:shadow-md"
                    >
                      <Image
                          src="/logo/logo.png"
                          width={64}
                          height={32}
                          alt="Ardhi logo"
                          priority // Preloads the image
                          className="w-24 mb-4"
                      />
                      <h4 className="text-lg font-medium">
                        Ardhi Analytics
                      </h4>
                      <p className="text-sm text-gray-500">
                        Beautifully designed components. Customizable. Open
                        Source.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>

              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem  className="relative">
            <NavigationMenuTrigger
                className="px-4 py-2 NavigationMenuTrigger rounded-md text-xl"
            >Components</NavigationMenuTrigger>
            <NavigationMenuContent className="NavigationMenuContent" >
              <ul className="p-2  ">
                {homeLinks.map((homeLinks) => (
                  <ListItem
                    key={homeLinks.id}
                    title={homeLinks.title}
                    href={homeLinks.href}
                  >
                    {homeLinks.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative">
            <Link
              href="https://github.com/Ardhi-OWM/landing-page/releases/"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-xl"> Documentation </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref as React.Ref<HTMLAnchorElement>} // Adjusted ref type
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none " +
            "transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent " +
            "focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

