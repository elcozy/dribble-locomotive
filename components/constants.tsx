export const navigation = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/#resources" },
  { name: "Contact", href: "/#contact" },
];

export const featuresDropdownItems = [
  {
    img: "https://tailwindui.com/img/logos/mark.svg?color=black&shade=600",
    title: "Store",
    link: "#",
    description: "Start selling online.",
  },
  {
    img: "https://tailwindui.com/img/logos/mark.svg?color=black&shade=600",
    title: "Payment Link",
    link: "#",
    description: " Accept payment without writing code.",
  },
  {
    img: "https://tailwindui.com/img/logos/mark.svg?color=black&shade=600",
    title: "Invoices",
    link: "#",
    description: "Create professional invoices.",
  },
];

export const countries = [
  { countryName: "Cameroon", image: "cm" },
  { countryName: "Egypt", image: "egypt" },
  { countryName: "Ghana", image: "gh" },
  { countryName: "Ivory Coast", image: "ci" },
  { countryName: "Kenya", image: "ke" },
  { countryName: "Malawi", image: "" },
  { countryName: "Mauritius", image: "" },
  { countryName: "Nigeria", image: "" },
  { countryName: "Rest of Europe", image: "eu" },
  { countryName: "Rwanda", image: "" },
  { countryName: "Senegal", image: "" },
  { countryName: "South Africa", image: "sa" },
  { countryName: "Tanzania", image: "" },
  { countryName: "Uganda", image: "" },
  { countryName: "United Kingdom", image: "gb" },
  { countryName: "United States", image: "us" },
  { countryName: "Zambia", image: "" },
];

export const heroFLoat = [
  {
    tag: "improvement",
    color: "text-violet-500",
    bg: "bg-violet-200",
    imgBg: "violet",
    comment: "Just helpful for me, and I like it!",
    position: "top-0 origin-top-left rotate-6",
    itemImage:
      "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg",
  },
  {
    tag: "perfect",
    color: "text-green-500",
    bg: "bg-green-200",
    imgBbg: "green",
    comment: "Very helpful for me to manage my data",
    position: "right-0 origin-bottom -rotate-6",
    itemImage:
      "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
  },
  {
    tag: "cool app",
    color: "text-red-500",
    bg: "bg-red-200",
    imgBg: "red",
    comment: "Its an amazing app for company to managing",
    position: "bottom-0 origin-bottom -rotate-6",
    itemImage:
      "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg",
  },
  {
    tag: "awesome",
    color: "text-amber-500",
    bg: "bg-amber-200",
    imgBg: "amber",
    comment: "I think its good app for manage!",
    position: "bottom-0 right-0 origin-bottom rotate-6",
    itemImage:
      "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png",
  },
];

export type THeroItem = {
  tag?: string;
  comment?: string;
  color?: string;
  bg?: string;
  imgBg?: string;
  classNames?: string;
  itemImage?: string;
};

export const footerSupport = [
  {
    title: "Help Center",
    icon: "support",
    description:
      "Find answers in a flash with your dedicated resource for articles and videos from our Support team.",
    actionText: "Get Help",
  },
  {
    title: "Our Community",
    icon: "citizen",
    description:
      "Connect with a community of brands, partners, and fellow merchants who understand SellHustle.",
    actionText: "Connect",
  },
];
