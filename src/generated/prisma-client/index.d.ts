// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  character: (where?: CharacterWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  character: (where: CharacterWhereUniqueInput) => CharacterNullablePromise;
  characters: (args?: {
    where?: CharacterWhereInput;
    orderBy?: CharacterOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Character>;
  charactersConnection: (args?: {
    where?: CharacterWhereInput;
    orderBy?: CharacterOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CharacterConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCharacter: (data: CharacterCreateInput) => CharacterPromise;
  updateCharacter: (args: {
    data: CharacterUpdateInput;
    where: CharacterWhereUniqueInput;
  }) => CharacterPromise;
  updateManyCharacters: (args: {
    data: CharacterUpdateManyMutationInput;
    where?: CharacterWhereInput;
  }) => BatchPayloadPromise;
  upsertCharacter: (args: {
    where: CharacterWhereUniqueInput;
    create: CharacterCreateInput;
    update: CharacterUpdateInput;
  }) => CharacterPromise;
  deleteCharacter: (where: CharacterWhereUniqueInput) => CharacterPromise;
  deleteManyCharacters: (where?: CharacterWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  character: (
    where?: CharacterSubscriptionWhereInput
  ) => CharacterSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type affiliation = "REBEL_ALLIANCE" | "EMPIRE";

export type CharacterOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "species_ASC"
  | "species_DESC"
  | "affiliation_ASC"
  | "affiliation_DESC"
  | "weapon_ASC"
  | "weapon_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type CharacterWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CharacterWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  species?: Maybe<String>;
  species_not?: Maybe<String>;
  species_in?: Maybe<String[] | String>;
  species_not_in?: Maybe<String[] | String>;
  species_lt?: Maybe<String>;
  species_lte?: Maybe<String>;
  species_gt?: Maybe<String>;
  species_gte?: Maybe<String>;
  species_contains?: Maybe<String>;
  species_not_contains?: Maybe<String>;
  species_starts_with?: Maybe<String>;
  species_not_starts_with?: Maybe<String>;
  species_ends_with?: Maybe<String>;
  species_not_ends_with?: Maybe<String>;
  affiliation?: Maybe<affiliation>;
  affiliation_not?: Maybe<affiliation>;
  affiliation_in?: Maybe<affiliation[] | affiliation>;
  affiliation_not_in?: Maybe<affiliation[] | affiliation>;
  weapon?: Maybe<String>;
  weapon_not?: Maybe<String>;
  weapon_in?: Maybe<String[] | String>;
  weapon_not_in?: Maybe<String[] | String>;
  weapon_lt?: Maybe<String>;
  weapon_lte?: Maybe<String>;
  weapon_gt?: Maybe<String>;
  weapon_gte?: Maybe<String>;
  weapon_contains?: Maybe<String>;
  weapon_not_contains?: Maybe<String>;
  weapon_starts_with?: Maybe<String>;
  weapon_not_starts_with?: Maybe<String>;
  weapon_ends_with?: Maybe<String>;
  weapon_not_ends_with?: Maybe<String>;
  AND?: Maybe<CharacterWhereInput[] | CharacterWhereInput>;
  OR?: Maybe<CharacterWhereInput[] | CharacterWhereInput>;
  NOT?: Maybe<CharacterWhereInput[] | CharacterWhereInput>;
}

export interface CharacterCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  species: String;
  affiliation: affiliation;
  weapon: String;
}

export interface CharacterUpdateInput {
  name?: Maybe<String>;
  species?: Maybe<String>;
  affiliation?: Maybe<affiliation>;
  weapon?: Maybe<String>;
}

export interface CharacterUpdateManyMutationInput {
  name?: Maybe<String>;
  species?: Maybe<String>;
  affiliation?: Maybe<affiliation>;
  weapon?: Maybe<String>;
}

export interface CharacterSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CharacterWhereInput>;
  AND?: Maybe<
    CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput
  >;
  OR?: Maybe<
    CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput
  >;
  NOT?: Maybe<
    CharacterSubscriptionWhereInput[] | CharacterSubscriptionWhereInput
  >;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Character {
  id: ID_Output;
  name: String;
  species: String;
  affiliation: affiliation;
  weapon: String;
}

export interface CharacterPromise extends Promise<Character>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  species: () => Promise<String>;
  affiliation: () => Promise<affiliation>;
  weapon: () => Promise<String>;
}

export interface CharacterSubscription
  extends Promise<AsyncIterator<Character>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  species: () => Promise<AsyncIterator<String>>;
  affiliation: () => Promise<AsyncIterator<affiliation>>;
  weapon: () => Promise<AsyncIterator<String>>;
}

export interface CharacterNullablePromise
  extends Promise<Character | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  species: () => Promise<String>;
  affiliation: () => Promise<affiliation>;
  weapon: () => Promise<String>;
}

export interface CharacterConnection {
  pageInfo: PageInfo;
  edges: CharacterEdge[];
}

export interface CharacterConnectionPromise
  extends Promise<CharacterConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CharacterEdge>>() => T;
  aggregate: <T = AggregateCharacterPromise>() => T;
}

export interface CharacterConnectionSubscription
  extends Promise<AsyncIterator<CharacterConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CharacterEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCharacterSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CharacterEdge {
  node: Character;
  cursor: String;
}

export interface CharacterEdgePromise
  extends Promise<CharacterEdge>,
    Fragmentable {
  node: <T = CharacterPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CharacterEdgeSubscription
  extends Promise<AsyncIterator<CharacterEdge>>,
    Fragmentable {
  node: <T = CharacterSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCharacter {
  count: Int;
}

export interface AggregateCharacterPromise
  extends Promise<AggregateCharacter>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCharacterSubscription
  extends Promise<AsyncIterator<AggregateCharacter>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CharacterSubscriptionPayload {
  mutation: MutationType;
  node: Character;
  updatedFields: String[];
  previousValues: CharacterPreviousValues;
}

export interface CharacterSubscriptionPayloadPromise
  extends Promise<CharacterSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CharacterPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CharacterPreviousValuesPromise>() => T;
}

export interface CharacterSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CharacterSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CharacterSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CharacterPreviousValuesSubscription>() => T;
}

export interface CharacterPreviousValues {
  id: ID_Output;
  name: String;
  species: String;
  affiliation: affiliation;
  weapon: String;
}

export interface CharacterPreviousValuesPromise
  extends Promise<CharacterPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  species: () => Promise<String>;
  affiliation: () => Promise<affiliation>;
  weapon: () => Promise<String>;
}

export interface CharacterPreviousValuesSubscription
  extends Promise<AsyncIterator<CharacterPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  species: () => Promise<AsyncIterator<String>>;
  affiliation: () => Promise<AsyncIterator<affiliation>>;
  weapon: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Character",
    embedded: false
  },
  {
    name: "affiliation",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;