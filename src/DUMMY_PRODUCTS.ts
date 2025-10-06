import image1 from './assets/glasses_1.png'
import image2 from './assets/glasses_2.png'
import image3 from './assets/glasses_3.png'
import image4 from './assets/glasses_4.png'
import image5 from './assets/glasses_5.png'
import image6 from './assets/glasses_6.jpg'

export type Glasses = {
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
}

export const glasses: Glasses[] = [
  {
    name: "Aviator Classic",
    brand: "Ray-Ban",
    price: 159.99,
    description: "Timeless pilot-style sunglasses with lightweight metal frames and polarized lenses.",
    image: image1
  },
  {
    name: "Clubmaster Retro",
    brand: "Ray-Ban",
    price: 139.99,
    description: "Iconic half-rim frame design with durable acetate temples for a vintage look.",
    image: image2
  },
  {
    name: "Round Metal",
    brand: "John Jacobs",
    price: 89.99,
    description: "Minimalist round glasses with a sleek golden frame and UV-protected lenses.",
    image: image3
  },
  {
    name: "Square Bold",
    brand: "Oakley",
    price: 129.99,
    description: "Sporty square-shaped glasses with lightweight frames designed for all-day comfort.",
    image: image4
  },
  {
    name: "Wayfarer Original",
    brand: "Ray-Ban",
    price: 149.99,
    description: "Classic wayfarer frames with a modern touch, offering 100% UV protection.",
    image: image5
  },
  {
    name: "Cat Eye Chic",
    brand: "Prada",
    price: 249.99,
    description: "Elegant cat-eye frames with bold edges, perfect for a stylish statement.",
    image: image6
  },
  {
    name: "Urban Edge",
    brand: "Gucci",
    price: 299.99,
    description: "Oversized rectangular frames that combine fashion-forward style with everyday comfort.",
    image: image1
  },
  {
    name: "Hexagonal Flat Lenses",
    brand: "Ray-Ban",
    price: 169.99,
    description: "Unique hexagonal-shaped lenses with a thin metal frame for a modern twist.",
    image: image2
  },
  {
    name: "Navigator Titanium",
    brand: "Persol",
    price: 219.99,
    description: "Lightweight titanium frame sunglasses with crystal-clear polarized lenses.",
    image: image3
  },
  {
    name: "Futuristic Shield",
    brand: "Oakley",
    price: 199.99,
    description: "Single-lens shield sunglasses for a sporty and futuristic look.",
    image: image4
  },
  {
    name: "Minimalist Clear",
    brand: "Warby Parker",
    price: 95.00,
    description: "Transparent acetate frame glasses with lightweight comfort and versatility.",
    image: image5
  },
  {
    name: "Vintage Round Tortoise",
    brand: "Persol",
    price: 179.99,
    description: "Retro round frame design with a tortoise shell finish for classic appeal.",
    image: image6
  },
  {
    name: "Bold Square Acetate",
    brand: "Tom Ford",
    price: 349.99,
    description: "High-fashion square acetate frames with luxury detailing and bold lines.",
    image: image1
  },
  {
    name: "Lightweight Rimless",
    brand: "Silhouette",
    price: 259.99,
    description: "Ultra-light rimless design providing maximum comfort and a subtle aesthetic.",
    image: image2
  },
  {
    name: "Retro Pilot",
    brand: "Carrera",
    price: 129.99,
    description: "Sporty pilot-style sunglasses with bold double bridge and durable materials.",
    image: image3
  },
  {
    name: "Eco Bamboo Frames",
    brand: "Blue Planet",
    price: 79.99,
    description: "Eco-friendly sunglasses made with bamboo temples and polarized lenses.",
    image: image4
  },
  {
    name: "Gradient Cat Eye",
    brand: "Michael Kors",
    price: 199.99,
    description: "Feminine cat-eye frames with gradient lenses and chic gold accents.",
    image: image5
  },
  {
    name: "Sport Wrap",
    brand: "Nike Vision",
    price: 149.99,
    description: "Curved wraparound sports sunglasses designed for high performance activities.",
    image: image6
  },
  {
    name: "Oversized Glam",
    brand: "Dior",
    price: 399.99,
    description: "Bold oversized frames with luxury detailing for a glamorous appearance.",
    image: image1
  },
  {
    name: "Classic Square Black",
    brand: "Ray-Ban",
    price: 129.99,
    description: "Versatile black square frames with durable acetate build and UV protection.",
    image: image2
  }
];