type ReviewT = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type DimensionsT = {
  width: number;
  height: number;
  depth: number;
};

type MetaT = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type ProductT = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsT;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewT[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaT;
  thumbnail: string;
  images: string[];
  New: boolean;
  Instalment: number;
  metirial: string;
};
