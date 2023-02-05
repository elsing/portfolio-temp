import { SocialIcon } from "react-social-icons";

export default function SocialIcons() {
  return (
    <div className="flex gap-2 py-2 justify-center">
      <SocialIcon
        target="_blank"
        url="https://www.linkedin.com/in/elliotsinger/"
      />
      <SocialIcon target="_blank" url="https://github.com/elsing" />
      <SocialIcon target="_blank" url="mailto:elliot@singermail.uk" />
    </div>
  );
}
