import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'

const ResponsiveImage = async (props: any): Promise<JSX.Element> => {
  // const promise = await import(props.src);
//
  // console.log(promise);

  return (
    <Image alt={props.alt} {...props} width={300} height={300} />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // img: ResponsiveImage,
  }
}
