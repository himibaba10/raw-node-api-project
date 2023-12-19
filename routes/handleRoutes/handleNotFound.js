module.exports = (reqData, callBack) => {
  callBack(404, {
    message: "Page not found",
  });
};
