export type work = {
  id: string;
  type: work_type;
  title: string;
  sub_title: string;
  description: string;
  head_path: string;
  work_path: string;
};

export type work_type = "image" | "video";
