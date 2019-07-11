const formatTime = (time: number | string) => {
  let d = new Date(time);
  return d.toLocaleTimeString("en-US");
};

export { formatTime };
