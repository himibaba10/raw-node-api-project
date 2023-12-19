module.exports = (reqData, callBack) => {
  console.log(reqData);
  callBack(200, {
    message: "This is an about us page",
  });
};
