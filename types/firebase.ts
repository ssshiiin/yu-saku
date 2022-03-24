export type head = {
  id: string;
  title: string;
  sub_title: string;
  description: string;
  type: work_type;
  head_path: string;
  work_path: string;
  works: work[];
};

export type work = {
  id: string;
  type: work_type;
  work_path: string;
};

export type work_type = "image" | "video";
