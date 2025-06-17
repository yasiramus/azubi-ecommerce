import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";

export const tabs = [
  { name: "Home", path: "/" },
  { name: "Headphones", path: "headphones" },
  { name: "Speakers", path: "speakers" },
  { name: "Earphones", path: "earphones" }
]


export const social_media = [
  { name: "Facebook", icon: Facebook, link: "#" },
  { name: "Twitter", icon: Twitter, link: "#" },
  { name: "Instagram", icon: Instagram, link: "#" },
];

export const categories = [
  {
    name: 'Headphones',
    slug: 'headphones',
    image: Headphones
  },
  {
    name: 'Speakers',
    slug: 'speakers',
    image: Speakers
  },
  {
    name: 'Earphones',
    slug: 'earphones',
    image: Earphones
  },
];