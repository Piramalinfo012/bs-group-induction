
export interface PolicyItem {
  id: string;
  title: string;
  content: string[];
  type: 'dos' | 'donts' | 'general' | 'table';
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface ManagementMessage {
  name: string;
  title: string;
  text: string;
}

export interface BusinessVertical {
  title: string;
  description: string;
  icon: string;
}

export interface InductionData {
  companyName: string;
  tagline: string;
  mdMessage: ManagementMessage;
  timeline: TimelineEvent[];
  vision: string;
  mission: string;
  businessVerticals: BusinessVertical[];
  policies: {
    codeOfConduct: {
      dos: string[];
      donts: string[];
    };
    attendance: {
      guidelines: string[];
      timing: {
        corporate: string;
        breakfast: string;
        lunch: string;
      };
    };
    leave: {
      casual: string[];
      marriage: string[];
      bereavement: string[];
      encashment: {
        criteria: string[];
        formula: string;
      };
    };
    travel: {
      guidelines: string[];
      allowances: {
        grade: string;
        lodging: string;
        boarding: string;
        travel: string;
        conveyance: string;
      }[];
    };
    insurance: {
      core: string[];
      medical: string[];
      exclusions: string[];
    };
    childEducation: {
      eligibility: string;
      benefit: string;
      limit: string;
      applicability: string;
    };
  };
}
