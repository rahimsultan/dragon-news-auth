import { GoCalendar } from 'react-icons/go';

const NewsCard = ({news}) => {
    // destructure news obj
    const {title, author, image_url} = news
  return (
    <div className="max-w-[90%] mx-auto p-2">
      <div>
        <img src={image_url} alt="" />
      </div>
      <h2 className="text-xl font-semibold mb-5 mt-2">
        {title}
      </h2>
      <div className="flex items-center justify-between">
        <span className="font-semibold">{author.name}</span>
        <span className="flex items-center gap-2">
          {" "}
          <GoCalendar /> {author.published_date.slice(0,10)}
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
