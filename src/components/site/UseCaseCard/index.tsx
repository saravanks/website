import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { ActionTextWithArrow } from "@heydovetail/website/components/util/ActionTextWithArrow";
import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS } from "@heydovetail/website/constants";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { style } from "typestyle";

interface Props {
  image: React.ReactNode;
  location: LocationDescriptor;
  onClick?: () => void;
  text: string;
}

export class UseCaseCard extends React.PureComponent<Props> {
  public render() {
    const { image, location, onClick, text } = this.props;
    return (
      <LocationLink className={linkClassName} location={location} onClick={onClick}>
        <Flex alignItems="center" gap={24}>
          <Item style={{ flexGrow: 0 }}>{image}</Item>
          <Item style={{ minWidth: 0 }}>
            <Flex gap={8} layout="column">
              <Item
                style={{
                  color: COLORS.indigo,
                  lineHeight: "24px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}
              >
                {text}
              </Item>
              <Item style={{ color: COLORS.purple, fontSize: "14px" }}>
                <ActionTextWithArrow />
              </Item>
            </Flex>
          </Item>
        </Flex>
      </LocationLink>
    );
  }
}

const linkClassName = style({
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  display: "block",
  fontWeight: 500,
  minWidth: 0,
  padding: "24px",

  $nest: {
    "&:hover": {
      backgroundColor: COLORS.p08
    },
    "&:focus": {
      backgroundColor: COLORS.p08,
      boxShadow: BOX_SHADOW_FOCUS
    }
  }
});
