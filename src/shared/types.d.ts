export type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type Meta = {
  title: string;
  date: string;
  tags?: string[];
  postId: string;
};
