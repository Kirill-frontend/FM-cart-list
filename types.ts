export interface IProduct {
  image: IImagePaths
  name: string;
  category: string;
  price: number;
}

interface IImagePaths {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}