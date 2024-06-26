import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

function AccountActivationSuccessContent() {
  const navigate = useNavigate();
  return (
    <div className="h-[85dvh] flex justify-between items-center flex-col font-montserrat text-grey-6">
      <UserSuccess />
      <Button
        handleClick={() => navigate("/log-in")}
        width="w-full"
        bgColor="bg-primary-9"
      >
        Log in
      </Button>
    </div>
  );
}

export default AccountActivationSuccessContent;

function UserSuccess() {
  return (
    <div className="h-[240px] flex items-center justify-between flex-col text-[16px] text-left">
      <div className="flex items-center justify-center h-[140px]">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 15C40 17.6522 38.9464 20.1957 37.0711 22.0711C35.1957 23.9464 32.6522 25 30 25C27.3478 25 24.8043 23.9464 22.9289 22.0711C21.0536 20.1957 20 17.6522 20 15C20 12.3478 21.0536 9.8043 22.9289 7.92893C24.8043 6.05357 27.3478 5 30 5C32.6522 5 35.1957 6.05357 37.0711 7.92893C38.9464 9.8043 40 12.3478 40 15ZM39.195 33.7575C38.0125 33.77 36.91 33.815 35.95 33.9425C34.3425 34.16 32.5825 34.675 31.13 36.13C29.675 37.5825 29.16 39.3425 28.945 40.95C28.75 42.395 28.75 44.16 28.75 46.035V46.465C28.75 48.34 28.75 50.105 28.945 51.55C29.095 52.6775 29.395 53.88 30.0625 55H30C10 55 10 49.9625 10 43.75C10 37.5375 18.955 32.5 30 32.5C33.315 32.5 36.4425 32.9525 39.195 33.7575Z"
            fill="#3F6A11"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.25 55C37.125 55 35.0625 55 33.7825 53.7175C32.5 52.4375 32.5 50.375 32.5 46.25C32.5 42.125 32.5 40.0625 33.7825 38.7825C35.0625 37.5 37.125 37.5 41.25 37.5C45.375 37.5 47.4375 37.5 48.7175 38.7825C50 40.0625 50 42.125 50 46.25C50 50.375 50 52.4375 48.7175 53.7175C47.4375 55 45.375 55 41.25 55ZM46.17 44.365C46.4435 44.0915 46.5972 43.7205 46.5972 43.3337C46.5972 42.947 46.4435 42.576 46.17 42.3025C45.8965 42.029 45.5255 41.8753 45.1388 41.8753C44.752 41.8753 44.381 42.029 44.1075 42.3025L39.3075 47.1025L38.3925 46.19C38.2571 46.0546 38.0963 45.9471 37.9194 45.8739C37.7424 45.8006 37.5528 45.7628 37.3612 45.7628C37.1697 45.7628 36.9801 45.8006 36.8031 45.8739C36.6262 45.9471 36.4654 46.0546 36.33 46.19C36.1946 46.3254 36.0871 46.4862 36.0139 46.6631C35.9406 46.8401 35.9028 47.0297 35.9028 47.2213C35.9028 47.4128 35.9406 47.6024 36.0139 47.7794C36.0871 47.9563 36.1946 48.1171 36.33 48.2525L38.275 50.1975C38.4104 50.333 38.5711 50.4406 38.7481 50.5139C38.925 50.5873 39.1147 50.625 39.3062 50.625C39.4978 50.625 39.6875 50.5873 39.8644 50.5139C40.0414 50.4406 40.2021 50.333 40.3375 50.1975L46.17 44.365Z"
            fill="#3F6A11"
          />
        </svg>
      </div>
      <p>
        Your email has been activated and your Fudhouse account has been
        created.
      </p>
      <p className="w-full">Proceed to log in.</p>
    </div>
  );
}
