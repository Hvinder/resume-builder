export type BaseOrganizationDetails = {
  organizationName: string;
  location: string;
  startMonth: string;
  startYear: string;
  endMonth?: string;
  endYear?: string;
  isCurrent: boolean;
  details?: string;
};

export type WorkDetails = BaseOrganizationDetails & {
  position: string;
};

export type EducationDetails = BaseOrganizationDetails & {
  specialization: string;
};

export type PersonalDetails = {
  name: string;
  email: string;
  title: string;
  location: string;
  phone?: string;
  linkedIn?: string;
  github?: string;
};
