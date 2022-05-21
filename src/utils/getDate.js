export const getDate = (createdAt) => {
  const date = new Date(createdAt).toLocaleString("en-US", { day: "2-digit" });
  const month = new Date(createdAt).toLocaleString("default", {
    month: "short",
  });
  const year = new Date(createdAt).getFullYear();
  return { date, month, year };
};
