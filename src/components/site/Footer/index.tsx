import * as React from "react";
import { COLORS, TYPICAL_PAGE_WIDTH } from "../../../constants";
import { locations } from "../../../routing/locations";
import { styled } from "../../../util/styled";
import { Container } from "../../layout/Container";
import { Flex } from "../../layout/Flex";
import { GridWrap } from "../../layout/GridWrap";
import { Item } from "../../layout/Item";
import { SmallText } from "../../util/SmallText";
import Wave from "../Wave/Wave";
import { FooterList } from "./FooterList";

export class Footer extends React.PureComponent {
  public render() {
    return (
      <>
        <Wave color={COLORS.p04} />
        <Wrapper>
          <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
            <Flex gap={64} layout="column">
              <Item>
                <GridWrap gap={96}>
                  <Item>
                    <FooterList
                      heading="Use cases"
                      items={[
                        { label: "Feedback management", location: locations.customerFeedback() },
                        { label: "Research repository", location: locations.researchRepository() },
                        { label: "Qualitative data analysis", location: locations.qualitativeDataAnalysis() },
                        { label: "Collaborative user research", location: locations.userResearch() }
                      ]}
                    />
                  </Item>
                  <Item>
                    <FooterList
                      heading="Useful links"
                      items={[
                        { label: "Home", location: locations.home() },
                        { label: "Features", location: locations.features() },
                        { label: "Pricing", location: locations.pricing() },
                        { label: "Support", location: locations.help() }
                      ]}
                    />
                  </Item>
                  <Item>
                    <FooterList
                      heading="Resources"
                      items={[
                        { label: "Guides", location: locations.guides() },
                        { label: "Privacy", location: locations.legal() },
                        { label: "Security", location: locations.security() },
                        { label: "Terms", location: locations.legal() }
                      ]}
                    />
                  </Item>
                  <Item>
                    <FooterList
                      heading="Company"
                      items={[
                        { label: "About", location: locations.about() },
                        { label: "Press", location: locations.press() },
                        { label: "Blog", location: locations.blog() },
                        { label: "Slack", location: locations.slack() }
                      ]}
                    />
                  </Item>
                </GridWrap>
              </Item>
              <Item>
                <Flex gap={8} layout="column">
                  <Item>
                    <SmallText>© Dovetail Research Pty Ltd</SmallText>
                  </Item>
                  <Item>
                    <SmallText>Made in 🐨Australia and 🥝New Zealand</SmallText>
                  </Item>
                </Flex>
              </Item>
            </Flex>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled("div", {
  backgroundColor: COLORS.p04,
  width: "100%"
});
