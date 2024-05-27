const withIds = <T>(list: T[], prefix?: string) =>
  list.map((element, index) => ({
    id: prefix ? `${prefix}-${index}` : String(index),
    ...element,
  }));

export { withIds };
