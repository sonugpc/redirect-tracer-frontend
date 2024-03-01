import ButtonCircle from "components/Button/ButtonCircle";
import Input from "components/Input/Input";
import NcImage from "components/NcImage/NcImage";
import WhatIsRedirectChecker from "components/RedirectPageInfo/WhatIsRedirectChecker";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import TraceResult from "components/Tracer/TraceResult";
import { DEMO_AUTHORS } from "data/authors";
import { DEMO_POSTS } from "data/posts";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { PostDataType } from "data/types";
import { FC, useState } from "react";
import Config from "../../../config";
import useTracer from "../../hooks/useTracer";
export interface PageSearchProps {
  className?: string;
}

const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 12);
const cats = DEMO_CATEGORIES.filter((_, i) => i < 15);
const tags = DEMO_CATEGORIES.filter((_, i) => i < 32);
const authors = DEMO_AUTHORS.filter((_, i) => i < 12);

const FILTERS = [
  { name: "Most Recent" },
  { name: "Curated by Admin" },
  { name: "Most Appreciated" },
  { name: "Most Discussed" },
  { name: "Most Viewed" },
];

const TABS = ["Articles", "Categories", "Tags", "Authors"];

const PageSearch: FC<PageSearchProps> = ({ className = "" }) => {
  let s = "Technology";
  const content = Config.SITE_CONTENT;
  const title = "URL Redirect Checker";

  const [formValues, setFormValues] = useState({
    url: "",
  });
  const [errors, setErrors] = useState({});
  const { trace, loading, result, error } = useTracer();

  const handleChangeForm = (ev: any) => {
    const { name, value } = ev.target;

    // Update the formData object with the new value
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors: any = {};

    // Validate name

    // Validate URL
    if (!formValues.url.trim()) {
      newErrors["url"] = "URL is required";
      isValid = false;
    } else if (!/^https?:\/\/.+/.test(formValues.url)) {
      newErrors.url = "Invalid URL format";
      isValid = false;
    } else {
      newErrors = {};
      isValid = true;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmitForm = (ev: any) => {
    ev.preventDefault();

    if (!validateForm()) {
      return;
    }
    console.log(trace, loading, error);

    trace({ shortUrl: formValues.url.trim() });
  };
  return (
    <div className={`nc-PageSearch ${className}`} data-nc-id="PageSearch">
      {/* HEADER */}
      <div className="w-screen px-2 xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-16 sm:aspect-h-9 lg:aspect-h-5 overflow-hidden ">
          <NcImage
            containerClassName="absolute inset-0"
            src="https://picsum.photos/1260/750"
            className="object-cover w-full h-full"
          />
        </div>
        {/* CONTENT */}
        <div className="relative container -mt-20 lg:-mt-60">
          <div className=" bg-[#ffffffeb] backdrop-blur dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex flex-col items-center">
            <header className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-2xl sm:text-4xl font-semibold">{title}</h2>
              {/* <span className="block text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300">
                We found{" "}
                <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                  1135
                </strong>{" "}
                results for{" "}
                <strong className="font-medium text-neutral-800 dark:text-neutral-100">
                  {s}
                </strong>
              </span> */}
              <form
                className="relative w-full mt-8 sm:mt-11 text-left"
                onSubmit={handleSubmitForm}
              >
                <label
                  htmlFor="search-input"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  <span className="sr-only">Search all icons</span>
                  <Input
                    id="search-input"
                    disabled={loading}
                    onChange={handleChangeForm}
                    type="url"
                    name="url"
                    placeholder="Type a Short Url"
                    sizeClass="pl-14 py-5 pr-5 md:pl-16"
                  />
                  {!loading && (
                    <ButtonCircle
                      disabled={!Object.values(errors).every((error) => !error)}
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
                      size=" w-11 h-11"
                      type="submit"
                    >
                      <i className="las la-arrow-right text-xl"></i>
                    </ButtonCircle>
                  )}
                  {loading && (
                    <ButtonCircle
                      disabled
                      className=" absolute right-2.5 top-1/2 transform -translate-y-1/2"
                      size=" w-11 h-11"
                    >
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    </ButtonCircle>
                  )}

                  <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                      ></path>
                    </svg>
                  </span>
                </label>
              </form>
              <div className="w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300">
                <div className="block">
                  <span className="text-red-500">{errors["url"]}</span>
                </div>
                <div className="inline-block">
                  Use http:// or https:// with your URL
                </div>
              </div>
            </header>
            {result && (
              <section>
                <TraceResult result={result} />
              </section>
            )}
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}

        {/* === SECTION 5 === */}

        {/* SUBCRIBES */}
        {content.map((item: any, index: number) => (
          <WhatIsRedirectChecker
            heading={item.heading}
            content={item.content}
            key={index}
          />
        ))}

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageSearch;
