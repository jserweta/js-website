import {HighlightDecorator} from '@/sanity/components/HighlightDecorator';
import {PortableText, type PortableTextBlock, type PortableTextComponents} from 'next-sanity';

export function CustomPortableText({value}: {value: PortableTextBlock[]}) {
  const components: PortableTextComponents = {
    marks: {
      highlight: ({children}) => {
        return <HighlightDecorator>{children}</HighlightDecorator>;
      },
    },
  };

  return <PortableText components={components} value={value} />;
}
