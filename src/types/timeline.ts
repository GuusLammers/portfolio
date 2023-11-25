export interface TimelineContent {
  description?: string;
  listItems?: string[];
  skills?: string[];
}

export interface TimelineObject {
  title: string;
  jobTitle?: string;
  location?: string;
  timeRange: string;
  image: string;
  externalLink?: string;
  content: TimelineContent;
}

export interface Timeline {

}
