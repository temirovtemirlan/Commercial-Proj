import { useMemo, useRef, useState, type FC } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { useInView } from "react-intersection-observer";

import { TariffEnd } from "./TariffBlock";
import Container from "./Container";
import { AnimatedComponent } from "common/ui/animatedComponent";
import { tariffData } from "data/index";
import { cn } from "helpers/style";

const anVariantsOpacity = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const Tariff: FC = () => {
  const [animRef, animInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState(0);
  // const [openAccordionKeys, setOpenAccordionKeys] = useState<string[]>([]);
  // const [headViewIsAccordionOpen, setHeadViewIsAccordionOpen] = useState(false);
  // const [priceRefElement, priceInView] = useInView({ threshold: 0 });
  const tabPanelRef = useRef<HTMLLegendElement | null>(null);

  // const [containerRefElement, tariffContainerInView] = useInView({
  //   threshold: 0,
  //   rootMargin: "-100px 0px -1000px 0px",
  // });

  const uniqueCategories = Array.from(
    new Set(tariffData.map((item) => item.tabCategory))
  );

  // prettier-ignore
  const tariffFilter = useMemo(() => { return tariffData.filter((item) => item.tabCategory === uniqueCategories[activeTab])}, [activeTab]);

  // const handleAccordionStateChange = (itemKey: string, isExpanded: boolean) => {
  //   setOpenAccordionKeys((prev) => {
  //     const updatedKeys = isExpanded
  //       ? [...prev, itemKey]
  //       : prev.filter((key) => key !== itemKey);
  //     return updatedKeys;
  //   });
  // };

  // useEffect(() => {
  //   if (!tariffContainerInView) {
  //     setHeadViewIsAccordionOpen(false);
  //     return;
  //   }

  //   if (openAccordionKeys.length > 0) {
  //     setHeadViewIsAccordionOpen(!priceInView);
  //   } else {
  //     setHeadViewIsAccordionOpen(false);
  //   }
  // }, [openAccordionKeys, priceInView, tariffContainerInView]);

  return (
    <Container
      className="relative overflow-hidden xl:pt-[100px] pt-[50px] bg-[#f5f5f7]"
      // ref={containerRefElement}
    >
      <AnimatedComponent
        tag="legend"
        initial={{ opacity: 0, y: 20 }}
        animate={animInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="legend-3lvl"
        ref={tabPanelRef}
      >
        Изучите тарифы.
      </AnimatedComponent>
      <div ref={animRef} />

      <Tabs className="Our-Indicators" onSelect={(e) => setActiveTab(e)}>
        <AnimatedComponent
          initial={{ opacity: 0, y: 20 }}
          animate={animInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TabList className="inline-flex p-[5px] rounded-full bg-white">
            {uniqueCategories.map((item) => (
              <Tab
                className="tab__delivery_panels whitespace-nowrap px-6 py-2.5"
                key={item}
              >
                {item}
              </Tab>
            ))}
          </TabList>
        </AnimatedComponent>

        <AnimatedComponent
          initial={{ opacity: 0, y: 40 }}
          animate={animInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {uniqueCategories.map((tab, tabIndex) => (
            <TabPanel
              className={`w-full overflow-hidden ${tabIndex === activeTab ? "mt-[30px]" : "mt-0"}`}
              key={tab}
            >
              <div className="relative grid md:grid-cols-[repeat(2,minmax(0,354px))] lg:grid-cols-[repeat(3,minmax(0,354px))] justify-center gap-y-14 mx-auto px-5 md:px-0 overflow-x-auto">
                {tariffFilter?.map((item, index) => (
                  <AnimatedComponent
                    initial="hidden"
                    animate={animInView ? "visible" : "hidden"}
                    variants={anVariantsOpacity}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    className={cn("relative w-full max-w-[354px]", {
                      "md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0":
                        index === 2,
                    })}
                    key={index}
                  >
                    <>
                      {/* {headViewIsAccordionOpen && index === 1 && (
                    <div
                      className={cn(
                        "fixed top-0 left-0 w-full bg-[#f5f5f7] text-center px-5 md:px-[100px] mac:px-[440px] z-[2]"
                      )}
                      style={{
                        borderBottom: "1px solid #d2d2d7",
                      }}
                    >
                      <div className="grid md:grid-cols-[repeat(2,minmax(0,354px))] lg:grid-cols-[repeat(3,minmax(0,354px))] text-center w-full justify-center mx-auto py-8">
                        {tariffFilter.map((item, headIndex) => (
                          <div
                            className={cn("w-full max-w-[354px] px-2.5", {
                              "md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0":
                                headIndex === 2,
                            })}
                            key={item.head.title}
                          >
                            <legend className="text-black text-xl xl:text-[24px] font-bold">
                              {item.head.title}
                            </legend>
                            <p className="text-black text-xs md:text-sm w-4/5 mx-auto mt-4">
                              {item.head.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}
                    </>

                    <div className="text-center w-full box-border px-2.5">
                      <div className="w-full max-w-[284px] rounded-2.5xl overflow-hidden h-[500px] mx-auto bg-gray-200">
                        {item.head.media ? (
                          <video
                            className={"object-cover size-full"}
                            src={`https://storage.googleapis.com/mkit_monster_bucket/Tariff/${item.head.media}`}
                            loop
                            autoPlay
                            muted
                            controls={false}
                            playsInline
                          />
                        ) : (
                          <div className="flex size-full justify-center items-center">
                            <span className="text-center inline-block my-auto text-lg">
                              Скоро
                            </span>
                          </div>
                        )}
                      </div>
                      <legend className="text-black text-xl xl:text-[24px] font-bold mt-4 md:mt-[40px] w-full">
                        {item.head.title}
                      </legend>
                      <p className="text-black text-lg md:text-base my-2 md:my-[16px] w-4/5 mx-auto h-auto md:h-[100px] overflow-y-auto">
                        {item.head.description}
                      </p>

                      <p
                        className="text-black text-lg md:text-base font-semibold"
                        // ref={
                        //   tabIndex === activeTab && index === 0
                        //     ? priceRefElement
                        //     : null
                        // }
                        dangerouslySetInnerHTML={{ __html: item.head.price }}
                      ></p>

                      <AnimatedComponent
                        tag="button"
                        whileHover={{ scale: 1.04, y: -2 }}
                        className="w-[192px] h-11 p-2 md:p-2.5 bg-[#0071e3] rounded-full text-base justify-center items-center gap-2.5 inline-flex mt-[40px] text-white"
                      >
                        Оставить заявку
                      </AnimatedComponent>
                    </div>

                    <hr className="border-[#d2d2d7] w-full max-md:hidden my-10" />

                    {item.head.content ? (
                      <div className="w-full h-10 px-2.5 mb-5">
                        <div className="pt-2 w-full h-full text-2xl text-center">
                          {item.head.content}
                        </div>
                      </div>
                    ) : null}

                    <Accordion
                      className="w-full mt-10 md:mt-0 text-center px-2.5"
                      transition
                      transitionTimeout={300}
                    >
                      <AccordionItem
                        header={({ state }) => (
                          <div
                            className="relative flex flex-col items-center w-full"
                            // onClick={() =>
                            //   handleAccordionStateChange(
                            //     String(index),
                            //     !state.isEnter
                            //   )
                            // }
                          >
                            <Arrow isEnter={state.isEnter} />

                            <div className="pt-6">
                              <TariffEnd
                                head={item.footer[0].title}
                                descriptions={item.footer[0].descriptions}
                                before={item.footer[0].before}
                              />
                            </div>
                          </div>
                        )}
                        itemKey={`${index}-${item.tabCategory}`}
                      >
                        <div className="flex flex-col justify-evenly gap-10 pt-10">
                          {item.footer
                            .slice(1)
                            ?.map((footer) => (
                              <TariffEnd
                                key={footer.descriptions[0]}
                                head={footer.title}
                                className={"w-full text-center"}
                                descriptions={footer.descriptions}
                                before={footer.before}
                              />
                            ))}
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </AnimatedComponent>
                ))}
              </div>
            </TabPanel>
          ))}
        </AnimatedComponent>
      </Tabs>
    </Container>
  );
};

export default Tariff;

const Arrow = ({ isEnter }: { isEnter: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-transform duration-300 ${
      isEnter ? "scale-y-[1]" : "-scale-y-[1]"
    }`}
  >
    <path
      d="M9.54742 6.72513L2.90992 13.6914C2.79912 13.8076 2.7373 13.962 2.7373 14.1226C2.7373 14.2832 2.79912 14.4376 2.90992 14.5539L2.91742 14.5614C2.97114 14.6179 3.0358 14.6629 3.10746 14.6937C3.17913 14.7245 3.25631 14.7403 3.3343 14.7403C3.41229 14.7403 3.48947 14.7245 3.56113 14.6937C3.6328 14.6629 3.69746 14.6179 3.75117 14.5614L10.0012 8.00138L16.2487 14.5614C16.3024 14.6179 16.367 14.6629 16.4387 14.6937C16.5104 14.7245 16.5876 14.7403 16.6655 14.7403C16.7435 14.7403 16.8207 14.7245 16.8924 14.6937C16.964 14.6629 17.0287 14.6179 17.0824 14.5614L17.0899 14.5539C17.2007 14.4376 17.2625 14.2832 17.2625 14.1226C17.2625 13.962 17.2007 13.8076 17.0899 13.6914L10.4524 6.72513C10.3941 6.66386 10.3238 6.61509 10.2461 6.58176C10.1683 6.54843 10.0845 6.53125 9.99992 6.53125C9.9153 6.53125 9.83156 6.54843 9.75378 6.58176C9.676 6.61509 9.6058 6.66386 9.54742 6.72513Z"
      fill="black"
    />
  </svg>
);
