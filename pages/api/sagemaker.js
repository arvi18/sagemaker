const axios = require("axios");

export default async function handler(req, res) {
  // let headersList = {
  //   Accept: "*/*",
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "OPTIONS,POST",
  //   "Access-Control-Allow-Headers":
  //     "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  // };

  // const input = req.body.input;
  // console.log("🚀 ~ file: sagemaker.js:15 ~ handler ~ input:", input);
  // let bodyContent = input;
  // try {
  //   bodyContent = JSON.stringify(input);
  //   console.log(
  //     "🚀 ~ file: sagemaker.js:16 ~ handler ~ bodyContent:",
  //     bodyContent
  //   );
  // } catch (e) {
  //   console.log("invalid json");
  //   return;
  // }

  // let reqOptions = {
  //   url: "https://j6dt7dpfj8.execute-api.ap-northeast-1.amazonaws.com/Prod/predict-heart-disease",
  //   method: "POST",
  //   headers: headersList,
  //   data: bodyContent,
  // };
  // console.log("🚀 ~ file: sagemaker.js:33 ~ handler ~ reqOptions:", reqOptions);

  // if (req.method === "POST") {
  //   let response = await axios.post(reqOptions.url, reqOptions.data, {
  //     headers: reqOptions.headers,
  //   });
  //   console.log(response.data);

  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://j6dt7dpfj8.execute-api.ap-northeast-1.amazonaws.com/Prod/predict-heart-disease",
    method: "POST",
    headers: headersList,
    data: req.body.input,
  };

  let response = await axios.request(reqOptions);

  res.status(200).json({ response: response.data });
}
