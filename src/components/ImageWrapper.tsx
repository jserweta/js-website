import {urlForImage} from '@/sanity/lib/utils';
import Image from 'next/image';

type ImageWrapperProps = {
  'image'?: {asset?: any};
  'alt'?: string;
  'width'?: number;
  'height'?: number;
  'size'?: string;
  'classesWrapper'?: string;
  'data-sanity'?: string;
};

export default function ImageWrapper({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
  ...props
}: ImageWrapperProps) {
  const imageUrl = image && urlForImage(image)?.height(height).width(width).fit('crop').url();

  return (
    <figure className={classesWrapper} data-sanity={props['data-sanity']}>
      {imageUrl && (
        <Image
          className="h-full w-full"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </figure>
  );
}
