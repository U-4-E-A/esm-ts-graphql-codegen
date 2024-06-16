/* eslint-disable no-redeclare, @typescript-eslint/explicit-function-return-type */ // @typescript-eslint/explicit-function-return-type
import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export const HeroType = {
  NameType: "name",
  AppearsInType: "appearsIn",
} as const;

export type HeroType = (typeof HeroType)[keyof typeof HeroType];
export type UserType = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  username: Scalars["String"]["output"];
};

export type MutationType = {
  __typename?: "Mutation";
  loginUser: LoginUserResponseType;
  logoutUser: LogoutUserResponseType;
};

export type MutationLoginUserArgsType = {
  input: UserLoginInputType;
};

export type MutationLogoutUserArgsType = {
  id: Scalars["String"]["input"];
};

export type UserLoginInputType = {
  __typename?: "UserLoginInput";
  username: Scalars["String"]["output"];
  Password: Scalars["String"]["output"];
};

export type LoginUserResponseType = {
  __typename?: "LoginUserResponse";
  ok: Scalars["Boolean"]["output"];
};

export type QueryType = {
  __typename?: "Query";
  getUser?: Maybe<PublicUserType>;
};

export type QueryGetUserArgsType = {
  id: Scalars["String"]["input"];
};

export type LogoutUserResponseType = {
  __typename?: "LogoutUserResponse";
  ok: Scalars["Boolean"]["output"];
};

export type PublicUserType = {
  __typename?: "PublicUser";
  id: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypesType = {
  hero: HeroType;
  User: ResolverTypeWrapper<UserType>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  UserLoginInput: ResolverTypeWrapper<UserLoginInputType>;
  LoginUserResponse: ResolverTypeWrapper<LoginUserResponseType>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Query: ResolverTypeWrapper<{}>;
  LogoutUserResponse: ResolverTypeWrapper<LogoutUserResponseType>;
  PublicUser: ResolverTypeWrapper<PublicUserType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypesType = {
  User: UserType;
  ID: Scalars["ID"]["output"];
  String: Scalars["String"]["output"];
  Mutation: {};
  UserLoginInput: UserLoginInputType;
  LoginUserResponse: LoginUserResponseType;
  Boolean: Scalars["Boolean"]["output"];
  Query: {};
  LogoutUserResponse: LogoutUserResponseType;
  PublicUser: PublicUserType;
};

export type UserResolversType<
  ContextType = any,
  ParentType extends
    ResolversParentTypesType["User"] = ResolversParentTypesType["User"],
> = {
  id?: Resolver<ResolversTypesType["ID"], ParentType, ContextType>;
  username?: Resolver<ResolversTypesType["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolversType<
  ContextType = any,
  ParentType extends
    ResolversParentTypesType["Mutation"] = ResolversParentTypesType["Mutation"],
> = {
  loginUser?: Resolver<
    ResolversTypesType["LoginUserResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationLoginUserArgsType, "input">
  >;
  logoutUser?: Resolver<
    ResolversTypesType["LogoutUserResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationLogoutUserArgsType, "id">
  >;
};

export type UserLoginInputResolversType<
  ContextType = any,
  ParentType extends
    ResolversParentTypesType["UserLoginInput"] = ResolversParentTypesType["UserLoginInput"],
> = {
  username?: Resolver<ResolversTypesType["String"], ParentType, ContextType>;
  Password?: Resolver<ResolversTypesType["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginUserResponseResolversType<
  ContextType = any,
  ParentType extends
    ResolversParentTypesType["LoginUserResponse"] = ResolversParentTypesType["LoginUserResponse"],
> = {
  ok?: Resolver<ResolversTypesType["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolversType<
  ContextType = any,
  ParentType extends
    ResolversParentTypesType["Query"] = ResolversParentTypesType["Query"],
> = {
  getUser?: Resolver<
    Maybe<ResolversTypesType["PublicUser"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserArgsType, "id">
  >;
};

export type LogoutUserResponseResolversType<
  ContextType = any,
  ParentType extends
    ResolversParentTypesType["LogoutUserResponse"] = ResolversParentTypesType["LogoutUserResponse"],
> = {
  ok?: Resolver<ResolversTypesType["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicUserResolversType<
  ContextType = any,
  ParentType extends
    ResolversParentTypesType["PublicUser"] = ResolversParentTypesType["PublicUser"],
> = {
  id?: Resolver<ResolversTypesType["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResolversType<ContextType = any> = {
  User?: UserResolversType<ContextType>;
  Mutation?: MutationResolversType<ContextType>;
  UserLoginInput?: UserLoginInputResolversType<ContextType>;
  LoginUserResponse?: LoginUserResponseResolversType<ContextType>;
  Query?: QueryResolversType<ContextType>;
  LogoutUserResponse?: LogoutUserResponseResolversType<ContextType>;
  PublicUser?: PublicUserResolversType<ContextType>;
};
