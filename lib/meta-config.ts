export type Meta = {
  title: string;
  description: string;
};

export function getBlogMetaTitle(BlogName: string): string {
  return `laksana mas |  ${BlogName}`;
}

export function getBlogMeta(BlogName: string): Meta {
  return {
    // @TODO: change this after got a better title
    title: getBlogMetaTitle(BlogName),
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sapiente eaque corrupti molestiae at maiores recusandae et optio qui? ${BlogName}`,
  };
}
