import '../scss/components/BannerProjects.scss';
import '../scss/core/variables.scss';

function BannerProjects({ items }) {
  const marginBanner = window.innerWidth >= 726 ? 'mx-20' : 'mx-10';
  const textSize = window.innerWidth >= 726 ? 'text-6xl' : 'text-4xl';

  const combinedClassNames = `${marginBanner} ${textSize}`;
  return (
    <div className="relative flex w-full overflow-x-hidden  titleSection">
      <div className="animate-marquee whitespace-nowrap py-6 titleSection__text">
        {items.map((item) => {
          return (
            <span key={item} className={combinedClassNames}>
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6 titleSection__text">
        {items.map((item) => {
          return (
            <span key={item} className={combinedClassNames}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default BannerProjects;
