import { memo, type FC } from "react";

export const Som: FC = memo(({ className }: { className?: string }) => (
  <u className={`${className}`}>c</u>
));
