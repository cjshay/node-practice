export const fetchLocations = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/locations'
  });
};

export const fetchHotels = (locationID, checkin, checkout) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/locations/${locationID}/hotels?checkin=${checkin}&checkout=${checkout}`
  });
};
