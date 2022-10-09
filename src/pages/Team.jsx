import React from "react";

export default function Team() {
  return (
    <div>
      <img
        className="lg:absolute lg:bottom-0 lg:left-0 p-9"
        src="/img/logo.png"
        alt="COLAB Logo"
      />
      <div class="max-w-3xl mx-auto pb-28">
      <article class="prose lg:prose-xl text-lg text-white font-extralight px-9 lg:mt-9">
          <h1 class="text-white font-semibold">Our Team.</h1>
          </article>
        <div class="flex flex-wrap lg:gap-x-8 gap-y-12 lg:gap-y-20 p-9 text-white">
          <div class="flex flex-col w-full gap-y-2 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
            <h3 class="text-5xl font-normal">Rohit</h3>
            <div class="flex gap-y-2 lg:text-left lg:gap-y-1 flex-col">
              <div class="flex gap-x-2 items-center">
                <div class="bg-inherit border rounded-full px-4">
                  Product Management
                </div>
              </div>
              <a
                class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors "
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/rohitbommisetti"
              >
                @rohitbommisetti
              </a>
            </div>
          </div>
          <div class="flex flex-col w-full gap-y-2 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
            <h3 class="text-5xl font-normal">Jeff</h3>
            <div class="flex gap-y-2 lg:text-left lg:gap-y-1 flex-col">
              <div class="flex gap-x-2 items-center">
                <div class="bg-inherit border rounded-full px-4">
                  Engineering
                </div>
                <div class="bg-inherit border rounded-full px-4">
                  Design
                </div>
              </div>
              <a
                class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors "
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/leonatajeff/"
              >
                @1eonata
              </a>
            </div>
          </div>
          <div class="flex flex-col w-full gap-y-2 md:w-1/2 lg:flex-row lg:items-end lg:w-auto lg:gap-x-3 lg:gap-y-0">
            <h3 class="text-5xl font-normal">Flora</h3>
            <div class="flex gap-y-2 lg:text-left lg:gap-y-1 flex-col">
              <div class="flex gap-x-2 items-center">
                <div class="bg-inherit border rounded-full px-4">
                  Marketing
                </div>
              </div>
              <a
                class="text-[#5c75f5] hover:text-[#90bcfe] transition-colors "
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/flora-stein-b45372208/"
              >
                @Flora
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
