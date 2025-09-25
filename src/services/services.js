export function pathNameGetter(path) {
  const pathN = path.split("/");
  const result = pathN[1];
  return result;
}
