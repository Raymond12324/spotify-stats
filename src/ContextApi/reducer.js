export const initialState = {
  user: null,
  token:window?.sessionStorage?.getItem("MyToken"),
  topArtistsLong:[],
  topTracksLong:[],
  topArtistsMedium:[],
  topTracksMedium:[],

  //Cambiar luego
  //token:'BQDjMY2AbqWLlXcmyyEaKNJBF5MVnvKZN4btt0RrFLpLvwFwN3ub5X3HGSu38P-WM9t-VayVvCmCXZCu6IiaGZ4WDxRLLBMkDyoeaykRQDAirEOoTDVYV-rTquMQw3RVK5XEkUKNQZwn2vPcVZA-X-DljHKw'
};

//me quede aqui weeyyy
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

      case "SET_TOPT_LONG":
      return {
        ...state,
        topTracksLong: action.topTracksLong,
      };

      case "SET_TOPA_LONG":
      return {
        ...state,
        topArtistsLong: action.topArtistsLong,
      };

      case "SET_TOPTRACKS":
      return {
        ...state,
        topTracksMedium: action.topTracksMedium,
      };

      case "SET_TOPARTIST":
      return {
        ...state,
        topArtistsMedium: action.topArtistsMedium,
      };
   

    default:
      return state;
  }
};

export default reducer;
