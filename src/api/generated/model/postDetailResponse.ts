/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * polling API
 * polling API Document
 * OpenAPI spec version: 1.0.0
 */
import type { PollDetailResponse } from './pollDetailResponse';

export interface PostDetailResponse {
  createdAt: string;
  createdBy: string;
  imageUrl: string;
  polls: PollDetailResponse[];
  postUid: string;
  title: string;
}
