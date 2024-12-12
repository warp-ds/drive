export const variantLastChild = (matcher) => {
  if (!matcher?.startsWith('last-child:')) {
    return matcher;
  }
  return {
    matcher: matcher?.slice(11),
    selector: () => `.last-child\\:mb-0>:last-child`,
  };
};
