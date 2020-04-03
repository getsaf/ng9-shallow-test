import {Shallow} from 'shallow-render';
import {FooComponent} from './foo.component';
import {FooModule} from './foo.module';

describe('FooComponent', () => {
  let shallow: Shallow<FooComponent>;
  beforeEach(() => {
    shallow = new Shallow(FooComponent, FooModule);
  });

  it('displays text', async () => {
    const {find} = await shallow.render('<foo text="my text"></foo>');

    expect(find('p').nativeElement.textContent).toBe('FOO: my text');
  });
});
