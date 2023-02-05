import Image from "next/image";

import me from "../public/me.jpg";

export default function Top() {
  return (
    <div>
      <div className="py-2">
        <div className="flex justify-center py-2">
          <Image
            src={me}
            alt="Picture of me."
            className="rounded-full w-1/2 h-1/2"
          />
        </div>
        <h1 className="text-4xl flex justify-center font-bold ">
          Elliot Singer
        </h1>
        <h2 className="flex justify-center text-justify">
          Hello! I am a currently Computer Networks undergradudate with a
          passion for DevOPs, Software Engineering, home labbing and lots more!
          Furthermore, my love for learning allows me to quickly pick up new
          concepts.
        </h2>
      </div>
      <hr />
      <p className="flex justify-center py-2">
        Please feel free to reach out to me!
      </p>
      <hr />
    </div>
  );
}
