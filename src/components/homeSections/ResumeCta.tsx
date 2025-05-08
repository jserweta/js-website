import {CtaSectionQueryResult} from '../../../sanity.types';
import Button from '../Button';

export default function ResumeCta({data}: {data: CtaSectionQueryResult}) {
  const {ctaContent, ctaButton, downloadFile} = data || {};

  return (
    <>
      {ctaContent && ctaButton && downloadFile && (
        <article className="font-futura mb-16 flex flex-col items-center justify-between gap-7 text-3xl lg:flex-row">
          <p className="mr-2.5 text-center lg:text-left">
            {ctaContent.slice(0, ctaContent.length - 2)}{' '}
            <span className="text-primary">{ctaContent.slice(-2)}</span>
          </p>
          <Button text={ctaButton} file={downloadFile} />
        </article>
      )}
    </>
  );
}
