import type { FC } from "react";
import Container from "./Container";
import { useInView } from "react-intersection-observer";
import { AnimatedComponent } from "common/ui/animatedComponent";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const CultureSection: FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <Container className="xl:py-[200px] py-[100px] overflow-hidden bg-[#f5f5f7]">
      <AnimatedComponent
        tag="span"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="gradient-legend-1lvl text-center inline-block"
        ref={ref}
      >
        Мы не создаем контент.
      </AnimatedComponent>

      <AnimatedComponent
        tag="span"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="legend-2lvl w-full text-center inline-block"
      >
        Мы создаем культуру.
      </AnimatedComponent>

      <div className="grid lg:grid-cols-2 lg:grid-rows-2 lg:h-[660px] gap-5 mt-16">
        <AnimatedComponent
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="row-span-2 w-full h-full px-10 ss:px-[60px] bg-[#fff] max-lg:py-10 rounded-3xl flex flex-row md:flex-col justify-center items-start gap-8"
        >
          <span>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.89714 28.4043C8.51771 28.4077 8.14415 28.3106 7.81433 28.123C7.57243 27.9871 7.36007 27.8042 7.18969 27.5852C7.01931 27.3662 6.89432 27.1154 6.82204 26.8475C6.74976 26.5795 6.73164 26.2999 6.76873 26.0249C6.80582 25.7499 6.89739 25.485 7.03808 25.2459C9.74933 20.7205 17.9984 10.1582 35.9984 10.1582C43.7989 10.1582 50.6403 12.2071 56.3229 16.2459C61.0001 19.5604 63.6214 23.3123 64.8701 25.1193C65.0285 25.3471 65.1397 25.6042 65.1972 25.8756C65.2547 26.147 65.2573 26.4272 65.2049 26.6996C65.1525 26.972 65.0461 27.2312 64.892 27.4619C64.7379 27.6926 64.5392 27.8902 64.3076 28.0429C63.8343 28.3558 63.2577 28.472 62.7002 28.367C62.1426 28.262 61.6478 27.944 61.3207 27.4804C59.0609 24.2305 52.1703 14.3418 35.9984 14.3418C20.2132 14.3418 13.0765 23.4416 10.752 27.344C10.5652 27.6699 10.2948 27.9399 9.96873 28.1263C9.64265 28.3128 9.27271 28.4087 8.89714 28.4043Z"
                fill="black"
              />
              <path
                d="M45.07 69.7482C44.8905 69.7504 44.7115 69.7301 44.537 69.6877C31.48 66.4534 26.6045 53.4006 26.4063 52.8577L26.3753 52.7382C26.2684 52.3613 23.6486 43.4105 27.6705 38.168C29.5141 35.7774 32.3181 34.5512 36.0208 34.5512C39.4633 34.5512 41.9467 35.6213 43.6539 37.8362C45.0602 39.6446 45.6227 41.8749 46.1669 44.0237C47.3102 48.4984 48.1356 50.8482 52.8874 51.0901C54.9742 51.1956 56.3453 49.9749 57.123 48.9357C59.2253 46.1021 59.591 41.4826 58.0061 37.4045C55.9699 32.1409 48.7431 22.217 36.0011 22.217C30.5617 22.217 25.5639 23.9649 21.5561 27.2499C18.2388 29.971 15.6105 33.8129 14.3449 37.7616C11.9978 45.1135 15.0761 56.6701 15.1056 56.7756C15.1775 57.0445 15.1948 57.3251 15.1565 57.6009C15.1182 57.8767 15.0251 58.1419 14.8826 58.3811C14.7401 58.6203 14.5512 58.8286 14.327 58.9936C14.1028 59.1586 13.8478 59.2771 13.577 59.342C13.0301 59.4874 12.4479 59.4128 11.9553 59.1342C11.4627 58.8555 11.0989 58.395 10.9417 57.8513C10.8011 57.324 7.51329 44.9982 10.2245 36.5016C13.1777 27.2949 22.2916 18.0137 36.0053 18.0137C42.3433 18.0137 48.3311 20.168 53.3289 24.2363C57.1989 27.4004 60.3602 31.6501 62.0139 35.8984C64.1163 41.3223 63.5524 47.4099 60.581 51.3868C58.601 54.039 55.7814 55.4255 52.6581 55.2751C44.5216 54.8673 43.0591 49.1874 41.9931 45.0446C40.8963 40.7949 40.1945 38.746 36.0053 38.746C33.7047 38.746 32.0889 39.3788 31.0834 40.6895C29.7124 42.4824 29.6055 45.2851 29.7574 47.3185C29.857 48.7352 30.0973 50.1385 30.4745 51.5077C30.8092 52.3515 35.1672 63.039 45.6044 65.6251C45.8742 65.689 46.1285 65.8059 46.3527 65.9689C46.577 66.132 46.7665 66.338 46.9104 66.5749C47.0544 66.8119 47.1498 67.0751 47.1911 67.3492C47.2325 67.6233 47.2189 67.9029 47.1513 68.1718C47.0239 68.6257 46.7515 69.0254 46.3758 69.31C46 69.5947 45.5414 69.7486 45.07 69.7482Z"
                fill="black"
              />
              <path
                d="M28.3047 68.7855C28.0121 68.7862 27.7223 68.7278 27.4527 68.614C27.183 68.5002 26.9391 68.3333 26.7353 68.1232C21.5097 62.6388 18.5538 56.5062 17.4414 48.8379V48.7971C16.8171 43.7205 17.7311 36.5332 22.21 31.5916C25.5161 27.9452 30.1638 26.0918 35.9997 26.0918C42.9016 26.0918 48.3255 29.3009 51.7075 35.3576C54.1614 39.7577 54.648 44.1424 54.6607 44.3224C54.6864 44.6 54.6571 44.8798 54.5745 45.146C54.4919 45.4122 54.3576 45.6595 54.1793 45.8738C54.001 46.088 53.7822 46.2649 53.5354 46.3945C53.2886 46.524 53.0187 46.6036 52.7411 46.6287C52.181 46.6895 51.6195 46.5275 51.1777 46.1779C50.736 45.8282 50.4495 45.3189 50.38 44.7598C50.0096 42.1289 49.1583 39.5886 47.8685 37.2659C45.2472 32.6407 41.2591 30.2895 35.9843 30.2895C31.428 30.2895 27.8632 31.6605 25.4107 34.3676C21.8753 38.2699 21.1919 44.2816 21.6771 48.2585C22.6516 55.0395 25.2574 60.4338 29.8586 65.2544C30.0507 65.4542 30.2006 65.6906 30.2995 65.9495C30.3983 66.2083 30.4441 66.4845 30.4342 66.7614C30.4242 67.0383 30.3587 67.3104 30.2414 67.5615C30.1242 67.8126 29.9577 68.0376 29.7518 68.223C29.3552 68.5825 28.8399 68.7828 28.3047 68.7855Z"
                fill="black"
              />
              <path
                d="M52.3886 62.7382C47.8183 62.7382 43.9328 61.4726 40.8236 58.9568C34.577 53.9238 33.8767 45.7268 33.8458 45.3809C33.8018 44.813 33.9851 44.251 34.3555 43.8183C34.7259 43.3857 35.253 43.1179 35.8209 43.0739C36.3887 43.0299 36.9508 43.2133 37.3834 43.5837C37.816 43.9541 38.0838 44.4812 38.1278 45.049C38.1433 45.1699 38.7677 51.8749 43.5827 55.7365C46.4317 58.0118 50.2398 58.9146 54.9325 58.3873C55.4933 58.3192 56.0583 58.476 56.5039 58.8233C56.9495 59.1706 57.2395 59.6802 57.3105 60.2407C57.3412 60.5176 57.3164 60.7978 57.2377 61.065C57.159 61.3322 57.0278 61.5811 56.8519 61.7971C56.676 62.0131 56.4588 62.1918 56.213 62.323C55.9673 62.4542 55.6978 62.5351 55.4205 62.561C54.4141 62.6784 53.4018 62.7376 52.3886 62.7382ZM55.9998 6.85523C54.2167 5.69508 47.8942 2.24414 36.0058 2.24414C23.5267 2.24414 17.1888 6.05648 15.7867 7.02539C15.6941 7.08223 15.6074 7.14819 15.528 7.22227C15.5196 7.23038 15.5087 7.23535 15.497 7.23633C15.2731 7.4318 15.0935 7.67276 14.9701 7.94313C14.8466 8.21351 14.7823 8.50709 14.7812 8.8043C14.7851 9.0829 14.8439 9.35801 14.9542 9.61385C15.0646 9.8697 15.2243 10.1012 15.4244 10.2952C15.6244 10.4892 15.8607 10.6419 16.1198 10.7444C16.3789 10.8469 16.6556 10.8972 16.9342 10.8926C17.3808 10.8923 17.8165 10.7554 18.183 10.5002C18.2434 10.4552 23.6983 6.44742 36.01 6.44742C48.3217 6.44742 53.8061 10.4412 53.8652 10.4707C54.2396 10.7483 54.6942 10.8964 55.1603 10.8926C55.4391 10.8969 55.7161 10.846 55.9752 10.743C56.2343 10.64 56.4706 10.4868 56.6703 10.2922C56.8701 10.0977 57.0295 9.86561 57.1393 9.6093C57.2492 9.35299 57.3074 9.07751 57.3105 8.79867C57.3106 8.381 57.1859 7.97282 56.9523 7.62653C56.7188 7.28024 56.3871 7.01165 55.9998 6.85523Z"
                fill="black"
              />
            </svg>
          </span>

          <p className="text-[#1a1a1c] text-3xl md:text-[44px] xl:text-[56px] md:leading-[50px] xl:leading-[60px] font-bold">
            Бренды должны быть больше, чем логотипы.
          </p>
        </AnimatedComponent>

        <AnimatedComponent
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-full py-2.5 px-10 ss:px-[60px] bg-[#fff] rounded-3xl flex justify-start gap-x-8 items-center max-lg:py-10"
        >
          <svg
            width="72"
            height="73"
            viewBox="0 0 72 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.5982 5.06048C61.5206 4.88693 61.3942 4.73969 61.2344 4.63671C61.0746 4.53373 60.8883 4.47945 60.6982 4.48048H32.8382C32.6709 4.48076 32.5063 4.52302 32.3595 4.60339C32.2128 4.68375 32.0885 4.79966 31.9982 4.94048L10.5782 38.9405C10.4751 39.0885 10.4148 39.2622 10.4041 39.4423C10.3933 39.6224 10.4325 39.802 10.5173 39.9612C10.6021 40.1205 10.7292 40.2532 10.8847 40.3448C11.0401 40.4365 11.2178 40.4834 11.3982 40.4805H26.7382L13.1982 66.9805C13.1205 67.1381 13.0839 67.3128 13.092 67.4883C13.1001 67.6639 13.1525 67.8345 13.2444 67.9843C13.3362 68.1341 13.4646 68.2582 13.6174 68.3449C13.7702 68.4317 13.9425 68.4783 14.1182 68.4805H20.1182C20.257 68.4814 20.3945 68.4535 20.5219 68.3984C20.6493 68.3433 20.7638 68.2623 20.8582 68.1605L55.9982 30.1805C56.1377 30.0383 56.2316 29.8577 56.2678 29.6618C56.3039 29.4659 56.2808 29.2637 56.2013 29.081C56.1218 28.8984 55.9895 28.7436 55.8215 28.6366C55.6535 28.5296 55.4573 28.4753 55.2582 28.4805H41.7782L61.4382 6.12048C61.5649 5.97843 61.6476 5.80254 61.676 5.6143C61.7044 5.42606 61.6774 5.23361 61.5982 5.06048Z"
              fill="#1a1a1c"
            />
          </svg>

          <p className="text-[#1a1a1c] text-2xl ss:text-[32px] xl:text-[44px] ss:leading-[38px] xl:leading-[50px] font-bold">
            Реклама должна <br /> быть больше, <br /> чем креатив.
          </p>
        </AnimatedComponent>

        <AnimatedComponent
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="h-full py-2.5 px-10 ss:px-[60px] bg-[#fff] rounded-3xl flex justify-start gap-x-8 items-center max-lg:py-10"
        >
          <svg
            width="73"
            height="73"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.57906 13.06V20.14C7.57906 20.559 7.4126 20.9609 7.11629 21.2572C6.81998 21.5535 6.4181 21.72 5.99906 21.72H4.11906C3.70002 21.72 3.29814 21.5535 3.00183 21.2572C2.70553 20.9609 2.53906 20.559 2.53906 20.14V13.06C2.53905 12.64 2.7052 12.2371 3.00122 11.9392C3.29725 11.6413 3.6991 11.4726 4.11906 11.47H5.99906C6.41902 11.4726 6.82088 11.6413 7.1169 11.9392C7.41293 12.2371 7.57907 12.64 7.57906 13.06ZM14.5191 8.47V20.17C14.5164 20.59 14.3477 20.9918 14.0498 21.2878C13.7519 21.5839 13.349 21.75 12.9291 21.75H11.0591C10.6391 21.75 10.2362 21.5839 9.93828 21.2878C9.64039 20.9918 9.4717 20.59 9.46906 20.17V8.47C9.46906 8.04831 9.63658 7.64388 9.93476 7.3457C10.2329 7.04752 10.6374 6.88 11.0591 6.88H12.9291C13.3508 6.88 13.7552 7.04752 14.0534 7.3457C14.3515 7.64388 14.5191 8.04831 14.5191 8.47ZM21.4591 3.84V20.17C21.4564 20.59 21.2877 20.9918 20.9898 21.2878C20.6919 21.5839 20.289 21.75 19.8691 21.75H17.9991C17.5791 21.75 17.1762 21.5839 16.8783 21.2878C16.5804 20.9918 16.4117 20.59 16.4091 20.17V3.84C16.4091 3.41831 16.5766 3.01388 16.8748 2.7157C17.1729 2.41752 17.5774 2.25 17.9991 2.25H19.8691C20.2908 2.25 20.6952 2.41752 20.9934 2.7157C21.2915 3.01388 21.4591 3.41831 21.4591 3.84Z"
              fill="#00c5c7"
            />
          </svg>

          <p className="text-[#00c5c7] text-2xl ss:text-[32px] xl:text-[44px] ss:leading-[38px] xl:leading-[50px] font-bold">
            Маркетинг должен <br />
            быть больше <br />
            чем цифры.
          </p>
        </AnimatedComponent>
      </div>

      <div className="grid max-md:justify-center md:grid-cols-[1fr,1px,1fr] items-center gap-8 lg:gap-11 mt-[50px]">
        <div className="flex justify-center md:block md:ml-auto">
          <svg
            width="354"
            height="43"
            viewBox="0 0 354 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.6528 25.6824L35.0099 17.3583H17.4647L8.73475 25.6824V17.3164H0.00644156L0 34.0467L17.4647 42.4111V29.8646L26.1946 34.0467L34.9229 29.8646V42.4127L52.3795 34.0483L52.3811 17.3164H43.6528V25.6824Z"
              fill="#111111"
            />
            <path
              d="M17.4647 8.95191L0 0.585938L0.00644156 8.95191H17.4647Z"
              fill="#111111"
            />
            <path
              d="M52.3882 0.585938L34.9219 8.95191H52.3817L52.3882 0.585938Z"
              fill="#111111"
            />
            <path
              d="M282.51 10.4779H298.025V16.1532H283.761V25.2783H298.025V32.3478H281.965V41.473H308.697V1.28125H282.51V10.469V10.4779Z"
              fill="#111111"
            />
            <path
              d="M336.269 1.28711H317.867V41.4788H328.592V29.6546H334.169L341.355 41.4788H353.34V39.9863L345.126 27.2415C355.735 20.3507 352.741 1.34073 336.269 1.28711ZM336.269 20.5205H328.592V10.4748C331.104 10.4748 333.74 10.4122 336.269 10.4748C342.365 10.5284 342.07 20.5205 336.269 20.5205Z"
              fill="#111111"
            />
            <path
              d="M92.561 41.4798H103.527V1.17188H99.6842L82.9622 18.6357L66.5441 1.17188H62.5938V41.4798H73.56V23.5602L82.4349 32.5245H83.6325L92.561 23.5602V41.4798Z"
              fill="#111111"
            />
            <path
              d="M111.613 21.4454C111.613 49.2945 154.638 49.2945 154.638 21.4454C154.638 -6.4037 111.613 -6.34114 111.613 21.4454ZM122.642 21.4454C122.642 6.98461 143.681 6.98461 143.681 21.4454C143.681 35.9062 122.642 36.0313 122.642 21.4454Z"
              fill="#111111"
            />
            <path
              d="M187.837 20.9801L166.619 1.12109H162.723V41.4826H173.814V21.7309L194.96 41.5363H198.794V1.29091H187.837V20.9801Z"
              fill="#111111"
            />
            <path
              d="M244.161 10.4748H254.466V41.4788H265.075V10.4748H275.317V1.28711H244.152V10.4748H244.161Z"
              fill="#111111"
            />
            <path
              d="M240.451 29.1978H230.075C230.075 34.31 216.955 34.3547 216.955 29.6625C216.955 26.8472 220.431 26.2126 224.614 25.9803C233.73 25.3547 239.718 22.3695 239.834 13.6377C240.201 -3.70995 207.597 -3.70995 207.838 13.6377H218.018C218.018 8.29305 229.288 8.7578 229.646 13.5215C229.878 16.5691 226.768 17.1947 222.987 17.5969C214.658 18.4639 206.516 19.6615 206.516 29.7251C206.516 46.599 240.666 46.876 240.433 29.1978H240.451Z"
              fill="#111111"
            />
          </svg>
        </div>

        <AnimatedComponent
          initial={{ width: "10px", x: -5 }}
          animate={inView ? { width: "1px", x: 0 } : undefined}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-md:w-full bg-[#424245] h-px md:h-24 lg:h-[60px]"
        />

        <p className="max-w-[466px] max-md:text-center w-full text-[#6e6e7b] text-2xl font-semibold uppercase">
          МЫ создаем новые смыслы.
          <br />
          Мы формируем будущее бизнеса.
          <br />
          Мы Monster Corp.
        </p>
      </div>
    </Container>
  );
};

export default CultureSection;
