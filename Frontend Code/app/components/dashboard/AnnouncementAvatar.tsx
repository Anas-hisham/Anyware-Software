import React, { useState } from "react";

type AnnouncementAvatarProps = {
  initialSrc: string;
  altText: string;
};

const AnnouncementAvatar: React.FC<AnnouncementAvatarProps> = ({
  initialSrc,
  altText,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);

  const handleError = () => {
    setImgSrc("https://placehold.co/40x40/CCCCCC/000000?text=AV");
  };

  return (
    <img
      src={imgSrc}
      alt={altText}
      className="w-10 h-10 rounded-full object-cover"
      onError={handleError}
    />
  );
};

export default AnnouncementAvatar;
