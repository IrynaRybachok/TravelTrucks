export const selectCampers = (state) => state.campers.campers;
export const selectTotalCampers = (state) => state.campers.totalCampers;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsError = (state) => state.campers.isError;
export const selectPage = (state) => state.campers.page;
export const selectFilters = (state) => state.campers.filters.filters;
export const selectUniqueLocations = (state) => state.campers.uniqueLocations;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
