type Props = {} & React.ComponentProps<"div">;

export default function Container({ children }: Props) {
  return <div className="container mx-auto px-6">{children}</div>;
}
