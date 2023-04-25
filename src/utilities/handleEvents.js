export const handleChange = function (e, action) {
  const name = e.target.name;
  const value = e.target.value;
  action();
};
