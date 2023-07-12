import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

import wand from "../../assets/magic wand.svg";

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/shorten", {
        params: { url: url },
      });

      const shortenedUrl = response.data;
      setShortenedUrl(shortenedUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="bg-custom-bg bg-no-repeat bg-cover">
      <div className="w-full md:max-w-sm max-w-[80%] mx-auto my-auto py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-custom rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col gap-3">
          <div className="mb-4">
            <input
              className="placeholder:text-[0.6rem] md:placeholder:text-base appearance-none border border-primaryTextColorBlue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
              id="urlInput"
              type="text"
              placeholder="Paste URL here"
              value={url}
              onChange={handleUrlChange}
            />
          </div>
          {/* <div className="flex mb-4">
            <div className="w-1/2 mr-1">
              <div className="relative">
                <select
                  className="placeholder:text-[0.6rem] md:placeholder:text-base appearance-none border border-primaryTextColorBlue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
                  id="domainSelect">
                  <option value="">Choose Domain</option> */}
                  {/* <option value="example.com">Domain.com</option>
                  <option value="example.net">Domain.net</option>
                  <option value="example.org">Domain.org</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div> */}
            <div className="w-full">
              <input
                className="placeholder:text-[0.6rem] md:placeholder:text-base appearance-none border border-secTextColorBlue rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
                id="aliasInput"
                type="text"
                placeholder="shortened url"
                value={shortenedUrl}
              />
            </div>
          {/* </div> */}
          <button
            className="bg-secTextColorBlue text-white font-bold py-3 px-4 rounded-full w-full flex justify-center items-center gap-x-2"
            type="submit">
            Trim
            <img src={wand} alt="magic" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UrlShortner;
