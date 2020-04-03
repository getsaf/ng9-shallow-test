import {NgModule} from '@angular/core';
import {FooComponent} from './foo.component';
import {BarModule} from './bar/bar.module';

@NgModule({
  declarations: [FooComponent],
  exports: [FooComponent],
  imports: [BarModule]
})
export class FooModule {}
