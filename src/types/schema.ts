/* eslint-disable no-redeclare, @typescript-eslint/explicit-function-return-type */ // @typescript-eslint/explicit-function-return-type
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export const HeroType = {
  NameType: 'name',
  AppearsInType: 'appearsIn'
} as const;

export type HeroType = typeof HeroType[keyof typeof HeroType];
export type UserType = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};
