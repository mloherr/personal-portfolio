import '../scss/components/BannerProjects.scss';
import '../scss/core/variables.scss';

function BannerProjects({ items }) {
  return (
    <div className="relative flex w-full overflow-x-hidden  titleSection">
      <div className="animate-marquee whitespace-nowrap py-6 titleSection__text">
        {items.map((item) => {
          return (
            <span key={item} className="mx-10 text-4xl">
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6 titleSection__text">
        {items.map((item) => {
          return (
            <span key={item} className="mx-10 text-4xl">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default BannerProjects;
