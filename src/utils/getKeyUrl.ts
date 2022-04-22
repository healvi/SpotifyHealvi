const getKeyUrl = (url: any) => {
  const queries = url.substring(1).split("&");
  const key = {} as any;
  queries.forEach((query: any) => {
    const data = query.split("=");
    if (data.length > 1) key[data[0]] = data[1];
  });
  window.location.hash = "";
  return key;
};

export default getKeyUrl;
