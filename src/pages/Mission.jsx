import React from "react";

export default function Mission() {
  return (
    <div>
      <img
        className="lg:absolute lg:bottom-0 lg:left-0 p-9"
        src="/img/logo.svg"
        alt="COLAB Logo"
      />
      <div class="max-w-3xl mx-auto">
        <article class="prose lg:prose-xl text-lg text-white font-extralight px-9 lg:mt-9 pb-20">
          <h1 class="text-white font-semibold">Our Mission.</h1>
          <p>
            We are a team of students disillusioned by the lectures of
            entrepreneurship on campus — we believe learning is best done by
            doing.
          </p>
          <p>
            We are making a bet on student potential — student builders have
            created this generation's most impactful products like Facebook,
            Dropbox, Reddit, and DoorDash. We believe Pitt has a hand to play in
            creating the next generation of products.
          </p>
          <p>
            We’re talking about initiatives like Pitt's very own national
            startup career fair to help you land internships, software products
            with recurring revenue, and networking events to accelerate your
            college career.
          </p>
        </article>
      </div>
    </div>
  );
}
