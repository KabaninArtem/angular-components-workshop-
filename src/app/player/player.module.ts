import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MediaModule } from "../media/media.module";
import { TimeModule } from "../time/time.module";
import { PlayerComponent } from "./player.component";

@NgModule({
  imports: [FormsModule, MediaModule, TimeModule],
  declarations: [PlayerComponent],
  exports: [PlayerComponent],
})
export class PlayerModule {}