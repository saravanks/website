import { ButtonLink } from "@heydovetail/website/components/forms/ButtonLink";
import IconCheckCircle from "@heydovetail/website/components/icons/feather/IconCheckCircle";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { SmallText } from "@heydovetail/website/components/util/SmallText";
import { BORDER_RADIUS, COLORS } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  features: string[];
  // Amount in cents.
  price: number;
}

export class PricingCard extends React.PureComponent<Props> {
  public render() {
    const { features, price } = this.props;

    return (
      <Wrapper>
        <Price>
          <Flex styled={{ gap: 32, layout: "column" }}>
            <Item>
              <DollarSign>$</DollarSign>
              <Amount>{price / 100}</Amount>
              <Frequency>/ month</Frequency>
            </Item>
            <Item>
              <FinePrint>
                <Flex styled={{ gap: 8, layout: "column" }}>
                  <Item>
                    <SmallText size={14}>Unlimited users</SmallText>
                  </Item>
                  <Item>
                    <SmallText size={14}>Billed monthly or annually</SmallText>
                  </Item>
                </Flex>
              </FinePrint>
            </Item>
          </Flex>
        </Price>
        <Features>
          <Flex styled={{ gap: 24, layout: "column" }}>
            {features.map((feature, i) => (
              <Item key={i}>
                <Flex styled={{ alignItems: "center", gap: 24 }}>
                  <Item style={{ flexGrow: 0 }}>
                    <IconCheckCircle color={COLORS.green} />
                  </Item>
                  <Item style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{feature}</Item>
                </Flex>
              </Item>
            ))}
          </Flex>
          <SignUpButton>
            <ButtonLink color={COLORS.purple} location={locations.signUp()}>
              Try free for 14 days
            </ButtonLink>
          </SignUpButton>
        </Features>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  borderRadius: BORDER_RADIUS,
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  width: "100%"
});

const Price = styled("div", {
  alignItems: "center",
  backgroundColor: COLORS.p08,
  display: "flex",
  flex: "1 1 50%",
  fontWeight: 500,
  justifyContent: "center",
  padding: "40px"
});

const Features = styled("div", {
  backgroundColor: COLORS.p04,
  color: COLORS.i60,
  fontWeight: 500,
  flex: "1 1 50%",
  overflow: "hidden",
  padding: "40px"
});

const DollarSign = styled("span", {
  display: "inline-block",
  fontSize: "24px",
  transform: "translateY(-64px)"
});

const Amount = styled("span", {
  fontSize: "96px"
});

const Frequency = styled("span", {
  fontSize: "24px"
});

const FinePrint = styled("span", {
  textAlign: "center"
});

const SignUpButton = styled("div", {
  marginTop: "48px"
});
