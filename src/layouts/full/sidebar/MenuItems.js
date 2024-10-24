import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [

  {
    id: uniqueId(),
    title: "תפריט",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },

  {
    id: uniqueId(),
    title: "מסמכים",
    icon: IconTypography,
    href: "/ui/typography",
  },
  {
    id: uniqueId(),
    title: "מצא ספקים",
    icon: IconCopy,
    href: "/ui/shadow",
  },
  {
    id: uniqueId(),
    title: "מפה",
    icon: IconLogin,
    href: "/auth/login",
  },
  {
    id: uniqueId(),
    title: "סרטוני הדרכה",
    icon: IconUserPlus,
    href: "/auth/register",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "צור קשר",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
