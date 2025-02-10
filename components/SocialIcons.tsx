import { SocialIcon } from "react-social-icons";

export default function SocialIcons() {
  return (
    <div>
      <p className="flex justify-center py-2">
        Don&apos;t be a stranger, feel free to reach out to me!
      </p>
    <div className="flex gap-2 pb-4 justify-center">
      <SocialIcon url="https://www.linkedin.com/in/elliotsinger/" />
      <SocialIcon url="https://github.com/elsing" className="flex" />
      <SocialIcon url="mailto:elliot@singer.systems" />
    </div>
  </div>  
  );
}
