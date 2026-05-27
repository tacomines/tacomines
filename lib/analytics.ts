export const trackEvent = (
  eventName: string,
  payload?: object
) => {
  console.log(eventName, payload);
};