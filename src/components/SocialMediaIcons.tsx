import {ReactSVG} from 'react-svg';
import {SocialIconsQueryResult} from '../../sanity.types';

export default function SocialMediaIcons({
  socialIconsData,
}: {
  socialIconsData: SocialIconsQueryResult;
}) {
  const socialIcons = socialIconsData?.socialIcons;

  return (
    <div className="flex gap-3.5">
      {socialIcons &&
        socialIcons.length > 0 &&
        socialIcons.map((item) => {
          if (item.url) {
            return (
              <a key={item._key} href={item.url} target="_blank" rel="noreferrer">
                {item.iconURL && (
                  <ReactSVG
                    src={item.iconURL}
                    beforeInjection={(svg) => {
                      svg.classList.add('hover:fill-primary', 'h-[20px]', 'w-[20px]', 'fill-white');
                    }}
                  />
                )}
              </a>
            );
          }
        })}
    </div>
  );
}
