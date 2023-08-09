import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/* Here is the line that throws "Static imports of lazy-loaded libraries are forbidden."
   but static import of the secondary entry point "core" should be allowed. */
import { CoreModule } from '@myorg/lib-a/core';

/* Only "feature" is lazy, not the whole library and all the secondary entry-points. */
async function getFeatureModule() {
  const  { FeatureModule } = await import('@myorg/lib-a/feature');
  return FeatureModule;
}

getFeatureModule();

@NgModule({
  imports: [CommonModule, CoreModule],
})
export class LibBModule {
}
