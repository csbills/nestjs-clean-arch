import { User, UserProps } from '../../user.entity';
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';

describe('User entity unit tests', () => {
  let props: UserProps;
  let sut: User;

  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new User(props);
  });

  it('Constructor method', () => {
    expect(sut.name).toBe(props.name);
    expect(sut.email).toBe(props.email);
    expect(sut.password).toBe(props.password);
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
});
