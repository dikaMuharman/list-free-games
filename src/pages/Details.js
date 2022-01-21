import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RiPlayMiniFill } from 'react-icons/ri';

const Details = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const {
    description,
    short_description,
    developer,
    game_url,
    genre,
    minimum_system_requirements,
    platform,
    publisher,
    release_date,
    screenshots,
    thumbnail,
    title,
  } = game;
  useEffect(() => {
    const fetchDetailsGame = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: id },
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key':
            '25c1514c8cmsh30a072b1f336c81p10560cjsneb020873a2fc',
        },
      };
      const response = await axios.request(options);
      setGame(response.data);
      console.log(response.data);
    };
    fetchDetailsGame();
  });
  return (
    <>
      {game && (
        <div className=" font-sans md:h-screen ">
          <img
            src={thumbnail}
            alt={title}
            className="w-full object-cover sm:hidden"
          />
          <div className="max-w-screen-lg  lg:mx-auto mx-6 pt-4">
            <div className="flex">
              <img
                src={thumbnail}
                alt={title}
                className="w-1/2 object-cover hidden sm:block mr-4 "
              />
              <div>
                <div className="flex justify-between w-full items-center mb-5">
                  <h1 className="text-3xl font-semibold">{title}</h1>
                  <a
                    href={game_url}
                    className="bg-slate-500 hover:bg-slate-700 transition-colors text-white font-bold py-3 px-3 rounded-full"
                  >
                    <RiPlayMiniFill />
                  </a>
                </div>
                <p className="text-sm text-slate-500">{short_description}</p>
                <div className="mt-3">
                  <div className="flex items-center">
                    <p className="text-sm text-slate-500 w-1/3 uppercase ">
                      Release{' '}
                    </p>
                    <span className="text-slate-800">{release_date}</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-slate-500 w-1/3 uppercase ">
                      Developer{' '}
                    </p>
                    <span className="text-slate-800">{developer}</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-slate-500 w-1/3 uppercase ">
                      Publisher{' '}
                    </p>
                    <span className="text-slate-800">{publisher}</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-slate-500 w-1/3 uppercase ">
                      Platform{' '}
                    </p>
                    <span className="text-slate-800">{platform}</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-slate-500 w-1/3 uppercase ">
                      Genre{' '}
                    </p>
                    <span className="text-slate-800">{genre}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl mb-2">Description</h2>
              <p className="text-slate-700 leading-snug">{description}</p>
            </div>
            <div className="mt-4 mb-4 bg-white p-3 rounded">
              <h3 className="text-lg">Minimum system requirements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-2 mt-4">
                {minimum_system_requirements &&
                  Object.keys(minimum_system_requirements).map((properties) => (
                    <div className="flex text-sm">
                      <span className="text-slate-500 mr-2">{properties}</span>
                      <span className="mr-2">:</span>
                      <span className="text-slate-900">
                        {minimum_system_requirements[properties]}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
