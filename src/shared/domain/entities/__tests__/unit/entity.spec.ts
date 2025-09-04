import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  props2: number;
};

class StubEntity extends Entity<StubProps> {
  constructor(props: StubProps, id?: string) {
    super(props, id);
  }
}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props: StubProps = { prop1: 'prop1', props2: 1 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
  });
});
