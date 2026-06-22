export interface Product {
  id: string;
  name: string;
  weight: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: 'retail' | 'wholesale' | 'package';
  tag?: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will map to Lucide icons
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'production' | 'product' | 'packaging' | 'delivery';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  businessName?: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface OperationalHour {
  day: string;
  hours: string;
  closed?: boolean;
}
