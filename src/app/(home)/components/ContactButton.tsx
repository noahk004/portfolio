import { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ContactButtonProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  url: string;
  size?: number;
}

export default function ContactButton({ Icon, url, size }: ContactButtonProps) {
  if (!size) size = 60;
  return (
    <Link href={url}>
      <Icon width={size} height={size} />
    </Link>
  );
}
