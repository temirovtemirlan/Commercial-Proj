import { useState, type FC } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Container from "./Container";

const accordionData = [
  {
    title: "iPhone and Mac",
    description:
      "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.",
    img: "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp",
  },
  {
    title: "iPhone and Apple Watch",
    description:
      "Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction.14 To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.",
    img: "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_3D.webp",
  },
  {
    title: "iPhone and AirPods",
    description:
      "Set up AirPods on iPhone with just a tap. You'll love Adaptive Audio, which automatically tailors the noise control for you to provide the best listening experience across different environments and interactions throughout the day.",
    img: "https://storage.googleapis.com/mkit_monster_bucket/Poster/BR_CG.webp",
  },
];

const border = (index: number) => ({
  borderBottom: index !== accordionData.length - 1 ? "1px solid #ccc" : "none",
});

const AccordionWrapperImg: FC = () => {
  const [publicKey, setPublicKey] = useState(0);

  return (
    <Container className="my-[100px]">
      <div className="grid xl:grid-cols-[590px_1fr] bg-[#f5f5f7] rounded-[28px] w-full min-h-[784px] overflow-hidden">
        <div className="flex items-center max-xl:py-8 px-11 xl:px-32">
          <Accordion.Root
            type="single"
            onValueChange={(value: string) => setPublicKey(+value)}
            defaultValue="0"
          >
            {accordionData.map((el, index) => (
              <Accordion.Item
                key={index}
                value={String(index)}
                style={{ ...border(index) }}
                disabled={publicKey === index}
              >
                <Accordion.Header>
                  <Accordion.Trigger className="AccordionTrigger flex justify-between items-center w-full py-5">
                    <p className="text-[28px] font-semibold text-start">
                      {el.title}
                    </p>

                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`accordion_wrapper_img-accordion_chevron ${publicKey === index ? "rotate-180" : "rotate-0"}`}
                      >
                        <path
                          d="M9.54742 6.72513L2.90992 13.6914C2.79912 13.8076 2.7373 13.962 2.7373 14.1226C2.7373 14.2832 2.79912 14.4376 2.90992 14.5539L2.91742 14.5614C2.97114 14.6179 3.0358 14.6629 3.10746 14.6937C3.17913 14.7245 3.25631 14.7403 3.3343 14.7403C3.41229 14.7403 3.48947 14.7245 3.56113 14.6937C3.6328 14.6629 3.69746 14.6179 3.75117 14.5614L10.0012 8.00138L16.2487 14.5614C16.3024 14.6179 16.367 14.6629 16.4387 14.6937C16.5104 14.7245 16.5876 14.7403 16.6655 14.7403C16.7435 14.7403 16.8207 14.7245 16.8924 14.6937C16.964 14.6629 17.0287 14.6179 17.0824 14.5614L17.0899 14.5539C17.2007 14.4376 17.2625 14.2832 17.2625 14.1226C17.2625 13.962 17.2007 13.8076 17.0899 13.6914L10.4524 6.72513C10.3941 6.66386 10.3238 6.61509 10.2461 6.58176C10.1683 6.54843 10.0845 6.53125 9.99992 6.53125C9.9153 6.53125 9.83156 6.54843 9.75378 6.58176C9.676 6.61509 9.6058 6.66386 9.54742 6.72513Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="accordion_wrapper_img-accordion_content overflow-hidden">
                  <div className="pb-5">
                    {el.description}

                    <img
                      className="w-full max-h-[704px] h-full mt-10 xl:hidden"
                      src={el.img}
                      alt="banner"
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        <div className="flex justify-center items-center overflow-hidden max-lg: max-xl:hidden">
          <img
            className="w-full max-h-[704px] h-full"
            src={accordionData[publicKey].img || ""}
            alt="banner"
          />
        </div>
      </div>
    </Container>
  );
};

export default AccordionWrapperImg;
