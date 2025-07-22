"use client";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
} from "@mui/material";

export default function LanguageSwitcher(): JSX.Element {
  const { i18n } = useTranslation();

  const handleChange = (e: SelectChangeEvent) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={i18n.language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
