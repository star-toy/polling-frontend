/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * polling API
 * polling API Document
 * OpenAPI spec version: 1.0.0
 */
import type { FileStorage } from './fileStorage';
import type { Poll } from './poll';

export interface PollOption {
  createdAt?: string;
  createdBy: string;
  file?: FileStorage;
  id?: number;
  isDeleted: boolean;
  linkedUid?: string;
  poll?: Poll;
  pollOptionSeq: number;
  pollOptionText?: string;
  pollOptionUid: string;
  updatedAt?: string;
  updatedBy?: string;
  uploadableType?: string;
}
