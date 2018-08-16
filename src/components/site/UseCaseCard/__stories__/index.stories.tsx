import pictogramFeedback from "@heydovetail/website/components/icons/pictograms/feedback.svg";
import { locations } from "@heydovetail/website/routing/locations";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { UseCaseCard } from "../";

storiesOf("Site/UseCaseCard", module).add("default", () => (
  <UseCaseCard image={{ pictogramFeedback }} location={locations.feedbackManagement()} text="Feedback management " />
));
