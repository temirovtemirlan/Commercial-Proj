/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type FC } from "react";
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
import { BASE_URL } from "data/hero";
import { AnimatedComponent } from "./ui/animatedComponent";
import { useMediaQuery } from "usehooks-ts";

const typesProjects = [
    { value: "Комплексный", label: "Комплексный" },
    { value: "Брендинг", label: "Брендинг" },
    { value: "Веб", label: "Веб" },
    { value: "Продвижение", label: "Продвижение" },
  ],
  typesBudget = [
    { value: "1000", label: "От 1000$" },
    { value: "5000", label: "От 5000$" },
    { value: "10000", label: "От 10 000$" },
  ],
  typesTerm = [
    { value: "Сейчас", label: "Сейчас" },
    { value: "В течении месяца", label: "В течении месяца" },
    { value: "В течении 3 месяц", label: "В течении 3 месяц" },
  ];

const selectData = [
  "Рейтинги",
  "Рекоммендация",
  "Соц.сети",
  "Давно знаю",
  "По запросу",
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
  type_project: yup
    .array()
    .of(yup.string().required())
    .required("Выберите хотя бы один тип проекта")
    .min(1, "Выберите хотя бы один тип проекта"), // Ensure at least one project type is selected
  budget: yup.string().required(),
  term: yup.string().required(),
  attachment: yup
    .mixed<FileList>()
    .nullable()
    .required()
    .test("required", "Файл обязателен для загрузки", (value) => {
      return value instanceof FileList && value.length > 0;
    }),
});

export type FormData = yup.InferType<typeof schema>;
const inputStyle =
  "w-full h-16 bg-transparent border_solid p-5 placeholder:text-black placeholder:opacity-40 text-lg outline-none";

const ContactForm: FC = () => {
  const [status, setStatus] = useState<"ok" | "no" | null>(null);
  const [loading, setLoading] = useState(false);
  const matches = useMediaQuery("(min-width: 650px)");

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
      type_project: [],
      budget: "",
      term: "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("phone", `+${data.phone}`);
    formData.append("email", data.email);
    formData.append("text", data.type_project.join(", "));
    formData.append("description", data.projectDescription);
    formData.append("budget", data.budget.toString());
    formData.append("deadline", data.term);
    formData.append("source", data.source);
    formData.append("form", data.attachment[0]);

    try {
      const response = await fetch(`${BASE_URL}/api/form/`, {
        body: formData,
        method: "POST",
      });

      if (response.ok) {
        setStatus("ok");
      } else {
        setStatus("no");
      }
    } catch {
      setStatus("no");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let time: NodeJS.Timeout;

    if (status !== null) {
      time = setTimeout(() => {
        setStatus(null);
      }, 3000);
    }

    return () => clearTimeout(time);
  }, [status]);

  return (
    <>
      <div className="relative grid xl:grid-cols-2 w-full md:pt-50 bg-[#161617]">
        {matches && (
          <div className="flex flex-col justify-between px-7 py-6 md:px-50 2xl:px-120 md:py-10 2xl:py-28 bg-[#161617]">
            <div>
              <span className="text-white text-[32px] md:text-[44px] leading-[39px] md:leading-[52px] xl:text-[56px] xl:leading-[64px]">
                Заполните анкету, <br /> чтобы обсудить проект
              </span>
              <p
                className={
                  "text-balance text-white text-xl mt-5 w-full max-w-[900px] leading-normal"
                }
              >
                Для того чтобы обеспечить максимальную релевантность и
                эффективность обсуждения, просим вас заполнить небольшую анкету.
                Ваши ответы помогут нам лучше понять ваши потребности и
                ожидания, а также сделать проект более соответствующим вашим
                интересам.
              </p>
            </div>
          </div>
        )}
        {/*<div className="mt-12 lg:mt-8">*/}
        {/*  <div className="flex flex-col gap-2 md:gap-3 text-white">*/}
        {/*    <span className="text-xl opacity-50">Для связи</span>*/}

        {/*    <NavLink className="max-w-fit" to="mailto:hello@monstrcorp.com">*/}
        {/*      <span className="text-2xl">hello@monstrcorp.com</span>*/}
        {/*    </NavLink>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/* _*_*_*_ */}

        <form
          className="bg-green-300 px-7 md:px-50 2xl:px-120 py-10 2xl:py-20 text-black overflow-hidden max-w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {!matches ? (
            <div>
              <span className="text-black mb-10 text-[32px] md:text-[44px] leading-[39px] md:leading-[52px] xl:text-[56px] xl:leading-[55px]">
                Заполните анкету, <br /> чтобы обсудить проект
              </span>
              <p
                className={
                  "text-balance text-black text-xl mt-1 mb-5 w-full max-w-[900px] leading-normal"
                }
              >
                Для того чтобы обеспечить максимальную релевантность и
                эффективность обсуждения, просим вас заполнить небольшую анкету.
              </p>
            </div>
          ) : null}

          <span className="text-3xl">Ваши контакты</span>

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
              <span className=" text-base absolute opacity-70">
                с рабочим WhatsApp
              </span>
            </div>
            <Input
              className={cn(inputStyle, "col-span-2 mt-2")}
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
            type="checkbox"
          />

          <legend className="text-[22px] mt-6">Бюджет</legend>
          <SelectBtn
            arr={typesBudget}
            name="budget"
            register={register}
            watch={[watch("budget")]}
            error={!!errors.budget?.message}
          />

          <legend className="text-[22px] mt-6">Срок</legend>
          <SelectBtn
            arr={typesTerm}
            name="term"
            register={register}
            watch={[watch("term")]}
            error={!!errors.term?.message}
          />

          <legend className="text-[22px] mt-6">Описание проекта</legend>

          <textarea
            className={cn(
              "p-5 border_solid text-lg mt-7 w-full h-36 bg-transparent placeholder:text-black placeholder:opacity-40 resize-none outline-none",
              errors.projectDescription?.message
                ? "border-[red]"
                : "border-black"
            )}
            placeholder="Ответьте на вопросы с 1 по 4"
            {...register("projectDescription")}
          />

          <Controller
            control={control}
            name="attachment"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              const file = value ? value[0] : undefined;
              return (
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

                    {!file && (
                      <p
                        className={cn(
                          "text-lg text-nowrap",
                          error && "text-[red] opacity-60"
                        )}
                      >
                        Прикрепить файл
                      </p>
                    )}
                    {file && (
                      <p className="text-lg text-nowrap">
                        Выбран файл: {file?.name}
                      </p>
                    )}
                  </div>

                  {!file && (
                    <ul
                      className={cn(
                        "inline-flex flex-col ml-5 md:ml-16 list-decimal mt-2 *:opacity-50",
                        error && "text-[red]"
                      )}
                    >
                      <li>
                        Как называется ваша компания и чем она занимается?
                      </li>
                      <li>
                        Какую задачу вы хотите решить с помощью наших услуг?
                      </li>
                      <li>
                        За какой срок и бюджет вы хотите получить результат?
                      </li>
                      <li>Когда вам позвонить?</li>
                    </ul>
                  )}
                </label>
              );
            }}
          />

          <Controller
            control={control}
            name="source"
            render={({ field, fieldState: { error } }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  className={cn(
                    "w-full p-5 text-black rounded-none text-lg mt-7 md:mt-50 h-auto border_solid",
                    error ? "border-[red]" : "border-black"
                  )}
                >
                  <SelectValue placeholder="Откуда вы узнали про Monster?" />
                </SelectTrigger>
                <SelectContent className="rounded-none bg-white outline-none">
                  {selectData.map((item) => (
                    <SelectItem
                      className="hover:bg-[#eee] [&[data-state='checked']]:bg-[#eee]"
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
            <AnimatedComponent tag="div" whileHover={{ scale: 0.98 }}>
              <button
                type="submit"
                className="w-[240px] py-4 px-10 bg-black text-white rounded-full"
              >
                Отправить
              </button>
            </AnimatedComponent>
            <p className="md:ml-6 text-sm text-black">
              Нажимая кнопку вы соглашаетесь <br /> на обработку персональных
              данных. {/*<br className="max-md:hidden" />*/}
              {/*на обработку{" "}*/}
              {/*<a className="text-black underline" href="">*/}
              {/*  персональных данных*/}
              {/*</a>*/}
            </p>
          </fieldset>
        </form>
      </div>

      {status !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white py-8 px-5 rounded-lg shadow-xl text-center w-full max-w-[90%] ss:max-w-[600px]">
            <p
              className={`text-lg ss:text-3xl ${status === "ok" ? "text-[#3ab648]" : "text-[red]"}`}
            >
              {status === "ok"
                ? "Заявка успешно отправлено"
                : "Что то пошло не так"}
            </p>
            <p className="mt-1 ss:mt-3 text-sm ss:text-lg">
              {status === "ok"
                ? "Ждите, пока с вами не свяжутся"
                : "Повторите снова или попробуйте позже"}
            </p>
            <div className="flex justify-center mt-6">
              <button
                className="w-[160px] ss:w-[220px] h-9 ss:h-11 p-2 bg-[#0071e3] rounded-[32px] text-white text-sm ss:text-lg"
                onClick={() => setStatus(null)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default ContactForm;

interface ISelectBtnProps {
  arr: { value: string; label: string }[];
  name: string;
  register: any;
  watch: string[];
  error: boolean;
  type?: "checkbox" | "radio";
}

const SelectBtn: FC<ISelectBtnProps> = ({
  arr,
  name,
  register,
  watch,
  type = "radio",
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
          className="relative px-5 py-4 ss:p-6 bg-green-300 text-lg text-center cursor-pointer min-w-[200px] w-full"
          key={item.label}
        >
          <div
            className={cn(
              "relative flex justify-center z-[1] text-nowrap",
              watch.includes(item.value) && "text-white"
            )}
          >
            {item.label}
          </div>
          {watch.includes(item.value) && (
            <div className="absolute top-[8px] left-[8px] w-[94%] h-4/5 rounded-[32px] bg-[#000] z-0" />
          )}
          {type === "radio" ? (
            <input
              className="hidden peer"
              type="radio"
              name={name}
              value={item.value}
              {...register(name)}
              id={item.value}
            />
          ) : (
            <input
              className="hidden peer"
              type="checkbox"
              name={name}
              value={item.value}
              {...register(name)}
              id={item.value}
            />
          )}
        </label>
      ))}
    </div>
  );
};
