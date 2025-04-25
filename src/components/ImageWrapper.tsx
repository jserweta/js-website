import {urlForImage} from '@/sanity/lib/utils';
import {FitMode} from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

type ImageWrapperProps = {
  'image'?: {asset?: any};
  'alt'?: string;
  'width'?: number;
  'height'?: number;
  'size'?: string;
  'classesWrapper'?: string;
  'fit'?: FitMode;
  'data-sanity'?: string;
};

export default function ImageWrapper({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
  fit = 'crop',
  ...props
}: ImageWrapperProps) {
  const imageUrl = image && urlForImage(image)?.height(height).width(width).fit(fit).url();

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
