import destinationsData from "../redux/destinationsData.json";

export const GET_DESTINATIONS = "GET_DESTINATIONS";

export function getDestinations() {
  return async function (dispatch) {
    try {
      const response = destinationsData;

      console.log(response);
      dispatch({ type: GET_DESTINATIONS, payload: response });
    } catch (error) {
      console.log("Error Get Destinations Data", error);
    }
  };
}
