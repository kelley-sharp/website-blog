export type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};
