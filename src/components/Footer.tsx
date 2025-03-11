import type { FC } from "react";
import { Link } from "react-router-dom";
import Clock from "components/Clock.tsx";
import { cn } from "helpers/style.ts";
import { TimeZone } from "fusion/type";

interface FooterProps {
  className?: string;
}

interface ClockData {
  timeZone: TimeZone;
  title: string;
}

const clockData: ClockData[] = [
  { timeZone: "Asia/Bishkek", title: "Бишкек" },
  { timeZone: "Asia/Tashkent", title: "Ташкент" },
  { timeZone: "Asia/Dubai", title: "Дубай" },
  { timeZone: "Asia/Almaty", title: "Алматы" },
  { timeZone: "America/New_York", title: "Нью-Йорк" },
  { timeZone: "Asia/Shanghai", title: "Шанхай" },
];

const socialNetwork = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10.7491V7.0531C14 6.2201 13.849 6.0531 13.02 6.0531L10.67 6.0001C9.93803 6.0001 9.57203 6.0001 9.42403 6.2371C9.27603 6.4741 9.44003 6.7991 9.76703 7.4471C9.94903 7.8071 10.047 8.0681 10.047 8.4721V11.1321C10.047 11.9721 10.047 12.3931 9.72703 12.5181C9.40703 12.6421 9.14203 12.3601 8.61003 11.7961C7.31003 10.4121 6.63203 8.6841 6.18703 6.8001C6.09503 6.4101 6.04903 6.2151 5.91103 6.1071C5.77303 5.9991 5.57603 6.0001 5.18403 6.0001H2.98403C2.50203 6.0001 2.26103 6.0001 2.11003 6.1701C1.96003 6.3411 1.98903 6.5591 2.04703 6.9941C2.57503 10.9211 6.02803 17.3601 12.407 17.9741C13.537 18.0821 14 17.7771 14 16.5391C14 15.8371 13.985 14.7031 14.868 14.5541C15.331 14.4761 15.642 14.6411 16.159 15.0741C17.055 15.8261 17.525 16.7441 17.852 17.4411C18.069 17.9031 18.23 18.0001 18.74 18.0001H20.814C21.862 18.0001 22.147 17.7441 21.68 16.7601C21.1522 15.6566 20.405 14.6722 19.484 13.8671C18.848 13.3201 18.531 13.0471 18.514 12.8451C18.495 12.6441 18.728 12.3591 19.194 11.7891C20.094 10.6871 21.32 8.9581 21.892 7.1231C22.176 6.2131 21.909 6.0001 20.988 6.0001H19.125C18.222 6.0001 18.223 5.9691 18.01 6.9931C17.664 8.6541 16.532 10.2511 15.468 11.3381C14.963 11.8541 14.658 12.1651 14.343 12.0381C14.028 11.9111 14 11.5251 14 10.7491Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
          fill="white"
        />
      </svg>
    ),
    href: "",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6002 5.82C15.9167 5.03953 15.5401 4.0374 15.5402 3H12.4502V15.4C12.4268 16.0712 12.1437 16.7071 11.6605 17.1735C11.1773 17.6399 10.5318 17.9004 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z"
          fill="white"
        />
      </svg>
    ),
    href: "",
  },
];

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-black py-[80px]", className)}>
      <div className={"w-full flex justify-between items-center px-5"}>
        {/* <div className={"w-full flex justify-center items-center"}> */}
        <div className="flex gap-2 items-center">
          {socialNetwork.map((el) => (
            <Link to={el.href}>{el.icon}</Link>
          ))}
        </div>

        <div className={"flex gap-x-[65px]  xl:flex-row flex-col"}>
          {clockData?.map((item, index) => (
            <div className={"text-center"}>
              <Clock key={index} timeZone={item.timeZone} />
              <span className={"text-white block mt-4 text-xl font-normal"}>
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <div>
          <svg
            className={"absolute right-5 "}
            width="107"
            height="29"
            viewBox="0 0 107 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7" clip-path="url(#clip0_1705_1175)">
              <path
                d="M79.9953 5.21981H85.6118V7.27425H80.4482V10.5775H85.6118V13.1367H79.7979V16.44H89.4748V1.89062H79.9953V5.21656V5.21981Z"
                fill="white"
              />
              <path
                d="M99.4565 1.89062H92.7949V16.44H96.6773V12.1596H98.6962L101.297 16.44H105.636V15.8996L102.663 11.2861C106.503 8.79162 105.419 1.91004 99.4565 1.89062ZM99.4565 8.85309H96.6773V5.21656C97.5865 5.21656 98.5409 5.19391 99.4565 5.21656C101.663 5.23598 101.556 8.85309 99.4565 8.85309Z"
                fill="white"
              />
              <path
                d="M11.2358 16.443H15.2057V1.85156H13.8144L7.76106 8.17344L1.81771 1.85156H0.387695V16.443H4.35747V9.95612L7.57017 13.2012H8.0037L11.2358 9.95612V16.443Z"
                fill="white"
              />
              <path
                d="M18.1318 9.18533C18.1318 19.2667 33.7068 19.2667 33.7068 9.18533C33.7068 -0.896016 18.1318 -0.873363 18.1318 9.18533ZM22.1243 9.18533C22.1243 3.95054 29.7403 3.95054 29.7403 9.18533C29.7403 14.4201 22.1243 14.4654 22.1243 9.18533Z"
                fill="white"
              />
              <path
                d="M45.7261 9.01707L38.0453 1.82812H36.6348V16.439H40.6498V9.28884L48.3046 16.4584H49.6926V1.8896H45.7261V9.01707Z"
                fill="white"
              />
              <path
                d="M66.1136 5.21656H69.844V16.44H73.6842V5.21656H77.392V1.89062H66.1104V5.21656H66.1136Z"
                fill="white"
              />
              <path
                d="M64.7709 11.991H61.0147C61.0147 13.8417 56.2652 13.8578 56.2652 12.1593C56.2652 11.1401 57.5237 10.9104 59.0379 10.8263C62.3379 10.5998 64.5056 9.51923 64.5477 6.3583C64.6804 0.0784842 52.8778 0.0784842 52.9652 6.3583H56.6503C56.6503 4.42355 60.73 4.59179 60.8594 6.31623C60.9435 7.41949 59.8177 7.64596 58.4491 7.79155C55.4338 8.10537 52.4863 8.53892 52.4863 12.1819C52.4863 18.2902 64.8487 18.3905 64.7645 11.991H64.7709Z"
                fill="white"
              />
              <path
                d="M33.9651 24.6028V18.5938H34.808V25.5546H34.0377L33.9651 24.6028ZM30.666 23.1573V23.062C30.666 22.6875 30.7113 22.3476 30.802 22.0424C30.8956 21.7342 31.027 21.4699 31.1963 21.2494C31.3684 21.0289 31.5723 20.8596 31.8081 20.7418C32.0466 20.6209 32.3126 20.5606 32.6056 20.5606C32.9138 20.5606 33.1826 20.6149 33.4122 20.7237C33.6449 20.8295 33.8412 20.985 34.0014 21.1905C34.1645 21.3929 34.2929 21.6376 34.3866 21.9245C34.4802 22.2117 34.5451 22.5364 34.5814 22.8989V23.3158C34.5483 23.6754 34.4832 23.9987 34.3866 24.2857C34.2929 24.5726 34.1645 24.8173 34.0014 25.0198C33.8412 25.2222 33.6449 25.3778 33.4122 25.4865C33.1796 25.5923 32.9077 25.6452 32.5965 25.6452C32.3096 25.6452 32.0466 25.5833 31.8081 25.4593C31.5723 25.3355 31.3684 25.1618 31.1963 24.9382C31.027 24.7147 30.8956 24.4518 30.802 24.1497C30.7113 23.8445 30.666 23.5137 30.666 23.1573ZM31.5089 23.062V23.1573C31.5089 23.402 31.5331 23.6316 31.5815 23.8461C31.6328 24.0606 31.7113 24.2494 31.817 24.4125C31.9228 24.5756 32.0573 24.704 32.2205 24.7977C32.3836 24.8884 32.5785 24.9336 32.8049 24.9336C33.0829 24.9336 33.311 24.8748 33.4893 24.757C33.6705 24.6391 33.8156 24.4835 33.9244 24.2902C34.0331 24.0968 34.1177 23.8868 34.1782 23.6603V22.5681C34.1419 22.402 34.0891 22.2418 34.0194 22.0878C33.9531 21.9307 33.8654 21.7917 33.7567 21.6709C33.6509 21.547 33.5195 21.4488 33.3624 21.3762C33.2083 21.3038 33.0256 21.2675 32.814 21.2675C32.5844 21.2675 32.3866 21.3159 32.2205 21.4125C32.0573 21.5062 31.9228 21.6361 31.817 21.8023C31.7113 21.9654 31.6328 22.1557 31.5815 22.3732C31.5331 22.5877 31.5089 22.8173 31.5089 23.062ZM38.1479 25.6452C37.8066 25.6452 37.4969 25.5877 37.219 25.473C36.944 25.3551 36.7068 25.1906 36.5074 24.979C36.3111 24.7675 36.1601 24.5168 36.0543 24.2267C35.9485 23.9368 35.8956 23.6195 35.8956 23.2751V23.0847C35.8956 22.686 35.9545 22.3309 36.0724 22.0198C36.1902 21.7056 36.3504 21.4397 36.5528 21.2222C36.7552 21.0047 36.9848 20.84 37.2416 20.7283C37.4984 20.6165 37.7642 20.5606 38.0392 20.5606C38.3897 20.5606 38.6917 20.6209 38.9455 20.7418C39.2023 20.8626 39.4123 21.0319 39.5754 21.2494C39.7385 21.4639 39.8594 21.7177 39.938 22.0107C40.0165 22.3008 40.0558 22.6179 40.0558 22.9624V23.3385H36.3941V22.6542H39.2174V22.5907C39.2053 22.3732 39.16 22.1618 39.0815 21.9563C39.0059 21.7509 38.8852 21.5818 38.7189 21.4488C38.5528 21.3159 38.3262 21.2494 38.0392 21.2494C37.8489 21.2494 37.6736 21.2901 37.5135 21.3718C37.3534 21.4502 37.2159 21.5681 37.1011 21.7253C36.9863 21.8823 36.8971 22.0741 36.8337 22.3008C36.7703 22.5274 36.7386 22.7887 36.7386 23.0847V23.2751C36.7386 23.5077 36.7703 23.7268 36.8337 23.9322C36.9001 24.1346 36.9954 24.3129 37.1192 24.4669C37.2462 24.621 37.3986 24.7419 37.577 24.8294C37.7582 24.9171 37.9636 24.9608 38.1932 24.9608C38.4893 24.9608 38.7401 24.9005 38.9455 24.7796C39.1509 24.6588 39.3307 24.4972 39.4847 24.2948L39.9923 24.698C39.8866 24.8582 39.7522 25.0108 39.5891 25.1557C39.4259 25.3007 39.225 25.4186 38.9864 25.5093C38.7507 25.5998 38.4712 25.6452 38.1479 25.6452ZM42.4622 24.7977L43.8036 20.6512H44.6601L42.8972 25.5546H42.3352L42.4622 24.7977ZM41.3428 20.6512L42.725 24.8205L42.8202 25.5546H42.2582L40.4817 20.6512H41.3428ZM47.438 25.6452C47.0966 25.6452 46.787 25.5877 46.509 25.473C46.2342 25.3551 45.997 25.1906 45.7976 24.979C45.6011 24.7675 45.4501 24.5168 45.3443 24.2267C45.2386 23.9368 45.1858 23.6195 45.1858 23.2751V23.0847C45.1858 22.686 45.2447 22.3309 45.3626 22.0198C45.4803 21.7056 45.6404 21.4397 45.8428 21.2222C46.0453 21.0047 46.2749 20.84 46.5317 20.7283C46.7885 20.6165 47.0544 20.5606 47.3292 20.5606C47.6797 20.5606 47.9819 20.6209 48.2356 20.7418C48.4924 20.8626 48.7025 21.0319 48.8656 21.2494C49.0287 21.4639 49.1496 21.7177 49.228 22.0107C49.3066 22.3008 49.3459 22.6179 49.3459 22.9624V23.3385H45.6843V22.6542H48.5076V22.5907C48.4955 22.3732 48.4501 22.1618 48.3715 21.9563C48.2961 21.7509 48.1752 21.5818 48.0091 21.4488C47.8428 21.3159 47.6163 21.2494 47.3292 21.2494C47.1389 21.2494 46.9637 21.2901 46.8035 21.3718C46.6434 21.4502 46.506 21.5681 46.3912 21.7253C46.2764 21.8823 46.1873 22.0741 46.1238 22.3008C46.0603 22.5274 46.0286 22.7887 46.0286 23.0847V23.2751C46.0286 23.5077 46.0603 23.7268 46.1238 23.9322C46.1903 24.1346 46.2854 24.3129 46.4094 24.4669C46.5362 24.621 46.6888 24.7419 46.867 24.8294C47.0482 24.9171 47.2538 24.9608 47.4834 24.9608C47.7795 24.9608 48.0301 24.9005 48.2356 24.7796C48.4411 24.6588 48.6208 24.4972 48.7749 24.2948L49.2824 24.698C49.1768 24.8582 49.0422 25.0108 48.8791 25.1557C48.716 25.3007 48.5151 25.4186 48.2764 25.5093C48.0407 25.5998 47.7613 25.6452 47.438 25.6452ZM51.2357 18.5938V25.5546H50.3927V18.5938H51.2357ZM52.3595 23.1573V23.0531C52.3595 22.6995 52.4109 22.3718 52.5135 22.0696C52.6163 21.7645 52.7643 21.5002 52.9577 21.2766C53.1511 21.05 53.3853 20.8747 53.6601 20.7509C53.935 20.6241 54.2432 20.5606 54.5845 20.5606C54.929 20.5606 55.2386 20.6241 55.5136 20.7509C55.7915 20.8747 56.0272 21.05 56.2206 21.2766C56.417 21.5002 56.5665 21.7645 56.6692 22.0696C56.7719 22.3718 56.8233 22.6995 56.8233 23.0531V23.1573C56.8233 23.5107 56.7719 23.8385 56.6692 24.1406C56.5665 24.4428 56.417 24.7072 56.2206 24.9336C56.0272 25.1573 55.7931 25.3325 55.5182 25.4593C55.2462 25.5833 54.9381 25.6452 54.5937 25.6452C54.2493 25.6452 53.9396 25.5833 53.6647 25.4593C53.3897 25.3325 53.1541 25.1573 52.9577 24.9336C52.7643 24.7072 52.6163 24.4428 52.5135 24.1406C52.4109 23.8385 52.3595 23.5107 52.3595 23.1573ZM53.1979 23.0531V23.1573C53.1979 23.402 53.2266 23.6331 53.2841 23.8506C53.3414 24.0652 53.4275 24.2555 53.5423 24.4216C53.6601 24.5877 53.8066 24.7193 53.9818 24.8159C54.1571 24.9096 54.3611 24.9564 54.5937 24.9564C54.8233 24.9564 55.0241 24.9096 55.1964 24.8159C55.3716 24.7193 55.5166 24.5877 55.6314 24.4216C55.7463 24.2555 55.8324 24.0652 55.8897 23.8506C55.9502 23.6331 55.9804 23.402 55.9804 23.1573V23.0531C55.9804 22.8114 55.9502 22.5832 55.8897 22.3687C55.8324 22.1512 55.7447 21.9594 55.627 21.7932C55.5121 21.624 55.367 21.4911 55.1918 21.3944C55.0197 21.2978 54.8173 21.2494 54.5845 21.2494C54.3549 21.2494 54.1525 21.2978 53.9773 21.3944C53.8052 21.4911 53.6601 21.624 53.5423 21.7932C53.4275 21.9594 53.3414 22.1512 53.2841 22.3687C53.2266 22.5832 53.1979 22.8114 53.1979 23.0531ZM58.7131 21.5937V27.4398H57.8701V20.6512H58.6405L58.7131 21.5937ZM62.0167 23.062V23.1573C62.0167 23.5137 61.9744 23.8445 61.8898 24.1497C61.8051 24.4518 61.6813 24.7147 61.5182 24.9382C61.358 25.1618 61.1602 25.3355 60.9246 25.4593C60.6888 25.5833 60.4185 25.6452 60.1133 25.6452C59.8022 25.6452 59.5273 25.5938 59.2886 25.4911C59.0499 25.3884 58.8474 25.2388 58.6813 25.0425C58.5152 24.8461 58.3822 24.6105 58.2825 24.3355C58.1858 24.0606 58.1193 23.7509 58.0832 23.4065V22.8989C58.1193 22.5364 58.1874 22.2117 58.287 21.9245C58.3868 21.6376 58.5182 21.3929 58.6813 21.1905C58.8474 20.985 59.0484 20.8295 59.284 20.7237C59.5197 20.6149 59.7916 20.5606 60.0998 20.5606C60.4078 20.5606 60.6813 20.6209 60.92 20.7418C61.1587 20.8596 61.3596 21.0289 61.5227 21.2494C61.6858 21.4699 61.8083 21.7342 61.8898 22.0424C61.9744 22.3476 62.0167 22.6875 62.0167 23.062ZM61.1738 23.1573V23.062C61.1738 22.8173 61.1481 22.5877 61.0967 22.3732C61.0454 22.1557 60.9653 21.9654 60.8565 21.8023C60.7508 21.6361 60.6148 21.5062 60.4487 21.4125C60.2826 21.3159 60.0846 21.2675 59.855 21.2675C59.6436 21.2675 59.4592 21.3038 59.3021 21.3762C59.1481 21.4488 59.0167 21.547 58.9079 21.6709C58.7992 21.7917 58.7101 21.9307 58.6405 22.0878C58.5741 22.2418 58.5242 22.402 58.491 22.5681V23.7419C58.5514 23.9533 58.636 24.1527 58.7448 24.34C58.8536 24.5244 58.9985 24.6738 59.1798 24.7887C59.361 24.9005 59.5892 24.9564 59.8641 24.9564C60.0907 24.9564 60.2856 24.9096 60.4487 24.8159C60.6148 24.7193 60.7508 24.5877 60.8565 24.4216C60.9653 24.2555 61.0454 24.0652 61.0967 23.8506C61.1481 23.6331 61.1738 23.402 61.1738 23.1573ZM65.121 25.6452C64.7795 25.6452 64.4699 25.5877 64.1919 25.473C63.917 25.3551 63.6799 25.1906 63.4804 24.979C63.2841 24.7675 63.1329 24.5168 63.0273 24.2267C62.9216 23.9368 62.8686 23.6195 62.8686 23.2751V23.0847C62.8686 22.686 62.9275 22.3309 63.0454 22.0198C63.1633 21.7056 63.3233 21.4397 63.5257 21.2222C63.7281 21.0047 63.9577 20.84 64.2146 20.7283C64.4714 20.6165 64.7372 20.5606 65.0122 20.5606C65.3627 20.5606 65.6647 20.6209 65.9186 20.7418C66.1753 20.8626 66.3853 21.0319 66.5484 21.2494C66.7116 21.4639 66.8324 21.7177 66.911 22.0107C66.9896 22.3008 67.0289 22.6179 67.0289 22.9624V23.3385H63.3671V22.6542H66.1904V22.5907C66.1783 22.3732 66.1331 22.1618 66.0545 21.9563C65.9789 21.7509 65.8581 21.5818 65.6919 21.4488C65.5258 21.3159 65.2992 21.2494 65.0122 21.2494C64.8219 21.2494 64.6467 21.2901 64.4865 21.3718C64.3264 21.4502 64.1889 21.5681 64.0742 21.7253C63.9593 21.8823 63.8702 22.0741 63.8067 22.3008C63.7433 22.5274 63.7116 22.7887 63.7116 23.0847V23.2751C63.7116 23.5077 63.7433 23.7268 63.8067 23.9322C63.8732 24.1346 63.9684 24.3129 64.0922 24.4669C64.2191 24.621 64.3717 24.7419 64.5499 24.8294C64.7312 24.9171 64.9366 24.9608 65.1662 24.9608C65.4623 24.9608 65.7131 24.9005 65.9186 24.7796C66.124 24.6588 66.3037 24.4972 66.4578 24.2948L66.9654 24.698C66.8596 24.8582 66.7252 25.0108 66.562 25.1557C66.3988 25.3007 66.198 25.4186 65.9593 25.5093C65.7237 25.5998 65.4443 25.6452 65.121 25.6452ZM68.8461 21.4216V25.5546H68.0076V20.6512H68.8234L68.8461 21.4216ZM70.3777 20.6241L70.3732 21.4034C70.3037 21.3883 70.2372 21.3794 70.1739 21.3762C70.1134 21.3702 70.0439 21.3673 69.9654 21.3673C69.772 21.3673 69.6014 21.3974 69.4533 21.4578C69.3053 21.5183 69.1799 21.6028 69.0771 21.7116C68.9745 21.8203 68.8929 21.9503 68.8324 22.1013C68.775 22.2494 68.7373 22.4125 68.7191 22.5907L68.4835 22.7267C68.4835 22.4306 68.5121 22.1527 68.5696 21.8929C68.63 21.633 68.7222 21.4034 68.8461 21.2041C68.9699 21.0017 69.1271 20.8446 69.3174 20.7328C69.5107 20.6179 69.7403 20.5606 70.0062 20.5606C70.0666 20.5606 70.136 20.5681 70.2146 20.5832C70.2932 20.5953 70.3476 20.6088 70.3777 20.6241ZM74.0077 24.2539C74.0077 24.1331 73.9806 24.0213 73.9262 23.9185C73.8748 23.8128 73.7675 23.7177 73.6043 23.6331C73.4442 23.5455 73.2026 23.47 72.8794 23.4065C72.6073 23.3492 72.3612 23.2811 72.1406 23.2025C71.9231 23.124 71.7373 23.0289 71.5833 22.9171C71.4321 22.8052 71.3158 22.6739 71.2342 22.5228C71.1527 22.3718 71.112 22.195 71.112 21.9926C71.112 21.7993 71.1542 21.6165 71.2388 21.4443C71.3265 21.272 71.4488 21.1194 71.6059 20.9865C71.7661 20.8537 71.9578 20.7493 72.1814 20.6739C72.4049 20.5983 72.6542 20.5606 72.9292 20.5606C73.3219 20.5606 73.6573 20.63 73.9351 20.769C74.2132 20.908 74.4261 21.0938 74.5741 21.3264C74.7222 21.556 74.7962 21.8114 74.7962 22.0922H73.9579C73.9579 21.9563 73.9171 21.8249 73.8355 21.6981C73.7569 21.5681 73.6406 21.4609 73.4866 21.3762C73.3354 21.2917 73.1497 21.2494 72.9292 21.2494C72.6966 21.2494 72.5077 21.2857 72.3626 21.3581C72.2207 21.4276 72.1165 21.5167 72.05 21.6255C71.9865 21.7342 71.9548 21.8491 71.9548 21.97C71.9548 22.0606 71.9699 22.1422 72.0001 22.2146C72.0334 22.2841 72.0907 22.349 72.1723 22.4095C72.2539 22.4669 72.3688 22.5213 72.5168 22.5727C72.6648 22.624 72.8536 22.6754 73.0832 22.7267C73.485 22.8173 73.8159 22.9261 74.0756 23.0531C74.3356 23.1799 74.5289 23.3355 74.6557 23.5198C74.7827 23.704 74.846 23.9277 74.846 24.1904C74.846 24.4049 74.8008 24.6014 74.7101 24.7796C74.6225 24.9578 74.4941 25.112 74.3249 25.2418C74.1588 25.3688 73.9593 25.4684 73.7267 25.5409C73.4971 25.6105 73.2388 25.6452 72.9518 25.6452C72.5198 25.6452 72.1542 25.5681 71.8552 25.4141C71.5561 25.26 71.3295 25.0606 71.1753 24.8159C71.0213 24.5712 70.9443 24.3129 70.9443 24.041H71.7871C71.7992 24.2706 71.8657 24.4533 71.9865 24.5893C72.1074 24.7222 72.2554 24.8173 72.4307 24.8748C72.6059 24.9292 72.7796 24.9564 72.9518 24.9564C73.1814 24.9564 73.3733 24.9261 73.5273 24.8657C73.6845 24.8052 73.8038 24.7222 73.8853 24.6165C73.9669 24.5107 74.0077 24.3899 74.0077 24.2539Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1705_1175">
                <rect
                  width="106.761"
                  height="28.4695"
                  fill="white"
                  transform="translate(0.239258 0.53125)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
