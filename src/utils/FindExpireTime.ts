export const FindExpireTime = (key: any) => {
  return new Date(new Date().getTime() + key.expires_in * 1000)
    .getTime()
    .toString();
};
