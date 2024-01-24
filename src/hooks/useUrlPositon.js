import { useSearchParams } from "react-router-dom";

/*eslint-disable*/
export function useUrlPositon() {
  const [serachParams] = useSearchParams();
  const lat = serachParams.get("lat");
  const lng = serachParams.get("lng");

  return [lat, lng];
}
