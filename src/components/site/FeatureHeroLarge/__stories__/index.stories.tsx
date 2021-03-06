import illustrationBoardLarge from "@heydovetail/website/components/illustrations/board-large.svg";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { FeatureHeroLarge } from "../";

storiesOf("Site/FeatureHeroLarge", module).add("default", () => (
  <FeatureHeroLarge
    image={illustrationBoardLarge}
    text="Use a drag &amp; drop board to organize your research notes, tags, and insights."
    title="Organize everything on an intuitive board."
  />
));
