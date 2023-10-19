/* eslint-disable @typescript-eslint/no-explicit-any */
export type BlogTypeProps = {
  readonly content?: any;
  readonly created_at?: Date;
  readonly id?: number;
  readonly image?: string;
  readonly is_active?: number;
  readonly slug?: string;
  readonly title?: string;
  readonly updated_at?: Date | undefined;
  readonly excerpt?: string;
  readonly category?: string;
};
