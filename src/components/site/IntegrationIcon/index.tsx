import { BORDER_RADIUS, BOX_SHADOW_BORDER_LIGHTER, COLORS } from "@heydovetail/ui-components";
import { Image } from "@heydovetail/website/components/util/Image";
import { BOX_SHADOW_LARGE } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  icon: string;
  size: number;
}

export class IntegrationIcon extends React.PureComponent<Props> {
  public render() {
    const { icon, size } = this.props;
    return (
      <Box>
        <Image height={size} src={icon} text="Integration" width={size} />
      </Box>
    );
  }
}

const Box = styled("div", {
  backgroundColor: COLORS.white,
  borderRadius: BORDER_RADIUS,
  boxShadow: `${BOX_SHADOW_BORDER_LIGHTER}, ${BOX_SHADOW_LARGE}`,
  lineHeight: 0,
  padding: "16px"
});
