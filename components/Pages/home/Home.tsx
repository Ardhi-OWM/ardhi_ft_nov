// Components/Pages/home/Home.tsx

import * as React from "react";

export const homeLinks: { id:number; title: string; href: string; description: string }[] =
  [
    {id:1,
      title: "Alert Dialog",
      href: "https://ardhi.de/",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        id:2,
      title: "Hover Card",
      href: "https://ardhi.de/",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
        id:3,
      title: "Progress",
      href: "https://ardhi.de/",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        id:4,
      title: "Scroll-area",
      href: "https://ardhi.de/",
      description: "Visually or semantically separates content.",
    },
    {
        id:5,
      title: "Tabs",
      href: "https://ardhi.de/",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        id:6,
      title: "Tooltip",
      href: "https://ardhi.de/",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

/*<ListItem href="/docs" title="Introduction">
    Re-usable components built using Radix UI and Tailwind CSS.
</ListItem>
<ListItem href="/docs/installation" title="Installation">
    How to install dependencies and structure your app.
</ListItem>
<ListItem href="/docs/primitives/typography" title="Typography">
    Styles for headings, paragraphs, lists...etc
</ListItem>*/
