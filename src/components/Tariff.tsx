import type { FC } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { TariffEnd, TariffStart } from "./TariffBlock";

const tariffData = [
  {
    head: {
      photo: "",
      title: "iPhone 16 Pro",
      description:
        "The ultimate iPad experience with the most advanced technology.",
      price: "From $999 or $83.25/mo. for 12 mo.",
    },
    footer: [
      {
        title: "13” or 11”",
        descriptions: [
          "Ultra Retina XDR display4",
          "ProMotion technology",
          "P3 wide color",
          "Nano-texture display glass option",
          "on 1TB and 2TB models",
        ],
      },
      {
        title: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75502 11.5539V13.9977C4.74704 14.1267 4.79061 14.2536 4.87617 14.3504C4.96173 14.4473 5.08226 14.5063 5.21127 14.5143C5.23083 14.5157 5.25046 14.5157 5.27002 14.5143H5.4246M4.2396 12.1389H5.32169M8.60335 13.4802C8.60335 13.7534 8.49479 14.0155 8.30155 14.2088C8.10831 14.402 7.84622 14.5106 7.57294 14.5106C7.29965 14.5106 7.03756 14.402 6.84432 14.2088C6.65108 14.0155 6.54252 13.7534 6.54252 13.4802V12.8081C6.54252 12.5348 6.65108 12.2727 6.84432 12.0795C7.03756 11.8862 7.29965 11.7777 7.57294 11.7777C7.84622 11.7777 8.10831 11.8862 8.30155 12.0795C8.49479 12.2727 8.60335 12.5348 8.60335 12.8081M8.60335 14.5143V11.7743M12.1817 14.5143V12.8081C12.1817 12.5348 12.0731 12.2727 11.8799 12.0795C11.6866 11.8862 11.4246 11.7777 11.1513 11.7777C10.878 11.7777 10.6159 11.8862 10.4227 12.0795C10.2294 12.2727 10.1209 12.5348 10.1209 12.8081M10.1209 12.8081V14.5143M10.1209 12.8081V11.7743M3.23877 9.67349H5.2996M3.23877 6.1064L4.26919 5.53765V9.67349M10.3217 6.88182C10.3224 6.65672 10.3788 6.43531 10.4859 6.23727C10.5929 6.03924 10.7472 5.87074 10.9351 5.74676C11.1229 5.62278 11.3386 5.54718 11.5627 5.52667C11.7869 5.50617 12.0126 5.5414 12.2199 5.62923C12.4271 5.71707 12.6095 5.85478 12.7506 6.03011C12.8918 6.20544 12.9874 6.41295 13.029 6.63417C13.0706 6.85539 13.0568 7.08346 12.989 7.29809C12.9211 7.51271 12.8012 7.70722 12.64 7.86432C12.0734 8.32932 10.3217 9.67349 10.3217 9.67349H13.0521M14.0309 6.88182C14.0316 6.65672 14.088 6.43531 14.195 6.23727C14.302 6.03924 14.4563 5.87074 14.6442 5.74676C14.8321 5.62278 15.0477 5.54718 15.2719 5.52667C15.496 5.50617 15.7218 5.5414 15.929 5.62923C16.1363 5.71707 16.3186 5.85478 16.4598 6.03011C16.601 6.20544 16.6966 6.41295 16.7382 6.63417C16.7798 6.85539 16.766 7.08346 16.6981 7.29809C16.6303 7.51271 16.5104 7.70722 16.3492 7.86432C15.7825 8.32932 14.0309 9.67349 14.0309 9.67349H16.7613"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99984 18.9582C14.9474 18.9582 18.9582 14.9474 18.9582 9.99984C18.9582 5.05229 14.9474 1.0415 9.99984 1.0415C5.05229 1.0415 1.0415 5.05229 1.0415 9.99984C1.0415 14.9474 5.05229 18.9582 9.99984 18.9582Z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7301 12.1846V14.2454M15.7605 13.2146H13.6997"
              stroke="black"
              strokeWidth="0.5"
              strokeMiterlimit="7.467"
              strokeLinecap="round"
            />
            <path
              d="M7.64173 7.60547C7.50596 7.60547 7.37152 7.63222 7.2461 7.68421C7.12068 7.73619 7.00673 7.81238 6.91076 7.90842C6.8148 8.00446 6.7387 8.11847 6.68682 8.24394C6.63494 8.36941 6.60829 8.50387 6.6084 8.63964C6.60834 8.77537 6.63503 8.90979 6.68694 9.0352C6.73884 9.16062 6.81495 9.27458 6.91091 9.37058C7.00687 9.46658 7.1208 9.54273 7.2462 9.59469C7.37159 9.64664 7.506 9.67338 7.64173 9.67338H8.31423C8.45 9.67344 8.58445 9.64674 8.7099 9.59481C8.83534 9.54288 8.94932 9.46673 9.04533 9.37073C9.14133 9.27473 9.21747 9.16074 9.2694 9.0353C9.32134 8.90985 9.34804 8.7754 9.34798 8.63964C9.34809 8.50383 9.32143 8.36934 9.26952 8.24384C9.21762 8.11835 9.14148 8.00432 9.04547 7.90827C8.94946 7.81222 8.83546 7.73604 8.70999 7.68409C8.58452 7.63213 8.45004 7.60541 8.31423 7.60547"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.31409 7.60551C8.44986 7.60557 8.58431 7.57887 8.70975 7.52694C8.8352 7.47501 8.94918 7.39886 9.04518 7.30286C9.14119 7.20685 9.21733 7.09287 9.26926 6.96743C9.32119 6.84198 9.34789 6.70753 9.34784 6.57176C9.34795 6.43596 9.32129 6.30147 9.26938 6.17597C9.21747 6.05048 9.14134 5.93645 9.04533 5.8404C8.94932 5.74435 8.83532 5.66817 8.70985 5.61622C8.58438 5.56426 8.44989 5.53754 8.31409 5.5376H7.64159C7.50575 5.53749 7.37122 5.56416 7.2457 5.6161C7.12018 5.66803 7.00613 5.7442 6.91008 5.84025C6.81402 5.93631 6.73785 6.05036 6.68592 6.17588C6.63399 6.3014 6.60731 6.43593 6.60742 6.57176C6.60737 6.70757 6.63408 6.84205 6.68604 6.96752C6.738 7.093 6.81418 7.207 6.91023 7.30301C7.00627 7.39901 7.1203 7.47515 7.2458 7.52706C7.37129 7.57896 7.50578 7.60562 7.64159 7.60551M7.64159 7.60551H8.31409Z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        descriptions: ["A18 Pro chip with 6-core GPU"],
      },
      {
        title: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.803 4C14.142 5.14394 13.877 6.47408 14.0492 7.78402C14.2214 9.09395 14.8211 10.3104 15.7554 11.2446C16.6896 12.1789 17.9061 12.7786 19.216 12.9508C20.5259 13.123 21.8561 12.858 23 12.197V19C23.0007 19.1318 22.9752 19.2624 22.925 19.3843C22.8748 19.5062 22.8009 19.6169 22.7076 19.71C22.6143 19.8031 22.5034 19.8768 22.3815 19.9267C22.2595 19.9767 22.1288 20.0019 21.997 20.001H2.002C1.87043 20.0013 1.74009 19.9756 1.61847 19.9254C1.49685 19.8752 1.38633 19.8015 1.29325 19.7085C1.20016 19.6155 1.12635 19.505 1.07602 19.3835C1.0257 19.2619 0.999869 19.1316 1 19V5C1 4.448 1.44 4 2.002 4H14.803ZM20 11C18.9391 11 17.9217 10.5786 17.1716 9.82843C16.4214 9.07828 16 8.06087 16 7C16 5.93913 16.4214 4.92172 17.1716 4.17157C17.9217 3.42143 18.9391 3 20 3C21.0609 3 22.0783 3.42143 22.8284 4.17157C23.5786 4.92172 24 5.93913 24 7C24 8.06087 23.5786 9.07828 22.8284 9.82843C22.0783 10.5786 21.0609 11 20 11ZM20 9C20.5304 9 21.0391 8.78929 21.4142 8.41421C21.7893 8.03914 22 7.53043 22 7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5C19.4696 5 18.9609 5.21071 18.5858 5.58579C18.2107 5.96086 18 6.46957 18 7C18 7.53043 18.2107 8.03914 18.5858 8.41421C18.9609 8.78929 19.4696 9 20 9ZM19 15V18H21V15H19Z"
              fill="black"
            />
          </svg>
        ),
        descriptions: ["Camera Control"],
      },
    ],
  },
  {
    head: {
      photo: "",
      title: "iPhone 16 Pro",
      description:
        "The ultimate iPad experience with the most advanced technology.",
      price: "From $999 or $83.25/mo. for 12 mo.",
    },
    footer: [
      {
        title: "13” or 11”",
        descriptions: [
          "Ultra Retina XDR display4",
          "ProMotion technology",
          "P3 wide color",
          "Nano-texture display glass option",
          "on 1TB and 2TB models",
        ],
      },
      {
        title: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75502 11.5539V13.9977C4.74704 14.1267 4.79061 14.2536 4.87617 14.3504C4.96173 14.4473 5.08226 14.5063 5.21127 14.5143C5.23083 14.5157 5.25046 14.5157 5.27002 14.5143H5.4246M4.2396 12.1389H5.32169M8.60335 13.4802C8.60335 13.7534 8.49479 14.0155 8.30155 14.2088C8.10831 14.402 7.84622 14.5106 7.57294 14.5106C7.29965 14.5106 7.03756 14.402 6.84432 14.2088C6.65108 14.0155 6.54252 13.7534 6.54252 13.4802V12.8081C6.54252 12.5348 6.65108 12.2727 6.84432 12.0795C7.03756 11.8862 7.29965 11.7777 7.57294 11.7777C7.84622 11.7777 8.10831 11.8862 8.30155 12.0795C8.49479 12.2727 8.60335 12.5348 8.60335 12.8081M8.60335 14.5143V11.7743M12.1817 14.5143V12.8081C12.1817 12.5348 12.0731 12.2727 11.8799 12.0795C11.6866 11.8862 11.4246 11.7777 11.1513 11.7777C10.878 11.7777 10.6159 11.8862 10.4227 12.0795C10.2294 12.2727 10.1209 12.5348 10.1209 12.8081M10.1209 12.8081V14.5143M10.1209 12.8081V11.7743M3.23877 9.67349H5.2996M3.23877 6.1064L4.26919 5.53765V9.67349M10.3217 6.88182C10.3224 6.65672 10.3788 6.43531 10.4859 6.23727C10.5929 6.03924 10.7472 5.87074 10.9351 5.74676C11.1229 5.62278 11.3386 5.54718 11.5627 5.52667C11.7869 5.50617 12.0126 5.5414 12.2199 5.62923C12.4271 5.71707 12.6095 5.85478 12.7506 6.03011C12.8918 6.20544 12.9874 6.41295 13.029 6.63417C13.0706 6.85539 13.0568 7.08346 12.989 7.29809C12.9211 7.51271 12.8012 7.70722 12.64 7.86432C12.0734 8.32932 10.3217 9.67349 10.3217 9.67349H13.0521M14.0309 6.88182C14.0316 6.65672 14.088 6.43531 14.195 6.23727C14.302 6.03924 14.4563 5.87074 14.6442 5.74676C14.8321 5.62278 15.0477 5.54718 15.2719 5.52667C15.496 5.50617 15.7218 5.5414 15.929 5.62923C16.1363 5.71707 16.3186 5.85478 16.4598 6.03011C16.601 6.20544 16.6966 6.41295 16.7382 6.63417C16.7798 6.85539 16.766 7.08346 16.6981 7.29809C16.6303 7.51271 16.5104 7.70722 16.3492 7.86432C15.7825 8.32932 14.0309 9.67349 14.0309 9.67349H16.7613"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99984 18.9582C14.9474 18.9582 18.9582 14.9474 18.9582 9.99984C18.9582 5.05229 14.9474 1.0415 9.99984 1.0415C5.05229 1.0415 1.0415 5.05229 1.0415 9.99984C1.0415 14.9474 5.05229 18.9582 9.99984 18.9582Z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7301 12.1846V14.2454M15.7605 13.2146H13.6997"
              stroke="black"
              strokeWidth="0.5"
              strokeMiterlimit="7.467"
              strokeLinecap="round"
            />
            <path
              d="M7.64173 7.60547C7.50596 7.60547 7.37152 7.63222 7.2461 7.68421C7.12068 7.73619 7.00673 7.81238 6.91076 7.90842C6.8148 8.00446 6.7387 8.11847 6.68682 8.24394C6.63494 8.36941 6.60829 8.50387 6.6084 8.63964C6.60834 8.77537 6.63503 8.90979 6.68694 9.0352C6.73884 9.16062 6.81495 9.27458 6.91091 9.37058C7.00687 9.46658 7.1208 9.54273 7.2462 9.59469C7.37159 9.64664 7.506 9.67338 7.64173 9.67338H8.31423C8.45 9.67344 8.58445 9.64674 8.7099 9.59481C8.83534 9.54288 8.94932 9.46673 9.04533 9.37073C9.14133 9.27473 9.21747 9.16074 9.2694 9.0353C9.32134 8.90985 9.34804 8.7754 9.34798 8.63964C9.34809 8.50383 9.32143 8.36934 9.26952 8.24384C9.21762 8.11835 9.14148 8.00432 9.04547 7.90827C8.94946 7.81222 8.83546 7.73604 8.70999 7.68409C8.58452 7.63213 8.45004 7.60541 8.31423 7.60547"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.31409 7.60551C8.44986 7.60557 8.58431 7.57887 8.70975 7.52694C8.8352 7.47501 8.94918 7.39886 9.04518 7.30286C9.14119 7.20685 9.21733 7.09287 9.26926 6.96743C9.32119 6.84198 9.34789 6.70753 9.34784 6.57176C9.34795 6.43596 9.32129 6.30147 9.26938 6.17597C9.21747 6.05048 9.14134 5.93645 9.04533 5.8404C8.94932 5.74435 8.83532 5.66817 8.70985 5.61622C8.58438 5.56426 8.44989 5.53754 8.31409 5.5376H7.64159C7.50575 5.53749 7.37122 5.56416 7.2457 5.6161C7.12018 5.66803 7.00613 5.7442 6.91008 5.84025C6.81402 5.93631 6.73785 6.05036 6.68592 6.17588C6.63399 6.3014 6.60731 6.43593 6.60742 6.57176C6.60737 6.70757 6.63408 6.84205 6.68604 6.96752C6.738 7.093 6.81418 7.207 6.91023 7.30301C7.00627 7.39901 7.1203 7.47515 7.2458 7.52706C7.37129 7.57896 7.50578 7.60562 7.64159 7.60551M7.64159 7.60551H8.31409Z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        descriptions: ["A18 Pro chip with 6-core GPU"],
      },
      {
        title: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.803 4C14.142 5.14394 13.877 6.47408 14.0492 7.78402C14.2214 9.09395 14.8211 10.3104 15.7554 11.2446C16.6896 12.1789 17.9061 12.7786 19.216 12.9508C20.5259 13.123 21.8561 12.858 23 12.197V19C23.0007 19.1318 22.9752 19.2624 22.925 19.3843C22.8748 19.5062 22.8009 19.6169 22.7076 19.71C22.6143 19.8031 22.5034 19.8768 22.3815 19.9267C22.2595 19.9767 22.1288 20.0019 21.997 20.001H2.002C1.87043 20.0013 1.74009 19.9756 1.61847 19.9254C1.49685 19.8752 1.38633 19.8015 1.29325 19.7085C1.20016 19.6155 1.12635 19.505 1.07602 19.3835C1.0257 19.2619 0.999869 19.1316 1 19V5C1 4.448 1.44 4 2.002 4H14.803ZM20 11C18.9391 11 17.9217 10.5786 17.1716 9.82843C16.4214 9.07828 16 8.06087 16 7C16 5.93913 16.4214 4.92172 17.1716 4.17157C17.9217 3.42143 18.9391 3 20 3C21.0609 3 22.0783 3.42143 22.8284 4.17157C23.5786 4.92172 24 5.93913 24 7C24 8.06087 23.5786 9.07828 22.8284 9.82843C22.0783 10.5786 21.0609 11 20 11ZM20 9C20.5304 9 21.0391 8.78929 21.4142 8.41421C21.7893 8.03914 22 7.53043 22 7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5C19.4696 5 18.9609 5.21071 18.5858 5.58579C18.2107 5.96086 18 6.46957 18 7C18 7.53043 18.2107 8.03914 18.5858 8.41421C18.9609 8.78929 19.4696 9 20 9ZM19 15V18H21V15H19Z"
              fill="black"
            />
          </svg>
        ),
        descriptions: ["Camera Control"],
      },
    ],
  },
  {
    head: {
      photo: "",
      title: "iPhone 16 Pro",
      description:
        "The ultimate iPad experience with the most advanced technology.",
      price: "From $999 or $83.25/mo. for 12 mo.",
    },
    footer: [
      {
        title: "13” or 11”",
        descriptions: [
          "Ultra Retina XDR display4",
          "ProMotion technology",
          "P3 wide color",
          "Nano-texture display glass option",
          "on 1TB and 2TB models",
        ],
      },
      {
        title: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75502 11.5539V13.9977C4.74704 14.1267 4.79061 14.2536 4.87617 14.3504C4.96173 14.4473 5.08226 14.5063 5.21127 14.5143C5.23083 14.5157 5.25046 14.5157 5.27002 14.5143H5.4246M4.2396 12.1389H5.32169M8.60335 13.4802C8.60335 13.7534 8.49479 14.0155 8.30155 14.2088C8.10831 14.402 7.84622 14.5106 7.57294 14.5106C7.29965 14.5106 7.03756 14.402 6.84432 14.2088C6.65108 14.0155 6.54252 13.7534 6.54252 13.4802V12.8081C6.54252 12.5348 6.65108 12.2727 6.84432 12.0795C7.03756 11.8862 7.29965 11.7777 7.57294 11.7777C7.84622 11.7777 8.10831 11.8862 8.30155 12.0795C8.49479 12.2727 8.60335 12.5348 8.60335 12.8081M8.60335 14.5143V11.7743M12.1817 14.5143V12.8081C12.1817 12.5348 12.0731 12.2727 11.8799 12.0795C11.6866 11.8862 11.4246 11.7777 11.1513 11.7777C10.878 11.7777 10.6159 11.8862 10.4227 12.0795C10.2294 12.2727 10.1209 12.5348 10.1209 12.8081M10.1209 12.8081V14.5143M10.1209 12.8081V11.7743M3.23877 9.67349H5.2996M3.23877 6.1064L4.26919 5.53765V9.67349M10.3217 6.88182C10.3224 6.65672 10.3788 6.43531 10.4859 6.23727C10.5929 6.03924 10.7472 5.87074 10.9351 5.74676C11.1229 5.62278 11.3386 5.54718 11.5627 5.52667C11.7869 5.50617 12.0126 5.5414 12.2199 5.62923C12.4271 5.71707 12.6095 5.85478 12.7506 6.03011C12.8918 6.20544 12.9874 6.41295 13.029 6.63417C13.0706 6.85539 13.0568 7.08346 12.989 7.29809C12.9211 7.51271 12.8012 7.70722 12.64 7.86432C12.0734 8.32932 10.3217 9.67349 10.3217 9.67349H13.0521M14.0309 6.88182C14.0316 6.65672 14.088 6.43531 14.195 6.23727C14.302 6.03924 14.4563 5.87074 14.6442 5.74676C14.8321 5.62278 15.0477 5.54718 15.2719 5.52667C15.496 5.50617 15.7218 5.5414 15.929 5.62923C16.1363 5.71707 16.3186 5.85478 16.4598 6.03011C16.601 6.20544 16.6966 6.41295 16.7382 6.63417C16.7798 6.85539 16.766 7.08346 16.6981 7.29809C16.6303 7.51271 16.5104 7.70722 16.3492 7.86432C15.7825 8.32932 14.0309 9.67349 14.0309 9.67349H16.7613"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99984 18.9582C14.9474 18.9582 18.9582 14.9474 18.9582 9.99984C18.9582 5.05229 14.9474 1.0415 9.99984 1.0415C5.05229 1.0415 1.0415 5.05229 1.0415 9.99984C1.0415 14.9474 5.05229 18.9582 9.99984 18.9582Z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7301 12.1846V14.2454M15.7605 13.2146H13.6997"
              stroke="black"
              strokeWidth="0.5"
              strokeMiterlimit="7.467"
              strokeLinecap="round"
            />
            <path
              d="M7.64173 7.60547C7.50596 7.60547 7.37152 7.63222 7.2461 7.68421C7.12068 7.73619 7.00673 7.81238 6.91076 7.90842C6.8148 8.00446 6.7387 8.11847 6.68682 8.24394C6.63494 8.36941 6.60829 8.50387 6.6084 8.63964C6.60834 8.77537 6.63503 8.90979 6.68694 9.0352C6.73884 9.16062 6.81495 9.27458 6.91091 9.37058C7.00687 9.46658 7.1208 9.54273 7.2462 9.59469C7.37159 9.64664 7.506 9.67338 7.64173 9.67338H8.31423C8.45 9.67344 8.58445 9.64674 8.7099 9.59481C8.83534 9.54288 8.94932 9.46673 9.04533 9.37073C9.14133 9.27473 9.21747 9.16074 9.2694 9.0353C9.32134 8.90985 9.34804 8.7754 9.34798 8.63964C9.34809 8.50383 9.32143 8.36934 9.26952 8.24384C9.21762 8.11835 9.14148 8.00432 9.04547 7.90827C8.94946 7.81222 8.83546 7.73604 8.70999 7.68409C8.58452 7.63213 8.45004 7.60541 8.31423 7.60547"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.31409 7.60551C8.44986 7.60557 8.58431 7.57887 8.70975 7.52694C8.8352 7.47501 8.94918 7.39886 9.04518 7.30286C9.14119 7.20685 9.21733 7.09287 9.26926 6.96743C9.32119 6.84198 9.34789 6.70753 9.34784 6.57176C9.34795 6.43596 9.32129 6.30147 9.26938 6.17597C9.21747 6.05048 9.14134 5.93645 9.04533 5.8404C8.94932 5.74435 8.83532 5.66817 8.70985 5.61622C8.58438 5.56426 8.44989 5.53754 8.31409 5.5376H7.64159C7.50575 5.53749 7.37122 5.56416 7.2457 5.6161C7.12018 5.66803 7.00613 5.7442 6.91008 5.84025C6.81402 5.93631 6.73785 6.05036 6.68592 6.17588C6.63399 6.3014 6.60731 6.43593 6.60742 6.57176C6.60737 6.70757 6.63408 6.84205 6.68604 6.96752C6.738 7.093 6.81418 7.207 6.91023 7.30301C7.00627 7.39901 7.1203 7.47515 7.2458 7.52706C7.37129 7.57896 7.50578 7.60562 7.64159 7.60551M7.64159 7.60551H8.31409Z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        descriptions: ["A18 Pro chip with 6-core GPU"],
      },
      {
        title: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.803 4C14.142 5.14394 13.877 6.47408 14.0492 7.78402C14.2214 9.09395 14.8211 10.3104 15.7554 11.2446C16.6896 12.1789 17.9061 12.7786 19.216 12.9508C20.5259 13.123 21.8561 12.858 23 12.197V19C23.0007 19.1318 22.9752 19.2624 22.925 19.3843C22.8748 19.5062 22.8009 19.6169 22.7076 19.71C22.6143 19.8031 22.5034 19.8768 22.3815 19.9267C22.2595 19.9767 22.1288 20.0019 21.997 20.001H2.002C1.87043 20.0013 1.74009 19.9756 1.61847 19.9254C1.49685 19.8752 1.38633 19.8015 1.29325 19.7085C1.20016 19.6155 1.12635 19.505 1.07602 19.3835C1.0257 19.2619 0.999869 19.1316 1 19V5C1 4.448 1.44 4 2.002 4H14.803ZM20 11C18.9391 11 17.9217 10.5786 17.1716 9.82843C16.4214 9.07828 16 8.06087 16 7C16 5.93913 16.4214 4.92172 17.1716 4.17157C17.9217 3.42143 18.9391 3 20 3C21.0609 3 22.0783 3.42143 22.8284 4.17157C23.5786 4.92172 24 5.93913 24 7C24 8.06087 23.5786 9.07828 22.8284 9.82843C22.0783 10.5786 21.0609 11 20 11ZM20 9C20.5304 9 21.0391 8.78929 21.4142 8.41421C21.7893 8.03914 22 7.53043 22 7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5C19.4696 5 18.9609 5.21071 18.5858 5.58579C18.2107 5.96086 18 6.46957 18 7C18 7.53043 18.2107 8.03914 18.5858 8.41421C18.9609 8.78929 19.4696 9 20 9ZM19 15V18H21V15H19Z"
              fill="black"
            />
          </svg>
        ),
        descriptions: ["Camera Control"],
      },
    ],
  },
  {
    head: {
      photo: "",
      title: "iPhone 16 Pro",
      description:
        "The ultimate iPad experience with the most advanced technology.",
      price: "From $999 or $83.25/mo. for 12 mo.",
    },
    footer: [
      {
        title: "13” or 11”",
        descriptions: [
          "Ultra Retina XDR display4",
          "ProMotion technology",
          "P3 wide color",
          "Nano-texture display glass option",
          "on 1TB and 2TB models",
        ],
      },
      {
        title: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75502 11.5539V13.9977C4.74704 14.1267 4.79061 14.2536 4.87617 14.3504C4.96173 14.4473 5.08226 14.5063 5.21127 14.5143C5.23083 14.5157 5.25046 14.5157 5.27002 14.5143H5.4246M4.2396 12.1389H5.32169M8.60335 13.4802C8.60335 13.7534 8.49479 14.0155 8.30155 14.2088C8.10831 14.402 7.84622 14.5106 7.57294 14.5106C7.29965 14.5106 7.03756 14.402 6.84432 14.2088C6.65108 14.0155 6.54252 13.7534 6.54252 13.4802V12.8081C6.54252 12.5348 6.65108 12.2727 6.84432 12.0795C7.03756 11.8862 7.29965 11.7777 7.57294 11.7777C7.84622 11.7777 8.10831 11.8862 8.30155 12.0795C8.49479 12.2727 8.60335 12.5348 8.60335 12.8081M8.60335 14.5143V11.7743M12.1817 14.5143V12.8081C12.1817 12.5348 12.0731 12.2727 11.8799 12.0795C11.6866 11.8862 11.4246 11.7777 11.1513 11.7777C10.878 11.7777 10.6159 11.8862 10.4227 12.0795C10.2294 12.2727 10.1209 12.5348 10.1209 12.8081M10.1209 12.8081V14.5143M10.1209 12.8081V11.7743M3.23877 9.67349H5.2996M3.23877 6.1064L4.26919 5.53765V9.67349M10.3217 6.88182C10.3224 6.65672 10.3788 6.43531 10.4859 6.23727C10.5929 6.03924 10.7472 5.87074 10.9351 5.74676C11.1229 5.62278 11.3386 5.54718 11.5627 5.52667C11.7869 5.50617 12.0126 5.5414 12.2199 5.62923C12.4271 5.71707 12.6095 5.85478 12.7506 6.03011C12.8918 6.20544 12.9874 6.41295 13.029 6.63417C13.0706 6.85539 13.0568 7.08346 12.989 7.29809C12.9211 7.51271 12.8012 7.70722 12.64 7.86432C12.0734 8.32932 10.3217 9.67349 10.3217 9.67349H13.0521M14.0309 6.88182C14.0316 6.65672 14.088 6.43531 14.195 6.23727C14.302 6.03924 14.4563 5.87074 14.6442 5.74676C14.8321 5.62278 15.0477 5.54718 15.2719 5.52667C15.496 5.50617 15.7218 5.5414 15.929 5.62923C16.1363 5.71707 16.3186 5.85478 16.4598 6.03011C16.601 6.20544 16.6966 6.41295 16.7382 6.63417C16.7798 6.85539 16.766 7.08346 16.6981 7.29809C16.6303 7.51271 16.5104 7.70722 16.3492 7.86432C15.7825 8.32932 14.0309 9.67349 14.0309 9.67349H16.7613"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99984 18.9582C14.9474 18.9582 18.9582 14.9474 18.9582 9.99984C18.9582 5.05229 14.9474 1.0415 9.99984 1.0415C5.05229 1.0415 1.0415 5.05229 1.0415 9.99984C1.0415 14.9474 5.05229 18.9582 9.99984 18.9582Z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7301 12.1846V14.2454M15.7605 13.2146H13.6997"
              stroke="black"
              strokeWidth="0.5"
              strokeMiterlimit="7.467"
              strokeLinecap="round"
            />
            <path
              d="M7.64173 7.60547C7.50596 7.60547 7.37152 7.63222 7.2461 7.68421C7.12068 7.73619 7.00673 7.81238 6.91076 7.90842C6.8148 8.00446 6.7387 8.11847 6.68682 8.24394C6.63494 8.36941 6.60829 8.50387 6.6084 8.63964C6.60834 8.77537 6.63503 8.90979 6.68694 9.0352C6.73884 9.16062 6.81495 9.27458 6.91091 9.37058C7.00687 9.46658 7.1208 9.54273 7.2462 9.59469C7.37159 9.64664 7.506 9.67338 7.64173 9.67338H8.31423C8.45 9.67344 8.58445 9.64674 8.7099 9.59481C8.83534 9.54288 8.94932 9.46673 9.04533 9.37073C9.14133 9.27473 9.21747 9.16074 9.2694 9.0353C9.32134 8.90985 9.34804 8.7754 9.34798 8.63964C9.34809 8.50383 9.32143 8.36934 9.26952 8.24384C9.21762 8.11835 9.14148 8.00432 9.04547 7.90827C8.94946 7.81222 8.83546 7.73604 8.70999 7.68409C8.58452 7.63213 8.45004 7.60541 8.31423 7.60547"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.31409 7.60551C8.44986 7.60557 8.58431 7.57887 8.70975 7.52694C8.8352 7.47501 8.94918 7.39886 9.04518 7.30286C9.14119 7.20685 9.21733 7.09287 9.26926 6.96743C9.32119 6.84198 9.34789 6.70753 9.34784 6.57176C9.34795 6.43596 9.32129 6.30147 9.26938 6.17597C9.21747 6.05048 9.14134 5.93645 9.04533 5.8404C8.94932 5.74435 8.83532 5.66817 8.70985 5.61622C8.58438 5.56426 8.44989 5.53754 8.31409 5.5376H7.64159C7.50575 5.53749 7.37122 5.56416 7.2457 5.6161C7.12018 5.66803 7.00613 5.7442 6.91008 5.84025C6.81402 5.93631 6.73785 6.05036 6.68592 6.17588C6.63399 6.3014 6.60731 6.43593 6.60742 6.57176C6.60737 6.70757 6.63408 6.84205 6.68604 6.96752C6.738 7.093 6.81418 7.207 6.91023 7.30301C7.00627 7.39901 7.1203 7.47515 7.2458 7.52706C7.37129 7.57896 7.50578 7.60562 7.64159 7.60551M7.64159 7.60551H8.31409Z"
              stroke="black"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        descriptions: ["A18 Pro chip with 6-core GPU"],
      },
      {
        title: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.803 4C14.142 5.14394 13.877 6.47408 14.0492 7.78402C14.2214 9.09395 14.8211 10.3104 15.7554 11.2446C16.6896 12.1789 17.9061 12.7786 19.216 12.9508C20.5259 13.123 21.8561 12.858 23 12.197V19C23.0007 19.1318 22.9752 19.2624 22.925 19.3843C22.8748 19.5062 22.8009 19.6169 22.7076 19.71C22.6143 19.8031 22.5034 19.8768 22.3815 19.9267C22.2595 19.9767 22.1288 20.0019 21.997 20.001H2.002C1.87043 20.0013 1.74009 19.9756 1.61847 19.9254C1.49685 19.8752 1.38633 19.8015 1.29325 19.7085C1.20016 19.6155 1.12635 19.505 1.07602 19.3835C1.0257 19.2619 0.999869 19.1316 1 19V5C1 4.448 1.44 4 2.002 4H14.803ZM20 11C18.9391 11 17.9217 10.5786 17.1716 9.82843C16.4214 9.07828 16 8.06087 16 7C16 5.93913 16.4214 4.92172 17.1716 4.17157C17.9217 3.42143 18.9391 3 20 3C21.0609 3 22.0783 3.42143 22.8284 4.17157C23.5786 4.92172 24 5.93913 24 7C24 8.06087 23.5786 9.07828 22.8284 9.82843C22.0783 10.5786 21.0609 11 20 11ZM20 9C20.5304 9 21.0391 8.78929 21.4142 8.41421C21.7893 8.03914 22 7.53043 22 7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5C19.4696 5 18.9609 5.21071 18.5858 5.58579C18.2107 5.96086 18 6.46957 18 7C18 7.53043 18.2107 8.03914 18.5858 8.41421C18.9609 8.78929 19.4696 9 20 9ZM19 15V18H21V15H19Z"
              fill="black"
            />
          </svg>
        ),
        descriptions: ["Camera Control"],
      },
    ],
  },
];

const Tariff: FC = () => {
  return (
    <div className="relative grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-y-14 justify-center mx-auto gap-5">
      {/* <div className="relative grid grid-cols-2 xl:grid-cols-4 justify-between gap-5 xl:gap-0 xl:justify-evenly"> */}
      {tariffData?.map((item) => (
        <div className="relative max-w-[240px] w-full">
          <TariffStart
            title={item.head.title}
            description={item.head.description}
            photo={item.head.photo}
            price={item.head.price}
          />
          {/* ))} */}

          <hr className="my-6 md:my-10 border-[#d2d2d7]" />

          {/* {tariffData?.map((item) => ( */}
          <Accordion className="w-full">
            <AccordionItem
              header={({ state }) => (
                <div className="flex flex-col items-center max-w-[240px] w-[240px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      state.isEnter ? "scale-y-[1]" : "-scale-y-[1]"
                    }`}
                  >
                    <path
                      d="M9.54742 6.72513L2.90992 13.6914C2.79912 13.8076 2.7373 13.962 2.7373 14.1226C2.7373 14.2832 2.79912 14.4376 2.90992 14.5539L2.91742 14.5614C2.97114 14.6179 3.0358 14.6629 3.10746 14.6937C3.17913 14.7245 3.25631 14.7403 3.3343 14.7403C3.41229 14.7403 3.48947 14.7245 3.56113 14.6937C3.6328 14.6629 3.69746 14.6179 3.75117 14.5614L10.0012 8.00138L16.2487 14.5614C16.3024 14.6179 16.367 14.6629 16.4387 14.6937C16.5104 14.7245 16.5876 14.7403 16.6655 14.7403C16.7435 14.7403 16.8207 14.7245 16.8924 14.6937C16.964 14.6629 17.0287 14.6179 17.0824 14.5614L17.0899 14.5539C17.2007 14.4376 17.2625 14.2832 17.2625 14.1226C17.2625 13.962 17.2007 13.8076 17.0899 13.6914L10.4524 6.72513C10.3941 6.66386 10.3238 6.61509 10.2461 6.58176C10.1683 6.54843 10.0845 6.53125 9.99992 6.53125C9.9153 6.53125 9.83156 6.54843 9.75378 6.58176C9.676 6.61509 9.6058 6.66386 9.54742 6.72513Z"
                      fill="black"
                    />
                  </svg>

                  <div className="pt-6">
                    <TariffEnd
                      head={item.footer[0].title}
                      descriptions={item.footer[0].descriptions}
                    />
                  </div>
                </div>
              )}
            >
              <div className="flex flex-col justify-evenly gap-14 pt-14">
                {item.footer
                  .slice(1)
                  ?.map((footer) => (
                    <TariffEnd
                      head={footer.title}
                      descriptions={footer.descriptions}
                    />
                  ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Tariff;

/* <div>
  <div className="relative flex justify-evenly">
    {tariffData?.map((item) => (
      <div className="relative max-w-[360px] w-full">
        <TariffStart
          title={item.head.title}
          description={item.head.description}
          photo={item.head.photo}
          price={item.head.price}
        />
      </div>
    ))}
  </div>

  <hr className="my-[50px] border-[#d2d2d7]" />

  <div className="relative flex justify-evenly">
    {tariffData?.map((item) => (
      <Accordion className="max-w-[360px] w-full">
        <AccordionItem
          header={({ state }) => (
            <div className="flex flex-col items-center max-w-[360px] w-[360px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  state.isEnter ? "scale-y-[1]" : "-scale-y-[1]"
                }`}
              >
                <path
                  d="M9.54742 6.72513L2.90992 13.6914C2.79912 13.8076 2.7373 13.962 2.7373 14.1226C2.7373 14.2832 2.79912 14.4376 2.90992 14.5539L2.91742 14.5614C2.97114 14.6179 3.0358 14.6629 3.10746 14.6937C3.17913 14.7245 3.25631 14.7403 3.3343 14.7403C3.41229 14.7403 3.48947 14.7245 3.56113 14.6937C3.6328 14.6629 3.69746 14.6179 3.75117 14.5614L10.0012 8.00138L16.2487 14.5614C16.3024 14.6179 16.367 14.6629 16.4387 14.6937C16.5104 14.7245 16.5876 14.7403 16.6655 14.7403C16.7435 14.7403 16.8207 14.7245 16.8924 14.6937C16.964 14.6629 17.0287 14.6179 17.0824 14.5614L17.0899 14.5539C17.2007 14.4376 17.2625 14.2832 17.2625 14.1226C17.2625 13.962 17.2007 13.8076 17.0899 13.6914L10.4524 6.72513C10.3941 6.66386 10.3238 6.61509 10.2461 6.58176C10.1683 6.54843 10.0845 6.53125 9.99992 6.53125C9.9153 6.53125 9.83156 6.54843 9.75378 6.58176C9.676 6.61509 9.6058 6.66386 9.54742 6.72513Z"
                  fill="black"
                />
              </svg>

              <div className="pt-6">
                <TariffEnd
                  head={item.footer[0].title}
                  descriptions={item.footer[0].descriptions}
                />
              </div>
            </div>
          )}
        >
          <div className="flex flex-col justify-evenly gap-14 pt-14">
            {item.footer
              .slice(1)
              ?.map((footer) => (
                <TariffEnd
                  head={footer.title}
                  descriptions={footer.descriptions}
                />
              ))}
          </div>
        </AccordionItem>
      </Accordion>
    ))}
  </div>
</div>; */
