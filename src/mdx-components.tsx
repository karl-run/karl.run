import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 className="mb-4 text-4xl font-bold" {...props} />,
    h2: (props) => <h2 className="mb-1 text-2xl font-bold" {...props} />,
    h3: (props) => <h3 className="mb-1 text-xl font-bold" {...props} />,
    h4: (props) => <h4 className="mb-1 text-lg font-bold" {...props} />,
    h5: (props) => <h5 className="mb-1 text-base font-bold" {...props} />,
    h6: (props) => <h6 className="mb-1 text-sm font-bold" {...props} />,
    p: (props) => <p className="mb-4" {...props} />,
    ul: (props) => <ul className="mb-4 list-disc list-inside" {...props} />,
    ol: (props) => <ol className="mb-4 list-decimal list-inside" {...props} />,
    li: (props) => <li className="mb-2" {...props} />,
    a: (props) => <a className="text-[#0d9e91] hover:underline" {...props} />,
    blockquote: (props) => <blockquote className="mb-4 p-4 bg-gray-100 dark:bg-gray-800" {...props} />,
    hr: (props) => <hr className="my-4" {...props} />,
    pre: (props) => <pre className="mb-4" {...props} />,
    code: (props) => <code className="p-1 bg-[#2d2b57]" {...props} />,
    Image: (props) => <Image {...props} className="mordi" />,
  };
}
