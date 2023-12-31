const withIds = <T>(list: T[]) =>
  list.map((element, index) => ({ id: index, ...element }));

export { withIds };
