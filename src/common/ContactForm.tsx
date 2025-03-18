/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "common/ui/select";
import { Input } from "./ui/input";
import { cn } from "helpers/style";
import PhoneNumberInput from "./ui/phoneNumberInput";

const typesProjects = ["Комплексный", "Брендинг", "Веб", "Продвижение"],
  typesBudget = ["1000$", "5000$", "10 000$"],
  typesTerm = ["Сейчас", "В течении месяца", "В течении 3 месяц"];

const selectData = [
  "Реклама",
  "Поиск",
  "Рейтинги",
  "СМИ",
  "Соцсети",
  "Блог",
  "Выступление конференция",
  "Рекомендация",
  "Давно знаю",
  "Другое",
];

const schema = yup.object().shape({
  name: yup.string().required("Пожалуйста, введите ваше имя"),
  phone: yup.string().required().min(3),
  email: yup
    .string()
    .required("Пожалуйста, введите адрес электронной почты")
    .email("Неверный формат электронной почты"),
  projectDescription: yup.string().required("Пожалуйста, опишите ваш проект"),
  source: yup.string().required(),
  type_project: yup.string().required(),
  budget: yup.string().required(),
  term: yup.string().required(),
  attachment: yup
    .mixed<FileList>()
    .nullable()
    .test("required", "Файл обязателен для загрузки", (value) => {
      return value instanceof FileList && value.length > 0;
    }),
});

export type FormData = yup.InferType<typeof schema>;
const inputStyle =
  "w-full h-16 bg-transparent border_solid p-5 placeholder:text-black placeholder:opacity-40 text-lg outline-none";

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectDescription: "",
      source: "",
      type_project: "",
      budget: "",
      term: "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="grid lg:grid-cols-2 w-full">
      <div className="flex flex-col justify-between px-7 py-6 md:px-50 2xl:px-120 md:py-10 2xl:py-20 bg-[#161617]">
        <div>
          <p className="text-white text-[32px] md:text-[44px] leading-[39px] md:leading-[52px] xl:text-[56px] xl:leading-[64px]">
            Оставьте заявку,
            <br />
            чтобы обсудить проект
          </p>

          <ul className="flex flex-col md:flex-wrap gap-x-5 gap-y-1 md:gap-y-3 lxl:justify-between *:text-lg *:md:text-2xl text-white mt-9">
            <li className="max-w-fit">
              <NavLink to="mailto:job@monstr.ru">job@monstr.ru</NavLink>
            </li>
            <li className="max-w-fit">
              <NavLink to="tel:+996 555 510 804">+996 555 510 804</NavLink>
            </li>
            <li className="max-w-fit">
              <NavLink
                className="inline-flex items-center gap-3 md:gap-5"
                to=""
              >
                <svg
                  className="w-[22px] h-[22px] md:w-auto md:h-auto"
                  width="34"
                  height="27"
                  viewBox="0 0 34 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3298 17.7948L12.7839 25.3332C13.565 25.3332 13.9032 25.0038 14.3089 24.6082L17.9706 21.1725L25.558 26.6278C26.9495 27.3892 27.9299 26.9883 28.3053 25.371L33.2857 2.45888L33.2871 2.45753C33.7284 0.437945 32.5432 -0.351801 31.1874 0.143647L1.91289 11.1474C-0.0850325 11.9088 -0.0547816 13.0023 1.57326 13.4978L9.05756 15.7833L26.4421 5.10352C27.2603 4.57162 28.0042 4.86592 27.3923 5.39782L13.3298 17.7948Z"
                    fill="white"
                  />
                </svg>
                телеграм
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mt-8 lg:lg:">
          <div className="flex flex-col md:flex-wrap lg:flex-col xl:flex-wrap gap-y-3 md:gap-y-7 gap-x-24">
            <NavLink className="max-w-fit" to="mailto:rabota@monstr.ru">
              <div className="flex items-end xl:items-center gap-3 text-[#70BF91] text-xl">
                <span className="w-7 md:w-10 h-7 md:h-10 rounded-full inline-flex justify-center items-center border md:border-2 border-solid border-[#70BF91]">
                  {/* <Arrow className="w-[12px] h-[12px] md:w-auto md:h-auto [&_path]:stroke-[#70BF91]" /> */}
                  <svg
                    className="w-[12px] h-[12px] md:w-auto md:h-auto [&_path]:stroke-[#70BF91]"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9998 10.7344V1.50377H3.76916"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12.9998 1.50022L0.999975 13.5"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span>Работа</span>
              </div>
              <span className="text-2xl text-white xl:ml-[53px] mt-0 lg:mt-3 xl:mt-0">
                rabota@monstr.ru
              </span>
            </NavLink>

            <NavLink
              className="inline-flex flex-col gap-2 md:gap-3 text-white max-w-fit"
              to="mailto:hello@monstrcorp.com"
            >
              <span className="text-xl opacity-50">Для связи</span>
              <span className="text-2xl">hello@monstrcorp.com</span>
            </NavLink>
          </div>

          {/* <p className="text-white opacity-50 mt-10">
            ООО "Нимакс" ОГРН 1109847023626 190005, Санкт-Петербург г,
            Московский пр., д. 55, лит.А
          </p> */}
        </div>
      </div>

      {/* _*_*_*_ */}

      <form
        className="bg-green-300 px-7 md:px-50 2xl:px-120 py-10 2xl:py-20 text-black overflow-hidden max-w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <legend className="text-3xl">Ваши контакты</legend>

        <fieldset className="grid grid-cols-2 gap-6 mt-6 md:mt-9">
          <Input
            className={cn(inputStyle, "max-sm:col-span-2")}
            placeholder="Имя"
            type="text"
            {...register("name")}
            error={!!errors.name?.message}
          />
          <div className="max-sm:col-span-2 w-full">
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange }, fieldState: { error } }) => (
                <PhoneNumberInput
                  collectorPhoneValue={(e) => onChange(e)}
                  error={!!error?.message}
                />
              )}
            />
          </div>
          <Input
            className={cn(inputStyle, "col-span-2")}
            placeholder="Почта"
            type="email"
            {...register("email")}
            error={!!errors.email?.message}
          />
        </fieldset>

        <legend className="text-[22px] mt-7 md:mt-50">О проекте</legend>
        <SelectBtn
          arr={typesProjects}
          name="type_project"
          register={register}
          watch={watch("type_project")}
          error={!!errors.type_project?.message}
        />

        <legend className="text-[22px] mt-6">Бюджет</legend>
        <SelectBtn
          arr={typesBudget}
          name="budget"
          register={register}
          watch={watch("budget")}
          error={!!errors.budget?.message}
        />

        <legend className="text-[22px] mt-6">Срок</legend>
        <SelectBtn
          arr={typesTerm}
          name="term"
          register={register}
          watch={watch("term")}
          error={!!errors.term?.message}
        />

        <textarea
          className={cn(
            "p-5 border_solid text-lg mt-7 w-full h-36 bg-transparent border-black resize-none outline-none",
            errors.projectDescription?.message
              ? "placeholder:text-[red] placeholder:opacity-60"
              : "placeholder:text-black placeholder:opacity-40"
          )}
          placeholder="Описание проекта"
          {...register("projectDescription")}
        />

        <Controller
          control={control}
          name="attachment"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <label className="flex flex-col md:flex-row w-full mt-6">
              <input
                className="hidden"
                type="file"
                id="attachment"
                onChange={(e) => onChange(e.target.files)}
              />
              <div className="inline-flex gap-3 items-center h-fit">
                <svg
                  width="30"
                  height="14"
                  viewBox="0 0 30 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 7.059C0.001 2.64 3.131 0.003 8.373 0L24.577 0.026C24.999 0.026 26.491 0.098 27.891 1.026C28.853 1.665 30 2.882 30 5.057V5.062C30 7.288 28.933 8.497 28.037 9.12C26.748 10.016 25.248 10.112 24.663 10.112L8.368 10.088C7.766 10.088 6.352 10.089 5.381 9.166C4.788 8.602 4.487 7.822 4.487 6.85V6.844C4.487 5.01 5.941 3.914 8.375 3.912L24.601 3.904L24.603 5.811L8.377 5.819C6.51 5.82 6.493 6.525 6.493 6.837V6.848C6.493 7.298 6.596 7.623 6.8 7.817C7.183 8.181 7.983 8.18 8.368 8.18L24.665 8.204C25.052 8.204 26.041 8.144 26.852 7.58C27.61 7.054 27.994 6.206 27.994 5.061V5.058C27.994 3.971 27.574 3.141 26.743 2.59C26.011 2.104 25.118 1.933 24.576 1.933L8.372 1.907C5.996 1.908 2.007 2.579 2.006 7.058C2.006 11.219 5.466 12.093 8.368 12.093L21.796 12.053L21.802 13.96L8.372 14C3.05 14 0 11.47 0 7.059Z"
                    fill="#202020"
                  />
                </svg>

                {!value && (
                  <p
                    className={cn("text-lg text-nowrap", error && "text-[red]")}
                  >
                    Прикрепить файл
                  </p>
                )}
                {value && value[0] && (
                  <p className="text-lg text-nowrap">
                    Выбран файл: {value[0].name}
                  </p>
                )}
              </div>

              {!value && (
                <ul
                  className={cn(
                    "inline-flex flex-col ml-5 md:ml-16 list-decimal mt-2 *:opacity-50",
                    error && "text-[red]"
                  )}
                >
                  <li>Из какой вы компании, чем она занимается?</li>
                  <li>С чем мы можем помочь? Как представляете результат?</li>
                  <li>На какой срок работы и бюджет рассчитываете?</li>
                  <li>Напишите, если удобнее общаться в мессенджере.</li>
                </ul>
              )}
            </label>
          )}
        />

        <Controller
          control={control}
          name="source"
          render={({ field, fieldState: { error } }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                className={cn(
                  "w-full p-5 text-black/50 rounded-none text-lg mt-7 md:mt-50 h-auto border_solid",
                  error ? "border-[red]" : "border-black"
                )}
              >
                <SelectValue placeholder="Откуда узнали про Monster" />
              </SelectTrigger>
              <SelectContent className="rounded-none bg-green-300">
                {selectData.map((item) => (
                  <SelectItem
                    className="hover:bg-[#7ee1a2] [&[data-state='checked']]:bg-[#7ee1a2]"
                    key={item}
                    value={item}
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <fieldset className="flex flex-col md:flex-row gap-y-5 md:items-center mt-7 md:mt-50">
          <button
            type="submit"
            className="w-[240px] py-4 px-10 bg-black text-white rounded-full"
          >
            Отправить
          </button>
          <p className="ml-6 text-sm text-black">
            Нажав на кнопку, соглашаюсь <br className="max-md:hidden" />
            на обработку{" "}
            <a className="text-black underline" href="">
              персональных данных
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;

interface ISelectBtnProps {
  arr: string[];
  name: string;
  register: any;
  watch?: string;
  error: boolean;
}

const SelectBtn: FC<ISelectBtnProps> = ({
  arr,
  name,
  register,
  watch,
  error,
}) => {
  return (
    <div
      className={cn(
        "flex flex-nowrap w-full mt-3 max-w-full border_solid rounded-[100px] overflow-hidden overflow-x-auto",
        error ? "border-[red]" : "border-black"
      )}
    >
      {arr.map((item) => (
        <label
          className="relative p-6 bg-green-300 text-lg text-center cursor-pointer min-w-[200px] w-full"
          key={item}
        >
          <div className="relative flex justify-center z-[1]">{item}</div>
          {item === watch && (
            <div className="absolute top-[8px] left-[8px] w-[94%] h-4/5 rounded-[32px] bg-[#7ee1a2] z-0" />
          )}
          <input
            className="hidden"
            type="radio"
            name={name}
            value={item}
            {...register(name)}
            id={item}
          />
        </label>
      ))}
    </div>
  );
};
