"use client";

import { IconType } from "react-icons";
import { SafeUser } from "../../types";
import useCountries from "../../hooks/useCountries";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        label: string;
        icon: IconType;
        description: string;
      }
    | undefined;
  locationValue: string;
}
const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  const Map = dynamic(() => import("../Map"), {
    ssr: false,
  });

  return (
    <div className="col-span-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2"></div>
      <div className="text-xl font-semibold flex flex-row items-center gap-2">
        <div>Hosted by {user?.name}</div>
        <Avatar src={user?.image} />
      </div>
      <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
        <div>{guestCount} guests</div>
        <div>{roomCount} rooms</div>
        <div>{bathroomCount} bathrooms</div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
