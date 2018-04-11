import * as React from "react";
import { Helmet } from "react-helmet";
import IllustrationAnnotationsResearch from "../../components/illustrations/IllustrationAnnotationsResearch";
import IllustrationBarChart from "../../components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "../../components/illustrations/IllustrationBoardLarge";
import IllustrationCollaboration from "../../components/illustrations/IllustrationCollaboration";
import IllustrationEditor from "../../components/illustrations/IllustrationEditor";
import IllustrationProjectsResearch from "../../components/illustrations/IllustrationProjectsResearch";
import IllustrationRealtime from "../../components/illustrations/IllustrationRealtime";
import IllustrationTeam from "../../components/illustrations/IllustrationTeam";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { DarkContainer } from "../../components/site/DarkContainer";
import { FeatureHero } from "../../components/site/FeatureHero";
import { FeatureHeroLarge } from "../../components/site/FeatureHeroLarge";
import { Features } from "../../components/site/Features";
import { Hero } from "../../components/site/Hero";
import { LightContainer } from "../../components/site/LightContainer";
import Wave from "../../components/site/Wave/Wave";
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../../constants";
import { CenteredSignUp } from "../../sections/CenteredSignUp";
import { Security } from "../../sections/Security";
import { SocialProof } from "../../sections/SocialProof";
import { UseCases } from "../../sections/UseCases";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Get everyone involved in user research – Dovetail</title>
        </Helmet>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationCollaboration />} title="Get everyone involved in user research." />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationRealtime />}
                    imagePosition="right"
                    text="Take notes with your teammates during customer interviews &amp; user testing sessions and tag sentences as you go."
                    title="Collaborate on research notes in real time."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationBoardLarge />}
                    text="Use a drag &amp; drop board to organize your research notes, tags, insights, and files."
                    title="Keep everyone in sync with a research board."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationProjectsResearch />}
                    imagePosition="right"
                    text="Split research into projects with self-contained notes, tags, and insights. Archive projects when they’re completed to let everyone know."
                    title="Learn from other research projects."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Take notes in our collaborative, rich text editor",
                        title: "Notes"
                      },
                      {
                        text: "View feedback as a board with drag & drop like Trello",
                        title: "Boards"
                      },
                      {
                        text: "Learn from other research initiatives across the org",
                        title: "Projects"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <LightContainer backgroundColor={COLORS.p04} maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <FeatureHero
                    image={<IllustrationTeam />}
                    imagePosition="right"
                    text="Invite as many people as you like to join your team, contribute to notes, collaborate on analysis, and consume your insights."
                    title="Get everyone onboard."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Collaborate with people across your organization",
                        title: "Teams"
                      },
                      {
                        text: "Invite as many users as you like for no extra cost",
                        title: "Unlimited users"
                      },
                      {
                        text: "Let people join your team with domain-restricted sign up",
                        title: "Single sign-on"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <FeatureHero
                    image={<IllustrationEditor />}
                    imagePosition="right"
                    text="Identify patterns across qualitative data with our rich text document editor. Select text and quickly annotate sentences with tags."
                    title="Add inline tags to qualitative data."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationAnnotationsResearch />}
                    text="View any tag to see a reverse view showing all the tagged text."
                    title="See all of your annotations in one view."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationBarChart />}
                    imagePosition="left"
                    text="Tag patterns across your data. Visualize your research with beautiful charts, ready to drop into your presentation."
                    title="Understand your research at a glance."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Analyze feedback in our purpose-built editor",
                        title: "Editor"
                      },
                      {
                        text: "Quickly tag feedback using inline annotations",
                        title: "Annotations"
                      },
                      {
                        text: "Create visualizations of your research project",
                        title: "Charts"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <Wave />
            <DarkContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Security />
            </DarkContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <SocialProof />
                </Item>
                <Item>
                  <UseCases showTitle />
                </Item>
                <Item>
                  <CenteredSignUp />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
        </Flex>
      </>
    );
  }
}