export function debounce(
  func: (this: any, ...args: any[]) => Promise<any>,
  delay: number
) {
  let timeoutId: NodeJS.Timeout;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
