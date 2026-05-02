import type { ImgHTMLAttributes, ReactElement } from 'react';

type ImageSource = string | { src: string; width?: number; height?: number };

interface ContentImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: ImageSource;
  placeholder?: string;
}

function ContentImage({ src, alt = '', placeholder: _placeholder, ...props }: ContentImageProps): ReactElement {
  const imageSource = typeof src === 'string' ? src : src.src;
  const width = props.width ?? (typeof src === 'string' ? undefined : src.width);
  const height = props.height ?? (typeof src === 'string' ? undefined : src.height);

  return <img {...props} src={imageSource} alt={alt} width={width} height={height} />;
}

export default ContentImage;
