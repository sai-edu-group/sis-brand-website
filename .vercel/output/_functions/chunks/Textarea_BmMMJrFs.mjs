import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderTemplate, d as addAttribute, e as renderSlot, s as spreadAttributes } from './astro/server_wWZRp_y9.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$4 = createAstro();
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-2 lg:space-y-4"> <!-- Title --> <h2 class="text-3xl font-medium text-orange-500 md:text-5xl lg:text-6xl lg:leading-[64px]"> ${title} </h2> <!-- Subtitle --> ${subtitle && renderTemplate`<p class="text-n-600 text-base font-semibold md:text-lg lg:text-xl"> ${subtitle} </p>`} </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/SectionHeader.astro", void 0);

const $$Astro$3 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    label,
    name,
    required = false,
    type = "text",
    value = "",
    placeholder = "Enter Input",
    errorMessage = "Error message",
    hintText
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col gap-2 md:gap-3.5" data-astro-cid-qyqq6lvs> <!-- Label --> <label${addAttribute(name, "for")} class="text-n-600 text-base font-normal md:text-lg lg:text-xl" data-astro-cid-qyqq6lvs> ${label}${required && renderTemplate`<span class="text-red-500" data-astro-cid-qyqq6lvs>*</span>`} </label> <!-- Input --> <div class="relative" data-astro-cid-qyqq6lvs> <input${addAttribute(type, "type")}${addAttribute(placeholder, "placeholder")}${addAttribute(name, "id")}${addAttribute(name, "name")}${addAttribute(value, "value")}${addAttribute(required, "required")}${addAttribute(`${name}-error ${hintText ? `${name}-hint` : ""}`, "aria-describedby")}${addAttribute(`text-n-700 focus:border-n-950 placeholder:text-n-400 font-secondary border-n-600 lg::text-3xl w-full border-b bg-transparent px-0 pb-1 md:pb-3.5 text-sm font-medium focus:ring-0 focus:outline-none md:text-xl lg:text-2xl`, "class")} data-astro-cid-qyqq6lvs> ${type === "date" && renderTemplate`<span class="pointer-events-none absolute right-0 bottom-3.5 z-10" aria-hidden="true" data-astro-cid-qyqq6lvs> <svg class="size-4 md:size-6 lg:size-8" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-qyqq6lvs> <path d="M15.0007 4.17651C17.2856 4.17652 19.3928 4.22638 21.4564 4.323C24.9425 4.48622 27.7668 7.16194 28.157 10.5475C28.6251 14.607 28.6251 18.0771 28.157 22.1365C27.7668 25.5222 24.9425 28.1978 21.4564 28.3611C19.3928 28.4578 17.2856 28.5076 15.0007 28.5076C12.7155 28.5076 10.6077 28.4578 8.54383 28.3611C5.05793 28.1978 2.23356 25.5222 1.84321 22.1365C1.37518 18.0771 1.37517 14.607 1.84321 10.5475C2.23357 7.16196 5.0579 4.48622 8.54383 4.323C10.6077 4.22636 12.7154 4.17651 15.0007 4.17651ZM15.0007 6.31937C12.7478 6.31937 10.6736 6.36875 8.64428 6.46376C6.2081 6.57783 4.24256 8.45083 3.97247 10.7934C3.52329 14.6895 3.5233 17.9946 3.97247 21.8907C4.24256 24.2333 6.20807 26.1062 8.64428 26.2203C10.6735 26.3154 12.7478 26.3647 15.0007 26.3647C17.2535 26.3647 19.3279 26.3154 21.357 26.2203C23.793 26.106 25.7576 24.2339 26.0278 21.8917V21.8907C26.477 17.9945 26.477 14.6896 26.0278 10.7934C25.7578 8.45102 23.7932 6.57804 21.357 6.46376C19.3278 6.36875 17.2535 6.31938 15.0007 6.31937Z" fill="currentColor" data-astro-cid-qyqq6lvs></path> <path d="M14.9994 4.17651C17.2847 4.17651 19.3924 4.22636 21.4563 4.323C24.9421 4.48622 27.7653 7.16204 28.1558 10.5475C28.2092 11.0106 28.2569 11.4666 28.2981 11.9172C28.3255 12.217 28.2259 12.5151 28.0229 12.7375C27.82 12.9598 27.5329 13.0868 27.2319 13.0869H2.76798C2.46692 13.0869 2.17996 12.9598 1.97697 12.7375C1.77396 12.515 1.67326 12.2171 1.70074 11.9172C1.74202 11.4668 1.78963 11.0108 1.84304 10.5475C2.23341 7.16198 5.05777 4.48622 8.54365 4.323C10.6073 4.22638 12.7145 4.17652 14.9994 4.17651ZM14.9994 6.31937C12.7466 6.31938 10.6724 6.36875 8.64305 6.46376C6.20705 6.578 4.24237 8.45094 3.9723 10.7934C3.9665 10.8437 3.96225 10.894 3.9566 10.9441H26.0433C26.0377 10.894 26.0334 10.8437 26.0276 10.7934C25.7574 8.45079 23.7919 6.57783 21.3558 6.46376C19.3265 6.36875 17.2523 6.31937 14.9994 6.31937Z" fill="currentColor" data-astro-cid-qyqq6lvs></path> <path d="M8.46094 8.0361V2.56386C8.46094 1.97213 8.94063 1.49243 9.53237 1.49243C10.1241 1.49243 10.6038 1.97213 10.6038 2.56386V8.0361C10.6036 8.62769 10.124 9.10753 9.53237 9.10753C8.94073 9.10753 8.4611 8.62769 8.46094 8.0361Z" fill="currentColor" data-astro-cid-qyqq6lvs></path> <path d="M19.3975 8.0361V2.56386C19.3975 1.97213 19.8772 1.49243 20.4689 1.49243C21.0606 1.49243 21.5403 1.97213 21.5403 2.56386V8.0361C21.5402 8.62769 21.0605 9.10753 20.4689 9.10753C19.8773 9.10753 19.3976 8.62769 19.3975 8.0361Z" fill="currentColor" data-astro-cid-qyqq6lvs></path> </svg> </span>`} </div> <p${addAttribute(`${name}-error`, "id")} data-error class="hidden text-sm text-red-600" data-astro-cid-qyqq6lvs> ${errorMessage} </p> </div> `;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/Input.astro", void 0);

const $$Astro$2 = createAstro();
const $$FormStepsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormStepsCard;
  const {
    id,
    step,
    total,
    title,
    accent = "#C9443A",
    as = "article",
    class: extra = ""
  } = Astro2.props;
  const percent = Math.round(step / total * 100);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} data-step${addAttribute(`border-n-200 flex flex-col bg-n-50 container mx-auto gap-8 md:gap-12 rounded-xl border p-6 lg:px-16 md:px-10 md:py-8 lg:py-14
     ${extra}`, "class")}> ${title && renderTemplate`<div class="space-y-4 lg:space-y-8"> <div class="flex items-center justify-between">  <h3 class="text-n-600 font-secondary text-lg font-normal md:text-2xl">
Step ${step}/${total}: <span class="font-medium">${title}</span> </h3> </div>  <div class="h-2.5 w-full rounded-4xl"${addAttribute(`background-color:${accent}33;`, "style")}> <div class="h-2.5 rounded-4xl"${addAttribute(`width:${percent}%; background-color:${accent}`, "style")}></div> </div> </div>`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/FormStepsCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Select;
  const {
    label,
    name,
    required = false,
    value = "",
    options = [],
    placeholder = "",
    errorMessage = "Error message",
    hintText
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col gap-2 md:gap-3.5" data-field> <!-- Select label --> <label${addAttribute(name, "for")} class="text-n-600 text-base font-normal md:text-lg lg:text-xl"> ${label}${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <!-- Dropdown --> <div class="relative w-full"> <select${addAttribute(name, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(value, "value")} aria-invalid="false"${addAttribute(`${name}-error ${hintText ? `${name}-hint` : ""}`, "aria-describedby")} class="border-n-600 text-n-600 focus:border-n-600 font-secondary w-full appearance-none border-b bg-transparent px-0 pb-1 text-sm font-medium focus:outline-none md:pb-3.5 md:text-xl lg:text-2xl"> <!-- Options list --> <option value="">${placeholder}</option> ${options.map((opt) => renderTemplate`<option${addAttribute(opt.value, "value")}>${opt.label}</option>`)} </select> <!-- custom arrow --> <span class="pointer-events-none absolute top-1/2 right-0 z-10 -translate-y-1/2" aria-hidden="true"> <svg class="size-3 md:size-6" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.80773 7.9836C2.63025 8.02524 2.38659 8.17701 2.25222 8.32965C2.07636 8.52942 1.998 8.75088 1.99683 9.0513L1.99587 9.29754L2.30271 9.9063C3.11463 11.517 4.13166 13.1911 5.04408 14.4185C6.96072 16.997 9.12897 18.8881 12.27 20.7208C13.0699 21.1875 13.458 21.3515 14.0806 21.4858C14.4934 21.5749 15.4434 21.5824 15.8539 21.4998C16.476 21.3747 16.942 21.1819 17.715 20.7301C20.8813 18.8793 23.0052 17.0287 24.9469 14.4288C25.8644 13.2005 26.9463 11.4154 27.7424 9.81657L28.0006 9.29808L28.0015 9.05157C28.0031 8.60952 27.7981 8.26854 27.4148 8.07606C27.0879 7.91187 26.7509 7.91796 26.4214 8.09409C26.1964 8.2143 26.0717 8.37756 25.7865 8.92557C24.8733 10.6799 24.0567 12.0268 23.2494 13.1101C21.4934 15.4663 19.5472 17.1683 16.725 18.8156C15.8497 19.3266 15.6458 19.3951 15 19.3951C14.3542 19.3951 14.1503 19.3266 13.275 18.8156C11.4242 17.7352 10.0883 16.7344 8.76435 15.4362C7.09875 13.803 5.7321 11.8526 4.24608 8.98821C4.08432 8.67645 3.90429 8.36859 3.846 8.30406C3.59319 8.02422 3.17922 7.89645 2.80773 7.9836Z" fill="currentColor"></path> </svg> </span> </div> ${hintText && renderTemplate`<p${addAttribute(`${name}-hint`, "id")} class="text-n-500 text-sm"> ${hintText} </p>`} <!-- Error message  --> <p${addAttribute(`${name}-error`, "id")} data-error class="hidden text-sm text-red-600"> ${errorMessage} </p> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/Select.astro", void 0);

const $$Astro = createAstro();
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Textarea;
  const {
    label,
    name,
    required = false,
    value = "",
    placeholder = "Enter text",
    errorMessage = "Error message",
    helpText,
    rows = 1,
    maxLength,
    resize = "vertical"
    // tailwind: resize-none | resize-y | resize
  } = Astro2.props;
  const resizeClass = resize === "none" ? "resize-none" : resize === "both" ? "resize" : "resize-y";
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col gap-2 md:gap-4" data-field> <!-- Label --> <label${addAttribute(name, "for")} class="text-n-600 text-base font-normal md:text-lg lg:text-xl"> ${label}${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <!-- Field --> <div class="relative"> <textarea${addAttribute(name, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(value, "value")}${addAttribute(required, "required")}${addAttribute(rows, "rows")}${spreadAttributes(maxLength ? { maxlength: maxLength } : {})}${addAttribute(`${name}-error ${helpText ? `${name}-hint` : ""}`, "aria-describedby")}${addAttribute(`text-n-700 focus:border-n-950 placeholder:text-n-400 font-secondary border-n-600  w-full border-b bg-transparent px-0 pb-1 md:pb-3.5 text-sm font-medium focus:ring-0 focus:outline-none md:text-lg lg:text-2xl ${resizeClass} overflow-y-auto `, "class")}>${value}</textarea> </div> ${helpText && renderTemplate`<p${addAttribute(`${name}-hint`, "id")} class="text-n-500 text-sm"> ${helpText} </p>`} <!-- Error (inside the component) --> <p${addAttribute(`${name}-error`, "id")} data-error class="hidden text-sm text-red-600"> ${errorMessage} </p> </div>`;
}, "/Users/abhayamin/Documents/pixolo/sis-brand-website/src/components/Textarea.astro", void 0);

export { $$SectionHeader as $, $$FormStepsCard as a, $$Select as b, $$Textarea as c, $$Input as d };
