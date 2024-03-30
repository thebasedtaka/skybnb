import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

import FavoritesClient from "./FavoritesClient";
import getListings from "../actions/getListings";
import getFavoriteListings from "../actions/getFavoriteListings";

const ListingPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );
  }

  return <FavoritesClient currentUser={currentUser} listings={listings} />;
};

export default ListingPage;
