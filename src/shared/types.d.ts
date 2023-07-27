export type BlogPost = {
  meta: Meta;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type Meta = {
  title: string;
  date: string;
  tags?: string[];
  postId: string;
};
