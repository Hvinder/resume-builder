import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EducationDetails, PersonalDetails, WorkDetails } from "../../types";
import { RootState } from "../store";
import { localstorageKeys } from "../../utils/localstorage";

export interface ResumeState {
  personalDetails: PersonalDetails;
  educationDetails: EducationDetails[];
  workDetails: WorkDetails[];
  skills: string[];
}

const emptyInitialState: ResumeState = {
  personalDetails: {
    name: "",
    email: "",
    title: "",
    location: "",
  },
  educationDetails: [],
  workDetails: [],
  skills: [],
};

const initialState: ResumeState = JSON.parse(
  localStorage.getItem(localstorageKeys.RESUMETEMP) ||
    JSON.stringify(emptyInitialState),
) as ResumeState;

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setPersonalDetails: (state, action: PayloadAction<PersonalDetails>) => {
      state.personalDetails = action.payload;
      localStorage.setItem(localstorageKeys.RESUMETEMP, JSON.stringify(state));
    },
    setEducationDetails: (state, action: PayloadAction<EducationDetails>) => {
      state.educationDetails = [...state.educationDetails, action.payload];
      localStorage.setItem(localstorageKeys.RESUMETEMP, JSON.stringify(state));
    },
    setWorkDetails: (state, action: PayloadAction<WorkDetails>) => {
      state.workDetails = [...state.workDetails, action.payload];
      localStorage.setItem(localstorageKeys.RESUMETEMP, JSON.stringify(state));
    },
    setSkills: (state, action: PayloadAction<string>) => {
      state.skills = [...state.skills, action.payload];
      localStorage.setItem(localstorageKeys.RESUMETEMP, JSON.stringify(state));
    },
    setResumeDetails: (state, action: PayloadAction<ResumeState>) => {
      state = action.payload;
      localStorage.setItem(localstorageKeys.RESUMETEMP, JSON.stringify(state));
    },
    removeEducationDetails: (state, action: PayloadAction<number>) => {
      state.educationDetails = [
        ...state.educationDetails.filter((_v, i) => i !== action.payload),
      ];
      localStorage.setItem(localstorageKeys.RESUMETEMP, JSON.stringify(state));
    },
    removeWorkDetails: (state, action: PayloadAction<number>) => {
      state.workDetails = [
        ...state.workDetails.filter((_v, i) => i !== action.payload),
      ];
      localStorage.setItem(localstorageKeys.RESUMETEMP, JSON.stringify(state));
    },
    removeSkills: (state, action: PayloadAction<number>) => {
      state.skills = [...state.skills.filter((_v, i) => i !== action.payload)];
      localStorage.setItem(localstorageKeys.RESUMETEMP, JSON.stringify(state));
    },
  },
});

export const {
  setPersonalDetails,
  setEducationDetails,
  setWorkDetails,
  setSkills,
  setResumeDetails,
  removeEducationDetails,
  removeWorkDetails,
  removeSkills,
} = resumeSlice.actions;

export const selectPersonalDetails = (state: RootState) =>
  state.resume.personalDetails;
export const selectWorkExperiences = (state: RootState) =>
  state.resume.workDetails;
export const selectEducationDetails = (state: RootState) =>
  state.resume.educationDetails;
export const selectSkills = (state: RootState) => state.resume.skills;
export const selectResumeDetails = (state: RootState) => state.resume;

export default resumeSlice.reducer;
