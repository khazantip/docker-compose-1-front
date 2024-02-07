import { baseURL } from "./config";

const FetchData = async () => {
  const response = await fetch(`${baseURL}/furniture`);
  return await response.json();
};

export default FetchData;
