import React, { useCallback } from "react";
import DashboardHeader from "../layout/Header";
import ExamsTimeSection from "./ExamsTimeSection";
import AnnouncementsSection from "./AnnouncementsSection";
import WhatsDueSection from "./WhatsDueSection";
import useApiData from "../../hooks/useApiData";
import { API_ENDPOINTS } from "../../constants";
import { Box, CircularProgress, Typography } from "@mui/material";
import { AnnouncementItem, WhatsDueItem } from "../../types";
// --- Define Props ---
type MainContentProps = {
  onMenuClick: () => void;
};

const MainContent: React.FC<MainContentProps> = ({ onMenuClick }) => {
  const mapAnnouncements = useCallback(
    (responseData: any): AnnouncementItem[] => {
      return responseData.data.announcements.map((ann: any) => ({
        sender: ann.author,
        course: ann.course,
        message: ann.content,
        avatar: `https://placehold.co/40x40/${Math.floor(
          Math.random() * 16777215
        ).toString(16)}/000000?text=${ann.author
          .substring(0, 2)
          .toUpperCase()}`,
      }));
    },
    []
  );

  const mapWhatsDue = useCallback((responseData: any): WhatsDueItem[] => {
    return responseData.data.quizzes.map((quiz: any) => ({
      type: quiz.title,
      course: `Course: ${quiz.course}`,
      topic: `Topic: ${quiz.topic}`,
      date: `Due to: ${new Date(
        quiz.dueDate
      ).toLocaleDateString()} - ${new Date(quiz.dueDate).toLocaleTimeString(
        [],
        { hour: "2-digit", minute: "2-digit" }
      )}`,
      buttonText: quiz.title.toLowerCase().includes("quiz")
        ? "Start Quiz"
        : "Solve Assignment",
    }));
  }, []);

  const {
    data: announcements = [],
    loading: loadingAnnouncements,
    error: errorAnnouncements,
  } = useApiData<AnnouncementItem[]>(
    API_ENDPOINTS.ANNOUNCEMENTS,
    mapAnnouncements
  );

  const {
    data: whatsDue = [],
    loading: loadingWhatsDue,
    error: errorWhatsDue,
  } = useApiData<WhatsDueItem[]>(API_ENDPOINTS.QUIZZES, mapWhatsDue);

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-100 rounded-r-lg overflow-y-auto">
      <DashboardHeader onMenuClick={onMenuClick} />
      <ExamsTimeSection />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {loadingAnnouncements || loadingWhatsDue ? (
          <Box
            className="col-span-full"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 200,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <CircularProgress />
              <Typography variant="body1">Loading data...</Typography>
            </Box>
          </Box>
        ) : (
          <>
            {errorAnnouncements || errorWhatsDue ? (
              <div className="col-span-full text-red-500">
                {errorAnnouncements || errorWhatsDue}
              </div>
            ) : (
              <>
                <AnnouncementsSection
                  announcements={announcements}
                  loading={loadingAnnouncements}
                  error={errorAnnouncements}
                />
                <WhatsDueSection
                  whatsDue={whatsDue}
                  loading={loadingWhatsDue}
                  error={errorWhatsDue}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MainContent;
