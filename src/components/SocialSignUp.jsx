import { Link } from "react-router-dom";
import { Button } from "./Button";

export function SocialSignUp() {
  return (
    <div className="h-11 w-full grid gap-3 grid-cols-3">
      <Link to={import.meta.env.VITE_GOOGLE_URL}>
        <Button
          width="w-full"
          height="h-11"
          shadowBox="shadow-[0px_1px_2px_0px_#1018280d]"
          border="border-[1px] border-[#D0D5DD]"
          bgColor="bg-white-4"
        >
          <img className="m-auto" src={"/google.svg"} alt="Google Icon" />
        </Button>
      </Link>
      <Link>
        <Button
          width="w-full"
          height="h-11"
          shadowBox="shadow-[0px_1px_2px_0px_#1018280d]"
          border="border-[1px] border-[#D0D5DD]"
          bgColor="bg-white-4"
        >
          <img className="m-auto" src={"/facebook.svg"} alt="Facebook Icon" />
        </Button>
      </Link>
      <Link to={import.meta.env.VITE_TWITTER_URL}>
        <Button
            width="w-full"
          height="h-11"
          shadowBox="shadow-[0px_1px_2px_0px_#1018280d]"
          border="border-[1px] border-[#D0D5DD]"
          bgColor="bg-white-4"
        >
          <img className="m-auto w-7 h-7" src={"/twitter.svg"} alt="Twitter Icon" />
        </Button>
      </Link>
    </div>
  );
}
