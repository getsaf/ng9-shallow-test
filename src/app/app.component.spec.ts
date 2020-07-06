import { Shallow } from 'shallow-render';
import { AppComponent } from './app.component';
import { AppModule } from 'src/app/app.module';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it('should render title', async () => {
    const { find } = await shallow.render({
      bind: { myInput: 'My Test Input' },
    });

    expect(find('.myInput').nativeElement.textContent).toContain(
      'My Test Input'
    );
  });
});
