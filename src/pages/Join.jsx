import React from "react";

export default function Join() {
  return (
    <div className="bg-neutral-900">
      <div class="  ">
        <img
          className="lg:absolute lg:bottom-0 lg:left-0 p-9 object-scale-down"
          src="/img/logo.svg"
          alt="COLAB Logo"
        />
      </div>
      <div className="-space-y-5 lg:scale-150 align-middle max-w-md mx-auto mt-20 lg:mt-72 p-9 ">
        <div>
          <img
            className="mb-0"
            src="/img/long-logo.png"
            alt="COLAB Long Logo"
          />
          <h2 className="text-start text-2xl lg:text-sm text-slate-50 font-thin mt-5">
            Because the next generation of technology products won’t be built in
            the classroom.
          </h2>
        </div>
        <br />
        <div className="items-center justify-center flex">
          <a
            className="flex flex-row font-thin text-xl lg:text-sm mt-12 lg:mt-16 text-white hover:text-gray-400"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMNCvi5iMo7VEkM6LjIwlkGRwEAXWVxMPR6-YWtA02ZcEC7Q/viewform"
          >
            Sign up to join
            <svg
              viewBox="0 0 17 14"
              fill="currentColor"
              className="h-8 lg:h-5 w-4 lg:w-4 ml-2"
            >
              <path d="M10.346 1.044a.75.75 0 1 0-1.06 1.06l4.388 4.389H.999a.75.75 0 0 0 0 1.5h12.675L9.285 12.38a.75.75 0 0 0 1.061 1.06l5.669-5.668a.748.748 0 0 0-.013-1.073l-5.656-5.656Z"></path>
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}
