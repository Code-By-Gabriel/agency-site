import Link from "next/link";
import Image from "next/image";

export const mdxComponents = {
  a: (props: any) =>
    props.href?.startsWith("/") ? (
      <Link {...props} />
    ) : (
      <a target="_blank" rel="noopener noreferrer" {...props} />
    ),
  img: (props: any) => <Image {...props} width={800} height={450} alt={props.alt ?? ""} />,
};