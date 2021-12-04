import Image from 'next/image';
import { forwardRef } from 'react';

import { ThumbUpIcon } from '@heroicons/react/outline';

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
  const {
    backdrop_path,
    poster_path,
    original_title,
    overview,
    title,
    name,
    media_type,
    release_date,
    first_air_date,
    vote_count,
  } = result;

  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        placeholder={'blur'}
        blurDataURL={
          `${BASE_URL}${backdrop_path || poster_path}` ||
          `${BASE_URL}${poster_path}`
        }
        src={
          `${BASE_URL}${backdrop_path || poster_path}` ||
          `${BASE_URL}${poster_path}`
        }
        height={1080}
        width={1920}
        alt={original_title || name || title}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {title || name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {media_type && `${media_type}`} • {release_date || first_air_date} •
          <ThumbUpIcon className="h-5 mx-2" /> {vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
