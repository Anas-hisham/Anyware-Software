import React from "react";
import AnnouncementAvatar from "./AnnouncementAvatar";
import { AnnouncementItem } from "../../types";

type AnnouncementsSectionProps = {
  announcements: AnnouncementItem[];
  loading: boolean;
  error: string | null;
};

const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({
  announcements,
  loading,
  error,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-3 h-fit">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Announcements</h3>
        <a href="#" className="text-blue-600 hover:underline">
          All
        </a>
      </div>
      <div>
        {loading && (
          <p className="text-center text-gray-500">Loading announcements...</p>
        )}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {!loading && announcements.length === 0 && !error && (
          <p className="text-center text-gray-500">No announcements found.</p>
        )}
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="flex items-start mb-4 ml-2 pb-4 border-b border-gray-200 last:border-b-0"
          >
            <AnnouncementAvatar
              initialSrc={announcement.avatar}
              altText={announcement.sender}
            />
            <div className="ml-3 flex-1">
              <div className="grid grid-cols-10 gap-3">
                <div className="col-span-2">
                  <p className="font-semibold text-gray-800">
                    {announcement.sender}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    {announcement.course}
                  </p>
                </div>
                <div className="col-span-8">
                  <p
                    className="p-3 border-l-4 text-gray-600 text-sm"
                    style={{ borderLeftColor: "rgba(107, 114, 128, 0.15)" }}
                  >
                    {announcement.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsSection;
