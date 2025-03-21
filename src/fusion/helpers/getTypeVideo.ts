export const getVideoType = (src: string | string[]): string => {
  if (typeof src === "string") {
    return `video/${src.split(".").pop()}`;
  }
  return "";
};
