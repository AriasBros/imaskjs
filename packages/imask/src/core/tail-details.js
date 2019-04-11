// @flow


/** Provides details of extracted tail */
export
interface TailDetails {
  /** Tail value as string */
  +value: string;
  /** Tail start position */
  +from: ?number;
  /** Start position */
  stop: ?number;
}
