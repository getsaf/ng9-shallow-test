import {Shallow} from 'shallow-render';
import {BarComponent} from './bar.component';
import {BarModule} from './bar.module';

describe('BarComponent', () => {
  let shallow: Shallow<BarComponent>;
  beforeEach(() => {
    shallow = new Shallow(BarComponent, BarModule);
  });

  it('displays text', async () => {
    const {find} = await shallow.render('<bar text="my text"></bar>');

    expect(find('p').nativeElement.textContent).toBe('BAR: my text');
  });
});
