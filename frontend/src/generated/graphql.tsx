import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  float8: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "activity" */
export type Activity = {
  __typename?: 'activity';
  coordinates?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  estimated_costs?: Maybe<Scalars['float8']>;
  estimated_duration?: Maybe<Scalars['float8']>;
  estimated_duration_in_hours?: Maybe<Scalars['numeric']>;
  estimated_pricing?: Maybe<Scalars['numeric']>;
  gainable_xp?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  image_url: Scalars['String'];
  /** An array relationship */
  interactions: Array<Interaction>;
  /** An aggregate relationship */
  interactions_aggregate: Interaction_Aggregate;
  /** An array relationship */
  likes: Array<Like>;
  /** An aggregate relationship */
  likes_aggregate: Like_Aggregate;
  name: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  short_description: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  website_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "activity" */
export type ActivityCoordinatesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "activity" */
export type ActivityInteractionsArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Order_By>>;
  where?: InputMaybe<Interaction_Bool_Exp>;
};


/** columns and relationships of "activity" */
export type ActivityInteractions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Order_By>>;
  where?: InputMaybe<Interaction_Bool_Exp>;
};


/** columns and relationships of "activity" */
export type ActivityLikesArgs = {
  distinct_on?: InputMaybe<Array<Like_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Like_Order_By>>;
  where?: InputMaybe<Like_Bool_Exp>;
};


/** columns and relationships of "activity" */
export type ActivityLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Like_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Like_Order_By>>;
  where?: InputMaybe<Like_Bool_Exp>;
};

/** aggregated selection of "activity" */
export type Activity_Aggregate = {
  __typename?: 'activity_aggregate';
  aggregate?: Maybe<Activity_Aggregate_Fields>;
  nodes: Array<Activity>;
};

/** aggregate fields of "activity" */
export type Activity_Aggregate_Fields = {
  __typename?: 'activity_aggregate_fields';
  avg?: Maybe<Activity_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Activity_Max_Fields>;
  min?: Maybe<Activity_Min_Fields>;
  stddev?: Maybe<Activity_Stddev_Fields>;
  stddev_pop?: Maybe<Activity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Activity_Stddev_Samp_Fields>;
  sum?: Maybe<Activity_Sum_Fields>;
  var_pop?: Maybe<Activity_Var_Pop_Fields>;
  var_samp?: Maybe<Activity_Var_Samp_Fields>;
  variance?: Maybe<Activity_Variance_Fields>;
};


/** aggregate fields of "activity" */
export type Activity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Activity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Activity_Append_Input = {
  coordinates?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Activity_Avg_Fields = {
  __typename?: 'activity_avg_fields';
  estimated_costs?: Maybe<Scalars['Float']>;
  estimated_duration?: Maybe<Scalars['Float']>;
  estimated_duration_in_hours?: Maybe<Scalars['Float']>;
  estimated_pricing?: Maybe<Scalars['Float']>;
  gainable_xp?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "activity". All fields are combined with a logical 'AND'. */
export type Activity_Bool_Exp = {
  _and?: InputMaybe<Array<Activity_Bool_Exp>>;
  _not?: InputMaybe<Activity_Bool_Exp>;
  _or?: InputMaybe<Array<Activity_Bool_Exp>>;
  coordinates?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  estimated_costs?: InputMaybe<Float8_Comparison_Exp>;
  estimated_duration?: InputMaybe<Float8_Comparison_Exp>;
  estimated_duration_in_hours?: InputMaybe<Numeric_Comparison_Exp>;
  estimated_pricing?: InputMaybe<Numeric_Comparison_Exp>;
  gainable_xp?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  interactions?: InputMaybe<Interaction_Bool_Exp>;
  interactions_aggregate?: InputMaybe<Interaction_Aggregate_Bool_Exp>;
  likes?: InputMaybe<Like_Bool_Exp>;
  likes_aggregate?: InputMaybe<Like_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  short_description?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  website_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity" */
export enum Activity_Constraint {
  /** unique or primary key constraint on columns "name" */
  ActivityNameKey = 'activity_name_key',
  /** unique or primary key constraint on columns "id" */
  ActivityPkey = 'activity_pkey',
  /** unique or primary key constraint on columns "position" */
  ActivityPositionKey = 'activity_position_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Activity_Delete_At_Path_Input = {
  coordinates?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Activity_Delete_Elem_Input = {
  coordinates?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Activity_Delete_Key_Input = {
  coordinates?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "activity" */
export type Activity_Inc_Input = {
  estimated_costs?: InputMaybe<Scalars['float8']>;
  estimated_duration?: InputMaybe<Scalars['float8']>;
  estimated_duration_in_hours?: InputMaybe<Scalars['numeric']>;
  estimated_pricing?: InputMaybe<Scalars['numeric']>;
  gainable_xp?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "activity" */
export type Activity_Insert_Input = {
  coordinates?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  estimated_costs?: InputMaybe<Scalars['float8']>;
  estimated_duration?: InputMaybe<Scalars['float8']>;
  estimated_duration_in_hours?: InputMaybe<Scalars['numeric']>;
  estimated_pricing?: InputMaybe<Scalars['numeric']>;
  gainable_xp?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  interactions?: InputMaybe<Interaction_Arr_Rel_Insert_Input>;
  likes?: InputMaybe<Like_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  short_description?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Activity_Max_Fields = {
  __typename?: 'activity_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  estimated_costs?: Maybe<Scalars['float8']>;
  estimated_duration?: Maybe<Scalars['float8']>;
  estimated_duration_in_hours?: Maybe<Scalars['numeric']>;
  estimated_pricing?: Maybe<Scalars['numeric']>;
  gainable_xp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  short_description?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website_url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Activity_Min_Fields = {
  __typename?: 'activity_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  estimated_costs?: Maybe<Scalars['float8']>;
  estimated_duration?: Maybe<Scalars['float8']>;
  estimated_duration_in_hours?: Maybe<Scalars['numeric']>;
  estimated_pricing?: Maybe<Scalars['numeric']>;
  gainable_xp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  short_description?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website_url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "activity" */
export type Activity_Mutation_Response = {
  __typename?: 'activity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activity>;
};

/** input type for inserting object relation for remote table "activity" */
export type Activity_Obj_Rel_Insert_Input = {
  data: Activity_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Activity_On_Conflict>;
};

/** on_conflict condition type for table "activity" */
export type Activity_On_Conflict = {
  constraint: Activity_Constraint;
  update_columns?: Array<Activity_Update_Column>;
  where?: InputMaybe<Activity_Bool_Exp>;
};

/** Ordering options when selecting data from "activity". */
export type Activity_Order_By = {
  coordinates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  estimated_costs?: InputMaybe<Order_By>;
  estimated_duration?: InputMaybe<Order_By>;
  estimated_duration_in_hours?: InputMaybe<Order_By>;
  estimated_pricing?: InputMaybe<Order_By>;
  gainable_xp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  interactions_aggregate?: InputMaybe<Interaction_Aggregate_Order_By>;
  likes_aggregate?: InputMaybe<Like_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  website_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: activity */
export type Activity_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Activity_Prepend_Input = {
  coordinates?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "activity" */
export enum Activity_Select_Column {
  /** column name */
  Coordinates = 'coordinates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EstimatedCosts = 'estimated_costs',
  /** column name */
  EstimatedDuration = 'estimated_duration',
  /** column name */
  EstimatedDurationInHours = 'estimated_duration_in_hours',
  /** column name */
  EstimatedPricing = 'estimated_pricing',
  /** column name */
  GainableXp = 'gainable_xp',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WebsiteUrl = 'website_url'
}

/** input type for updating data in table "activity" */
export type Activity_Set_Input = {
  coordinates?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  estimated_costs?: InputMaybe<Scalars['float8']>;
  estimated_duration?: InputMaybe<Scalars['float8']>;
  estimated_duration_in_hours?: InputMaybe<Scalars['numeric']>;
  estimated_pricing?: InputMaybe<Scalars['numeric']>;
  gainable_xp?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  short_description?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website_url?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "activity_status" */
export type Activity_Status = {
  __typename?: 'activity_status';
  value: Scalars['String'];
};

/** aggregated selection of "activity_status" */
export type Activity_Status_Aggregate = {
  __typename?: 'activity_status_aggregate';
  aggregate?: Maybe<Activity_Status_Aggregate_Fields>;
  nodes: Array<Activity_Status>;
};

/** aggregate fields of "activity_status" */
export type Activity_Status_Aggregate_Fields = {
  __typename?: 'activity_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Activity_Status_Max_Fields>;
  min?: Maybe<Activity_Status_Min_Fields>;
};


/** aggregate fields of "activity_status" */
export type Activity_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Activity_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "activity_status". All fields are combined with a logical 'AND'. */
export type Activity_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Activity_Status_Bool_Exp>>;
  _not?: InputMaybe<Activity_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Activity_Status_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity_status" */
export enum Activity_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  ActivityStatusPkey = 'activity_status_pkey'
}

export enum Activity_Status_Enum {
  Done = 'DONE',
  Ongoing = 'ONGOING',
  Outstanding = 'OUTSTANDING'
}

/** Boolean expression to compare columns of type "activity_status_enum". All fields are combined with logical 'AND'. */
export type Activity_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Activity_Status_Enum>;
  _in?: InputMaybe<Array<Activity_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Activity_Status_Enum>;
  _nin?: InputMaybe<Array<Activity_Status_Enum>>;
};

/** input type for inserting data into table "activity_status" */
export type Activity_Status_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Activity_Status_Max_Fields = {
  __typename?: 'activity_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Activity_Status_Min_Fields = {
  __typename?: 'activity_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "activity_status" */
export type Activity_Status_Mutation_Response = {
  __typename?: 'activity_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activity_Status>;
};

/** input type for inserting object relation for remote table "activity_status" */
export type Activity_Status_Obj_Rel_Insert_Input = {
  data: Activity_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Activity_Status_On_Conflict>;
};

/** on_conflict condition type for table "activity_status" */
export type Activity_Status_On_Conflict = {
  constraint: Activity_Status_Constraint;
  update_columns?: Array<Activity_Status_Update_Column>;
  where?: InputMaybe<Activity_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "activity_status". */
export type Activity_Status_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: activity_status */
export type Activity_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "activity_status" */
export enum Activity_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "activity_status" */
export type Activity_Status_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "activity_status" */
export type Activity_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Activity_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Activity_Status_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "activity_status" */
export enum Activity_Status_Update_Column {
  /** column name */
  Value = 'value'
}

export type Activity_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activity_Status_Set_Input>;
  where: Activity_Status_Bool_Exp;
};

/** aggregate stddev on columns */
export type Activity_Stddev_Fields = {
  __typename?: 'activity_stddev_fields';
  estimated_costs?: Maybe<Scalars['Float']>;
  estimated_duration?: Maybe<Scalars['Float']>;
  estimated_duration_in_hours?: Maybe<Scalars['Float']>;
  estimated_pricing?: Maybe<Scalars['Float']>;
  gainable_xp?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Activity_Stddev_Pop_Fields = {
  __typename?: 'activity_stddev_pop_fields';
  estimated_costs?: Maybe<Scalars['Float']>;
  estimated_duration?: Maybe<Scalars['Float']>;
  estimated_duration_in_hours?: Maybe<Scalars['Float']>;
  estimated_pricing?: Maybe<Scalars['Float']>;
  gainable_xp?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Activity_Stddev_Samp_Fields = {
  __typename?: 'activity_stddev_samp_fields';
  estimated_costs?: Maybe<Scalars['Float']>;
  estimated_duration?: Maybe<Scalars['Float']>;
  estimated_duration_in_hours?: Maybe<Scalars['Float']>;
  estimated_pricing?: Maybe<Scalars['Float']>;
  gainable_xp?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "activity" */
export type Activity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Activity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Activity_Stream_Cursor_Value_Input = {
  coordinates?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  estimated_costs?: InputMaybe<Scalars['float8']>;
  estimated_duration?: InputMaybe<Scalars['float8']>;
  estimated_duration_in_hours?: InputMaybe<Scalars['numeric']>;
  estimated_pricing?: InputMaybe<Scalars['numeric']>;
  gainable_xp?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  short_description?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website_url?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Activity_Sum_Fields = {
  __typename?: 'activity_sum_fields';
  estimated_costs?: Maybe<Scalars['float8']>;
  estimated_duration?: Maybe<Scalars['float8']>;
  estimated_duration_in_hours?: Maybe<Scalars['numeric']>;
  estimated_pricing?: Maybe<Scalars['numeric']>;
  gainable_xp?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** update columns of table "activity" */
export enum Activity_Update_Column {
  /** column name */
  Coordinates = 'coordinates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EstimatedCosts = 'estimated_costs',
  /** column name */
  EstimatedDuration = 'estimated_duration',
  /** column name */
  EstimatedDurationInHours = 'estimated_duration_in_hours',
  /** column name */
  EstimatedPricing = 'estimated_pricing',
  /** column name */
  GainableXp = 'gainable_xp',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WebsiteUrl = 'website_url'
}

export type Activity_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Activity_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Activity_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Activity_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Activity_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Activity_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Activity_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activity_Set_Input>;
  where: Activity_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Activity_Var_Pop_Fields = {
  __typename?: 'activity_var_pop_fields';
  estimated_costs?: Maybe<Scalars['Float']>;
  estimated_duration?: Maybe<Scalars['Float']>;
  estimated_duration_in_hours?: Maybe<Scalars['Float']>;
  estimated_pricing?: Maybe<Scalars['Float']>;
  gainable_xp?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Activity_Var_Samp_Fields = {
  __typename?: 'activity_var_samp_fields';
  estimated_costs?: Maybe<Scalars['Float']>;
  estimated_duration?: Maybe<Scalars['Float']>;
  estimated_duration_in_hours?: Maybe<Scalars['Float']>;
  estimated_pricing?: Maybe<Scalars['Float']>;
  gainable_xp?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Activity_Variance_Fields = {
  __typename?: 'activity_variance_fields';
  estimated_costs?: Maybe<Scalars['Float']>;
  estimated_duration?: Maybe<Scalars['Float']>;
  estimated_duration_in_hours?: Maybe<Scalars['Float']>;
  estimated_pricing?: Maybe<Scalars['Float']>;
  gainable_xp?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "interaction" */
export type Interaction = {
  __typename?: 'interaction';
  activity_id: Scalars['uuid'];
  id: Scalars['uuid'];
  text: Scalars['String'];
  type: Interaction_Type_Enum;
};

/** aggregated selection of "interaction" */
export type Interaction_Aggregate = {
  __typename?: 'interaction_aggregate';
  aggregate?: Maybe<Interaction_Aggregate_Fields>;
  nodes: Array<Interaction>;
};

export type Interaction_Aggregate_Bool_Exp = {
  count?: InputMaybe<Interaction_Aggregate_Bool_Exp_Count>;
};

export type Interaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Interaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Interaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "interaction" */
export type Interaction_Aggregate_Fields = {
  __typename?: 'interaction_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Interaction_Max_Fields>;
  min?: Maybe<Interaction_Min_Fields>;
};


/** aggregate fields of "interaction" */
export type Interaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Interaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "interaction" */
export type Interaction_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Interaction_Max_Order_By>;
  min?: InputMaybe<Interaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "interaction" */
export type Interaction_Arr_Rel_Insert_Input = {
  data: Array<Interaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Interaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "interaction". All fields are combined with a logical 'AND'. */
export type Interaction_Bool_Exp = {
  _and?: InputMaybe<Array<Interaction_Bool_Exp>>;
  _not?: InputMaybe<Interaction_Bool_Exp>;
  _or?: InputMaybe<Array<Interaction_Bool_Exp>>;
  activity_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Interaction_Type_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "interaction" */
export enum Interaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  InteractionPkey = 'interaction_pkey'
}

/** input type for inserting data into table "interaction" */
export type Interaction_Insert_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Interaction_Type_Enum>;
};

/** aggregate max on columns */
export type Interaction_Max_Fields = {
  __typename?: 'interaction_max_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "interaction" */
export type Interaction_Max_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Interaction_Min_Fields = {
  __typename?: 'interaction_min_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "interaction" */
export type Interaction_Min_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "interaction" */
export type Interaction_Mutation_Response = {
  __typename?: 'interaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Interaction>;
};

/** on_conflict condition type for table "interaction" */
export type Interaction_On_Conflict = {
  constraint: Interaction_Constraint;
  update_columns?: Array<Interaction_Update_Column>;
  where?: InputMaybe<Interaction_Bool_Exp>;
};

/** Ordering options when selecting data from "interaction". */
export type Interaction_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: interaction */
export type Interaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "interaction" */
export enum Interaction_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "interaction" */
export type Interaction_Set_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Interaction_Type_Enum>;
};

/** Streaming cursor of the table "interaction" */
export type Interaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Interaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Interaction_Stream_Cursor_Value_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Interaction_Type_Enum>;
};

/** columns and relationships of "interaction_type" */
export type Interaction_Type = {
  __typename?: 'interaction_type';
  value: Scalars['String'];
};

/** aggregated selection of "interaction_type" */
export type Interaction_Type_Aggregate = {
  __typename?: 'interaction_type_aggregate';
  aggregate?: Maybe<Interaction_Type_Aggregate_Fields>;
  nodes: Array<Interaction_Type>;
};

/** aggregate fields of "interaction_type" */
export type Interaction_Type_Aggregate_Fields = {
  __typename?: 'interaction_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Interaction_Type_Max_Fields>;
  min?: Maybe<Interaction_Type_Min_Fields>;
};


/** aggregate fields of "interaction_type" */
export type Interaction_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Interaction_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "interaction_type". All fields are combined with a logical 'AND'. */
export type Interaction_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Interaction_Type_Bool_Exp>>;
  _not?: InputMaybe<Interaction_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Interaction_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "interaction_type" */
export enum Interaction_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  InteractionTypePkey = 'interaction_type_pkey'
}

export enum Interaction_Type_Enum {
  Fact = 'FACT',
  FunFact = 'FUN_FACT'
}

/** Boolean expression to compare columns of type "interaction_type_enum". All fields are combined with logical 'AND'. */
export type Interaction_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Interaction_Type_Enum>;
  _in?: InputMaybe<Array<Interaction_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Interaction_Type_Enum>;
  _nin?: InputMaybe<Array<Interaction_Type_Enum>>;
};

/** input type for inserting data into table "interaction_type" */
export type Interaction_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Interaction_Type_Max_Fields = {
  __typename?: 'interaction_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Interaction_Type_Min_Fields = {
  __typename?: 'interaction_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "interaction_type" */
export type Interaction_Type_Mutation_Response = {
  __typename?: 'interaction_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Interaction_Type>;
};

/** on_conflict condition type for table "interaction_type" */
export type Interaction_Type_On_Conflict = {
  constraint: Interaction_Type_Constraint;
  update_columns?: Array<Interaction_Type_Update_Column>;
  where?: InputMaybe<Interaction_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "interaction_type". */
export type Interaction_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: interaction_type */
export type Interaction_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "interaction_type" */
export enum Interaction_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "interaction_type" */
export type Interaction_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "interaction_type" */
export type Interaction_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Interaction_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Interaction_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "interaction_type" */
export enum Interaction_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Interaction_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Interaction_Type_Set_Input>;
  where: Interaction_Type_Bool_Exp;
};

/** update columns of table "interaction" */
export enum Interaction_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Type = 'type'
}

export type Interaction_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Interaction_Set_Input>;
  where: Interaction_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "like" */
export type Like = {
  __typename?: 'like';
  activity_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "like" */
export type Like_Aggregate = {
  __typename?: 'like_aggregate';
  aggregate?: Maybe<Like_Aggregate_Fields>;
  nodes: Array<Like>;
};

export type Like_Aggregate_Bool_Exp = {
  count?: InputMaybe<Like_Aggregate_Bool_Exp_Count>;
};

export type Like_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Like_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Like_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "like" */
export type Like_Aggregate_Fields = {
  __typename?: 'like_aggregate_fields';
  avg?: Maybe<Like_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Like_Max_Fields>;
  min?: Maybe<Like_Min_Fields>;
  stddev?: Maybe<Like_Stddev_Fields>;
  stddev_pop?: Maybe<Like_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Like_Stddev_Samp_Fields>;
  sum?: Maybe<Like_Sum_Fields>;
  var_pop?: Maybe<Like_Var_Pop_Fields>;
  var_samp?: Maybe<Like_Var_Samp_Fields>;
  variance?: Maybe<Like_Variance_Fields>;
};


/** aggregate fields of "like" */
export type Like_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Like_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "like" */
export type Like_Aggregate_Order_By = {
  avg?: InputMaybe<Like_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Like_Max_Order_By>;
  min?: InputMaybe<Like_Min_Order_By>;
  stddev?: InputMaybe<Like_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Like_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Like_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Like_Sum_Order_By>;
  var_pop?: InputMaybe<Like_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Like_Var_Samp_Order_By>;
  variance?: InputMaybe<Like_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "like" */
export type Like_Arr_Rel_Insert_Input = {
  data: Array<Like_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Like_On_Conflict>;
};

/** aggregate avg on columns */
export type Like_Avg_Fields = {
  __typename?: 'like_avg_fields';
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "like" */
export type Like_Avg_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "like". All fields are combined with a logical 'AND'. */
export type Like_Bool_Exp = {
  _and?: InputMaybe<Array<Like_Bool_Exp>>;
  _not?: InputMaybe<Like_Bool_Exp>;
  _or?: InputMaybe<Array<Like_Bool_Exp>>;
  activity_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "like" */
export enum Like_Constraint {
  /** unique or primary key constraint on columns "id" */
  LikePkey = 'like_pkey'
}

/** input type for incrementing numeric columns in table "like" */
export type Like_Inc_Input = {
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "like" */
export type Like_Insert_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Like_Max_Fields = {
  __typename?: 'like_max_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "like" */
export type Like_Max_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Like_Min_Fields = {
  __typename?: 'like_min_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "like" */
export type Like_Min_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "like" */
export type Like_Mutation_Response = {
  __typename?: 'like_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Like>;
};

/** on_conflict condition type for table "like" */
export type Like_On_Conflict = {
  constraint: Like_Constraint;
  update_columns?: Array<Like_Update_Column>;
  where?: InputMaybe<Like_Bool_Exp>;
};

/** Ordering options when selecting data from "like". */
export type Like_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: like */
export type Like_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "like" */
export enum Like_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "like" */
export type Like_Set_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Like_Stddev_Fields = {
  __typename?: 'like_stddev_fields';
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "like" */
export type Like_Stddev_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Like_Stddev_Pop_Fields = {
  __typename?: 'like_stddev_pop_fields';
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "like" */
export type Like_Stddev_Pop_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Like_Stddev_Samp_Fields = {
  __typename?: 'like_stddev_samp_fields';
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "like" */
export type Like_Stddev_Samp_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "like" */
export type Like_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Like_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Like_Stream_Cursor_Value_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Like_Sum_Fields = {
  __typename?: 'like_sum_fields';
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "like" */
export type Like_Sum_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "like" */
export enum Like_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type Like_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Like_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Like_Set_Input>;
  where: Like_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Like_Var_Pop_Fields = {
  __typename?: 'like_var_pop_fields';
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "like" */
export type Like_Var_Pop_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Like_Var_Samp_Fields = {
  __typename?: 'like_var_samp_fields';
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "like" */
export type Like_Var_Samp_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Like_Variance_Fields = {
  __typename?: 'like_variance_fields';
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "like" */
export type Like_Variance_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "activity" */
  delete_activity?: Maybe<Activity_Mutation_Response>;
  /** delete single row from the table: "activity" */
  delete_activity_by_pk?: Maybe<Activity>;
  /** delete data from the table: "activity_status" */
  delete_activity_status?: Maybe<Activity_Status_Mutation_Response>;
  /** delete single row from the table: "activity_status" */
  delete_activity_status_by_pk?: Maybe<Activity_Status>;
  /** delete data from the table: "interaction" */
  delete_interaction?: Maybe<Interaction_Mutation_Response>;
  /** delete single row from the table: "interaction" */
  delete_interaction_by_pk?: Maybe<Interaction>;
  /** delete data from the table: "interaction_type" */
  delete_interaction_type?: Maybe<Interaction_Type_Mutation_Response>;
  /** delete single row from the table: "interaction_type" */
  delete_interaction_type_by_pk?: Maybe<Interaction_Type>;
  /** delete data from the table: "like" */
  delete_like?: Maybe<Like_Mutation_Response>;
  /** delete single row from the table: "like" */
  delete_like_by_pk?: Maybe<Like>;
  /** delete data from the table: "owner" */
  delete_owner?: Maybe<Owner_Mutation_Response>;
  /** delete single row from the table: "owner" */
  delete_owner_by_pk?: Maybe<Owner>;
  /** delete data from the table: "pet" */
  delete_pet?: Maybe<Pet_Mutation_Response>;
  /** delete single row from the table: "pet" */
  delete_pet_by_pk?: Maybe<Pet>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete data from the table: "user_activity" */
  delete_user_activity?: Maybe<User_Activity_Mutation_Response>;
  /** delete single row from the table: "user_activity" */
  delete_user_activity_by_pk?: Maybe<User_Activity>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "activity" */
  insert_activity?: Maybe<Activity_Mutation_Response>;
  /** insert a single row into the table: "activity" */
  insert_activity_one?: Maybe<Activity>;
  /** insert data into the table: "activity_status" */
  insert_activity_status?: Maybe<Activity_Status_Mutation_Response>;
  /** insert a single row into the table: "activity_status" */
  insert_activity_status_one?: Maybe<Activity_Status>;
  /** insert data into the table: "interaction" */
  insert_interaction?: Maybe<Interaction_Mutation_Response>;
  /** insert a single row into the table: "interaction" */
  insert_interaction_one?: Maybe<Interaction>;
  /** insert data into the table: "interaction_type" */
  insert_interaction_type?: Maybe<Interaction_Type_Mutation_Response>;
  /** insert a single row into the table: "interaction_type" */
  insert_interaction_type_one?: Maybe<Interaction_Type>;
  /** insert data into the table: "like" */
  insert_like?: Maybe<Like_Mutation_Response>;
  /** insert a single row into the table: "like" */
  insert_like_one?: Maybe<Like>;
  /** insert data into the table: "owner" */
  insert_owner?: Maybe<Owner_Mutation_Response>;
  /** insert a single row into the table: "owner" */
  insert_owner_one?: Maybe<Owner>;
  /** insert data into the table: "pet" */
  insert_pet?: Maybe<Pet_Mutation_Response>;
  /** insert a single row into the table: "pet" */
  insert_pet_one?: Maybe<Pet>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_activity" */
  insert_user_activity?: Maybe<User_Activity_Mutation_Response>;
  /** insert a single row into the table: "user_activity" */
  insert_user_activity_one?: Maybe<User_Activity>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "activity" */
  update_activity?: Maybe<Activity_Mutation_Response>;
  /** update single row of the table: "activity" */
  update_activity_by_pk?: Maybe<Activity>;
  /** update multiples rows of table: "activity" */
  update_activity_many?: Maybe<Array<Maybe<Activity_Mutation_Response>>>;
  /** update data of the table: "activity_status" */
  update_activity_status?: Maybe<Activity_Status_Mutation_Response>;
  /** update single row of the table: "activity_status" */
  update_activity_status_by_pk?: Maybe<Activity_Status>;
  /** update multiples rows of table: "activity_status" */
  update_activity_status_many?: Maybe<Array<Maybe<Activity_Status_Mutation_Response>>>;
  /** update data of the table: "interaction" */
  update_interaction?: Maybe<Interaction_Mutation_Response>;
  /** update single row of the table: "interaction" */
  update_interaction_by_pk?: Maybe<Interaction>;
  /** update multiples rows of table: "interaction" */
  update_interaction_many?: Maybe<Array<Maybe<Interaction_Mutation_Response>>>;
  /** update data of the table: "interaction_type" */
  update_interaction_type?: Maybe<Interaction_Type_Mutation_Response>;
  /** update single row of the table: "interaction_type" */
  update_interaction_type_by_pk?: Maybe<Interaction_Type>;
  /** update multiples rows of table: "interaction_type" */
  update_interaction_type_many?: Maybe<Array<Maybe<Interaction_Type_Mutation_Response>>>;
  /** update data of the table: "like" */
  update_like?: Maybe<Like_Mutation_Response>;
  /** update single row of the table: "like" */
  update_like_by_pk?: Maybe<Like>;
  /** update multiples rows of table: "like" */
  update_like_many?: Maybe<Array<Maybe<Like_Mutation_Response>>>;
  /** update data of the table: "owner" */
  update_owner?: Maybe<Owner_Mutation_Response>;
  /** update single row of the table: "owner" */
  update_owner_by_pk?: Maybe<Owner>;
  /** update multiples rows of table: "owner" */
  update_owner_many?: Maybe<Array<Maybe<Owner_Mutation_Response>>>;
  /** update data of the table: "pet" */
  update_pet?: Maybe<Pet_Mutation_Response>;
  /** update single row of the table: "pet" */
  update_pet_by_pk?: Maybe<Pet>;
  /** update multiples rows of table: "pet" */
  update_pet_many?: Maybe<Array<Maybe<Pet_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update data of the table: "user_activity" */
  update_user_activity?: Maybe<User_Activity_Mutation_Response>;
  /** update single row of the table: "user_activity" */
  update_user_activity_by_pk?: Maybe<User_Activity>;
  /** update multiples rows of table: "user_activity" */
  update_user_activity_many?: Maybe<Array<Maybe<User_Activity_Mutation_Response>>>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ActivityArgs = {
  where: Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activity_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Activity_StatusArgs = {
  where: Activity_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activity_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_InteractionArgs = {
  where: Interaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Interaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Interaction_TypeArgs = {
  where: Interaction_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Interaction_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LikeArgs = {
  where: Like_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Like_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OwnerArgs = {
  where: Owner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Owner_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_PetArgs = {
  where: Pet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pet_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_ActivityArgs = {
  where: User_Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Activity_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ActivityArgs = {
  objects: Array<Activity_Insert_Input>;
  on_conflict?: InputMaybe<Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_OneArgs = {
  object: Activity_Insert_Input;
  on_conflict?: InputMaybe<Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_StatusArgs = {
  objects: Array<Activity_Status_Insert_Input>;
  on_conflict?: InputMaybe<Activity_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_Status_OneArgs = {
  object: Activity_Status_Insert_Input;
  on_conflict?: InputMaybe<Activity_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InteractionArgs = {
  objects: Array<Interaction_Insert_Input>;
  on_conflict?: InputMaybe<Interaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Interaction_OneArgs = {
  object: Interaction_Insert_Input;
  on_conflict?: InputMaybe<Interaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Interaction_TypeArgs = {
  objects: Array<Interaction_Type_Insert_Input>;
  on_conflict?: InputMaybe<Interaction_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Interaction_Type_OneArgs = {
  object: Interaction_Type_Insert_Input;
  on_conflict?: InputMaybe<Interaction_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LikeArgs = {
  objects: Array<Like_Insert_Input>;
  on_conflict?: InputMaybe<Like_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Like_OneArgs = {
  object: Like_Insert_Input;
  on_conflict?: InputMaybe<Like_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OwnerArgs = {
  objects: Array<Owner_Insert_Input>;
  on_conflict?: InputMaybe<Owner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Owner_OneArgs = {
  object: Owner_Insert_Input;
  on_conflict?: InputMaybe<Owner_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PetArgs = {
  objects: Array<Pet_Insert_Input>;
  on_conflict?: InputMaybe<Pet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pet_OneArgs = {
  object: Pet_Insert_Input;
  on_conflict?: InputMaybe<Pet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ActivityArgs = {
  objects: Array<User_Activity_Insert_Input>;
  on_conflict?: InputMaybe<User_Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Activity_OneArgs = {
  object: User_Activity_Insert_Input;
  on_conflict?: InputMaybe<User_Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActivityArgs = {
  _append?: InputMaybe<Activity_Append_Input>;
  _delete_at_path?: InputMaybe<Activity_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Activity_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Activity_Delete_Key_Input>;
  _inc?: InputMaybe<Activity_Inc_Input>;
  _prepend?: InputMaybe<Activity_Prepend_Input>;
  _set?: InputMaybe<Activity_Set_Input>;
  where: Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_By_PkArgs = {
  _append?: InputMaybe<Activity_Append_Input>;
  _delete_at_path?: InputMaybe<Activity_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Activity_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Activity_Delete_Key_Input>;
  _inc?: InputMaybe<Activity_Inc_Input>;
  _prepend?: InputMaybe<Activity_Prepend_Input>;
  _set?: InputMaybe<Activity_Set_Input>;
  pk_columns: Activity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_ManyArgs = {
  updates: Array<Activity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_StatusArgs = {
  _set?: InputMaybe<Activity_Status_Set_Input>;
  where: Activity_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Status_By_PkArgs = {
  _set?: InputMaybe<Activity_Status_Set_Input>;
  pk_columns: Activity_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Status_ManyArgs = {
  updates: Array<Activity_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InteractionArgs = {
  _set?: InputMaybe<Interaction_Set_Input>;
  where: Interaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_By_PkArgs = {
  _set?: InputMaybe<Interaction_Set_Input>;
  pk_columns: Interaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_ManyArgs = {
  updates: Array<Interaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_TypeArgs = {
  _set?: InputMaybe<Interaction_Type_Set_Input>;
  where: Interaction_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_Type_By_PkArgs = {
  _set?: InputMaybe<Interaction_Type_Set_Input>;
  pk_columns: Interaction_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_Type_ManyArgs = {
  updates: Array<Interaction_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LikeArgs = {
  _inc?: InputMaybe<Like_Inc_Input>;
  _set?: InputMaybe<Like_Set_Input>;
  where: Like_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Like_By_PkArgs = {
  _inc?: InputMaybe<Like_Inc_Input>;
  _set?: InputMaybe<Like_Set_Input>;
  pk_columns: Like_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Like_ManyArgs = {
  updates: Array<Like_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OwnerArgs = {
  _inc?: InputMaybe<Owner_Inc_Input>;
  _set?: InputMaybe<Owner_Set_Input>;
  where: Owner_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Owner_By_PkArgs = {
  _inc?: InputMaybe<Owner_Inc_Input>;
  _set?: InputMaybe<Owner_Set_Input>;
  pk_columns: Owner_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Owner_ManyArgs = {
  updates: Array<Owner_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PetArgs = {
  _inc?: InputMaybe<Pet_Inc_Input>;
  _set?: InputMaybe<Pet_Set_Input>;
  where: Pet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pet_By_PkArgs = {
  _inc?: InputMaybe<Pet_Inc_Input>;
  _set?: InputMaybe<Pet_Set_Input>;
  pk_columns: Pet_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pet_ManyArgs = {
  updates: Array<Pet_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_ActivityArgs = {
  _inc?: InputMaybe<User_Activity_Inc_Input>;
  _set?: InputMaybe<User_Activity_Set_Input>;
  where: User_Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Activity_By_PkArgs = {
  _inc?: InputMaybe<User_Activity_Inc_Input>;
  _set?: InputMaybe<User_Activity_Set_Input>;
  pk_columns: User_Activity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Activity_ManyArgs = {
  updates: Array<User_Activity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "owner" */
export type Owner = {
  __typename?: 'owner';
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  pets: Array<Pet>;
  /** An aggregate relationship */
  pets_aggregate: Pet_Aggregate;
};


/** columns and relationships of "owner" */
export type OwnerPetsArgs = {
  distinct_on?: InputMaybe<Array<Pet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pet_Order_By>>;
  where?: InputMaybe<Pet_Bool_Exp>;
};


/** columns and relationships of "owner" */
export type OwnerPets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pet_Order_By>>;
  where?: InputMaybe<Pet_Bool_Exp>;
};

/** aggregated selection of "owner" */
export type Owner_Aggregate = {
  __typename?: 'owner_aggregate';
  aggregate?: Maybe<Owner_Aggregate_Fields>;
  nodes: Array<Owner>;
};

/** aggregate fields of "owner" */
export type Owner_Aggregate_Fields = {
  __typename?: 'owner_aggregate_fields';
  avg?: Maybe<Owner_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Owner_Max_Fields>;
  min?: Maybe<Owner_Min_Fields>;
  stddev?: Maybe<Owner_Stddev_Fields>;
  stddev_pop?: Maybe<Owner_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Owner_Stddev_Samp_Fields>;
  sum?: Maybe<Owner_Sum_Fields>;
  var_pop?: Maybe<Owner_Var_Pop_Fields>;
  var_samp?: Maybe<Owner_Var_Samp_Fields>;
  variance?: Maybe<Owner_Variance_Fields>;
};


/** aggregate fields of "owner" */
export type Owner_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Owner_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Owner_Avg_Fields = {
  __typename?: 'owner_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "owner". All fields are combined with a logical 'AND'. */
export type Owner_Bool_Exp = {
  _and?: InputMaybe<Array<Owner_Bool_Exp>>;
  _not?: InputMaybe<Owner_Bool_Exp>;
  _or?: InputMaybe<Array<Owner_Bool_Exp>>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pets?: InputMaybe<Pet_Bool_Exp>;
  pets_aggregate?: InputMaybe<Pet_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "owner" */
export enum Owner_Constraint {
  /** unique or primary key constraint on columns "id" */
  OwnerPkey = 'owner_pkey'
}

/** input type for incrementing numeric columns in table "owner" */
export type Owner_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "owner" */
export type Owner_Insert_Input = {
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  pets?: InputMaybe<Pet_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Owner_Max_Fields = {
  __typename?: 'owner_max_fields';
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Owner_Min_Fields = {
  __typename?: 'owner_min_fields';
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "owner" */
export type Owner_Mutation_Response = {
  __typename?: 'owner_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Owner>;
};

/** input type for inserting object relation for remote table "owner" */
export type Owner_Obj_Rel_Insert_Input = {
  data: Owner_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Owner_On_Conflict>;
};

/** on_conflict condition type for table "owner" */
export type Owner_On_Conflict = {
  constraint: Owner_Constraint;
  update_columns?: Array<Owner_Update_Column>;
  where?: InputMaybe<Owner_Bool_Exp>;
};

/** Ordering options when selecting data from "owner". */
export type Owner_Order_By = {
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pets_aggregate?: InputMaybe<Pet_Aggregate_Order_By>;
};

/** primary key columns input for table: owner */
export type Owner_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "owner" */
export enum Owner_Select_Column {
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "owner" */
export type Owner_Set_Input = {
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Owner_Stddev_Fields = {
  __typename?: 'owner_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Owner_Stddev_Pop_Fields = {
  __typename?: 'owner_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Owner_Stddev_Samp_Fields = {
  __typename?: 'owner_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "owner" */
export type Owner_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Owner_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Owner_Stream_Cursor_Value_Input = {
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Owner_Sum_Fields = {
  __typename?: 'owner_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "owner" */
export enum Owner_Update_Column {
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Owner_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Owner_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Owner_Set_Input>;
  where: Owner_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Owner_Var_Pop_Fields = {
  __typename?: 'owner_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Owner_Var_Samp_Fields = {
  __typename?: 'owner_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Owner_Variance_Fields = {
  __typename?: 'owner_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "pet" */
export type Pet = {
  __typename?: 'pet';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  owner: Owner;
  owner_id: Scalars['Int'];
  type: Scalars['String'];
};

/** aggregated selection of "pet" */
export type Pet_Aggregate = {
  __typename?: 'pet_aggregate';
  aggregate?: Maybe<Pet_Aggregate_Fields>;
  nodes: Array<Pet>;
};

export type Pet_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pet_Aggregate_Bool_Exp_Count>;
};

export type Pet_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Pet_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pet" */
export type Pet_Aggregate_Fields = {
  __typename?: 'pet_aggregate_fields';
  avg?: Maybe<Pet_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pet_Max_Fields>;
  min?: Maybe<Pet_Min_Fields>;
  stddev?: Maybe<Pet_Stddev_Fields>;
  stddev_pop?: Maybe<Pet_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pet_Stddev_Samp_Fields>;
  sum?: Maybe<Pet_Sum_Fields>;
  var_pop?: Maybe<Pet_Var_Pop_Fields>;
  var_samp?: Maybe<Pet_Var_Samp_Fields>;
  variance?: Maybe<Pet_Variance_Fields>;
};


/** aggregate fields of "pet" */
export type Pet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pet" */
export type Pet_Aggregate_Order_By = {
  avg?: InputMaybe<Pet_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pet_Max_Order_By>;
  min?: InputMaybe<Pet_Min_Order_By>;
  stddev?: InputMaybe<Pet_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pet_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pet_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pet_Sum_Order_By>;
  var_pop?: InputMaybe<Pet_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pet_Var_Samp_Order_By>;
  variance?: InputMaybe<Pet_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pet" */
export type Pet_Arr_Rel_Insert_Input = {
  data: Array<Pet_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pet_On_Conflict>;
};

/** aggregate avg on columns */
export type Pet_Avg_Fields = {
  __typename?: 'pet_avg_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pet" */
export type Pet_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pet". All fields are combined with a logical 'AND'. */
export type Pet_Bool_Exp = {
  _and?: InputMaybe<Array<Pet_Bool_Exp>>;
  _not?: InputMaybe<Pet_Bool_Exp>;
  _or?: InputMaybe<Array<Pet_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Owner_Bool_Exp>;
  owner_id?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "pet" */
export enum Pet_Constraint {
  /** unique or primary key constraint on columns "id" */
  PetPkey = 'pet_pkey'
}

/** input type for incrementing numeric columns in table "pet" */
export type Pet_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pet" */
export type Pet_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Owner_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Pet_Max_Fields = {
  __typename?: 'pet_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "pet" */
export type Pet_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pet_Min_Fields = {
  __typename?: 'pet_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "pet" */
export type Pet_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pet" */
export type Pet_Mutation_Response = {
  __typename?: 'pet_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pet>;
};

/** on_conflict condition type for table "pet" */
export type Pet_On_Conflict = {
  constraint: Pet_Constraint;
  update_columns?: Array<Pet_Update_Column>;
  where?: InputMaybe<Pet_Bool_Exp>;
};

/** Ordering options when selecting data from "pet". */
export type Pet_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Owner_Order_By>;
  owner_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pet */
export type Pet_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "pet" */
export enum Pet_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "pet" */
export type Pet_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Pet_Stddev_Fields = {
  __typename?: 'pet_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pet" */
export type Pet_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pet_Stddev_Pop_Fields = {
  __typename?: 'pet_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pet" */
export type Pet_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pet_Stddev_Samp_Fields = {
  __typename?: 'pet_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pet" */
export type Pet_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pet" */
export type Pet_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pet_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pet_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Pet_Sum_Fields = {
  __typename?: 'pet_sum_fields';
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pet" */
export type Pet_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** update columns of table "pet" */
export enum Pet_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Type = 'type'
}

export type Pet_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pet_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pet_Set_Input>;
  where: Pet_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pet_Var_Pop_Fields = {
  __typename?: 'pet_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pet" */
export type Pet_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pet_Var_Samp_Fields = {
  __typename?: 'pet_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pet" */
export type Pet_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pet_Variance_Fields = {
  __typename?: 'pet_variance_fields';
  id?: Maybe<Scalars['Float']>;
  owner_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pet" */
export type Pet_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "activity" */
  activity: Array<Activity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: Activity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<Activity>;
  /** fetch data from the table: "activity_status" */
  activity_status: Array<Activity_Status>;
  /** fetch aggregated fields from the table: "activity_status" */
  activity_status_aggregate: Activity_Status_Aggregate;
  /** fetch data from the table: "activity_status" using primary key columns */
  activity_status_by_pk?: Maybe<Activity_Status>;
  /** fetch data from the table: "interaction" */
  interaction: Array<Interaction>;
  /** fetch aggregated fields from the table: "interaction" */
  interaction_aggregate: Interaction_Aggregate;
  /** fetch data from the table: "interaction" using primary key columns */
  interaction_by_pk?: Maybe<Interaction>;
  /** fetch data from the table: "interaction_type" */
  interaction_type: Array<Interaction_Type>;
  /** fetch aggregated fields from the table: "interaction_type" */
  interaction_type_aggregate: Interaction_Type_Aggregate;
  /** fetch data from the table: "interaction_type" using primary key columns */
  interaction_type_by_pk?: Maybe<Interaction_Type>;
  /** fetch data from the table: "like" */
  like: Array<Like>;
  /** fetch aggregated fields from the table: "like" */
  like_aggregate: Like_Aggregate;
  /** fetch data from the table: "like" using primary key columns */
  like_by_pk?: Maybe<Like>;
  /** fetch data from the table: "owner" */
  owner: Array<Owner>;
  /** fetch aggregated fields from the table: "owner" */
  owner_aggregate: Owner_Aggregate;
  /** fetch data from the table: "owner" using primary key columns */
  owner_by_pk?: Maybe<Owner>;
  /** fetch data from the table: "pet" */
  pet: Array<Pet>;
  /** fetch aggregated fields from the table: "pet" */
  pet_aggregate: Pet_Aggregate;
  /** fetch data from the table: "pet" using primary key columns */
  pet_by_pk?: Maybe<Pet>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_activity" */
  user_activity: Array<User_Activity>;
  /** fetch aggregated fields from the table: "user_activity" */
  user_activity_aggregate: User_Activity_Aggregate;
  /** fetch data from the table: "user_activity" using primary key columns */
  user_activity_by_pk?: Maybe<User_Activity>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootActivityArgs = {
  distinct_on?: InputMaybe<Array<Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Order_By>>;
  where?: InputMaybe<Activity_Bool_Exp>;
};


export type Query_RootActivity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Order_By>>;
  where?: InputMaybe<Activity_Bool_Exp>;
};


export type Query_RootActivity_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootActivity_StatusArgs = {
  distinct_on?: InputMaybe<Array<Activity_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Status_Order_By>>;
  where?: InputMaybe<Activity_Status_Bool_Exp>;
};


export type Query_RootActivity_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Status_Order_By>>;
  where?: InputMaybe<Activity_Status_Bool_Exp>;
};


export type Query_RootActivity_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootInteractionArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Order_By>>;
  where?: InputMaybe<Interaction_Bool_Exp>;
};


export type Query_RootInteraction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Order_By>>;
  where?: InputMaybe<Interaction_Bool_Exp>;
};


export type Query_RootInteraction_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInteraction_TypeArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Type_Order_By>>;
  where?: InputMaybe<Interaction_Type_Bool_Exp>;
};


export type Query_RootInteraction_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Type_Order_By>>;
  where?: InputMaybe<Interaction_Type_Bool_Exp>;
};


export type Query_RootInteraction_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootLikeArgs = {
  distinct_on?: InputMaybe<Array<Like_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Like_Order_By>>;
  where?: InputMaybe<Like_Bool_Exp>;
};


export type Query_RootLike_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Like_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Like_Order_By>>;
  where?: InputMaybe<Like_Bool_Exp>;
};


export type Query_RootLike_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOwnerArgs = {
  distinct_on?: InputMaybe<Array<Owner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Owner_Order_By>>;
  where?: InputMaybe<Owner_Bool_Exp>;
};


export type Query_RootOwner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Owner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Owner_Order_By>>;
  where?: InputMaybe<Owner_Bool_Exp>;
};


export type Query_RootOwner_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootPetArgs = {
  distinct_on?: InputMaybe<Array<Pet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pet_Order_By>>;
  where?: InputMaybe<Pet_Bool_Exp>;
};


export type Query_RootPet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pet_Order_By>>;
  where?: InputMaybe<Pet_Bool_Exp>;
};


export type Query_RootPet_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_ActivityArgs = {
  distinct_on?: InputMaybe<Array<User_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Activity_Order_By>>;
  where?: InputMaybe<User_Activity_Bool_Exp>;
};


export type Query_RootUser_Activity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Activity_Order_By>>;
  where?: InputMaybe<User_Activity_Bool_Exp>;
};


export type Query_RootUser_Activity_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "activity" */
  activity: Array<Activity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: Activity_Aggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<Activity>;
  /** fetch data from the table: "activity_status" */
  activity_status: Array<Activity_Status>;
  /** fetch aggregated fields from the table: "activity_status" */
  activity_status_aggregate: Activity_Status_Aggregate;
  /** fetch data from the table: "activity_status" using primary key columns */
  activity_status_by_pk?: Maybe<Activity_Status>;
  /** fetch data from the table in a streaming manner: "activity_status" */
  activity_status_stream: Array<Activity_Status>;
  /** fetch data from the table in a streaming manner: "activity" */
  activity_stream: Array<Activity>;
  /** fetch data from the table: "interaction" */
  interaction: Array<Interaction>;
  /** fetch aggregated fields from the table: "interaction" */
  interaction_aggregate: Interaction_Aggregate;
  /** fetch data from the table: "interaction" using primary key columns */
  interaction_by_pk?: Maybe<Interaction>;
  /** fetch data from the table in a streaming manner: "interaction" */
  interaction_stream: Array<Interaction>;
  /** fetch data from the table: "interaction_type" */
  interaction_type: Array<Interaction_Type>;
  /** fetch aggregated fields from the table: "interaction_type" */
  interaction_type_aggregate: Interaction_Type_Aggregate;
  /** fetch data from the table: "interaction_type" using primary key columns */
  interaction_type_by_pk?: Maybe<Interaction_Type>;
  /** fetch data from the table in a streaming manner: "interaction_type" */
  interaction_type_stream: Array<Interaction_Type>;
  /** fetch data from the table: "like" */
  like: Array<Like>;
  /** fetch aggregated fields from the table: "like" */
  like_aggregate: Like_Aggregate;
  /** fetch data from the table: "like" using primary key columns */
  like_by_pk?: Maybe<Like>;
  /** fetch data from the table in a streaming manner: "like" */
  like_stream: Array<Like>;
  /** fetch data from the table: "owner" */
  owner: Array<Owner>;
  /** fetch aggregated fields from the table: "owner" */
  owner_aggregate: Owner_Aggregate;
  /** fetch data from the table: "owner" using primary key columns */
  owner_by_pk?: Maybe<Owner>;
  /** fetch data from the table in a streaming manner: "owner" */
  owner_stream: Array<Owner>;
  /** fetch data from the table: "pet" */
  pet: Array<Pet>;
  /** fetch aggregated fields from the table: "pet" */
  pet_aggregate: Pet_Aggregate;
  /** fetch data from the table: "pet" using primary key columns */
  pet_by_pk?: Maybe<Pet>;
  /** fetch data from the table in a streaming manner: "pet" */
  pet_stream: Array<Pet>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user_activity" */
  user_activity: Array<User_Activity>;
  /** fetch aggregated fields from the table: "user_activity" */
  user_activity_aggregate: User_Activity_Aggregate;
  /** fetch data from the table: "user_activity" using primary key columns */
  user_activity_by_pk?: Maybe<User_Activity>;
  /** fetch data from the table in a streaming manner: "user_activity" */
  user_activity_stream: Array<User_Activity>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootActivityArgs = {
  distinct_on?: InputMaybe<Array<Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Order_By>>;
  where?: InputMaybe<Activity_Bool_Exp>;
};


export type Subscription_RootActivity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Order_By>>;
  where?: InputMaybe<Activity_Bool_Exp>;
};


export type Subscription_RootActivity_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootActivity_StatusArgs = {
  distinct_on?: InputMaybe<Array<Activity_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Status_Order_By>>;
  where?: InputMaybe<Activity_Status_Bool_Exp>;
};


export type Subscription_RootActivity_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activity_Status_Order_By>>;
  where?: InputMaybe<Activity_Status_Bool_Exp>;
};


export type Subscription_RootActivity_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootActivity_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Activity_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Activity_Status_Bool_Exp>;
};


export type Subscription_RootActivity_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Activity_Stream_Cursor_Input>>;
  where?: InputMaybe<Activity_Bool_Exp>;
};


export type Subscription_RootInteractionArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Order_By>>;
  where?: InputMaybe<Interaction_Bool_Exp>;
};


export type Subscription_RootInteraction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Order_By>>;
  where?: InputMaybe<Interaction_Bool_Exp>;
};


export type Subscription_RootInteraction_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInteraction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Interaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Interaction_Bool_Exp>;
};


export type Subscription_RootInteraction_TypeArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Type_Order_By>>;
  where?: InputMaybe<Interaction_Type_Bool_Exp>;
};


export type Subscription_RootInteraction_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Type_Order_By>>;
  where?: InputMaybe<Interaction_Type_Bool_Exp>;
};


export type Subscription_RootInteraction_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootInteraction_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Interaction_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Interaction_Type_Bool_Exp>;
};


export type Subscription_RootLikeArgs = {
  distinct_on?: InputMaybe<Array<Like_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Like_Order_By>>;
  where?: InputMaybe<Like_Bool_Exp>;
};


export type Subscription_RootLike_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Like_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Like_Order_By>>;
  where?: InputMaybe<Like_Bool_Exp>;
};


export type Subscription_RootLike_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLike_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Like_Stream_Cursor_Input>>;
  where?: InputMaybe<Like_Bool_Exp>;
};


export type Subscription_RootOwnerArgs = {
  distinct_on?: InputMaybe<Array<Owner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Owner_Order_By>>;
  where?: InputMaybe<Owner_Bool_Exp>;
};


export type Subscription_RootOwner_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Owner_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Owner_Order_By>>;
  where?: InputMaybe<Owner_Bool_Exp>;
};


export type Subscription_RootOwner_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootOwner_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Owner_Stream_Cursor_Input>>;
  where?: InputMaybe<Owner_Bool_Exp>;
};


export type Subscription_RootPetArgs = {
  distinct_on?: InputMaybe<Array<Pet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pet_Order_By>>;
  where?: InputMaybe<Pet_Bool_Exp>;
};


export type Subscription_RootPet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pet_Order_By>>;
  where?: InputMaybe<Pet_Bool_Exp>;
};


export type Subscription_RootPet_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPet_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pet_Stream_Cursor_Input>>;
  where?: InputMaybe<Pet_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_ActivityArgs = {
  distinct_on?: InputMaybe<Array<User_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Activity_Order_By>>;
  where?: InputMaybe<User_Activity_Bool_Exp>;
};


export type Subscription_RootUser_Activity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Activity_Order_By>>;
  where?: InputMaybe<User_Activity_Bool_Exp>;
};


export type Subscription_RootUser_Activity_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Activity_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Activity_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Activity_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  id: Scalars['Int'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  total_xp: Scalars['Int'];
  /** An array relationship */
  user_activities: Array<User_Activity>;
  /** An aggregate relationship */
  user_activities_aggregate: User_Activity_Aggregate;
};


/** columns and relationships of "user" */
export type UserUser_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<User_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Activity_Order_By>>;
  where?: InputMaybe<User_Activity_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Activity_Order_By>>;
  where?: InputMaybe<User_Activity_Bool_Exp>;
};

/** columns and relationships of "user_activity" */
export type User_Activity = {
  __typename?: 'user_activity';
  /** An object relationship */
  activity: Activity;
  activity_id: Scalars['uuid'];
  /** An object relationship */
  activity_status: Activity_Status;
  created_at: Scalars['timestamptz'];
  due_to: Scalars['timestamptz'];
  id: Scalars['Int'];
  status: Activity_Status_Enum;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "user_activity" */
export type User_Activity_Aggregate = {
  __typename?: 'user_activity_aggregate';
  aggregate?: Maybe<User_Activity_Aggregate_Fields>;
  nodes: Array<User_Activity>;
};

export type User_Activity_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Activity_Aggregate_Bool_Exp_Count>;
};

export type User_Activity_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Activity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Activity_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_activity" */
export type User_Activity_Aggregate_Fields = {
  __typename?: 'user_activity_aggregate_fields';
  avg?: Maybe<User_Activity_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Activity_Max_Fields>;
  min?: Maybe<User_Activity_Min_Fields>;
  stddev?: Maybe<User_Activity_Stddev_Fields>;
  stddev_pop?: Maybe<User_Activity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Activity_Stddev_Samp_Fields>;
  sum?: Maybe<User_Activity_Sum_Fields>;
  var_pop?: Maybe<User_Activity_Var_Pop_Fields>;
  var_samp?: Maybe<User_Activity_Var_Samp_Fields>;
  variance?: Maybe<User_Activity_Variance_Fields>;
};


/** aggregate fields of "user_activity" */
export type User_Activity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Activity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_activity" */
export type User_Activity_Aggregate_Order_By = {
  avg?: InputMaybe<User_Activity_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Activity_Max_Order_By>;
  min?: InputMaybe<User_Activity_Min_Order_By>;
  stddev?: InputMaybe<User_Activity_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Activity_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Activity_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Activity_Sum_Order_By>;
  var_pop?: InputMaybe<User_Activity_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Activity_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Activity_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_activity" */
export type User_Activity_Arr_Rel_Insert_Input = {
  data: Array<User_Activity_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Activity_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Activity_Avg_Fields = {
  __typename?: 'user_activity_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_activity" */
export type User_Activity_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_activity". All fields are combined with a logical 'AND'. */
export type User_Activity_Bool_Exp = {
  _and?: InputMaybe<Array<User_Activity_Bool_Exp>>;
  _not?: InputMaybe<User_Activity_Bool_Exp>;
  _or?: InputMaybe<Array<User_Activity_Bool_Exp>>;
  activity?: InputMaybe<Activity_Bool_Exp>;
  activity_id?: InputMaybe<Uuid_Comparison_Exp>;
  activity_status?: InputMaybe<Activity_Status_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  due_to?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Activity_Status_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_activity" */
export enum User_Activity_Constraint {
  /** unique or primary key constraint on columns "activity_id", "user_id" */
  UserActivityActivityIdUserIdKey = 'user_activity_activity_id_user_id_key',
  /** unique or primary key constraint on columns "id" */
  UserActivityPkey = 'user_activity_pkey'
}

/** input type for incrementing numeric columns in table "user_activity" */
export type User_Activity_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_activity" */
export type User_Activity_Insert_Input = {
  activity?: InputMaybe<Activity_Obj_Rel_Insert_Input>;
  activity_id?: InputMaybe<Scalars['uuid']>;
  activity_status?: InputMaybe<Activity_Status_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  due_to?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Activity_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Activity_Max_Fields = {
  __typename?: 'user_activity_max_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  due_to?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_activity" */
export type User_Activity_Max_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  due_to?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Activity_Min_Fields = {
  __typename?: 'user_activity_min_fields';
  activity_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  due_to?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_activity" */
export type User_Activity_Min_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  due_to?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_activity" */
export type User_Activity_Mutation_Response = {
  __typename?: 'user_activity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Activity>;
};

/** on_conflict condition type for table "user_activity" */
export type User_Activity_On_Conflict = {
  constraint: User_Activity_Constraint;
  update_columns?: Array<User_Activity_Update_Column>;
  where?: InputMaybe<User_Activity_Bool_Exp>;
};

/** Ordering options when selecting data from "user_activity". */
export type User_Activity_Order_By = {
  activity?: InputMaybe<Activity_Order_By>;
  activity_id?: InputMaybe<Order_By>;
  activity_status?: InputMaybe<Activity_Status_Order_By>;
  created_at?: InputMaybe<Order_By>;
  due_to?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_activity */
export type User_Activity_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_activity" */
export enum User_Activity_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DueTo = 'due_to',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_activity" */
export type User_Activity_Set_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  due_to?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Activity_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Activity_Stddev_Fields = {
  __typename?: 'user_activity_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_activity" */
export type User_Activity_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Activity_Stddev_Pop_Fields = {
  __typename?: 'user_activity_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_activity" */
export type User_Activity_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Activity_Stddev_Samp_Fields = {
  __typename?: 'user_activity_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_activity" */
export type User_Activity_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_activity" */
export type User_Activity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Activity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Activity_Stream_Cursor_Value_Input = {
  activity_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  due_to?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Activity_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type User_Activity_Sum_Fields = {
  __typename?: 'user_activity_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_activity" */
export type User_Activity_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_activity" */
export enum User_Activity_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DueTo = 'due_to',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Activity_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Activity_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Activity_Set_Input>;
  where: User_Activity_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Activity_Var_Pop_Fields = {
  __typename?: 'user_activity_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_activity" */
export type User_Activity_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Activity_Var_Samp_Fields = {
  __typename?: 'user_activity_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_activity" */
export type User_Activity_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Activity_Variance_Fields = {
  __typename?: 'user_activity_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_activity" */
export type User_Activity_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  total_xp?: InputMaybe<Int_Comparison_Exp>;
  user_activities?: InputMaybe<User_Activity_Bool_Exp>;
  user_activities_aggregate?: InputMaybe<User_Activity_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  total_xp?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  total_xp?: InputMaybe<Scalars['Int']>;
  user_activities?: InputMaybe<User_Activity_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  total_xp?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  total_xp?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  total_xp?: InputMaybe<Order_By>;
  user_activities_aggregate?: InputMaybe<User_Activity_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  TotalXp = 'total_xp'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  total_xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  total_xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
  total_xp?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  TotalXp = 'total_xp'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
  total_xp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ActivityFragment = { __typename?: 'activity', image_url: string, id: any, name: string, description: string, short_description: string, gainable_xp?: number | null, estimated_duration?: any | null, estimated_costs?: any | null, coordinates?: any | null, website_url?: string | null, likes: Array<{ __typename?: 'like', id: any, user_id: number }> };

export type CompleteActivityMutationVariables = Exact<{
  userId: Scalars['Int'];
  activityId: Scalars['uuid'];
}>;


export type CompleteActivityMutation = { __typename?: 'mutation_root', insert_user_activity_one?: { __typename?: 'user_activity', id: number } | null };

export type GetActivitiesQueryVariables = Exact<{
  excludedIds: Array<Scalars['uuid']> | Scalars['uuid'];
}>;


export type GetActivitiesQuery = { __typename?: 'query_root', activity: Array<{ __typename?: 'activity', id: any, position?: number | null }> };

export type GetActivityQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetActivityQuery = { __typename?: 'query_root', activity_by_pk?: { __typename?: 'activity', image_url: string, id: any, name: string, description: string, short_description: string, gainable_xp?: number | null, estimated_duration?: any | null, estimated_costs?: any | null, coordinates?: any | null, website_url?: string | null, likes: Array<{ __typename?: 'like', id: any, user_id: number }> } | null };

export type GetFactsQueryVariables = Exact<{
  selectedActivity: Scalars['uuid'];
}>;


export type GetFactsQuery = { __typename?: 'query_root', interaction: Array<{ __typename?: 'interaction', id: any, text: string, type: Interaction_Type_Enum }> };

export type GetUserActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserActivitiesQuery = { __typename?: 'query_root', user_activity: Array<{ __typename?: 'user_activity', due_to: any, status: Activity_Status_Enum, activity: { __typename?: 'activity', image_url: string, id: any, name: string, description: string, short_description: string, gainable_xp?: number | null, estimated_duration?: any | null, estimated_costs?: any | null, coordinates?: any | null, website_url?: string | null, likes: Array<{ __typename?: 'like', id: any, user_id: number }> } }> };

export type SearchActivitiesQueryVariables = Exact<{
  query: Scalars['String'];
  likeCount?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
}>;


export type SearchActivitiesQuery = { __typename?: 'query_root', activity: Array<{ __typename?: 'activity', image_url: string, id: any, name: string, description: string, short_description: string, gainable_xp?: number | null, estimated_duration?: any | null, estimated_costs?: any | null, coordinates?: any | null, website_url?: string | null, likes: Array<{ __typename?: 'like', id: any, user_id: number }> }> };

export type StartActivityMutationVariables = Exact<{
  object: User_Activity_Insert_Input;
}>;


export type StartActivityMutation = { __typename?: 'mutation_root', insert_user_activity_one?: { __typename?: 'user_activity', id: number } | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'query_root', user_by_pk?: { __typename?: 'user', id: number, name: string, image_url: string, total_xp: number } | null };

export type UserFragment = { __typename?: 'user', id: number, name: string, image_url: string, total_xp: number };

export const ActivityFragmentDoc = gql`
    fragment Activity on activity {
  image_url
  id
  name
  description
  short_description
  gainable_xp
  estimated_duration
  estimated_costs
  coordinates
  website_url
  likes {
    id
    user_id
  }
}
    `;
export const UserFragmentDoc = gql`
    fragment User on user {
  id
  name
  image_url
  total_xp
}
    `;
export const CompleteActivityDocument = gql`
    mutation CompleteActivity($userId: Int!, $activityId: uuid!) {
  insert_user_activity_one(
    object: {user_id: $userId, activity_id: $activityId, status: DONE}
    on_conflict: {constraint: user_activity_activity_id_user_id_key, update_columns: [status]}
  ) {
    id
  }
}
    `;
export type CompleteActivityMutationFn = Apollo.MutationFunction<CompleteActivityMutation, CompleteActivityMutationVariables>;

/**
 * __useCompleteActivityMutation__
 *
 * To run a mutation, you first call `useCompleteActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeActivityMutation, { data, loading, error }] = useCompleteActivityMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useCompleteActivityMutation(baseOptions?: Apollo.MutationHookOptions<CompleteActivityMutation, CompleteActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteActivityMutation, CompleteActivityMutationVariables>(CompleteActivityDocument, options);
      }
export type CompleteActivityMutationHookResult = ReturnType<typeof useCompleteActivityMutation>;
export type CompleteActivityMutationResult = Apollo.MutationResult<CompleteActivityMutation>;
export type CompleteActivityMutationOptions = Apollo.BaseMutationOptions<CompleteActivityMutation, CompleteActivityMutationVariables>;
export const GetActivitiesDocument = gql`
    query GetActivities($excludedIds: [uuid!]!) {
  activity(
    where: {id: {_nin: $excludedIds}}
    order_by: {position: asc_nulls_last}
  ) {
    id
    position
  }
}
    `;

/**
 * __useGetActivitiesQuery__
 *
 * To run a query within a React component, call `useGetActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivitiesQuery({
 *   variables: {
 *      excludedIds: // value for 'excludedIds'
 *   },
 * });
 */
export function useGetActivitiesQuery(baseOptions: Apollo.QueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, options);
      }
export function useGetActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, options);
        }
export type GetActivitiesQueryHookResult = ReturnType<typeof useGetActivitiesQuery>;
export type GetActivitiesLazyQueryHookResult = ReturnType<typeof useGetActivitiesLazyQuery>;
export type GetActivitiesQueryResult = Apollo.QueryResult<GetActivitiesQuery, GetActivitiesQueryVariables>;
export const GetActivityDocument = gql`
    query GetActivity($id: uuid!) {
  activity_by_pk(id: $id) {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useGetActivityQuery__
 *
 * To run a query within a React component, call `useGetActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetActivityQuery(baseOptions: Apollo.QueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
      }
export function useGetActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
        }
export type GetActivityQueryHookResult = ReturnType<typeof useGetActivityQuery>;
export type GetActivityLazyQueryHookResult = ReturnType<typeof useGetActivityLazyQuery>;
export type GetActivityQueryResult = Apollo.QueryResult<GetActivityQuery, GetActivityQueryVariables>;
export const GetFactsDocument = gql`
    query GetFacts($selectedActivity: uuid!) {
  interaction(where: {activity_id: {_eq: $selectedActivity}}) {
    id
    text
    type
  }
}
    `;

/**
 * __useGetFactsQuery__
 *
 * To run a query within a React component, call `useGetFactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFactsQuery({
 *   variables: {
 *      selectedActivity: // value for 'selectedActivity'
 *   },
 * });
 */
export function useGetFactsQuery(baseOptions: Apollo.QueryHookOptions<GetFactsQuery, GetFactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFactsQuery, GetFactsQueryVariables>(GetFactsDocument, options);
      }
export function useGetFactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFactsQuery, GetFactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFactsQuery, GetFactsQueryVariables>(GetFactsDocument, options);
        }
export type GetFactsQueryHookResult = ReturnType<typeof useGetFactsQuery>;
export type GetFactsLazyQueryHookResult = ReturnType<typeof useGetFactsLazyQuery>;
export type GetFactsQueryResult = Apollo.QueryResult<GetFactsQuery, GetFactsQueryVariables>;
export const GetUserActivitiesDocument = gql`
    query GetUserActivities {
  user_activity(where: {user_id: {_eq: 1}}) {
    due_to
    status
    activity {
      ...Activity
    }
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useGetUserActivitiesQuery__
 *
 * To run a query within a React component, call `useGetUserActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>(GetUserActivitiesDocument, options);
      }
export function useGetUserActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>(GetUserActivitiesDocument, options);
        }
export type GetUserActivitiesQueryHookResult = ReturnType<typeof useGetUserActivitiesQuery>;
export type GetUserActivitiesLazyQueryHookResult = ReturnType<typeof useGetUserActivitiesLazyQuery>;
export type GetUserActivitiesQueryResult = Apollo.QueryResult<GetUserActivitiesQuery, GetUserActivitiesQueryVariables>;
export const SearchActivitiesDocument = gql`
    query SearchActivities($query: String!, $likeCount: order_by, $createdAt: order_by) {
  activity(
    where: {name: {_ilike: $query}}
    order_by: {created_at: $createdAt, likes_aggregate: {count: $likeCount}}
  ) {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useSearchActivitiesQuery__
 *
 * To run a query within a React component, call `useSearchActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchActivitiesQuery({
 *   variables: {
 *      query: // value for 'query'
 *      likeCount: // value for 'likeCount'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useSearchActivitiesQuery(baseOptions: Apollo.QueryHookOptions<SearchActivitiesQuery, SearchActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchActivitiesQuery, SearchActivitiesQueryVariables>(SearchActivitiesDocument, options);
      }
export function useSearchActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchActivitiesQuery, SearchActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchActivitiesQuery, SearchActivitiesQueryVariables>(SearchActivitiesDocument, options);
        }
export type SearchActivitiesQueryHookResult = ReturnType<typeof useSearchActivitiesQuery>;
export type SearchActivitiesLazyQueryHookResult = ReturnType<typeof useSearchActivitiesLazyQuery>;
export type SearchActivitiesQueryResult = Apollo.QueryResult<SearchActivitiesQuery, SearchActivitiesQueryVariables>;
export const StartActivityDocument = gql`
    mutation StartActivity($object: user_activity_insert_input!) {
  insert_user_activity_one(
    object: $object
    on_conflict: {constraint: user_activity_activity_id_user_id_key, update_columns: []}
  ) {
    id
  }
}
    `;
export type StartActivityMutationFn = Apollo.MutationFunction<StartActivityMutation, StartActivityMutationVariables>;

/**
 * __useStartActivityMutation__
 *
 * To run a mutation, you first call `useStartActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startActivityMutation, { data, loading, error }] = useStartActivityMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useStartActivityMutation(baseOptions?: Apollo.MutationHookOptions<StartActivityMutation, StartActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartActivityMutation, StartActivityMutationVariables>(StartActivityDocument, options);
      }
export type StartActivityMutationHookResult = ReturnType<typeof useStartActivityMutation>;
export type StartActivityMutationResult = Apollo.MutationResult<StartActivityMutation>;
export type StartActivityMutationOptions = Apollo.BaseMutationOptions<StartActivityMutation, StartActivityMutationVariables>;
export const GetUserDocument = gql`
    query GetUser {
  user_by_pk(id: 1) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;