import { randomUUID } from 'node:crypto';

export abstract class Entity<Props = any> {
  public readonly _id: string;
  public readonly props: Props;

  protected constructor(props: Props, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  get id(): string {
    return this.id;
  }

  toJSON(): { id: string } & Props {
    return {
      id: this._id,
      ...this.props,
    };
  }
}
