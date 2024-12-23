import { IPadding } from "@/src/shared/lib/padding";

export interface IParamGetTable extends IPadding {
  search?: string;
}

export interface ITableRow {
  blogger_platform_id: number;
  url: string;
  published_at: string;
  id: number;
  blogger_id: number;
  platform_code: string;
  blogger: {
    description: null;
    title: string;
    id: number;
  };
  blogger_platform: null;
  platform: {
    title: string;
    description: null;
    code: string;
  };
  metrics: {
    blogger_id: number;
    platform_code: string;
    post_id: number;
    views: number;
    comments: number;
    id: number;
    blogger_platform_id: number;
    date: string;
    likes: number;
  };
}
