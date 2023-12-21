export interface TimelineContent {
  description?: string;
  listItems?: string[];
  skills?: string[];
}

export interface TimelineObject {
  title: string;
  subTitle?: string;
  location?: string;
  timeRange: string;
  image: string;
  externalLink?: string;
  githubLink?: string;
  githubPagesLink?: string;
  projectLink?: string;
  content: TimelineContent;
}
