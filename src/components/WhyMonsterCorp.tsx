import type { FC } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Container from "./Container";
import { AnimatedComponent } from "common/ui/animatedComponent";

const WhyMonsterCorp: FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const { t } = useTranslation();

  return (
    <Container className="py-[100px] bg-[#f5f5f7]">
      <div className="text-center" ref={ref}>
        <AnimatedComponent
          tag="legend"
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gradient-legend-1lvl"
        >
          {t("whyMonsterCorp.title")}
        </AnimatedComponent>
        <AnimatedComponent
          tag="p"
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="legend-2lvl text-balance"
        >
          {t("whyMonsterCorp.boldTitleOne")}
          <br />
          {t("whyMonsterCorp.boldTitleTwo")}
          <br />
          {t("whyMonsterCorp.boldTitleThree")}
        </AnimatedComponent>

        <AnimatedComponent
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-1lvl text-balance"
        >
          <p
            dangerouslySetInnerHTML={{ __html: t("whyMonsterCorp.textDesc") }}
          />
        </AnimatedComponent>
      </div>

      <div>
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row gap-x-[50px] xl:gap-x-[100px] gap-y-[40px] justify-between text-left text-2xl font-semibold leading-tight mt-[70px] *:flex *:flex-col *:max-lg:items-center *:gap-5 *:max-lg:text-center">
          <AnimatedComponent
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : undefined}
            transition={{ duration: 1, delay: 1 }}
          >
            <AnimatedComponent
              tag="div"
              animate={inView ? { opacity: [1, 0, 1] } : undefined}
              transition={{
                duration: 0.6,
                repeat: 1,
                delay: 2,
              }}
            >
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7988 11.8569C27.3841 11.3531 26.9933 10.8776 26.8062 10.4268C26.6051 9.9424 26.5415 9.30541 26.4692 8.63224C26.3545 7.51706 26.223 6.25013 25.3672 5.39698C24.5114 4.54383 23.2497 4.40972 22.1318 4.29415C21.4578 4.22445 20.8216 4.15828 20.3364 3.95801C19.8864 3.77097 19.41 3.37924 18.9062 2.96458C18.0239 2.23936 17.0269 1.41797 15.7626 1.41797C14.4983 1.41797 13.4995 2.23936 12.6181 2.96458C12.1143 3.37924 11.6387 3.77097 11.1879 3.95801C10.7035 4.15828 10.0665 4.22268 9.39331 4.29415C8.27809 4.40972 7.01112 4.5403 6.15794 5.3961C5.30477 6.25189 5.17066 7.51353 5.05508 8.63224C4.98538 9.30541 4.91921 9.9424 4.71893 10.4268C4.53188 10.8776 4.14014 11.3531 3.72546 11.8569C3.0011 12.7392 2.17969 13.7361 2.17969 15.0013C2.17969 16.2665 3.0011 17.2643 3.72546 18.1448C4.14014 18.6486 4.53188 19.125 4.71893 19.575C4.91921 20.0593 4.98361 20.6963 5.05508 21.3704C5.17066 22.4855 5.30124 23.7525 6.15794 24.6056C7.01465 25.4588 8.27545 25.592 9.39331 25.7076C10.0665 25.7773 10.7035 25.8434 11.1879 26.0446C11.6387 26.2308 12.1143 26.6225 12.6181 27.0371C13.5004 27.7624 14.4983 28.5838 15.7626 28.5838C17.0269 28.5838 18.0257 27.7624 18.9062 27.0371C19.41 26.6225 19.8864 26.2308 20.3364 26.0446C20.8216 25.8434 21.4578 25.7799 22.1318 25.7076C23.2471 25.5929 24.514 25.4614 25.3672 24.6056C26.2204 23.7498 26.3545 22.4882 26.4692 21.3704C26.5389 20.6963 26.6051 20.0602 26.8062 19.575C26.9933 19.125 27.3841 18.6486 27.7988 18.1448C28.5241 17.2625 29.3455 16.2656 29.3455 15.0013C29.3455 13.737 28.5241 12.7383 27.7988 11.8569ZM26.5724 17.1355C26.1022 17.7072 25.616 18.2983 25.3372 18.9671C25.0478 19.6658 24.9667 20.4493 24.8881 21.2063C24.7911 22.1415 24.7002 23.0246 24.2423 23.4825C23.7844 23.9404 22.9012 24.0313 21.966 24.1283C21.209 24.2068 20.4255 24.288 19.7267 24.5774C19.0579 24.8544 18.4668 25.3405 17.896 25.8126C17.1548 26.4222 16.4561 26.9974 15.7608 26.9974C15.0656 26.9974 14.3659 26.4222 13.6257 25.8126C13.0539 25.3423 12.4628 24.8562 11.7949 24.5774C11.0961 24.288 10.3127 24.2068 9.55477 24.1283C8.61954 24.0313 7.73636 23.9404 7.27846 23.4825C6.82055 23.0246 6.72967 22.1415 6.6335 21.2063C6.55498 20.4493 6.4738 19.6658 6.18353 18.9671C5.90649 18.2983 5.42035 17.7072 4.94832 17.1355C4.34307 16.3953 3.77134 15.6965 3.77134 15.0013C3.77134 14.3061 4.3466 13.6064 4.95538 12.8662C5.42564 12.2945 5.91178 11.7034 6.19059 11.0346C6.48086 10.3368 6.56203 9.55332 6.64056 8.79546C6.73673 7.86026 6.82849 6.97711 7.2864 6.51922C7.74431 6.06132 8.62395 5.97045 9.55653 5.86987C10.3144 5.79576 11.0944 5.71459 11.8002 5.42874C12.4681 5.15171 13.0592 4.66558 13.631 4.19357C14.3712 3.58481 15.0709 3.00869 15.7661 3.00869C16.4614 3.00869 17.1601 3.58481 17.9013 4.19357C18.4721 4.66382 19.0632 5.14994 19.732 5.42874C20.4308 5.719 21.2143 5.80017 21.9713 5.87781C22.9065 5.97486 23.7897 6.06662 24.2476 6.52363C24.7055 6.98064 24.7964 7.86467 24.8934 8.79987C24.9719 9.55773 25.0531 10.3412 25.3425 11.0391C25.6195 11.7078 26.1057 12.2989 26.5777 12.8706C27.1874 13.6109 27.7626 14.3105 27.7626 15.0057C27.7626 15.7009 27.1821 16.3953 26.5724 17.1355Z"
                  fill="#0171E3"
                />
                <path
                  d="M15.9438 7.70117C14.4624 7.701 13.0143 8.1401 11.7825 8.96296C10.5506 9.78581 9.59053 10.9555 9.02351 12.324C8.45649 13.6925 8.30804 15.1984 8.59693 16.6513C8.88583 18.1042 9.59909 19.4388 10.6465 20.4863C11.694 21.5338 13.0285 22.2472 14.4814 22.5363C15.9343 22.8253 17.4403 22.6771 18.8089 22.1102C20.1776 21.5434 21.3473 20.5834 22.1704 19.3518C22.9934 18.1201 23.4327 16.672 23.4327 15.1907C23.4327 13.2045 22.6437 11.2997 21.2393 9.89512C19.8349 8.49058 17.9301 7.70141 15.9438 7.70117ZM19.9838 13.6715C17.1402 15.1263 15.3156 18.1939 15.2971 18.2248C15.2246 18.3483 15.1245 18.4532 15.0047 18.5315C14.8848 18.6097 14.7484 18.659 14.6062 18.6757C14.5705 18.6799 14.5346 18.6819 14.4986 18.6818C14.3736 18.6818 14.2499 18.6565 14.135 18.6073C14.02 18.5582 13.9162 18.4863 13.8298 18.396L11.7626 16.2371C11.6785 16.149 11.6125 16.0453 11.5685 15.9317C11.5245 15.8182 11.5033 15.6971 11.5061 15.5753C11.5089 15.4536 11.5356 15.3336 11.5848 15.2222C11.6339 15.1108 11.7045 15.0101 11.7926 14.926C11.8807 14.8419 11.9844 14.776 12.098 14.732C12.2115 14.6879 12.3326 14.6667 12.4544 14.6695C12.5761 14.6723 12.6961 14.699 12.8075 14.7482C12.9189 14.7973 13.0196 14.868 13.1037 14.956L14.376 16.2847C15.2406 15.106 16.8984 13.1703 19.1403 12.0216C19.2487 11.9662 19.3669 11.9326 19.4882 11.9229C19.6095 11.9131 19.7315 11.9273 19.8473 11.9647C19.9631 12.0021 20.0704 12.062 20.1631 12.1408C20.2558 12.2197 20.332 12.316 20.3875 12.4244C20.4429 12.5327 20.4765 12.6509 20.4862 12.7722C20.496 12.8935 20.4818 13.0155 20.4444 13.1313C20.407 13.2471 20.3471 13.3544 20.2682 13.4471C20.1894 13.5398 20.093 13.616 19.9847 13.6715H19.9838Z"
                  fill="#0171E3"
                />
              </svg>
            </AnimatedComponent>
            <p
              dangerouslySetInnerHTML={{
                __html: t("whyMonsterCorp.iconTextOne"),
              }}
            />
          </AnimatedComponent>

          <AnimatedComponent
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : undefined}
            transition={{ duration: 1, delay: 1 }}
          >
            <AnimatedComponent
              tag="div"
              animate={inView ? { opacity: [1, 0, 1] } : undefined}
              transition={{
                duration: 0.6,
                repeat: 1,
                delay: 2,
              }}
            >
              <svg
                width="37"
                height="30"
                viewBox="0 0 37 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9087 9.91146C27.8107 12.4682 26.849 14.9149 25.1822 16.8479C24.6886 17.4011 24.3122 18.0494 24.0757 18.7536V20.7297C24.0757 21.2098 23.886 21.6703 23.5485 22.0098C23.2109 22.3493 22.7531 22.54 22.2757 22.54H15.2462C14.7688 22.54 14.311 22.3493 13.9734 22.0098C13.6359 21.6703 13.4462 21.2098 13.4462 20.7297V18.7536C13.2097 18.0495 12.8332 17.4011 12.3397 16.8479C10.6716 14.9155 9.70846 12.4687 9.60938 9.91146C9.60932 7.78724 10.3398 5.72839 11.677 4.08408C13.0141 2.43978 14.8756 1.31126 16.9457 0.88992C19.0159 0.468581 21.1672 0.780362 23.0348 1.77238C24.9024 2.76441 26.3714 4.3756 27.1925 6.3327C27.6699 7.46595 27.9148 8.68451 27.9125 9.91527L27.9087 9.91146ZM26.1087 9.91146C26.1087 7.95151 25.3346 6.07183 23.9566 4.68593C22.5786 3.30004 20.7097 2.52145 18.761 2.52145C16.8122 2.52145 14.9433 3.30004 13.5653 4.68593C12.1873 6.07183 11.4132 7.95151 11.4132 9.91146C11.4132 14.4145 15.2462 16.4077 15.2462 18.7536V20.7297H22.2757V18.7536C22.2757 16.4077 26.1087 14.4145 26.1087 9.91146ZM23.1757 24.6648C23.1759 24.7838 23.1528 24.9018 23.1077 25.0118C23.0626 25.1218 22.9964 25.2219 22.9128 25.3061C22.8292 25.3904 22.7299 25.4572 22.6205 25.5028C22.5112 25.5484 22.394 25.5719 22.2757 25.5719H15.2462C15.0075 25.5719 14.7786 25.4765 14.6098 25.3068C14.441 25.137 14.3462 24.9068 14.3462 24.6667C14.3462 24.4267 14.441 24.1964 14.6098 24.0267C14.7786 23.8569 15.0075 23.7616 15.2462 23.7616H22.2757C22.5141 23.7616 22.7427 23.8567 22.9114 24.026C23.0801 24.1953 23.1752 24.4251 23.1757 24.6648ZM21.9631 27.0697C21.9937 27.1589 21.996 27.2555 21.9695 27.346C21.943 27.4365 21.8891 27.5165 21.8153 27.5747C20.9281 28.2676 19.8368 28.6437 18.7136 28.6437C17.5903 28.6437 16.4991 28.2676 15.6119 27.5747C15.5374 27.5172 15.4827 27.4376 15.4555 27.3472C15.4283 27.2568 15.43 27.16 15.4603 27.0706C15.4907 26.9812 15.5481 26.9036 15.6246 26.8488C15.7011 26.7939 15.7927 26.7645 15.8866 26.7648H21.5386C21.6324 26.7648 21.7238 26.7941 21.8002 26.8487C21.8767 26.9034 21.9323 26.9806 21.9631 27.0697Z"
                  fill="#0171E3"
                />
              </svg>
            </AnimatedComponent>
            <p
              dangerouslySetInnerHTML={{
                __html: t("whyMonsterCorp.iconTextTwo"),
              }}
            />
          </AnimatedComponent>

          <AnimatedComponent
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : undefined}
            transition={{ duration: 1, delay: 1 }}
          >
            <AnimatedComponent
              tag="div"
              animate={inView ? { opacity: [1, 0, 1] } : undefined}
              transition={{
                duration: 0.6,
                repeat: 1,
                delay: 2,
              }}
            >
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6172 7.5H29.1886V16.0714"
                  stroke="#0171E3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.1892 7.5L17.082 19.6071C16.8817 19.8035 16.6125 19.9134 16.332 19.9134C16.0516 19.9134 15.7823 19.8035 15.582 19.6071L10.6535 14.6786C10.4532 14.4823 10.1839 14.3723 9.90346 14.3723C9.62301 14.3723 9.35374 14.4823 9.15346 14.6786L1.33203 22.5"
                  stroke="#0171E3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </AnimatedComponent>
            <p
              dangerouslySetInnerHTML={{
                __html: t("whyMonsterCorp.iconTextThree"),
              }}
            />
          </AnimatedComponent>
        </div>
      </div>
    </Container>
  );
};

export default WhyMonsterCorp;
